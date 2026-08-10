export interface ActivityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  bnccCode: string;
  highlights: string[];
  image: string;
  pagesCount: number;
  tags: string[];
}

export interface BonusItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  originalPrice: string;
  image: string;
  highlights: string[];
}

export interface PricingBundle {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  originalPrice: string;
  discountPrice: string;
  savePercent: string;
  features: string[];
  ctaText: string;
  subCtaText: string;
  guaranteeText: string;
  linkText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
  verified: boolean;
  whatsappMessage?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CheckoutData {
  bundleId: string;
  bundleName: string;
  price: string;
  customerName?: string;
  customerEmail?: string;
  paymentMethod: 'pix' | 'card';
}
