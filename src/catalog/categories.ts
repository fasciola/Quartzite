import { Category } from '../types';

const IMAGE_BASE = 'https://yawwbukquozgjuwmdrkh.supabase.co/storage/v1/object/public/quartzite-product-images';

export const CATEGORIES: Category[] = [
  {
    id: 'workwear-hi-vis',
    name: 'Workwear & Hi-Vis',
    description: 'Breathable reflective workwear for field, industrial and site operations.',
    imageUrl: `${IMAGE_BASE}/products/d3333333-3333-3333-3333-333333333333/1784203097772-udc6kr.png`,
    longDescription: 'Breathable reflective workwear for field, industrial and site operations. Browse the active Quartzite catalog and submit an enquiry for current commercial availability.'
  },
  {
    id: 'safety-footwear',
    name: 'Safety Footwear',
    description: 'Steel-toe and protective footwear for demanding industrial and field environments.',
    imageUrl: `${IMAGE_BASE}/ANTENG_AT501_Wheat_Nubuck_Steel_Toe_Safety_Work_Boots.jpg`,
    longDescription: 'Steel-toe and protective footwear for demanding industrial and field environments. Browse the active Quartzite catalog and submit an enquiry for current commercial availability.'
  },
  {
    id: 'head-protection',
    name: 'Head Protection',
    description: 'Industrial head protection for field, construction and site operations.',
    imageUrl: `${IMAGE_BASE}/products/d1111111-1111-1111-1111-111111111111/1784203010481-neakvl.png`,
    longDescription: 'Industrial head protection for field, construction and site operations. Browse the active Quartzite catalog and submit an enquiry for current commercial availability.'
  },
  {
    id: 'navigation-survey',
    name: 'Navigation & Survey',
    description: 'Navigation, surveying, GPS and compass equipment for field teams.',
    imageUrl: `${IMAGE_BASE}/Brunton_ComPro_Transit_Compass_Quadrant_0-90_Degrees_F-5007.webp`,
    longDescription: 'Navigation, surveying, GPS and compass equipment for field teams. Browse the active Quartzite catalog and submit an enquiry for current commercial availability.'
  },
  {
    id: 'geology-field-tools',
    name: 'Geology & Field Tools',
    description: 'Geological field tools, rock-pick accessories and prospecting equipment.',
    imageUrl: `${IMAGE_BASE}/Estwing_E3-22P_22oz_Blue_Grip_Rock_Pick.jpg`,
    longDescription: 'Geological field tools, rock-pick accessories and prospecting equipment. Browse the active Quartzite catalog and submit an enquiry for current commercial availability.'
  },
  {
    id: 'magnification-inspection',
    name: 'Magnification & Inspection',
    description: 'Loupes, magnifiers and close-inspection optics for geological and technical work.',
    imageUrl: `${IMAGE_BASE}/10x_21mm_Folding_Jewelers_Loupe.jpg`,
    longDescription: 'Loupes, magnifiers and close-inspection optics for geological and technical work. Browse the active Quartzite catalog and submit an enquiry for current commercial availability.'
  },
  {
    id: 'bags-outdoor-gear',
    name: 'Bags & Outdoor Gear',
    description: 'Tactical bags and outdoor accessories for field crews and remote operations.',
    imageUrl: `${IMAGE_BASE}/Tactical_MOLLE_Backpack_Jungle_Camouflage.jpg`,
    longDescription: 'Tactical bags and outdoor accessories for field crews and remote operations. Browse the active Quartzite catalog and submit an enquiry for current commercial availability.'
  }
];
