import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
// @ts-ignore
import problemaImage from '../assets/.aistudio/images/imagem.jpg';
// @ts-ignore
import walaceImage from '../assets/.aistudio/images/walace.png';
// @ts-ignore
import finalImage from '../assets/.aistudio/images/pexels-rdne-8208273.jpg';
// @ts-ignore
import bookCoverImage from '../assets/.aistudio/images/71pprGBjBBL._SY466_.jpg';
import {
  BookOpen,
  Check,
  Smartphone,
  Users,
  Heart,
  ArrowRight,
  X,
  ShieldCheck,
  Sparkles,
  Award
} from 'lucide-react';

interface SmartImageProps {
  sources: string[];
  alt: string;
  className?: string;
  aspectRatioClass?: string;
  fallbackIcon: React.ReactNode;
  fallbackTitle: string;
  fallbackDesc: string;
}

function SmartImage({
  sources,
  alt,
  className = "w-full h-full object-cover rounded-xl",
  aspectRatioClass = "aspect-[4/3]",
  fallbackIcon,
  fallbackTitle,
  fallbackDesc
}: SmartImageProps) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [allFailed, setAllFailed] = useState(false);

  const handleError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex(prev => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  if (allFailed) {
    return (
      <div className={`w-full ${aspectRatioClass} rounded-xl bg-gradient-to-tr from-[#0D3B66] to-[#1e293b] flex flex-col items-center justify-center p-6 text-center border border-[#4EA8DE]/20 shadow-inner`}>
        <div className="mb-3 animate-pulse text-[#FFD166]">
          {fallbackIcon}
        </div>
        <span className="text-xs uppercase tracking-widest text-[#4EA8DE] font-bold mb-1">
          {fallbackTitle}
        </span>
        <p className="text-xs text-white/70 max-w-[240px] leading-relaxed">
          {fallbackDesc}
        </p>
      </div>
    );
  }

  return (
    <img
      src={sources[sourceIndex]}
      alt={alt}
      onError={handleError}
      className={`${className} transition-opacity duration-300`}
      referrerPolicy="no-referrer"
    />
  );
}

