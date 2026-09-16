import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  doctor: {
    name: 'Dr. Raghda ZRIBI',
    fullTitle: 'Dr. Raghda ZRIBI',
    subtitle: 'Chirurgienne-Dentiste • Lac 2',
    credentials: 'Médecin-Dentiste • Spécialisée en Prothèse Dentaire, Implantologie & Esthétique',
    bio: [
      "Le Dr Raghda Zribi exerce en tant que chirurgienne-dentiste aux Berges du Lac 2 à Tunis. Elle met son savoir-faire et ses équipements modernes au service de votre santé bucco-dentaire, du rétablissement de la fonction masticatoire et de l'esthétique de votre sourire.",
      "Installée au sein de la Résidence Cordoba (Cité les Pins, Lac 2), elle accorde une importance primordiale à l'écoute des patients, à la prise en charge sans douleur et à l'utilisation des technologies numériques de pointe.",
    ],
  },
  clinic: {
    name: 'Cabinet Dentaire Dr. Raghda ZRIBI',
    address: {
      full: "Résidence Cordoba, 2ème étage, Appartement A2.4, Rue de la Feuille d'Érable, Cité les Pins, Les Berges du Lac 2, Tunis, 1053",
      street: "Rue de la Feuille d'Érable, Cité les Pins",
      building: 'Résidence Cordoba',
      floor: '2ème étage, Appartement A2.4',
      city: 'Les Berges du Lac 2, Tunis',
      postalCode: '1053',
      country: 'TN',
    },
    coordinates: { lat: 36.8455438, lng: 10.2803277 },
    phone: '+21654670828',
    phoneDisplay: '+216 54 670 828',
    email: 'dr.zribi.raghda@gmail.com',
    whatsappNumber: '21654670828',
    whatsappUrl:
      'https://wa.me/21654670828?text=Bonjour%20Dr%20Raghda%20Zribi,%20je%20souhaite%20prendre%20un%20rendez-vous%20au%20cabinet.',
    openingHours: 'Lundi – Dimanche : 08h30 – 23h00',
    openingHoursSaturday: 'Samedi : 09h00 – 23h00',
  },
  google: {
    placeId: 'ChIJHxfeO1xL_RIRronjAs2etW0',
    cid: '7905399324272724398',
    businessProfileUrl: 'https://maps.google.com/?cid=7905399324272724398',
    writeReviewUrl:
      'https://www.google.com/maps/place//data=!4m3!3m2!1s0x12fd4b5c3bde171f:0x6db59ecd02e389ae!12e1',
    allReviewsUrl:
      'https://www.google.com/maps/place//data=!4m4!3m3!1s0x12fd4b5c3bde171f:0x6db59ecd02e389ae!9m1!1b1',
    directionsUrl:
      "https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x12fd4b5c3bde171f:0x6db59ecd02e389ae!3e0",
    mapsEmbedUrl:
      'https://maps.google.com/maps?q=36.8455438,10.2803277+(Cabinet+Dentaire+Dr+Raghda+Zribi)&t=&z=17&ie=UTF8&iwloc=B&output=embed',
    overallRating: '4.9',
    totalReviewsCount: 146,
    totalReviewsText: '146 avis vérifiés sur Google',
  },
  social: {
    facebook: 'https://www.facebook.com/people/Raghda-Zribi/100063625983758/',
    whatsapp: 'https://wa.me/21654670828',
    email: 'mailto:dr.zribi.raghda@gmail.com',
  },
  seo: {
    title: 'Dr. Raghda ZRIBI | Chirurgien-Dentiste aux Berges du Lac 2, Tunis',
    description:
      "Cabinet dentaire du Dr Raghda Zribi aux Berges du Lac 2, Tunis. Spécialiste en implantologie, facettes dentaires, aligneurs invisibles, blanchiment Fläsh et empreinte optique 3D. Prise de RDV direct par téléphone et WhatsApp.",
    keywords:
      'Dr Raghda Zribi, Dentiste Lac 2, Chirurgien Dentiste Tunis, Cabinet Dentaire Dr Zribi Raghda, Implantologie Tunis, Facettes dentaires Tunis, Aligneurs invisibles Tunis, Blanchiment Fläsh Lac 2',
    canonical: 'https://dr-raghda-zribi.tn/',
    ogImage: '/media/clinic-logo.png',
  },
};
