import { ActivityItem, BonusItem, PricingBundle, Testimonial, FaqItem } from '../types';

import heroMockup from '../assets/images/heronova.webp';
import muralMockup from '../assets/images/mural_bonus_mockup_1786385588879.jpg';
import viseiraMockup from '../assets/images/viseira_bonus_mockup_1786385597711.jpg';
import activitySample1 from '../assets/images/activity_sample_1_1786385627607.jpg';
import activitySample2 from '../assets/images/activity_sample_2_1786385637020.jpg';
import activitySample3 from '../assets/images/act_sample_3_1786388772910.jpg';
import activitySample4 from '../assets/images/act_sample_4_1786388782132.jpg';
import activitySample5 from '../assets/images/act_sample_5_1786388791581.jpg';
import activitySample6 from '../assets/images/act_sample_6_1786388799414.jpg';
import lembrancinhaMockup from '../assets/images/lembrancinha_mockup_1786388810293.jpg';
import canvaMockup from '../assets/images/canva_mockup_1786388819758.jpg';
import bnccMockup from '../assets/images/bncc_mockup_1786388828159.jpg';

import historiaEGeografiaImg from '../assets/images/historiaegeografia.webp';
import linguaPortuguesaImg from '../assets/images/linguaportuguesa.webp';
import matematicaTematicaImg from '../assets/images/matematicatematica.webp';
import artesImg from '../assets/images/artes.png';

import muralImg from '../assets/images/mural.webp';
import moldesECoroasImg from '../assets/images/moldes_e_coroas.webp';
import mimosImg from '../assets/images/mimos.webp';
import planejamentoSemanalImg from '../assets/images/planejamentosemanal.webp';

export const ASSETS = {
  heroMockup,
  muralMockup,
  viseiraMockup,
  activitySample1,
  activitySample2,
  activitySample3,
  activitySample4,
  activitySample5,
  activitySample6,
  lembrancinhaMockup,
  canvaMockup,
  bnccMockup,
  historiaEGeografiaImg,
  linguaPortuguesaImg,
  matematicaTematicaImg,
  artesImg,
};

// URL de Checkout Externo configurável
export const EXTERNAL_CHECKOUT_URL_BUNDLE_1 = "https://pay.wiapy.com/17znj5i3uLw";
export const EXTERNAL_CHECKOUT_URL_BUNDLE_2 = "https://pay.wiapy.com/eesSUMfwsoYc";
export const EXTERNAL_CHECKOUT_URL_UPSELL = "https://pay.wiapy.com/y6R2Gwm42Q6g";

export const PRODUCT_INFO = {
  name: "30 Atividades de 7 de Setembro (1º ao 3º Ano)",
  headline: "30 Atividades de 7 de Setembro para o 1º ao 3º Ano 🇧🇷",
  subheadline: "Português, Matemática, História e Geografia em atividades prontas para imprimir e aplicar durante a Semana da Pátria.",
  guaranteeDays: 7,
};

export const CONTINUOUS_BENEFITS = [
  "⚡ Acesso Imediato em PDF",
  "📄 Arquivo Digital A4 Pronto para Imprimir",
  "🇧🇷 Mapeado para 1º, 2º e 3º Ano",
  "🛡️ 7 Dias de Garantia",
  "⭐ +5.000 Professoras Aprovam",
  "📖 Habilidades Alinhadas à BNCC",
];

export const CATEGORIES_BREAKDOWN = [
  {
    icon: "🇧🇷",
    title: "História e Geografia",
    description: "Independência do Brasil, linha do tempo, símbolos pátrios, bandeira nacional e fatos históricos.",
    image: historiaEGeografiaImg
  },
  {
    icon: "📖",
    title: "Língua Portuguesa",
    description: "Leitura e interpretação, escrita de palavras, caça-palavras, cruzadinhas, formação de frases e produção textual.",
    image: linguaPortuguesaImg
  },
  {
    icon: "🔢",
    title: "Matemática",
    description: "Adição, subtração, sequência numérica, contagem temática, dezenas/unidades e problemas matemáticos.",
    image: matematicaTematicaImg
  },
  {
    icon: "✂️",
    title: "Atividades Lúdicas",
    description: "Recorte e colagem, pintura temática, ligue-pontos, associação e arte patriótica.",
    image: artesImg
  }
];

