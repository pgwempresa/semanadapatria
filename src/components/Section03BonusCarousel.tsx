import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Gift, Sparkles } from 'lucide-react';
import { BONUSES_LIST } from '../data/landingData';

export const Section03BonusCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Touch drag variables
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? BONUSES_LIST.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === BONUSES_LIST.length - 1 ? 0 : prev + 1));
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
    <section className="py-16 bg-gradient-to-b from-amber-400 via-amber-300 to-amber-400 text-slate-950 border-b border-amber-500">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Strictly required texts only */}
        <div className="text-center mb-8 space-y-2">
          <div>
            <span className="inline-block bg-emerald-900 text-amber-300 font-black text-xs uppercase px-4 py-1.5 rounded-full tracking-wider shadow-md">
              Exclusivo
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight pt-1">
            Super Bônus Incluídos
          </h2>
          <p className="text-slate-950 font-black text-base sm:text-lg">
            Comprando hoje, você leva todos esses bônus de presente!
          </p>
        </div>

        {/* Carousel Container */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative bg-white rounded-3xl shadow-2xl border-4 border-emerald-800 p-6 sm:p-8 max-w-2xl mx-auto select-none overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 border-2 border-emerald-700 shadow-md group flex items-center justify-center p-2 min-h-[220px] sm:min-h-[260px]">
              <img
                src={BONUSES_LIST[currentIndex].image}
                alt={BONUSES_LIST[currentIndex].title}
                className="w-full h-auto max-h-[280px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-3 left-3 bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-lg shadow-md border border-emerald-800 flex items-center gap-1">
                <Gift className="w-3.5 h-3.5" />
                <span>{BONUSES_LIST[currentIndex].badge}</span>
              </span>
            </div>

            <div className="space-y-3 text-left">
              <h3 className="text-xl font-black text-slate-950 leading-snug">
                {BONUSES_LIST[currentIndex].title}
              </h3>
              <p className="text-sm text-slate-800 font-semibold leading-relaxed">
                {BONUSES_LIST[currentIndex].description}
              </p>

              {BONUSES_LIST[currentIndex].highlights && (
                <div className="pt-2 space-y-1.5 border-t border-slate-100">
                  {BONUSES_LIST[currentIndex].highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-black text-emerald-900">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Controls & Dots */}
          <div className="flex items-center justify-between mt-8 pt-5 border-t border-slate-200">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-amber-200 hover:bg-amber-300 text-emerald-950 transition-all cursor-pointer border-2 border-emerald-800 shadow-md active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {BONUSES_LIST.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'w-8 bg-emerald-800'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir para bônus ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-amber-200 hover:bg-amber-300 text-emerald-950 transition-all cursor-pointer border-2 border-emerald-800 shadow-md active:scale-95"
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
