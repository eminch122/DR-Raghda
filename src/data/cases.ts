import { ClinicalCase } from '@/types';

export const clinicalCases: ClinicalCase[] = [
  {
    id: 'facette',
    title: 'Facettes Dentaires & Smile Makeover',
    description:
      "Harmonisation esthétique du sourire antérieur par facettes céramiques ultra-fines. Correction de la teinte, fermeture des espaces et alignement naturel.",
    beforeType: 'image',
    beforeSrc: '/media/facette-avant.png',
    afterType: 'image',
    afterSrc: '/media/facette-apres.png',
    icon: 'wand-magic-sparkles',
    tabLabel: '1. Facettes Céramiques',
  },
  {
    id: 'aligneurs',
    title: 'Orthodontie Invisible par Aligneurs',
    description:
      "Alignement dentaire sans bagues métalliques grâce aux gouttières transparentes et à la planification numérique 3D assistée par ordinateur.",
    beforeType: 'video',
    beforeSrc: '/media/aligneurs-avant.mp4',
    afterType: 'video',
    afterSrc: '/media/aligneurs-apres.mp4',
    icon: 'teeth',
    tabLabel: '2. Aligneurs Invisibles',
  },
  {
    id: 'implant',
    title: 'Implantologie Dentaire Avancée',
    description:
      "Remplacement d'une dent absente par un implant en titane et pose de couronne céramique pour une restitution fonctionnelle et esthétique complète.",
    beforeType: 'image',
    beforeSrc: '/media/implant-before.jpg',
    afterType: 'video',
    afterSrc: '/media/implant-after.mp4',
    icon: 'tooth',
    tabLabel: '3. Implantologie',
  },
  {
    id: 'blanchiment',
    title: 'Blanchiment Dentaire Fläsh® au Fauteuil',
    description:
      "Éclaircissement dentaire professionnel avec technologie LED allemande Fläsh® : gain de blancheur immédiat sans sensibilité ni altération de l'émail.",
    beforeType: 'image',
    beforeSrc: '/media/blanchiment-avant.png',
    afterType: 'image',
    afterSrc: '/media/blanchiment-apres.png',
    icon: 'sun',
    tabLabel: '4. Blanchiment Fläsh',
  },
  {
    id: 'detartrage-1',
    title: 'Détartrage & Aéropolissage — Patient 1',
    description:
      "Élimination des dépôts de tartre et des colorations superficielles, assainissement immédiat des gencives et polissage doux de l'émail.",
    beforeType: 'image',
    beforeSrc: '/media/detartrage-p1-avant.png',
    afterType: 'image',
    afterSrc: '/media/detartrage-p1-apres.png',
    icon: 'sparkles',
    tabLabel: '5. Détartrage (Patient 1)',
  },
  {
    id: 'detartrage-2',
    title: 'Détartrage & Assainissement — Patient 2',
    description:
      "Traitement du tartre sous-gingival et suppression des taches tenaces pour restaurer la santé des gencives et l'éclat du sourire.",
    beforeType: 'image',
    beforeSrc: '/media/detartrage-p2-avant.png',
    afterType: 'image',
    afterSrc: '/media/detartrage-p2-apres.png',
    icon: 'sparkles',
    tabLabel: '6. Détartrage (Patient 2)',
  },
  {
    id: 'prosthetic',
    title: 'Réhabilitation Prothétique Antérieure',
    description:
      "Reconstruction globale du secteur antérieur par prothèses céramiques de haute translucidité pour restituer l'alignement et la mastication.",
    beforeType: 'video',
    beforeSrc: '/media/prosthetic-before.mp4',
    afterType: 'video',
    afterSrc: '/media/prosthetic-after.mp4',
    icon: 'crown',
    tabLabel: '7. Réhabilitation Prothétique',
  },
];
