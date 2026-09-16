export interface SiteConfig {
  doctor: {
    name: string;
    fullTitle: string;
    subtitle: string;
    credentials: string;
    bio: string[];
  };
  clinic: {
    name: string;
    address: {
      full: string;
      street: string;
      building: string;
      floor: string;
      city: string;
      postalCode: string;
      country: string;
    };
    coordinates: { lat: number; lng: number };
    phone: string;
    phoneDisplay: string;
    email: string;
    whatsappNumber: string;
    whatsappUrl: string;
    openingHours: string;
    openingHoursSaturday: string;
  };
  google: {
    placeId: string;
    cid: string;
    businessProfileUrl: string;
    writeReviewUrl: string;
    allReviewsUrl: string;
    directionsUrl: string;
    mapsEmbedUrl: string;
    overallRating: string;
    totalReviewsCount: number;
    totalReviewsText: string;
  };
  social: {
    facebook: string;
    instagram?: string;
    whatsapp: string;
    email: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    ogImage: string;
  };
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  category: string;
  ctaText: string;
  ctaHref: string;
  isEmergency?: boolean;
}

export interface ClinicalCase {
  id: string;
  title: string;
  description: string;
  beforeType: 'image' | 'video';
  beforeSrc: string;
  afterType: 'image' | 'video';
  afterSrc: string;
  icon: string;
  tabLabel: string;
}

export interface TechItem {
  key: string;
  badge: string;
  title: string;
  description: string;
  videoSrc: string;
  features: string[];
  icon: string;
  techLabel: string;
}

export interface ClinicPhoto {
  key: string;
  title: string;
  subtitle: string;
  src: string;
  alt: string;
  thumbLabel: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TranslationDictionary {
  [key: string]: string;
}

export interface Translations {
  fr: TranslationDictionary;
  en: TranslationDictionary;
  ar: TranslationDictionary;
}

export type Lang = 'fr' | 'en' | 'ar';

export interface GoogleReview {
  name: string;
  relativePublishTimeDescription?: string;
  rating: number;
  text?: { text: string };
  authorAttribution?: {
    displayName: string;
    photoUri?: string;
    uri?: string;
  };
}

export interface GoogleReviewsApiResponse {
  rating?: number;
  userRatingCount?: number;
  reviews?: GoogleReview[];
  googleMapsLinks?: {
    reviewsUri?: string;
    writeAReviewUri?: string;
  };
}