export const GRADE_LEVELS_INFO = [
  {
    grade: "1º Ano",
    focus: "Palavras, sílabas, contagem, interpretações visuais simples e atividades lúdicas de fixação."
  },
  {
    grade: "2º Ano",
    focus: "Textos curtos de leitura e interpretação, operações matemáticas, caça-palavras e símbolos pátrios."
  },
  {
    grade: "3º Ano",
    focus: "Interpretação textual avançada, produção de texto, problemas matemáticos e linha do tempo histórica."
  }
];

export const ACTIVITIES_SHOWCASE: ActivityItem[] = [
  {
    id: "act-1",
    title: "História & Geografia: Símbolos & Linha do Tempo",
    category: "História e Geografia",
    description: "Linha do tempo da Independência, fatos marcantes do 7 de Setembro e estudo dos Símbolos Nacionais.",
    bnccCode: "EF01HI08 / EF02HI03",
    highlights: ["Símbolos da Pátria", "Linha do Tempo", "Fatos Históricos"],
    image: historiaEGeografiaImg,
    pagesCount: 8,
    tags: ["História", "Bandeira"]
  },
  {
    id: "act-2",
    title: "Língua Portuguesa: Leitura & Caça-Palavras",
    category: "Língua Portuguesa",
    description: "Textos curtos com perguntas de interpretação, caça-palavras temático e cruzadinhas com gabarito.",
    bnccCode: "EF12LP01 / EF15LP03",
    highlights: ["Leitura e Interpretação", "Caça-Palavras", "Cruzadinha"],
    image: linguaPortuguesaImg,
    pagesCount: 8,
    tags: ["Português", "Leitura"]
  },
  {
    id: "act-3",
    title: "Matemática Temática: Contagem & Operações",
    category: "Matemática",
    description: "Contagem de símbolos pátrios, sequências numéricas, somas, subtrações e pequenos problemas.",
    bnccCode: "EF01MA01 / EF02MA06",
    highlights: ["Operações de Adição/Subtração", "Sequências Numéricas", "Problemas Ilustrados"],
    image: matematicaTematicaImg,
    pagesCount: 7,
    tags: ["Matemática", "Operações"]
  },
  {
    id: "act-4",
    title: "Atividades Lúdicas: Arte, Recorte & Ligue",
    category: "Atividades Lúdicas",
    description: "Atividades de associação, recorte, colagem da bandeira e momentos artísticos da Semana da Pátria.",
    bnccCode: "EF15AR04",
    highlights: ["Arte Patriótica", "Ligue e Associe", "Montagem Prática"],
    image: artesImg,
    pagesCount: 7,
    tags: ["Lúdico", "Artes"]
  }
];

export const BONUSES_LIST: BonusItem[] = [
  {
    id: "bonus-1",
    badge: "BÔNUS #01",
    title: "Painel/Mural Gigante 'Semana da Pátria'",
    description: "Mural decorativo completo ampliado para imprimir na impressora comum e ornamentar a sala.",
    originalPrice: "R$ 37,00",
    image: muralImg,
    highlights: ["Tamanho Gigante Ampliado", "Fácil Montagem em Folhas A4"]
  },
  {
    id: "bonus-2",
    badge: "BÔNUS #02",
    title: "Moldes de Viseiras e Coroas de Papel",
    description: "Viseiras e coroinhas prontas para recortar, colorir e distribuir aos seus alunos.",
    originalPrice: "R$ 27,00",
    image: moldesECoroasImg,
    highlights: ["Pronto para Recortar", "Opções Coloridas e Para Colorir"]
  },
  {
    id: "bonus-3",
    badge: "BÔNUS #03",
    title: "Lembrancinhas & Tags para Mimos",
    description: "Tags e cartões personalizados para doces e mimos comemorativos.",
    originalPrice: "R$ 19,00",
    image: mimosImg,
    highlights: ["Mimos e Tags para Alunos", "Design Exclusivo"]
  },
  {
    id: "bonus-4",
    badge: "BÔNUS #04",
    title: "Planejamento Semanal com Sugestões Pedagógicas",
    description: "Guia prático para ajudar a organizar a Semana da Pátria no diário de classe.",
    originalPrice: "R$ 25,00",
    image: planejamentoSemanalImg,
    highlights: ["Organização Prática", "Mapeamento Pedagógico"]
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Escolha seu Pacote",
    description: "Selecione a opção ideal para a sua turma do 1º ao 3º ano."
  },
  {
    step: "02",
    title: "Receba o PDF no E-mail",
    description: "O arquivo digital completo é enviado imediatamente para seu e-mail."
  },
  {
    step: "03",
    title: "Imprima e Aplique",
    description: "Baixe e imprima na escola ou em casa em folhas A4 comuns."
  }
];

