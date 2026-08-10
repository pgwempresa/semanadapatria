import React from 'react';
import { Star, CheckCircle, HeartHandshake } from 'lucide-react';
import { TESTIMONIALS } from '../data/landingData';

export const Section05Reviews: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black uppercase">
            <HeartHandshake className="w-4 h-4 text-emerald-700" />
            <span>Aprovado por Educadoras</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
            Depoimentos de Professoras
          </h2>
          <p className="text-slate-700 text-base font-semibold">
            Opiniões reais de quem já baixou e aplicou o material em sala de aula.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-md flex flex-col justify-between space-y-4 hover:shadow-lg transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-700" />
                    <span>Verificado</span>
                  </span>
                </div>

                <p className="text-slate-800 text-sm font-semibold leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-600 shadow-sm shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="text-sm font-black text-slate-950">{item.name}</h3>
                  <p className="text-xs text-slate-600 font-medium">{item.role} • {item.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
