import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

export const Section07Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 text-center">
        
        <div className="bg-gradient-to-b from-emerald-50 to-teal-50/40 rounded-3xl p-8 sm:p-10 border-2 border-emerald-200/80 shadow-md flex flex-col items-center space-y-4">
          <div className="w-20 h-20 bg-emerald-800 text-amber-300 rounded-2xl flex items-center justify-center shadow-lg border-2 border-amber-300">
            <Award className="w-12 h-12 text-amber-300" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Garantia Incondicional de 07 Dias
          </h2>

          <p className="text-slate-700 text-sm sm:text-base font-medium max-w-xl leading-relaxed">
            Se por qualquer motivo você não ficar 100% satisfeita com o material, basta nos enviar um e-mail dentro de 7 dias e devolveremos todo o seu dinheiro. Seu risco é inteiramente ZERO!
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Satisfação Garantida ou Seu Dinheiro de Volta</span>
          </div>
        </div>

      </div>
    </section>
  );
};
