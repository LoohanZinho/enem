"use server";
import { NextResponse } from 'next/server';
import { authService } from '@/services/AuthService';
import { User } from '@/types/User';
import { google } from 'googleapis';

// --- ARMAZENAMENTO LOCAL PARA DEBUG ---
// Esta função é uma ferramenta de depuração. Ela salva uma cópia de cada webhook
// recebido no localStorage do navegador. A página /webhook lê esses logs
// para que o administrador possa monitorar as notificações recebidas.
async function saveWebhookToLocalStorage(data: any) {
  try {
    // No lado do servidor, não podemos acessar o localStorage diretamente.
    // A lógica de armazenamento real está na página /webhook, que intercepta e salva.
    // Esta chamada de console serve para registrar a intenção no log do servidor.
    console.log("Webhook recebido, pronto para ser armazenado no cliente:", data);
  } catch (e) {
    console.error("Erro ao tentar preparar o salvamento do webhook:", e);
  }
}

// --- MAPEAMENTO DE PLANOS ---
// Este objeto funciona como um "tradutor". Ele converte o nome do produto
// que vem da Cakto para um identificador de plano e uma duração em meses que nosso sistema entende.
// Ex: Se a Cakto envia "Plano Anual", nosso sistema sabe que é o plano 'anual' com 12 meses de duração.
const planMapping: { [key: string]: { plan: User['plan'], durationInMonths: number } } = {
  'Plano Mensal': { plan: 'mensal', durationInMonths: 1 },
  'Plano Trimestral': { plan: '3meses', durationInMonths: 3 },
  'Plano Anual': { plan: 'anual', durationInMonths: 12 },
  'Produto Teste': { plan: 'anual', durationInMonths: 12 }, // Produto para testes de integração
};

// --- CÁLCULO DE EXPIRAÇÃO ---
// Função utilitária para calcular a data de expiração de uma assinatura.
// Recebe a data de início (data do pagamento) e a duração em meses.
const calculateExpirationDate = (startDate: Date, months: number): string => {
  const expirationDate = new Date(startDate);
  expirationDate.setMonth(expirationDate.getMonth() + months);
  return expirationDate.toISOString();
};

