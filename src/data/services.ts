import { ServiceItem } from '@/types';

export const services: ServiceItem[] = [
  {
    icon: 'tooth',
    title: 'Implantologie Dentaire',
    description:
      "Pose d'implants dentaires en titane pour le remplacement d'une ou plusieurs dents manquantes, bridges sur implants et réhabilitations complètes pour restaurer la mastication et l'esthétique.",
    category: 'Restauration fixe',
    ctaText: 'Prendre RDV',
    ctaHref: '#contact',
  },
  {
    icon: 'crown',
    title: 'Facettes & Prothèses Zircone',
    description:
      'Facettes céramiques ultra-fines (E.max), couronnes en céramique biocompatible et Zircone pour harmoniser la forme, la taille et la couleur de vos dents de manière durable et naturelle.',
    category: 'Esthétique & Résistance',
    ctaText: 'Prendre RDV',
    ctaHref: '#contact',
  },
  {
    icon: 'teeth',
    title: 'Aligneurs & Orthodontie Invisible',
    description:
      "Correction de l'alignement dentaire par gouttières transparentes amovibles et planification 3D personnalisée. Traitement discret, sans bagues métalliques et facile à vivre.",
    category: 'Discrétion totale',
    ctaText: 'Prendre RDV',
    ctaHref: '#contact',
  },
  {
    icon: 'sun',
    title: 'Blanchiment Fläsh® & Détartrage',
    description:
      "Éclaircissement dentaire médical avec le système allemand Fläsh®, détartrage ultrasonique et aéropolissage doux pour éliminer les colorations superficielles (café, thé, tabac).",
    category: 'Hygiène & Blancheur',
    ctaText: 'Prendre RDV',
    ctaHref: '#contact',
  },
  {
    icon: 'shield-virus',
    title: 'Soins Conservateurs & Endodontie',
    description:
      'Traitement des caries, obturations esthétiques en composite, dévitalisations et traitements de racines pour préserver durablement vos dents naturelles.',
    category: 'Préservation',
    ctaText: 'Prendre RDV',
    ctaHref: '#contact',
  },
  {
    icon: 'kit-medical',
    title: 'Prise en Charge des Urgences',
    description:
      'Douleurs dentaires aiguës, abcès, dent cassée ou décollement de prothèse. Prise en charge au cabinet aux Berges du Lac 2 sur simple contact téléphonique direct.',
    category: 'Ligne Directe',
    ctaText: '+216 54 670 828',
    ctaHref: 'tel:+21654670828',
    isEmergency: true,
  },
];
