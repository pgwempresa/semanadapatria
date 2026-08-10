import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/landingData';
import { ShoppingCart, Mail, Printer } from 'lucide-react';

export const Section04Steps: React.FC = () => {
  const icons = [ShoppingCart, Mail, Printer];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Title and Subtitle */}
        <span className="inline-block bg-emerald-100 text-emerald-950 font-black text-xs uppercase px-4 py-1.5 rounded-full border border-emerald-300 mb-2">
          Facilidade para o seu dia a dia
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
          Escolha a atividade, imprima e aplique com sua turma
        </h2>
        <p className="text-base sm:text-lg text-slate-700 font-bold mt-2 mb-12 max-w-xl mx-auto">
          Sem enrolação: seu material pronto em menos de 2 minutos.
        </p>

        {/* Steps Container with connecting lines for both Desktop & Mobile */}
        <div className="relative">
          
          {/* Desktop Connecting Line (Horizontal) */}
          <div className="hidden md:block absolute top-10 left-[18%] right-[18%] h-1.5 bg-gradient-to-r from-emerald-600 via-amber-400 to-emerald-600 -z-0 rounded-full shadow-sm" />

          {/* Mobile Connecting Line (Vertical) - runs behind step badges */}
          <div className="md:hidden absolute top-8 bottom-12 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-emerald-600 via-amber-400 to-emerald-600 -z-0 rounded-full shadow-sm" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((item, index) => {
              const Icon = icons[index] || ShoppingCart;
              return (
                <div key={item.step} className="flex flex-col items-center group">
                  
                  {/* Step Number Circle */}
                  <div className="w-16 h-16 bg-emerald-800 text-amber-300 font-black text-xl rounded-2xl flex items-center justify-center mb-4 shadow-xl border-2 border-amber-300 ring-4 ring-white group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>

                  {/* Step Card */}
                  <div className="w-full bg-white rounded-2xl p-6 border border-slate-200/90 shadow-lg flex flex-col items-center text-center space-y-3 transition-all group-hover:-translate-y-1">
                    <div className="p-3 bg-emerald-100 rounded-full text-emerald-900 border border-emerald-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-slate-950">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