// --- ENVIO DE E-MAIL DE BOAS-VINDAS ---
// Esta função é responsável por enviar as credenciais de acesso para o novo usuário.
// Ela usa a API do Gmail para enviar um e-mail formatado com o login (e-mail) e a senha padrão.
const sendWelcomeEmail = async (user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) => {
  // Verifica se as credenciais da API do Gmail estão configuradas nas variáveis de ambiente.
  if (!process.env.G_CLIENT_ID || !process.env.G_CLIENT_SECRET || !process.env.G_REDIRECT_URI || !process.env.G_REFRESH_TOKEN || !process.env.EMAIL_FROM || !process.env.NEXT_PUBLIC_APP_URL) {
    console.error('Credenciais da API do Gmail ou URL do App não configuradas. O e-mail de boas-vindas não será enviado.');
    return;
  }

  try {
    // Autenticação com a API do Gmail usando OAuth2.
    const oAuth2Client = new google.auth.OAuth2(
      process.env.G_CLIENT_ID,
      process.env.G_CLIENT_SECRET,
      process.env.G_REDIRECT_URI
    );
    oAuth2Client.setCredentials({ refresh_token: process.env.G_REFRESH_TOKEN });

    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

    // Construção do corpo do e-mail em HTML.
    const emailFrom = `EnemPro <${process.env.EMAIL_FROM}>`;
    const emailTo = user.email;
    const subject = '🎓 Bem-vindo ao ENEM Pro - Suas credenciais de acesso';
    const loginUrl = `${process.env.NEXT_PUBLIC_APP_URL}/login`;
    const emailBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>Olá, ${user.name}!</h2>
        <p>Seu pagamento foi confirmado e seu acesso à plataforma EnemPro foi liberado!</p>
        <h3>Suas credenciais de acesso:</h3>
        <ul>
          <li><strong>Email:</strong> ${user.email}</li>
          <li><strong>Senha:</strong> ${user.password}</li>
        </ul>
        <p>Você pode acessar a plataforma através do link abaixo:</p>
        <a href="https://enem--enempro-25193085-f5db3.us-central1.hosted.app/login" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">Acessar Plataforma</a>
        <p>Recomendamos que você altere sua senha no primeiro acesso.</p>
        <br>
        <p>Atenciosamente,</p>
        <p><strong>Equipe EnemPro</strong></p>
      </div>
    `;

    // Montagem e codificação da mensagem de e-mail para envio via API.
    const rawMessage = [
      `From: ${emailFrom}`,
      `To: ${emailTo}`,
      `Subject: =?utf-8?B?${Buffer.from(subject).toString('base64')}?=`,
      'Content-Type: text/html; charset=utf-8',
      'MIME-Version: 1.0',
      '',
      emailBody,
    ].join('\n');

    const encodedMessage = Buffer.from(rawMessage).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    // Envio do e-mail.
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });

    console.log(`E-mail de boas-vindas enviado com sucesso para ${user.email} via API do Gmail.`);
  } catch (error) {
    console.error(`Falha ao enviar e-mail de boas-vindas para ${user.email} via API do Gmail:`, error);
  }
};

// --- ENDPOINT PRINCIPAL DO WEBHOOK ---
// Esta é a função principal que a Vercel executa quando uma requisição POST chega em /api/create-user.
export async function POST(request: Request) {
  let requestBodyAsText: string;

  try {
    // ETAPA 1: Ler o corpo da requisição como texto bruto primeiro para garantir o log.
    requestBodyAsText = await request.text();

    // ETAPA 2: Salvar o corpo bruto no localStorage para depuração.
    // Esta é uma "trapaça" para desenvolvimento, já que a API do servidor não tem acesso
    // direto ao localStorage. A página /webhook no cliente irá ler isso.
    if (typeof window !== 'undefined') {
      const webhooks = JSON.parse(localStorage.getItem('webhook_logs') || '[]');
      webhooks.unshift({
        id: `wh_${Date.now()}`,
        receivedAt: new Date().toISOString(),
        body: requestBodyAsText, // Salva o texto bruto
        parsed: false, // Indica que ainda não foi interpretado como JSON
      });
      localStorage.setItem('webhook_logs', JSON.stringify(webhooks));
    }

    // ETAPA 3: Tentar interpretar o texto como JSON para processamento.
    const body = JSON.parse(requestBodyAsText);
    
    // Atualizar o log com o JSON interpretado, se bem-sucedido.
    if (typeof window !== 'undefined') {
        const webhooks = JSON.parse(localStorage.getItem('webhook_logs') || '[]');
        if(webhooks.length > 0) {
            webhooks[0].body = body;
            webhooks[0].parsed = true;
            localStorage.setItem('webhook_logs', JSON.stringify(webhooks));
        }
    }

    const webhookData = Array.isArray(body) ? body[0] : body;

    // ETAPA 4: Validação e lógica de negócio.
    if (!webhookData || !webhookData.data) {
      return NextResponse.json({ success: false, message: 'Payload inválido.' }, { status: 400 });
    }

    const { event, data } = webhookData;
    const { customer, paidAt, product } = data;

    // Ação principal: só executa se o evento for de criação ou renovação de assinatura E se houver data de pagamento.
    if ((event === 'subscription_created' || event === 'subscription_renewed') && paidAt) {
      if (!customer || !customer.email || !customer.name) {
        return NextResponse.json({ success: false, message: 'Dados do cliente ausentes.' }, { status: 400 });
      }

      // "Traduz" o nome do produto da Cakto para um plano e duração que nosso sistema entende.
      const planInfo = planMapping[product?.name];
      if (!planInfo) {
        console.warn(`Plano não reconhecido: "${product?.name}". Verifique o mapeamento.`);
        return NextResponse.json({ success: false, message: `Plano "${product?.name}" não configurado.` }, { status: 400 });
      }

      const { plan, durationInMonths } = planInfo;
      const paymentDate = new Date(paidAt);
      const expirationDate = calculateExpirationDate(paymentDate, durationInMonths);
      const defaultPassword = '123456'; // Senha padrão para novos usuários.

      // Verifica se o usuário já existe em nosso banco de dados.
      const existingUser = await authService.getUserByEmail(customer.email);

      if (existingUser) {
        // Se o usuário existe, atualiza os dados da assinatura (renovação).
        console.log(`Usuário com email ${customer.email} já existe. Atualizando assinatura.`);
        await authService.updateUser(existingUser.id, { 
          isActive: true,
          plan: plan,
          planExpiresAt: expirationDate
        });
        return NextResponse.json({ success: true, message: 'Assinatura de usuário existente foi renovada/atualizada.' });
      } else {
        // Se o usuário não existe, cria uma nova conta.
        console.log(`Criando novo usuário para ${customer.email}.`);
        
        const newUserPayload: Omit<User, 'id' | 'createdAt' | 'updatedAt'> = {
          email: customer.email,
          password: defaultPassword,
          name: customer.name,
          phone: customer.phone || '',
          cpf: customer.docNumber || '',
          birthDate: '', 
          role: 'user',
          isActive: true,
          plan: plan,
          planExpiresAt: expirationDate,
        };

        const result = await authService.register(newUserPayload);

        if (result.success && result.user) {
          console.log(`Usuário ${customer.email} criado com sucesso via webhook com plano ${plan}.`);
          // Envia o e-mail de boas-vindas com as credenciais.
          await sendWelcomeEmail(newUserPayload);
          return NextResponse.json({ success: true, message: 'Usuário criado com sucesso.', userId: result.user.id });
        } else {
          console.error('Falha ao registrar usuário via webhook:', result.message);
          return NextResponse.json({ success: false, message: `Falha ao registrar usuário: ${result.message}` }, { status: 500 });
        }
      }
    }

    // Se o evento não for relevante (ex: pagamento pendente), apenas registra e retorna sucesso.
    console.log(`Evento '${event}' recebido, mas não processado (sem data de pagamento ou tipo de evento não relevante).`);
    return NextResponse.json({ success: true, message: `Evento '${event}' recebido, mas não acionou nenhuma ação.` });

  } catch (error) {
    // ETAPA 5: Tratamento de erros, incluindo falha no parse do JSON.
    console.error('Erro ao processar webhook da Cakto:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido no servidor.';
    // Mesmo em caso de erro, a requisição bruta já foi logada no início do 'try'.
    return NextResponse.json({ success: false, message: 'Erro interno do servidor.', error: errorMessage }, { status: 500 });
  }
}