export default function App() {
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [hasScrolled, setHasScrolled] = useState(false);

  React.useEffect(() => {
    const triggerReveal = () => {
      setHasScrolled(true);
    };

    const handleScroll = () => {
      if (window.scrollY > 15) {
        triggerReveal();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        triggerReveal();
      }
    };

    const handleTouch = () => {
      triggerReveal();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchmove', handleTouch, { passive: true });

    if (window.scrollY > 15) {
      triggerReveal();
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouch);
    };
  }, []);

  const handleRevealClick = () => {
    setHasScrolled(true);
  };

  const firstChapterContent = {
    title: "Capítulo 1: O Sequestro Silencioso do Olhar",
    paragraphs: [
      "Nas últimas duas décadas, o silício e o design de persuasão digital moldaram uma nova realidade silenciosa debaixo do mesmo teto. O que no início parecia um portal inofensivo de conectividade e entretenimento tornou-se, gradualmente, o maior competidor pela atenção dos nossos filhos.",
      "Quando uma criança de sete anos recebe um dispositivo com acesso à internet, ela não está meramente diante de um brinquedo moderno. Ela está interagindo com os algoritmos de recomendação mais potentes do planeta, estrategicamente desenhados por equipes de engenheiros e psicólogos do comportamento cujo único objetivo é extrair mais cinco minutos de retenção ocular.",
      "O neurodesenvolvimento infantil exige o ócio criativo. Exige o olhar atento do pai que valida seus pequenos feitos. Exige a convivência sutil das refeições sem bipes. Sem esses momentos, o circuito de recompensa da dopamina é sobressaltado de modo sintético, limitando a habilidade do cérebro em resistir ao tédio, criar empatia profunda e autorregular o próprio estresse.",
      "Este guia não é sobre demonizar os avanços tecnológicos, mas sim sobre desenhar uma fortaleza de presença no lar, restabelecendo as barreiras saudáveis para que a infância possa, finalmente, respirar em paz."
    ]
  };

  const handeSampleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userEmail.trim()) {
      setFeedbackSubmitted(true);
      setTimeout(() => {
        setFeedbackSubmitted(false);
        setUserEmail('');
      }, 5000);
    }
  };

  return (
    <div className="relative bg-[#FAF9F6] text-[#1a2a3a] min-h-[101vh] overflow-x-hidden font-sans selection:bg-[#4EA8DE]/20 selection:text-[#0D3B66]">
      
      {/* Decorative Glassmorphic Backdrop Spheres - Deep visual refraction */}
      <div className="absolute top-[5%] left-[5%] w-[45vw] h-[45vw] max-w-[450px] max-h-[450px] bg-[#4EA8DE]/15 rounded-full blur-[110px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-[25%] right-[5%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-[#FFD166]/20 rounded-full blur-[110px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[35%] left-[10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[#0D3B66]/8 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-[#4EA8DE]/15 rounded-full blur-[110px] pointer-events-none -z-10 animate-pulse" />

      {/* SEÇÃO 1: HERO */}
      <section id="hero" className="relative pt-12 pb-24 md:py-32 overflow-hidden bg-transparent">
        <div className="absolute inset-x-4 bottom-0 top-[40%] bg-white/25 backdrop-blur-md -z-10 rounded-t-[48px] border-t border-x border-white/40 shadow-[0_-12px_40px_rgba(13,59,102,0.03)]" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D3B66] tracking-tight leading-[1.08]">
                Salvando Meu Filho das Telas
              </h1>

              <p className="text-xl font-bold text-[#FBC300] leading-snug">
                Ajudando pais a restabelecerem um relacionamento saudável com os filhos.
              </p>

              <p className="text-[#1a2a3a]/80 text-base leading-relaxed max-w-2xl">
                Uma leitura essencial para pais que desejam fortalecer a conexão com seus filhos em um mundo cada vez mais dominado por distrações digitais. Descubra bases neurobiológicas e métodos afetuosos para reconectar o diálogo familiar.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a 
                  href="https://www.amazon.com.br/dp/B0GTG3GN4W" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleRevealClick}
                  className="bg-[#0D3B66] hover:bg-[#062444] text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-[0_10px_25px_-5px_rgba(13,59,102,0.3)] hover:shadow-[0_12px_30px_-5px_rgba(13,59,102,0.4)] transition-all inline-flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Comprar na Amazon
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={() => { setSampleModalOpen(true); handleRevealClick(); }}
                  className="bg-white/60 hover:bg-white/90 text-[#0D3B66] border border-white/80 hover:border-white backdrop-blur-md font-semibold text-sm px-8 py-3.5 rounded-xl shadow-sm transition-all cursor-pointer text-center"
                >
                  Ler Amostra
                </button>
              </div>

              <div className="pt-6 flex items-center gap-6 text-[#0D3B66]/70">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4EA8DE]" />
                  <span className="text-xs font-semibold">Formato Físico & Kindle</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4EA8DE]" />
                  <span className="text-xs font-semibold">Disponível em todo Brasil</span>
                </div>
              </div>
            </div>

            {/* Right Content: Cover of the Book (Centerpiece as requested) */}
            <div className="lg:col-span-5 flex justify-center relative">
              {/* Refraction Glass Pedestal effect around the book */}
              <div className="absolute -inset-4 bg-white/20 backdrop-blur-xl rounded-[32px] border border-white/50 shadow-inner -z-10 pointer-events-none transform rotate-1 scale-[1.03]" />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative group w-full max-w-[340px]"
              >
                {/* Book design element - Elegant, premium and gorgeous using the real book cover image */}
                <div className="relative w-full aspect-[2/3] bg-[#0D3B66] rounded-r-2xl rounded-l-md shadow-[10px_20px_50px_rgba(13,59,102,0.35)] overflow-hidden border-l-[8px] border-black/15 select-none transition-transform duration-500 group-hover:-translate-y-2">
                  <SmartImage
                    sources={[
                      bookCoverImage,
                      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80'
                    ]}
                    alt="Capa do livro: Salvando Meu Filho das Telas - Método Pinguim"
                    className="w-full h-full object-cover rounded-r-xl"
                    aspectRatioClass="aspect-[2/3]"
                    fallbackIcon={<Heart className="w-12 h-12 text-[#FFD166]" />}
                    fallbackTitle="Salvando Meu Filho das Telas"
                    fallbackDesc="Método Pinguim de Parentalidade Saudável"
                  />
                  {/* Glowing subtle highlight overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
                </div>

                {/* Depth 3D effect borders (20% Graphic detail rule) */}
                <div className="absolute -inset-2 border border-[#0D3B66]/10 rounded-3xl -z-10 pointer-events-none" />
                <div className="absolute -bottom-4 right-1/2 translate-x-1/2 bg-white px-4 py-1.5 rounded-full shadow-md border border-[#0D3B66]/5 whitespace-nowrap">
                  <span className="text-[10px] font-bold text-[#0D3B66] uppercase tracking-wider">
                    ★ Best-seller Parentalidade
                  </span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Bouncing scroll down indicator prompt showing only when not scrolled */}
        <AnimatePresence>
          {!hasScrolled && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#0D3B66]/70 z-20 pointer-events-none"
            >
              <span className="text-[10px] tracking-widest uppercase font-bold text-[#0D3B66]/50">
                Determine o Futuro • Role Abaixo
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="w-8 h-8 rounded-full bg-white/70 border border-white/90 flex items-center justify-center text-[#4EA8DE] shadow-[0_4px_12px_rgba(13,59,102,0.08)] backdrop-blur-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* SEÇÃO DA NARRATIVA GATILHO (Revelada quando o usuário interage ou scrolla a página) */}
      <AnimatePresence>
        {hasScrolled && (
          <motion.div
            key="scrolled-landing-experience"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* SEÇÃO 2: O PROBLEMA */}
            <section id="problema" className="py-24 bg-transparent relative">
              <div className="max-w-4xl mx-auto px-6">
                
                {/* Frosted Glassmorphic Panel wrapper with scroll show effect */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/45 backdrop-blur-xl rounded-[32px] p-8 md:p-14 border border-white/60 shadow-[0_24px_60px_-15px_rgba(13,59,102,0.05)]"
                >
                  <div className="space-y-4 text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-extrabold text-[#FBC300] uppercase tracking-widest block animate-pulse">
                      DIAGNÓSTICO E REALIDADE
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3B66] tracking-tight leading-tight">
                      A tecnologia está aproximando pessoas ou afastando famílias?
                    </h2>
                    <div className="w-12 h-1 bg-[#FBC300] mx-auto rounded-full" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                    
                    {/* The promised single real photograph with interactive reveal */}
                    <motion.div 
                      className="md:col-span-6"
                      initial={{ opacity: 0, scale: 0.94 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="rounded-2xl overflow-hidden shadow-md border border-white/80 bg-white/40 p-2 backdrop-blur-sm">
                        <SmartImage 
                          sources={[
                            problemaImage,
                            'https://images.pexels.com/photos/3770582/pexels-photo-3770582.jpeg?auto=compress&cs=tinysrgb&w=800', 
                            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80', 
                            'https://picsum.photos/id/1025/800/600'
                          ]}
                          alt="Uma família absorvida pelo brilho de telas digitais sob o mesmo teto"
                          className="w-full object-cover aspect-[4/3] rounded-xl grayscale-[10%] transform hover:scale-[1.02] transition-transform duration-500"
                          aspectRatioClass="aspect-[4/3]"
                          fallbackIcon={<Smartphone className="w-12 h-12" />}
                          fallbackTitle="O Sequestro do Olhar"
                          fallbackDesc="Membros da família isolados sob o brilho e filtros frios das telas digitais."
                        />
                      </div>
                    </motion.div>

                    {/* Crucial, clean emotional text (Max 3 paragraphs) entering with a slide */}
                    <motion.div 
                      className="md:col-span-6 space-y-6 text-left"
                      initial={{ opacity: 0, x: 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="text-base text-[#1a2a3a]/80 leading-relaxed font-semibold">
                        Cuidar de um filho no século XXI é competir diariamente com as mentes de engenharia comportamental mais brilhantes do vale do silício. Nossas casas tornaram-se pequenos centros onde todos estão fisicamente juntos, porém isolados em seus universos particulares de luz azul.
                      </p>

                      <p className="text-base text-[#1a2a3a]/80 leading-relaxed">
                        Essa ausência atenta e conectada gera uma desregulação silenciosa no circuito neurológico infantil. Crianças perdem a habilidade de tolerar o tédio, evitam o contato visual com os próprios pais e buscam com ansiedade a dopamina sintética do scroll infinito.
                      </p>

                      <p className="text-base text-[#1a2a3a]/80 leading-relaxed">
                        Este livro foi escrito para quebrar esse ciclo de forma pragmática e amorosa. Walace traduz a ciência cognitiva em rituais leves que devolvem os momentos íntimos de presença no seu lar, sem transformar o processo em um campo de batalha.
                      </p>
                    </motion.div>

                  </div>
                </motion.div>

              </div>
            </section>

            {/* SEÇÃO 3: O QUE VOCÊ VAI ENCONTRAR NO LIVRO */}
            <section id="conteudo" className="py-24 bg-transparent relative">
              <div className="max-w-4xl mx-auto px-6">
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center space-y-4 max-w-xl mx-auto mb-16"
                >
                  <span className="text-xs font-extrabold text-[#FBC300] uppercase tracking-widest block">
                    ESTRUTURA E TRANSFORMAÇÃO
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3B66] tracking-tight leading-tight">
                    O caminho prático para a harmonia
                  </h2>
                  <p className="text-sm text-[#1a2a3a]/75">
                    Sem enrolações. Apenas a matriz exata do Método Pinguim de reconexão familiar profunda.
                  </p>
                </motion.div>

                {/* Simple clean 2x2 grid representing the exact 4 benefits with sequential stagger scroll reveal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className="p-6 md:p-8 rounded-2xl bg-white/45 backdrop-blur-md border border-white/60 hover:bg-white/70 hover:shadow-[0_12px_42px_-12px_rgba(13,59,102,0.06)] hover:scale-[1.01] transition-all duration-300 flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0D3B66]/5 flex items-center justify-center shrink-0 mt-0.5 border border-[#0D3B66]/10">
                      <Check className="w-4 h-4 text-[#0D3B66]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-base text-[#0D3B66]">Como recuperar o diálogo dentro de casa</h3>
                      <p className="text-xs text-[#1a2a3a]/75 leading-relaxed">
                        Roteiros verbais funcionais de comunicação para desbloquear o silêncio sem imposições agressivas.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="p-6 md:p-8 rounded-2xl bg-white/45 backdrop-blur-md border border-white/60 hover:bg-white/70 hover:shadow-[0_12px_42px_-12px_rgba(13,59,102,0.06)] hover:scale-[1.01] transition-all duration-300 flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0D3B66]/5 flex items-center justify-center shrink-0 mt-0.5 border border-[#0D3B66]/10">
                      <Check className="w-4 h-4 text-[#0D3B66]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-base text-[#0D3B66]">Como criar momentos de conexão genuína</h3>
                      <p className="text-xs text-[#1a2a3a]/75 leading-relaxed">
                        Modelos de 10 minutos de atividade com estimulação de ocitocina e forte engajamento natural dos filhos.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="p-6 md:p-8 rounded-2xl bg-white/45 backdrop-blur-md border border-white/60 hover:bg-white/70 hover:shadow-[0_12px_42px_-12px_rgba(13,59,102,0.06)] hover:scale-[1.01] transition-all duration-300 flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0D3B66]/5 flex items-center justify-center shrink-0 mt-0.5 border border-[#0D3B66]/10">
                      <Check className="w-4 h-4 text-[#0D3B66]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-base text-[#0D3B66]">Como equilibrar tecnologia e convivência familiar</h3>
                      <p className="text-xs text-[#1a2a3a]/75 leading-relaxed">
                        Arquitetura física simples do ambiente para desestimular rituais robóticos de celular por pura convivência saudável.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="p-6 md:p-8 rounded-2xl bg-white/45 backdrop-blur-md border border-white/60 hover:bg-white/70 hover:shadow-[0_12px_42px_-12px_rgba(13,59,102,0.06)] hover:scale-[1.01] transition-all duration-300 flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0D3B66]/5 flex items-center justify-center shrink-0 mt-0.5 border border-[#0D3B66]/10">
                      <Check className="w-4 h-4 text-[#0D3B66]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-base text-[#0D3B66]">Como fortalecer o vínculo emocional com seus filhos</h3>
                      <p className="text-xs text-[#1a2a3a]/75 leading-relaxed">
                        Processamento afetivo contínuo que constrói segurança mental, autoconfiança e inteligência adaptativa de longo prazo.
                      </p>
                    </div>
                  </motion.div>

                </div>
              </div>
            </section>

            {/* SEÇÃO 4: SOBRE O AUTOR */}
            <section id="autor" className="py-24 bg-transparent relative">
              <div className="max-w-4xl mx-auto px-6">
                
                {/* Frosted Glassmorphic Panel wrapper with scroll trigger animation */}
                <motion.div 
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/45 backdrop-blur-xl rounded-[32px] p-8 md:p-14 border border-white/60 shadow-[0_24px_60px_-15px_rgba(13,59,102,0.05)]"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    
                    {/* Left side: Author photograph */}
                    <div className="md:col-span-5 flex justify-center">
                      <div className="relative group w-full max-w-[280px]">
                        {/* Visual shadow border */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#0D3B66]/20 to-[#4EA8DE]/20 rounded-3xl rotate-3 scale-95 group-hover:rotate-1 transition-transform duration-300 -z-10" />
                        
                        <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white/70 p-2 backdrop-blur-sm">
                          <SmartImage 
                            sources={[
                              walaceImage,
                              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800', 
                              'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80', 
                              'https://picsum.photos/id/1012/800/1000'
                            ]}
                            alt="Walace de Brito Freiman - Psicólogo Clínico"
                            className="w-full object-cover aspect-[4/5] rounded-xl brightness-[1.02]"
                            aspectRatioClass="aspect-[4/5]"
                            fallbackIcon={<Users className="w-12 h-12" />}
                            fallbackTitle="Walace Freiman"
                            fallbackDesc="Psicólogo Clínico, especialista em Neuropsicologia do neurodesenvolvimento."
                          />
                        </div>
                      </div>
                    </div>

                    {/* Right side: Biography */}
                    <div className="md:col-span-7 space-y-6 text-left">
                      <span className="text-xs font-extrabold text-[#FBC300] uppercase tracking-widest block">
                        CONHEÇA O ESCRITOR
                      </span>

                      <div className="space-y-1">
                        <h2 className="text-3xl font-extrabold text-[#0D3B66] tracking-tight">
                          Walace de Brito Freiman
                        </h2>
                        <p className="text-sm font-bold text-[#FBC300]">
                          Psicólogo Clínico e Especialista em Neuropsicologia do Desenvolvimento
                        </p>
                      </div>

                      <p className="text-base text-[#1a2a3a]/85 leading-relaxed">
                        Walace de Brito Freiman tem dedicado sua trajetória profissional a apoiar famílias no entendimento profundo de como as transformações do ambiente cognitivo influenciam o comportamento das novas gerações. Desenvolvedor do Método Pinguim, ele preza por intervenções baseadas no diálogo assertivo, acolhimento integral e limites gentis.
                      </p>

                      <p className="text-base text-[#1a2a3a]/85 leading-relaxed">
                        Seu trabalho traduz as complexidades da neuropsicologia científica em orientações de extrema simplicidade, permitindo que os pais resgatem o protagonismo da educação sadia e recuperem o foco emocional que os tablets tentam obscurecer no dia a dia.
                      </p>

                      <div className="pt-2">
                        <span className="text-[10px] font-mono tracking-wider text-[#0D3B66]/60 uppercase block font-bold">
                          * FOTOGRAFIA PESSOAL DO AUTOR
                        </span>
                      </div>
                    </div>

                  </div>
                </motion.div>

              </div>
            </section>

            {/* SEÇÃO 5: CTA FINAL */}
            <section className="py-24 bg-[#0D3B66] text-white relative overflow-hidden rounded-t-[48px] shadow-[0_-12px_40px_rgba(13,59,102,0.15)]">
              
              {/* Subtle decorative vector mesh - 20% Graphic details */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(78,168,222,0.18),transparent_50%)]" />

              <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
                
                {/* Premium Dark Mode Glass Frame for the image with scale scroll reveal */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-8 p-1.5 bg-white/5 backdrop-blur-md"
                >
                  <SmartImage 
                    sources={[
                      finalImage,
                      'https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=800', 
                      'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80', 
                      'https://picsum.photos/id/1060/800/400'
                    ]}
                    alt="Pai e filho rindo sob luz natural acolhedora em momento livre de telas"
                    className="w-full object-cover aspect-[21/9] rounded-2xl"
                    aspectRatioClass="aspect-[21/9]"
                    fallbackIcon={<Heart className="w-8 h-8 text-[#FFD166]" />}
                    fallbackTitle="Vínculos que Prevalecem"
                    fallbackDesc="A conexão genuína acontece fora das telas. Resgate os melhores anos da vida do seu filho."
                  />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4 max-w-2xl mx-auto"
                >
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                    A infância passa rápido.
                  </h2>
                  <p className="text-lg sm:text-xl text-[#F7F9FC]/95 leading-relaxed font-light">
                    Os momentos mais importantes da vida do seu filho não serão lembrados por causa das telas.<br />
                    <strong className="text-[#FFD166] underline decoration-wavy font-bold">Serão lembrados por causa da presença.</strong>
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex flex-col items-center gap-4 pt-4"
                >
                  <a 
                    href="https://www.amazon.com.br/dp/B0GTG3GN4W" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#FFD166] hover:bg-[#ffe199] text-[#0D3B66] font-extrabold text-base px-10 py-4.5 rounded-xl shadow-[0_12px_32px_-5px_rgba(255,209,102,0.4)] hover:shadow-[0_16px_40px_-5px_rgba(255,209,102,0.5)] transition-all cursor-pointer inline-flex items-center gap-2 group animate-pulse-slow"
                  >
                    Comprar Agora na Amazon
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-xs text-[#F7F9FC]/60 uppercase tracking-widest font-mono">
                    Garantia de Leitura Segura • Formato Físico ou E-Book
                  </p>
                </motion.div>

              </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-white/30 backdrop-blur-md border-t border-white/50 py-12 text-center relative z-10">
              <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-sm bg-[#0D3B66] flex items-center justify-center text-[#FFD166] text-xs font-bold">
                    MP
                  </div>
                  <span className="text-sm font-bold text-[#0D3B66]">Método Pinguim • Walace Freiman</span>
                </div>
                <p className="text-xs text-[#1a2a3a]/65 font-medium">
                  © {new Date().getFullYear()} Método Pinguim. Todos os direitos reservados.
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SAMPLE CHAPTER MODAL / DRAWER (Ler Amostra) */}
      <AnimatePresence>
        {sampleModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSampleModalOpen(false)}
              className="fixed inset-0 bg-black/55 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl shadow-2xl border border-[#0D3B66]/10 w-full max-w-2xl overflow-hidden relative z-10 flex flex-col max-h-[85vh]"
            >
              {/* Header */}
              <div className="p-6 bg-[#0D3B66] text-white flex justify-between items-center shrink-0">
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-[#FFD166]" />
                  <div>
                    <h3 className="font-bold text-base text-white">Amostra Digital Grátis</h3>
                    <p className="text-[10px] text-[#F7F9FC]/70 uppercase tracking-wider">Salvando Meu Filho das Telas</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSampleModalOpen(false)}
                  aria-label="Lock modal"
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white hover:text-[#FFD166]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Chapter content */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-4 text-left">
                <h4 className="text-xl font-bold text-[#0D3B66] pb-2 border-b border-[#0D3B66]/5">
                  {firstChapterContent.title}
                </h4>
                
                {firstChapterContent.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-[#1a2a3a]/85 text-sm md:text-base leading-relaxed">
                    {p}
                  </p>
                ))}

                {/* Email Form for remaining book/newsletter */}
                <div className="mt-8 p-6 bg-[#F7F9FC] rounded-2xl border border-[#0D3B66]/5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-lg text-[#0D3B66] shadow-sm">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-[#0D3B66] text-sm">Gostou da introdução?</h5>
                      <p className="text-xs text-[#1a2a3a]/75">Deixe seu e-mail para receber pílulas semanais do Método Pinguim.</p>
                    </div>
                  </div>

                  {feedbackSubmitted ? (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs font-bold text-emerald-600 bg-emerald-50 p-3 rounded-lg flex items-center gap-1.5"
                    >
                      ✓ E-mail cadastrado com sucesso! Aproveite sua caminhada analógica.
                    </motion.p>
                  ) : (
                    <form onSubmit={handeSampleSubmit} className="flex gap-2">
                      <input 
                        type="email" 
                        required
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="Insira seu e-mail principal..."
                        className="flex-grow px-4 py-2.5 rounded-xl border border-[#0D3B66]/15 bg-white text-xs focus:ring-1 focus:ring-[#0D3B66] focus:outline-none"
                      />
                      <button 
                        type="submit"
                        className="bg-[#000] hover:bg-[#1a2a3a] text-white font-bold text-[10px] uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all"
                      >
                        Inscrever-me
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Modal footer buy CTA */}
              <div className="p-4 bg-[#F7F9FC] border-t border-[#0D3B66]/5 flex justify-between items-center shrink-0">
                <span className="text-xs font-semibold text-[#0D3B66]">Adquira a obra completa!</span>
                <a 
                  href="https://www.amazon.com.br/dp/B0GTG3GN4W"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0D3B66] text-white hover:bg-[#0D3B66]/90 text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm"
                >
                  Comprar na Amazon
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
