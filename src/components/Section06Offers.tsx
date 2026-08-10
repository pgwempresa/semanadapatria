import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, ArrowRight, ShieldCheck, X } from 'lucide-react';
import { PRICING_BUNDLES } from '../data/landingData';

export const Section06Offers: React.FC = () => {
  // Countdown Timer 09:20 (560 seconds)
  const [timeLeft, setTimeLeft] = useState(560);
  const [showUpsellModal, setShowUpsellModal] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCheckout = (url: string) => {
    window.location.href = url;
  };

  const bundle1 = PRICING_BUNDLES[0];
  const bundle2 = PRICING_BUNDLES[1];

  return (
    <section className="py-16 bg-gradient-to-b from-emerald-950 via-slate-950 to-emerald-950 text-white border-b border-emerald-900" id="ofertas">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Oferta Promocional por Tempo Limitado
          </h2>

          {/* Timer Card */}
          <div className="bg-emerald-900/60 border border-emerald-500/50 p-4 rounded-2xl max-w-xs mx-auto text-center shadow-2xl backdrop-blur-md">
            <p className="text-[11px] font-black uppercase text-amber-300 tracking-widest mb-1">
              A oferta expira em
            </p>
            <div className="text-4xl sm:text-5xl font-black font-mono text-amber-300 tracking-wider">
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>

        {/* 2 Bundles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4">
          
          {/* Bundle 1: Básico */}
          {bundle1 && (
            <div className="bg-white text-slate-900 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-xl border-2 border-slate-200 hover:border-slate-300 transition-colors">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-950">
                    {bundle1.name}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-800 mt-1">
                    Apenas as 30 atividades prontas para imprimir.
                  </p>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-500 line-through">
                    De R$ {bundle1.originalPrice} por
                  </div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-xl font-black text-slate-900">R$</span>
                    <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
                      {bundle1.discountPrice}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>30 Atividades em PDF (1º ao 3º Ano)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Português, Matemática, História e Geografia</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-400 line-through">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Bônus #01: Painel/Mural Gigante</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-400 line-through">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Bônus #02: Moldes de Viseiras e Coroas</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-400 line-through">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Bônus #03: Lembrancinhas e Mimos</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-400 line-through">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Bônus #04: Planejamento Semanal Pedagógico</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6">
                <button
                  onClick={() => setShowUpsellModal(true)}
                  className="w-full bg-emerald-100 hover:bg-emerald-200 text-emerald-950 font-black py-4 px-6 rounded-2xl text-center text-base shadow transition-all cursor-pointer border border-emerald-300"
                  id={`btn-checkout-${bundle1.id}`}
                >
                  Quero o Pacote Essencial
                </button>
              </div>
            </div>
          )}

          {/* Bundle 2: Kit Completo + Bônus */}
          {bundle2 && (
            <div className="bg-emerald-800 text-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-2xl border-4 border-amber-400 relative">
              
              {/* Badge Top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 font-black text-xs uppercase px-5 py-1.5 rounded-full shadow-lg border border-amber-200">
                Mais Vendido
              </div>

              <div className="space-y-6">
                <div className="pt-2">
                  <h3 className="text-2xl font-black text-white">
                    Kit Completo + Bônus
                  </h3>
                  <p className="text-sm font-medium text-emerald-100 mt-1">
                    A experiência completa com todos os brindes.
                  </p>
                </div>

                <div>
                  <div className="text-xs font-bold text-emerald-200 line-through">
                    De R$ {bundle2.originalPrice} por
                  </div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-xl font-black text-amber-300">R$</span>
                    <span className="text-4xl sm:text-5xl font-black text-amber-300 tracking-tight">
                      {bundle2.discountPrice}
                    </span>
                  </div>
                </div>

                {/* Highlighted Pills list */}
                <div className="space-y-2.5 pt-2">
                  <div className="bg-emerald-900/90 rounded-2xl px-4 py-3 border border-emerald-600/80 text-white font-bold text-xs sm:text-sm flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>30 Atividades em PDF (1º ao 3º Ano)</span>
                  </div>
                  <div className="bg-emerald-900/90 rounded-2xl px-4 py-3 border border-emerald-600/80 text-white font-bold text-xs sm:text-sm flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>+ BÔNUS #01: Painel/Mural Gigante 'Semana da Pátria'</span>
                  </div>
                  <div className="bg-emerald-900/90 rounded-2xl px-4 py-3 border border-emerald-600/80 text-white font-bold text-xs sm:text-sm flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>+ BÔNUS #02: Moldes de Viseiras e Coroas de Papel</span>
                  </div>
                  <div className="bg-emerald-900/90 rounded-2xl px-4 py-3 border border-emerald-600/80 text-white font-bold text-xs sm:text-sm flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>+ BÔNUS #03: Lembrancinhas e Tags para Mimos</span>
                  </div>
                  <div className="bg-emerald-900/90 rounded-2xl px-4 py-3 border border-emerald-600/80 text-white font-bold text-xs sm:text-sm flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>+ BÔNUS #04: Planejamento Semanal Pedagógico</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6">
                <button
                  onClick={() => handleCheckout(bundle2.linkText)}
                  className="w-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-black py-4 px-6 rounded-2xl text-center text-lg shadow-xl transition-all cursor-pointer border border-amber-200"
                  id={`btn-checkout-${bundle2.id}`}
                >
                  Quero o Kit Completo
                </button>
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Pop-up Special Offer Upsell Modal */}
      {showUpsellModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full relative shadow-2xl border-2 border-emerald-500 animate-in fade-in zoom-in-95 duration-200 text-center">
            
            {/* Close X */}
            <button
              onClick={() => setShowUpsellModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Pill Header */}
            <div className="inline-block bg-amber-100 text-amber-900 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-amber-200 shadow-sm">
              ESPERA AÍ!
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 leading-tight">
              Você ganhou uma oferta especial! 🎁
            </h3>

            {/* Subtitle */}
            <p className="text-slate-700 font-medium text-sm mt-2">
              Que tal levar o <span className="font-bold text-emerald-800">Kit Completo + Bônus</span> por apenas
            </p>

            {/* Price */}
            <div className="my-3">
              <span className="text-3xl sm:text-4xl font-black text-emerald-700 font-mono">
                R$ 18,00
              </span>
              <span className="text-slate-500 font-bold ml-1">?</span>
            </div>

            {/* Features box */}
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 space-y-2 text-left text-xs sm:text-sm">
              <div className="flex items-center gap-2 font-bold text-emerald-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>30 Atividades em PDF (1º ao 3º Ano)</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-emerald-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>+ Painel/Mural Gigante 'Semana da Pátria'</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-emerald-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>+ Moldes de Viseiras e Coroas de Papel</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-emerald-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>+ Lembrancinhas e Tags para Mimos</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-emerald-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>+ Planejamento Semanal Pedagógico</span>
              </div>
            </div>

            {/* Main Accept Button */}
            <button
              onClick={() => handleCheckout(bundle2.linkText)}
              className="w-full mt-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-6 rounded-2xl text-base sm:text-lg shadow-xl shadow-emerald-600/30 transition-all cursor-pointer transform active:scale-95 border border-emerald-400"
            >
              EU QUERO! (Adicionar Bônus)
            </button>

            {/* Decline Link */}
            <button
              onClick={() => handleCheckout(bundle1 ? bundle1.linkText : '#')}
              className="w-full mt-3 text-slate-500 hover:text-slate-800 font-semibold text-xs sm:text-sm py-2 transition-colors cursor-pointer underline block"
            >
              Não, obrigado. Quero apenas o básico.
            </button>

          </div>
        </div>
      )}
    </section>
  );
};
