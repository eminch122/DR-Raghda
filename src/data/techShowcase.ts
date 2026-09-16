import { TechItem } from '@/types';

export const techItems: TechItem[] = [
  {
    key: 'scanner',
    badge: 'Empreinte Optique 3D',
    title: 'Numérisation Intra-Orale Haute Précision',
    description:
      "Notre caméra 3D capture des milliers de points par seconde pour modéliser votre arcade dentaire au micron près en haute définition, sans aucune pâte à empreinte.",
    videoSrc: '/media/scanning-teeth.mp4',
    features: [
      'Zéro réflexe nauséeux, confort absolu pour le patient',
      'Précision optimale pour couronnes, facettes et prothèses CFAO',
      "Visualisation immédiate de l'arcade sur écran médical HD",
    ],
    icon: 'cube',
    techLabel: 'Technologie 1',
  },
  {
    key: 'blanchiment',
    badge: 'Technologie Fläsh® (Allemagne)',
    title: 'Système de Blanchiment LED Professionnel Fläsh®',
    description:
      "La référence allemande du blanchiment médical au fauteuil. Une lumière LED spécifiquement calibrée active le gel sans échauffement de la pulpe dentaire.",
    videoSrc: '/media/flash-blanchiment-patiente.mp4',
    features: [
      'Gain de 4 à 8 teintes de blancheur en une seule séance',
      "Protocole doux sans sensibilité ni fragilisation de l'émail",
      'Technologie approuvée aux normes médicales européennes',
    ],
    icon: 'sun',
    techLabel: 'Technologie 2',
  },
  {
    key: 'aligneurs',
    badge: 'Simulation Numérique 3D',
    title: 'Simulation 3D du Traitement par Aligneurs Invisibles',
    description:
      "Grâce à notre logiciel de planification 3D, vous visualisez le déplacement virtuel de vos dents étape par étape avant le port de vos gouttières transparentes.",
    videoSrc: '/media/aligneurs-simulation.mp4',
    features: [
      'Simulation 3D prédictive du résultat final de votre sourire',
      'Gouttières transparentes, confortables et amovibles au quotidien',
      'Traitement discret adapté aux adultes et adolescents',
    ],
    icon: 'teeth',
    techLabel: 'Technologie 3',
  },
];
