"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import YouTubeVideo from "@/components/YouTubeVideo";
import { Play } from "lucide-react";

const LandingPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Header with Theme Toggle and Login Logo */}
      <header className="absolute top-4 right-4 z-10 flex items-center gap-4">
        {/* Login Logo */}
        <div 
          className="cursor-pointer group"
          onClick={() => router.push('/login')}
        >
          <div className="relative">
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-indigo-700/80 backdrop-blur-sm border border-white/20 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:from-blue-600/90 group-hover:via-purple-600/90 group-hover:to-indigo-700/90">
              <span className="text-white font-bold text-sm tracking-wide drop-shadow-sm">
                LOGIN
              </span>
            </div>
            {/* Efeito de brilho */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Sombra interna */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent to-black/30"></div>
            {/* Efeito de transparência adicional */}
            <div className="absolute inset-0 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300"></div>
          </div>
        </div>
        
        <ThemeToggle />
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-20 relative">
          {/* Efeitos de fundo decorativos */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>
          
          {/* Título principal com efeitos */}
          <div className="relative z-10">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-800 dark:text-white leading-tight mb-4">
              <span className="block">Conquiste o</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent animate-pulse">
                ENEM 2025
              </span>
          </h1>
            
            {/* Subtítulo com destaque */}
            <div className="relative">
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium mb-4">
                com <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-bold">Inteligência Artificial</span>
              </p>
              
              {/* Linha decorativa */}
              <div className="mt-6 flex items-center justify-center space-x-4">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-16 h-1 bg-gradient-to-l from-transparent to-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Descrição melhorada */}
          <div className="relative z-10 mt-8">
            <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/30 dark:border-blue-700/30 shadow-xl">
              <p className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed text-center">
                A plataforma mais completa para sua aprovação no ENEM. 
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Flashcards com IA, correção de redação e videoaulas exclusivas.
                </span>
              </p>
              
              {/* Elementos decorativos */}
              <div className="mt-6 flex items-center justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Flashcards IA</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-500"></div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Correção IA</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse delay-1000"></div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Videoaulas</span>
                </div>
              </div>
            </div>
          </div>
          

          {/* CTA Buttons removidos conforme solicitado */}
        </div>

        {/* Video Section */}
        <div className="space-y-8 relative">
          {/* Efeitos de fundo decorativos */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/6 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/6 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="text-center relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 dark:text-white mb-4 leading-tight">
              <span className="block">Assista ao Nosso</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Vídeo de Apresentação
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
              Conheça nossa plataforma e veja como podemos te ajudar a 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-bold">
                conquistar o ENEM 2025
              </span>
            </p>
            
            {/* Linha decorativa */}
            <div className="mt-8 flex items-center justify-center space-x-4">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-20 h-1 bg-gradient-to-l from-transparent to-purple-500 rounded-full"></div>
            </div>
          </div>

          {/* YouTube Video */}
          <div className="max-w-4xl mx-auto">
            <div className="relative p-6 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm rounded-3xl border-2 border-blue-200/50 dark:border-blue-700/50 shadow-2xl">
              {/* Efeitos decorativos */}
              <div className="absolute top-2 left-2 w-4 h-4 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div className="absolute top-2 right-2 w-4 h-4 bg-purple-500/20 rounded-full animate-pulse delay-500"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 bg-indigo-500/20 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-pink-500/20 rounded-full animate-pulse delay-1500"></div>
              
            <YouTubeVideo
                videoId="sLAvC3VaG5E" // Vídeo de apresentação da plataforma
                playlistId="PLteXIfbsJZp37A8F-qv3-Pj2d4iA4qZFa" // Playlist completa
              title="Apresentação da Plataforma EnemPro"
              height="500px"
              showControls={true}
                className="shadow-2xl rounded-2xl relative z-10"
            />
            </div>
          </div>
        </div>

        {/* Planos de Assinatura */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Escolha seu <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Plano Ideal</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Acesso completo a todos os recursos • Pagamento seguro via Cakto • Garantia de 7 dias
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Plano Mensal - CINZA */}
            <div className="group relative bg-gradient-to-br from-gray-50/95 via-slate-50/95 to-zinc-50/95 dark:from-gray-900/30 dark:via-slate-900/30 dark:to-zinc-900/30 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 aspect-square flex flex-col justify-between">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-gray-600/90 to-gray-500/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg border border-gray-400/30">
                  <div className="flex items-center justify-center space-x-2">
                    {/* Ícone de teste */}
                    <div className="w-4 h-4">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    {/* Texto */}
                    <span className="text-white font-bold text-xs tracking-wide">PLANO FLEX</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-3">Plano Mensal</h3>
                  <div className="relative mb-3">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-2xl font-bold text-gray-600 dark:text-gray-400 drop-shadow-lg">R$</span>
                      <span className="text-4xl font-black text-gray-600 dark:text-gray-400 drop-shadow-lg bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">19,90</span>
                      <span className="text-lg text-gray-500 dark:text-gray-400 drop-shadow-md">/mês</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-4">
                    Ideal para testar a plataforma
                  </div>
                </div>
                
                <ul className="text-left space-y-2 mb-4">
                  <li className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-gray-600 dark:text-gray-400 text-xs font-bold">✓</span>
                    </div>
                    Acesso completo à plataforma
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-gray-600 dark:text-gray-400 text-xs font-bold">✓</span>
                    </div>
                    Flashcards ilimitados
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-gray-600 dark:text-gray-400 text-xs font-bold">✓</span>
                    </div>
                    Correção de redações
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-gray-600 dark:text-gray-400 text-xs font-bold">✓</span>
                    </div>
                    Cronograma personalizado
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-gray-600 dark:text-gray-400 text-xs font-bold">✓</span>
                    </div>
                    Suporte prioritário
                  </li>
                </ul>
                
                <Button
                  onClick={() => window.open('https://pay.cakto.com.br/dovqc3t', '_blank')}
                  className="w-full bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 text-white py-3 rounded-xl font-bold text-sm transition-all duration-500 hover:scale-105 shadow-xl relative overflow-hidden group border border-gray-400/50 hover:border-gray-500"
                >
                  {/* Efeito de brilho sutil */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Conteúdo do botão */}
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    {/* Texto principal */}
                    <span className="font-black tracking-wide">ASSINAR MENSAL</span>
                    
                    {/* Seta elegante */}
                    <div className="w-4 h-4 border-r-2 border-t-2 border-white transform rotate-45 group-hover:translate-x-1 transition-transform duration-300"></div>
                  </span>
                  
                  {/* Efeito de hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </div>
            </div>

            {/* Plano Trimestral - DESTAQUE */}
            <div className="group relative bg-gradient-to-br from-blue-50/95 via-purple-50/95 to-indigo-50/95 dark:from-blue-900/40 dark:via-purple-900/40 dark:to-indigo-900/40 backdrop-blur-sm rounded-3xl p-6 shadow-3xl border-2 border-blue-500/50 dark:border-blue-400/50 transform scale-105 hover:scale-110 transition-all duration-500 aspect-square flex flex-col justify-between">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-purple-600/90 to-gray-600/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg border border-purple-400/30">
                  <div className="flex items-center justify-center space-x-2">
                    {/* Estrela SVG */}
                    <div className="w-4 h-4">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    {/* Texto */}
                    <span className="text-white font-bold text-xs tracking-wide">MAIS POPULAR</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-3">Plano Trimestral</h3>
                  <div className="relative mb-3">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-2xl font-bold text-purple-600 dark:text-purple-400 drop-shadow-lg">R$</span>
                      <span className="text-4xl font-black text-purple-600 dark:text-purple-400 drop-shadow-lg bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">16,90</span>
                      <span className="text-lg text-purple-500 dark:text-purple-300 font-semibold drop-shadow-md">/mês</span>
                    </div>
                  </div>
                  {/* Desconto destacado em card */}
                  <div className="mt-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-3 border-2 border-purple-400/40 shadow-lg">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-sm text-purple-400 dark:text-purple-500 line-through font-semibold">R$ 59,70</span>
                      <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-black shadow-lg">15% OFF</span>
                    </div>
                    <div className="text-purple-600 dark:text-purple-400 font-black text-sm mb-1">
                      Economize R$ 9,00
                    </div>
                    <div className="text-emerald-600 dark:text-emerald-400 text-xl font-bold">
                      Total R$ 50,70
                    </div>
                  </div>
                </div>
                
                <ul className="text-left space-y-2 mb-4">
                  <li className="flex items-center text-purple-700 dark:text-purple-200 text-sm">
                    <div className="w-4 h-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-purple-600 dark:text-purple-400 text-xs font-bold">✓</span>
                    </div>
                    Acesso completo à plataforma
                  </li>
                  <li className="flex items-center text-purple-700 dark:text-purple-200 text-sm">
                    <div className="w-4 h-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-purple-600 dark:text-purple-400 text-xs font-bold">✓</span>
                    </div>
                    Flashcards ilimitados
                  </li>
                  <li className="flex items-center text-purple-700 dark:text-purple-200 text-sm">
                    <div className="w-4 h-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-purple-600 dark:text-purple-400 text-xs font-bold">✓</span>
                    </div>
                    Correção de redações
                  </li>
                  <li className="flex items-center text-purple-700 dark:text-purple-200 text-sm">
                    <div className="w-4 h-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-purple-600 dark:text-purple-400 text-xs font-bold">✓</span>
                    </div>
                    Cronograma personalizado
                  </li>
                  <li className="flex items-center text-purple-700 dark:text-purple-200 text-sm">
                    <div className="w-4 h-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-purple-600 dark:text-purple-400 text-xs font-bold">✓</span>
                    </div>
                    Suporte prioritário
                  </li>
                  <li className="flex items-center text-purple-700 dark:text-purple-200 text-sm">
                    <div className="w-4 h-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-purple-600 dark:text-purple-400 text-xs font-bold">✓</span>
                    </div>
                    Relatórios avançados
                  </li>
                  <li className="flex items-center text-purple-700 dark:text-purple-200 text-sm">
                    <div className="w-4 h-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-purple-600 dark:text-purple-400 text-xs font-bold">✓</span>
                    </div>
                    Acesso a conteúdo exclusivo
                  </li>
                </ul>
                
            <Button
                  onClick={() => window.open('https://pay.cakto.com.br/33tn6da_594749', '_blank')}
                  className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white py-3 rounded-xl font-bold text-sm transition-all duration-500 hover:scale-105 shadow-xl relative overflow-hidden group border border-purple-500/50 hover:border-purple-400"
                >
                  {/* Efeito de brilho sutil */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Conteúdo do botão */}
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    {/* Texto principal */}
                    <span className="font-black tracking-wide">ASSINAR TRIMESTRAL</span>
                    
                    {/* Seta elegante */}
                    <div className="w-4 h-4 border-r-2 border-t-2 border-white transform rotate-45 group-hover:translate-x-1 transition-transform duration-300"></div>
                  </span>
                  
                  {/* Efeito de hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </div>
            </div>

            {/* Plano Anual - MELHOR PLANO */}
            <div className="group relative bg-gradient-to-br from-emerald-50/95 via-teal-50/95 to-cyan-50/95 dark:from-emerald-900/30 dark:via-teal-900/30 dark:to-cyan-900/30 backdrop-blur-sm rounded-3xl p-6 shadow-3xl border-2 border-emerald-300/60 dark:border-emerald-600/60 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-500 hover:shadow-4xl hover:-translate-y-3 transform scale-105 aspect-square flex flex-col justify-between">
              {/* Efeitos de fundo decorativos */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl translate-y-20 -translate-x-20"></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-green-600/90 to-gray-600/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg border border-green-400/30">
                  <div className="flex items-center justify-center space-x-2">
                    {/* Troféu SVG */}
                    <div className="w-4 h-4">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    {/* Texto */}
                    <span className="text-white font-bold text-xs tracking-wide">MELHOR OFERTA</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-emerald-800 dark:text-emerald-200 mb-3 tracking-wide">Plano Anual</h3>
                  
                  {/* Preço principal destacado */}
                  <div className="relative mb-4">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 drop-shadow-lg">R$</span>
                      <span className="text-4xl font-black text-emerald-600 dark:text-emerald-400 drop-shadow-lg bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">14,90</span>
                      <span className="text-lg text-emerald-500 dark:text-emerald-300 font-semibold drop-shadow-md">/mês</span>
                    </div>
                    
                    {/* Desconto destacado em card */}
                    <div className="mt-3 bg-gradient-to-r from-red-500/20 to-red-400/20 backdrop-blur-sm rounded-xl p-3 border-2 border-red-400/40 shadow-lg">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-sm text-emerald-400 dark:text-emerald-500 line-through font-semibold">R$ 238,80</span>
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-black shadow-lg">25% OFF</span>
                      </div>
                      <div className="text-red-600 dark:text-red-400 font-black text-sm mb-1">
                        Economize R$ 60,00
                      </div>
                      <div className="text-emerald-600 dark:text-emerald-400 text-xl font-bold">
                        Total R$ 178,80
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-emerald-100/50 dark:bg-emerald-900/30 backdrop-blur-sm rounded-2xl p-4 mb-4 border-2 border-emerald-200/50 dark:border-emerald-700/50 shadow-lg">
                  <ul className="space-y-2">
                    <li className="flex items-center text-emerald-700 dark:text-emerald-200 text-sm">
                      <div className="w-4 h-4 bg-emerald-500/60 rounded-full flex items-center justify-center mr-2 flex-shrink-0 shadow-lg">
                        <span className="text-white/80 text-xs font-bold">✓</span>
                      </div>
                      <span className="font-semibold">Acesso completo à plataforma</span>
                    </li>
                    <li className="flex items-center text-emerald-700 dark:text-emerald-200 text-sm">
                      <div className="w-4 h-4 bg-emerald-500/60 rounded-full flex items-center justify-center mr-2 flex-shrink-0 shadow-lg">
                        <span className="text-white/80 text-xs font-bold">✓</span>
                      </div>
                      <span className="font-semibold">Flashcards ilimitados</span>
                    </li>
                    <li className="flex items-center text-emerald-700 dark:text-emerald-200 text-sm">
                      <div className="w-4 h-4 bg-emerald-500/60 rounded-full flex items-center justify-center mr-2 flex-shrink-0 shadow-lg">
                        <span className="text-white/80 text-xs font-bold">✓</span>
                      </div>
                      <span className="font-semibold">Correção de redações</span>
                    </li>
                    <li className="flex items-center text-emerald-700 dark:text-emerald-200 text-sm">
                      <div className="w-4 h-4 bg-emerald-500/60 rounded-full flex items-center justify-center mr-2 flex-shrink-0 shadow-lg">
                        <span className="text-white/80 text-xs font-bold">✓</span>
                      </div>
                      <span className="font-semibold">Cronograma personalizado</span>
                    </li>
                    <li className="flex items-center text-emerald-700 dark:text-emerald-200 text-sm">
                      <div className="w-4 h-4 bg-emerald-500/60 rounded-full flex items-center justify-center mr-2 flex-shrink-0 shadow-lg">
                        <span className="text-white/80 text-xs font-bold">✓</span>
                      </div>
                      <span className="font-semibold">Suporte prioritário</span>
                    </li>
                    <li className="flex items-center text-emerald-700 dark:text-emerald-200 text-sm">
                      <div className="w-4 h-4 bg-emerald-500/60 rounded-full flex items-center justify-center mr-2 flex-shrink-0 shadow-lg">
                        <span className="text-white/80 text-xs font-bold">✓</span>
                      </div>
                      <span className="font-semibold">Relatórios avançados</span>
                    </li>
                    <li className="flex items-center text-emerald-700 dark:text-emerald-200 text-sm">
                      <div className="w-4 h-4 bg-emerald-500/60 rounded-full flex items-center justify-center mr-2 flex-shrink-0 shadow-lg">
                        <span className="text-white/80 text-xs font-bold">✓</span>
                      </div>
                      <span className="font-semibold">Acesso a conteúdo exclusivo</span>
                    </li>
                    <li className="flex items-center text-emerald-700 dark:text-emerald-200 text-sm">
                      <div className="w-4 h-4 bg-emerald-500/60 rounded-full flex items-center justify-center mr-2 flex-shrink-0 shadow-lg">
                        <span className="text-white/80 text-xs font-bold">✓</span>
                      </div>
                      <span className="text-emerald-600 dark:text-emerald-400 font-black">Mentoria individual</span>
                    </li>
                    <li className="flex items-center text-emerald-700 dark:text-emerald-200 text-sm">
                      <div className="w-4 h-4 bg-emerald-500/60 rounded-full flex items-center justify-center mr-2 flex-shrink-0 shadow-lg">
                        <span className="text-white/80 text-xs font-bold">✓</span>
                      </div>
                      <span className="text-emerald-600 dark:text-emerald-400 font-black">Simulados exclusivos</span>
                    </li>
                  </ul>
                </div>
                
                <Button
                  onClick={() => window.open('https://pay.cakto.com.br/39oqsff_594830', '_blank')}
                  className="w-full bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 text-white py-3 rounded-xl font-black text-sm transition-all duration-500 hover:scale-105 shadow-xl relative overflow-hidden group border-2 border-emerald-400/60 hover:border-emerald-300"
                >
                  {/* Efeito de brilho premium */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Conteúdo do botão */}
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    {/* Texto principal */}
                    <span className="font-black tracking-wider">ASSINAR ANUAL</span>
                    
                    {/* Seta elegante */}
                    <div className="w-4 h-4 border-r-2 border-t-2 border-white transform rotate-45 group-hover:translate-x-1 transition-transform duration-300"></div>
                  </span>
                  
                  {/* Efeito shimmer premium */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  {/* Efeito de pulso */}
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
              </div>
            </div>
          </div>

        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Flashcards com IA */}
          <div className="group relative bg-gradient-to-br from-blue-50/80 via-indigo-50/80 to-purple-50/80 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-200/50 dark:border-blue-700/50 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-500 hover:shadow-3xl hover:-translate-y-2">
            {/* Efeitos decorativos */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-indigo-400/20 rounded-full blur-xl translate-y-8 -translate-x-8"></div>
            
            <div className="text-center space-y-6 relative z-10">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <div className="text-white font-black text-2xl">F</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Flashcards com IA</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                Sistema inteligente de memorização que se adapta ao seu ritmo de aprendizado
              </p>
              <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                <span style={{ filter: 'hue-rotate(200deg) saturate(1.5) brightness(1.2)' }}>✨</span>
                <span>Algoritmo personalizado</span>
              </div>
            </div>
          </div>
          
          {/* Correção de Redação */}
          <div className="group relative bg-gradient-to-br from-emerald-50/80 via-green-50/80 to-teal-50/80 dark:from-emerald-900/20 dark:via-green-900/20 dark:to-teal-900/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-emerald-200/50 dark:border-emerald-700/50 hover:border-emerald-400 dark:hover:border-emerald-500 transition-all duration-500 hover:shadow-3xl hover:-translate-y-2">
            {/* Efeitos decorativos */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-400/20 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-green-400/20 rounded-full blur-xl translate-y-8 -translate-x-8"></div>
            
            <div className="text-center space-y-6 relative z-10">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <div className="text-white font-black text-2xl">R</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">Correção de Redação</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                Sistema CIRA baseado em análise de mais de 100.000 redações do ENEM
              </p>
              <div className="flex items-center justify-center space-x-2 text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
                <span style={{ filter: 'hue-rotate(120deg) saturate(1.5) brightness(1.2)' }}>🤖</span>
                <span>IA especializada</span>
              </div>
            </div>
          </div>
          
          {/* Videoaulas Exclusivas */}
          <div className="group relative bg-gradient-to-br from-purple-50/80 via-pink-50/80 to-rose-50/80 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-rose-900/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-200/50 dark:border-purple-700/50 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-500 hover:shadow-3xl hover:-translate-y-2">
            {/* Efeitos decorativos */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-400/20 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-pink-400/20 rounded-full blur-xl translate-y-8 -translate-x-8"></div>
            
            <div className="text-center space-y-6 relative z-10">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <div className="text-white font-black text-2xl">V</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Videoaulas Exclusivas</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                18 aulas completas do Aulão ENEM com professores especialistas
              </p>
              <div className="flex items-center justify-center space-x-2 text-purple-600 dark:text-purple-400 text-sm font-semibold">
                <span style={{ filter: 'hue-rotate(280deg) saturate(1.5) brightness(1.2)' }}>🎓</span>
                <span>Conteúdo premium</span>
              </div>
            </div>
          </div>
        </div>

        {/* Depoimentos de Alunos */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-800 dark:text-white mb-6">
              O que nossos <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">alunos</span> dizem
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
              Histórias reais de quem já conquistou seus objetivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Depoimento 1 - Simplificação dos estudos */}
            <div className="group relative bg-gradient-to-br from-blue-50/90 via-indigo-50/90 to-purple-50/90 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-200/50 dark:border-blue-700/50 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-500 hover:shadow-3xl hover:-translate-y-3">
              {/* Efeitos decorativos */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-indigo-400/20 rounded-full blur-xl translate-y-8 -translate-x-8"></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <img src="https://media.discordapp.net/attachments/1423002687708074023/1423824880390111423/leads_2.jpg?ex=68e1b7c0&is=68e06640&hm=569cc23bc1b43c82b2c8c17af55c5efd64aa54d71b3a490552b8a1d8c2082dbd&=&format=webp&width=260&height=463" alt="Maria Silva" className="w-full h-full object-cover"/>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-5 w-5 text-yellow-400 font-bold drop-shadow-sm">★</div>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Maria Silva</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">18 anos - Aprovada em Medicina</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic relative">
                  <span className="text-4xl text-blue-400/50 absolute -top-2 -left-2">"</span>
                  A plataforma revolucionou meus estudos! Consegui organizar tudo de forma muito mais simples e eficiente. As aulas são objetivas e direto ao ponto.
                  <span className="text-4xl text-blue-400/50 absolute -bottom-4 -right-2">"</span>
                </blockquote>
              </div>
            </div>

            {/* Depoimento 2 - Sistema de redação */}
            <div className="group relative bg-gradient-to-br from-emerald-50/90 via-green-50/90 to-teal-50/90 dark:from-emerald-900/20 dark:via-green-900/20 dark:to-teal-900/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-emerald-200/50 dark:border-emerald-700/50 hover:border-emerald-400 dark:hover:border-emerald-500 transition-all duration-500 hover:shadow-3xl hover:-translate-y-3">
              {/* Efeitos decorativos */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-400/20 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-green-400/20 rounded-full blur-xl translate-y-8 -translate-x-8"></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <img src="https://media.discordapp.net/attachments/1423002687708074023/1423824879815229580/leads_1.jpg?ex=68e1b7c0&is=68e06640&hm=86f2162dcae861e85a336550aa8671cbe90182ea54aa25d0bcb650954a028170&=&format=webp&width=260&height=463" alt="João Santos" className="w-full h-full object-cover"/>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-5 w-5 text-yellow-400 font-bold drop-shadow-sm">★</div>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">João Santos</h3>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold">17 anos - Nota 960 na Redação</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic relative">
                  <span className="text-4xl text-emerald-400/50 absolute -top-2 -left-2">"</span>
                  O sistema de correção automática de redação é excelente! Me ajudou a identificar meus pontos fracos e melhorar minha escrita de forma prática.
                  <span className="text-4xl text-emerald-400/50 absolute -bottom-4 -right-2">"</span>
                </blockquote>
              </div>
            </div>

            {/* Depoimento 3 - Resultados */}
            <div className="group relative bg-gradient-to-br from-purple-50/90 via-pink-50/90 to-rose-50/90 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-rose-900/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-200/50 dark:border-purple-700/50 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-500 hover:shadow-3xl hover:-translate-y-3">
              {/* Efeitos decorativos */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-400/20 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-pink-400/20 rounded-full blur-xl translate-y-8 -translate-x-8"></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <img src="https://media.discordapp.net/attachments/1423002687708074023/1423824880117223556/leads_3.jpg?ex=68e1b7c0&is=68e06640&hm=86b1327f0e1f75ed2a26a31db61bfa3629cff051e6a4b4c0290cf280401f9cd7&=&format=webp&width=347&height=462" alt="Ana Costa" className="w-full h-full object-cover"/>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-5 w-5 text-yellow-400 font-bold drop-shadow-sm">★</div>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Ana Costa</h3>
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold">19 anos - Aprovada em Engenharia</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic relative">
                  <span className="text-4xl text-purple-400/50 absolute -top-2 -left-2">"</span>
                  Em 3 meses usando a plataforma, minha nota no ENEM subiu 200 pontos! Os flashcards e simulados são incríveis.
                  <span className="text-4xl text-purple-400/50 absolute -bottom-4 -right-2">"</span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          {/* Logo e Nome */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {/* Logo com livro aberto */}
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            {/* Nome EnemPro */}
            <span className="text-3xl font-bold text-white">EnemPro</span>
          </div>
          
          {/* Informações de Copyright */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-gray-300 text-sm">
            © 2025 EnemPro. Todos os direitos reservados.
          </p>
            <p className="text-gray-400 text-xs mt-2">
              Desenvolvido com ❤️ para estudantes do Brasil
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
