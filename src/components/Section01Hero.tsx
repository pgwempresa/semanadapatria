import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ASSETS, CONTINUOUS_BENEFITS } from '../data/landingData';

interface Section01HeroProps {
  onScrollToOffers: () => void;
}

export const Section01Hero: React.FC<Section01HeroProps> = ({ onScrollToOffers }) => {
  return (
    <section className="relative bg-gradient-to-b from-amber-100/90 via-emerald-50/70 to-white pt-10 sm:pt-14 pb-14 sm:pb-18 overflow-hidden border-b border-emerald-200">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6 sm:space-y-8">
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 tracking-tight leading-[1.18] max-w-3xl mx-auto">
          30 Atividades de 7 de Setembro para o{' '}
          <span className="text-emerald-950 bg-amber-300 px-3.5 py-1 rounded-2xl inline-block shadow-md border-2 border-amber-400 my-1">
            1º ao 3º Ano 🇧🇷
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-800 font-bold max-w-2xl mx-auto leading-relaxed px-2">
          Português, Matemática, História e Geografia em atividades prontas para imprimir e aplicar durante a Semana da Pátria.
        </p>

        {/* Bullets Badge Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 max-w-2xl mx-auto text-xs sm:text-sm font-extrabold text-emerald-950">
          <div className="flex items-center gap-1.5 bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>1º, 2º e 3º Ano</span>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Arquivo Digital em PDF e A4</span>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Alinhadas à BNCC</span>
          </div>
        </div>

        {/* Main Mockup Container */}
        <div className="pt-0 pb-2">
          <div className="max-w-3xl mx-auto relative px-2">
            
            {/* Clean, Large Image with rounded corners */}
            <div className="relative flex justify-center overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={ASSETS.heroMockup}
                alt="30 Atividades de 7 de Setembro para 1º ao 3º ano"
                className="w-full h-auto max-h-[720px] object-contain rounded-3xl transition-transform duration-300 hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="pt-4">
          <button
            onClick={onScrollToOffers}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-amber-300 font-black text-xl sm:text-3xl px-10 sm:px-16 py-4 sm:py-5 rounded-2xl shadow-xl border-2 border-amber-300 transition-all hover:scale-[1.03] active:scale-100 cursor-pointer whitespace-nowrap"
            id="btn-hero-cta"
          >
            <span className="tracking-tight text-white drop-shadow">Eu Quero Agora</span>
          </button>
        </div>

      </div>

      {/* Faixa Contínua mostrando os benefícios (Marquee Infinito) */}
      <div className="mt-16 bg-emerald-900 py-4 border-y-2 border-amber-400 text-amber-300 overflow-hidden shadow-inner">
        <div className="animate-marquee whitespace-nowrap gap-8 text-xs sm:text-sm font-black uppercase tracking-widest">
          <div className="flex items-center gap-8 shrink-0">
            {CONTINUOUS_BENEFITS.map((benefit, idx) => (
              <span key={idx} className="flex items-center gap-2 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{benefit}</span>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-8 shrink-0" aria-hidden="true">
            {CONTINUOUS_BENEFITS.map((benefit, idx) => (
              <span key={`dup-${idx}`} className="flex items-center gap-2 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{benefit}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
