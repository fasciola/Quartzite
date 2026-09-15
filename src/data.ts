import { FeatureCard } from './types';

export { CATEGORIES } from './catalog/categories';
export { PRODUCTS } from './catalog/activeProducts';

export const FEATURE_CARDS: FeatureCard[] = [
  {
    title: 'MEA COVERAGE',
    description: 'Expertise in navigating the complex logistics of delivering to remote sites across the Middle East & Africa.',
    iconName: 'Globe'
  },
  {
    title: 'TECHNICAL EXPERTISE',
    description: 'Our team understands geology and mining, ensuring you get the exact right tool for your specific application.',
    iconName: 'Zap'
  },
  {
    title: 'DUBAI HUB ADVANTAGE',
    description: 'Strategic warehousing in the UAE allows for rapid deployment and efficient supply chain management.',
    iconName: 'MapPin'
  },
  {
    title: 'QUALITY GUARANTEE',
    description: 'Every instrument and tool meets rigorous international standards for accuracy and durability.',
    iconName: 'CheckCircle'
  },
  {
    title: 'FIELD-TESTED GEAR',
    description: 'We only supply equipment that has been proven to withstand the harshest environmental conditions.',
    iconName: 'HardHat'
  }
];

export const TRUSTED_BRANDS = [
  'Estwing',
  'Brunton',
  'Garmin',
  'Caterpillar',
  'Robustman',
  'Quartzite'
];
