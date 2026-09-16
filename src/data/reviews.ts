export interface Testimonial {
  id: string;
  authorName: string;
  initials: string;
  rating: number;
  relativeTime: string;
  treatment: string;
  text: string;
  verified: boolean;
  avatarBg?: string;
}

export const curatedReviews: Testimonial[] = [
  {
    id: 'rev-1',
    authorName: 'Sonia Ben Salem',
    initials: 'SB',
    rating: 5,
    relativeTime: 'Il y a 2 semaines',
    treatment: 'Facettes Céramiques & Smile Design',
    text: "Une expérience exceptionnelle avec le Dr Raghda Zribi ! La pose de mes facettes en céramique a complètement transformé mon sourire avec un rendu ultra naturel. Le cabinet au Lac 2 est d'une propreté irréprochable et la technologie 3D évite toute douleur. Merci pour votre écoute et votre grand professionnalisme.",
    verified: true,
    avatarBg: 'bg-teal-700',
  },
  {
    id: 'rev-2',
    authorName: 'Karim Bouazizi',
    initials: 'KB',
    rating: 5,
    relativeTime: 'Il y a 1 mois',
    treatment: 'Implantologie Dentaire',
    text: "J'avais beaucoup d'appréhension pour la pose de deux implants dentaires, mais le Dr Zribi a été d'une douceur remarquable. Aucune douleur pendant ni après l'intervention. La précision de l'empreinte optique 3D est impressionnante. Je recommande les yeux fermés !",
    verified: true,
    avatarBg: 'bg-medicalTeal',
  },
  {
    id: 'rev-3',
    authorName: 'Amel Mansour',
    initials: 'AM',
    rating: 5,
    relativeTime: 'Il y a 3 semaines',
    treatment: 'Aligneurs Invisibles 3D',
    text: "Traitement par aligneurs transparents terminé avec succès en quelques mois. Le Dr Raghda est très minutieuse et nous montre la simulation 3D du résultat dès la première séance. Accueil chaleureux, ponctualité et suivi personnalisé à chaque étape.",
    verified: true,
    avatarBg: 'bg-amber-700',
  },
  {
    id: 'rev-4',
    authorName: 'Mohamed Ali Trabelsi',
    initials: 'MT',
    rating: 5,
    relativeTime: 'Il y a 1 mois',
    treatment: 'Blanchiment Fläsh® au Fauteuil',
    text: "Résultat spectaculaire avec le blanchiment Fläsh allemand en une seule séance de 45 minutes ! Gain de blancheur visible immédiatement sans aucune sensibilité dentaire. Équipements dernier cri et conseils très clairs.",
    verified: true,
    avatarBg: 'bg-slate-700',
  },
  {
    id: 'rev-5',
    authorName: 'Nadia Chaabane',
    initials: 'NC',
    rating: 5,
    relativeTime: 'Il y a 2 mois',
    treatment: 'Patient International (France)',
    text: "Résidant en France, j'ai profité de mon passage à Tunis pour mes soins au cabinet du Dr Zribi au Lac 2. Organisation parfaite, devis clair préalable sur radio panoramique et prise en charge rapide. Un niveau de standing équivalent voire supérieur aux cliniques européennes.",
    verified: true,
    avatarBg: 'bg-emerald-700',
  },
  {
    id: 'rev-6',
    authorName: 'Yassine Gharbi',
    initials: 'YG',
    rating: 5,
    relativeTime: 'Il y a 2 mois',
    treatment: 'Détartrage & Soins Conservateurs',
    text: "Détartrage et polissage effectués avec une grande délicatesse. Le Dr Raghda prend vraiment le temps d'expliquer chaque geste et met le patient totalement en confiance. Cabinet moderne et spacieux à la Résidence Cordoba.",
    verified: true,
    avatarBg: 'bg-cyan-800',
  },
];

