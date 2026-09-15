import { CatalogProductSeed } from './types';

const IMAGE_BASE = 'https://yawwbukquozgjuwmdrkh.supabase.co/storage/v1/object/public/quartzite-product-images';

export const MAGNIFICATION_PRODUCTS: CatalogProductSeed[] = [
  {
    id: '37a34cb6-5b20-45cf-a8aa-4aa1f927fd29',
    sku: 'QZ-IMP-001',
    name: '10x 21mm Folding Jewelers Loupe',
    category: 'magnification-inspection',
    brand: 'QUARTZITE',
    description: '10x folding loupe for close inspection of geological samples.',
    imageUrl: `${IMAGE_BASE}/10x_21mm_Folding_Jewelers_Loupe.jpg`
  },
  {
    id: '0532a5f1-3db0-4101-8b2a-f0a4a2f50e8d',
    sku: 'QZ-IMP-002',
    name: '40x 25mm LED Jewelers Loupe with Case',
    category: 'magnification-inspection',
    brand: 'QUARTZITE',
    description: '40x LED inspection loupe supplied with protective case.',
    imageUrl: `${IMAGE_BASE}/40x_25mm_LED_Jewelers_Loupe_with_Case.jpg`
  },
  {
    id: 'e5fcf0b9-c005-4e13-a360-0712acb852ab',
    sku: 'QZ-IMP-018',
    name: 'Prospectors 10x 23mm Doublet Folding Magnifier',
    category: 'magnification-inspection',
    brand: 'QUARTZITE',
    description: '10x doublet folding magnifier for prospecting and sample inspection.',
    imageUrl: `${IMAGE_BASE}/Prospectors_10x_23mm_Doublet_Folding_Magnifier.jpg`
  }
];
