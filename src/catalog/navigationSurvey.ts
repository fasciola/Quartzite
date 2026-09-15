import { CatalogProductSeed } from './types';

const IMAGE_BASE = 'https://yawwbukquozgjuwmdrkh.supabase.co/storage/v1/object/public/quartzite-product-images';

export const NAVIGATION_SURVEY_PRODUCTS: CatalogProductSeed[] = [
  {
    id: '0c7bc348-01a5-4e9a-9c5e-5545ff28e729',
    sku: 'QZ-IMP-004',
    name: 'Brunton ComPro Transit Compass Quadrant 0-90 Degrees F-5007',
    category: 'navigation-survey',
    brand: 'BRUNTON',
    description: 'Professional transit compass for geological surveying and field navigation.',
    imageUrl: `${IMAGE_BASE}/Brunton_ComPro_Transit_Compass_Quadrant_0-90_Degrees_F-5007.webp`
  },
  {
    id: '5847981e-97fa-4b4f-97ff-617fb54d74eb',
    sku: 'QZ-IMP-005',
    name: 'Brunton TruArc 15 Luminous Compass with Clinometer',
    category: 'navigation-survey',
    brand: 'BRUNTON',
    description: 'Luminous field compass with clinometer for navigation and survey work.',
    imageUrl: `${IMAGE_BASE}/Brunton_TruArc_15_Luminous_Compass_with_Clinometer.webp`
  },
  {
    id: 'daf66791-e5da-4ef3-a356-7c0869fb740b',
    sku: 'QZ-IMP-014',
    name: 'Garmin GPSMAP 65s Multi-Band Handheld GPS',
    category: 'navigation-survey',
    brand: 'GARMIN',
    description: 'Multi-band handheld GPS for field navigation and remote operations.',
    imageUrl: `${IMAGE_BASE}/Garmin_GPSMAP_65s_Multi_Band_Handheld_GPS.png`
  },
  {
    id: '07f4f0f4-a4cb-4207-a941-303b63d298e3',
    sku: 'QZ-IMP-016',
    name: 'Green Military Lensatic Sighting Compass with Case',
    category: 'navigation-survey',
    brand: 'QUARTZITE',
    description: 'Lensatic sighting compass with protective carrying case.',
    imageUrl: `${IMAGE_BASE}/Green_Military_Lensatic_Sighting_Compass_with_Case.jpg`
  },
  {
    id: '24ee3cfa-c5e2-4a0c-9477-cc2d4d799a8f',
    sku: 'QZ-IMP-019',
    name: 'Red Mirrored Baseplate Sighting Compass with Ruler',
    category: 'navigation-survey',
    brand: 'QUARTZITE',
    description: 'Mirrored baseplate sighting compass with integrated ruler.',
    imageUrl: `${IMAGE_BASE}/Red_Mirrored_Baseplate_Sighting_Compass_with_Ruler.jpg`
  }
];
