import React, { useState } from 'react';
import { ChevronDown, ArrowUp, HelpCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/landingData';

interface Section08FaqProps {
  onScrollToOffers: () => void;
}

export const Section08Faq: React.FC<Section08FaqProps> = ({ onScrollToOffers }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_LIST[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-slate-600" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-slate-600 text-sm font-medium">
            Respostas rápidas para as dúvidas mais comuns.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5 mb-12">
          {FAQ_LIST.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all hover:border-slate-300"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left p-4 sm:p-5 font-bold text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base sm:text-lg">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3.5 font-medium">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Botão que redireciona para o bundle das ofertas */}
        <div className="text-center pt-2">
          <button
            onClick={onScrollToOffers}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-black text-lg px-8 py-4.5 rounded-2xl shadow-xl border-2 border-amber-300 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            id="btn-faq-cta"
          >
            <span>Garantir Meus Materiais com Desconto</span>
            <ArrowUp className="w-5 h-5 text-amber-300 animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
};