export const PRICING_BUNDLES: PricingBundle[] = [
  {
    id: "bundle-01",
    name: "Pacote Essencial — 30 Atividades",
    badge: "OPÇÃO BÁSICA",
    isPopular: false,
    originalPrice: "49,90",
    discountPrice: "13,30",
    savePercent: "72% OFF",
    features: [
      "30 Atividades Interdisciplinares em PDF (A4)",
      "Português, Matemática, História, Geografia e Lúdico",
      "Formatos Coloridos e Para Colorir",
      "Desenvolvido para turmas do 1º ao 3º Ano"
    ],
    ctaText: "QUERO APENAS O BÁSICO (R$ 13,30)",
    subCtaText: "Acesso imediato no seu e-mail em PDF",
    guaranteeText: "Garantia incondicional de 7 dias",
    linkText: EXTERNAL_CHECKOUT_URL_BUNDLE_1
  },
  {
    id: "bundle-02",
    name: "Kit Completo 7 de Setembro + Bônus",
    badge: "🔥 O MAIS RECOMENDADO",
    isPopular: true,
    originalPrice: "89,90",
    discountPrice: "23,90",
    savePercent: "73% OFF",
    features: [
      "30 Atividades Interdisciplinares em PDF (1º ao 3º Ano)",
      "🎁 BÔNUS #01: Painel/Mural Gigante 'Semana da Pátria'",
      "🎁 BÔNUS #02: Moldes de Viseiras e Coroas em Papel",
      "🎁 BÔNUS #03: Lembrancinhas e Tags para Mimos",
      "🎁 BÔNUS #04: Planejamento Semanal com Mapeamento Pedagógico"
    ],
    ctaText: "QUERO O KIT COMPLETO por R$ 23,90",
    subCtaText: "30 Atividades + Todos os Materiais de Comemoração",
    guaranteeText: "Garantia incondicional de 7 dias",
    linkText: EXTERNAL_CHECKOUT_URL_BUNDLE_2
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Profª Mariana Alves",
    role: "Professora do 1º Ano Fundamental",
    city: "São Paulo, SP",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    content: "O material é exatamente o que eu precisava! As atividades de português e matemática para o 1º ano são perfeitas e muito bem estruturadas.",
    rating: 5,
    date: "Há 2 dias",
    verified: true
  },
  {
    id: "test-2",
    name: "Profª Cláudia Mendes",
    role: "Professora do 2º Ano Fundamental",
    city: "Belo Horizonte, MG",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    content: "O Painel Gigante e as viseiras deixaram a nossa sala linda para a Semana da Pátria. Excelente economia de tempo no meu planejamento.",
    rating: 5,
    date: "Há 4 dias",
    verified: true
  },
  {
    id: "test-3",
    name: "Profª Fernanda Lima",
    role: "Professora do 3º Ano Fundamental",
    city: "Curitiba, PR",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
    content: "Interpretação de texto e história super adequados para o 3º ano. Imprimi em PDF e apliquei com a turma no mesmo dia.",
    rating: 5,
    date: "Há 1 semana",
    verified: true
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: "faq-1",
    question: "Como vou receber o material?",
    answer: "O acesso é imediato no seu e-mail após a confirmação. O material está em formato PDF de alta qualidade (A4), pronto para você baixar e imprimir.",
    category: "Entrega"
  },
  {
    id: "faq-2",
    question: "Para quais turmas o material é indicado?",
    answer: "Desenvolvido especificamente para professores do 1º, 2º e 3º Ano do Ensino Fundamental.",
    category: "Conteúdo"
  },
  {
    id: "faq-3",
    question: "Como funciona a garantia?",
    answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não gostar do material, reembolsamos 100% do valor pago.",
    category: "Garantia"
  },
  {
    id: "faq-4",
    question: "O material é impresso ou digital?",
    answer: "O material é 100% digital em formato PDF. Você recebe no seu e-mail, salva no computador ou celular e pode imprimir quantas vezes quiser.",
    category: "Formato"
  }
];
