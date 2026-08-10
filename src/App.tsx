import React from 'react';
import { TopUrgencyBanner } from './components/TopUrgencyBanner';
import { Section01Hero } from './components/Section01Hero';
import { Section02Carousel } from './components/Section02Carousel';
import { Section03BonusCarousel } from './components/Section03BonusCarousel';
import { Section04Steps } from './components/Section04Steps';
import { Section05Reviews } from './components/Section05Reviews';
import { Section06Offers } from './components/Section06Offers';
import { Section07Guarantee } from './components/Section07Guarantee';
import { Section08Faq } from './components/Section08Faq';
import { Footer } from './components/Footer';

export function App() {
  const scrollToOffers = () => {
    const el = document.getElementById('ofertas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-amber-300 selection:text-slate-900">
      
      {/* Faixa de Urgência no Início */}
      <TopUrgencyBanner />

      {/* Seção 01: Hero + Faixa contínua */}
      <Section01Hero onScrollToOffers={scrollToOffers} />

      {/* Seção 02: Atividades em carrossel */}
      <Section02Carousel />

      {/* Seção 03: Super Bônus em carrossel */}
      <Section03BonusCarousel />

      {/* Seção 04: Passo a passo 01 a 03 */}
      <Section04Steps />

      {/* Seção 05: Reviews das professoras */}
      <Section05Reviews />

      {/* Seção 06: Oferta Promocional por Tempo Limitado (Bundles) */}
      <Section06Offers />

      {/* Seção 07: Garantia de 07 dias */}
      <Section07Guarantee />

      {/* Seção 08: FAQ + Botão para Bundles */}
      <Section08Faq onScrollToOffers={scrollToOffers} />

      {/* Footer simples */}
      <Footer />

    </div>
  );
}

export default App;
