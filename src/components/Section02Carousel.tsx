import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, FileText, CheckCircle2, Layers, BookOpen, Check } from 'lucide-react';
import { ACTIVITIES_SHOWCASE, CATEGORIES_BREAKDOWN } from '../data/landingData';

export const Section02Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Touch drag variables
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? ACTIVITIES_SHOWCASE.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === ACTIVITIES_SHOWCASE.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200" id="atividades">
      <div className="max-w-5xl mx-auto px-4 space-y-12 sm:space-y-16">
        
        {/* Title and Subtitle */}
        <div className="text-center space-y-3">
          <span className="inline-block bg-emerald-100 text-emerald-900 font-extrabold text-xs uppercase px-4 py-1.5 rounded-full border border-emerald-300">
            Organização Interdisciplinar
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
            Veja o que seus alunos poderão trabalhar 👇
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-semibold max-w-2xl mx-auto">
            30 atividades organizadas em 4 grandes eixos para trabalhar durante a Semana da Pátria.
          </p>
        </div>

        {/* 4 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES_BREAKDOWN.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`bg-white p-5 sm:p-6 rounded-2xl border-2 transition-all cursor-pointer space-y-3 ${
                currentIndex === idx ? 'border-emerald-600 shadow-md ring-2 ring-emerald-400' : 'border-slate-200 shadow-sm hover:border-emerald-400'
              }`}
            >
              <div className="text-3xl">{cat.icon}</div>
              <h3 className="text-base font-black text-slate-950">{cat.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Carousel Header */}
        <div className="text-center pt-4 space-y-2">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Veja algumas das páginas reais que você receberá:
          </h3>
        </div>

        {/* Carousel Container with Touch Gesture support */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative bg-white text-slate-900 rounded-3xl shadow-2xl border-2 border-slate-200 p-6 sm:p-8 max-w-3xl mx-auto select-none overflow-hidden"
        >
          {/* Card Item */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner group flex items-center justify-center p-2 min-h-[300px] sm:min-h-[340px]">
              <img
                src={ACTIVITIES_SHOWCASE[currentIndex].image}
                alt={ACTIVITIES_SHOWCASE[currentIndex].title}
                className="w-full h-auto max-h-[360px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-3 left-3 bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md border border-emerald-500">
                {ACTIVITIES_SHOWCASE[currentIndex].category}
              </span>
              <span className="absolute bottom-3 right-3 bg-slate-950/90 text-amber-300 text-xs font-bold px-3 py-1 rounded-md flex items-center gap-1 border border-slate-800">
                <Layers className="w-3.5 h-3.5" />
                <span>Formato A4</span>
              </span>
            </div>

            <div className="space-y-4 text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-950 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                <FileText className="w-3.5 h-3.5 text-emerald-700" />
                BNCC: {ACTIVITIES_SHOWCASE[currentIndex].bnccCode}
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-slate-950 leading-snug">
                {ACTIVITIES_SHOWCASE[currentIndex].title}
              </h3>

              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                {ACTIVITIES_SHOWCASE[currentIndex].description}
              </p>

              <div className="pt-2 space-y-2 border-t border-slate-200">
                {ACTIVITIES_SHOWCASE[currentIndex].highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Controls & Pagination Dots */}
          <div className="flex items-center justify-between mt-8 pt-5 border-t border-slate-200">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 transition-all cursor-pointer border border-slate-300 shadow-md active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {ACTIVITIES_SHOWCASE.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'w-8 bg-emerald-700'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir para atividade ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 transition-all cursor-pointer border border-slate-300 shadow-md active:scale-95"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
