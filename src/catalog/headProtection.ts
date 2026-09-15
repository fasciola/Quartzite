import { CatalogProductSeed } from './types';

const IMAGE_BASE = 'https://yawwbukquozgjuwmdrkh.supabase.co/storage/v1/object/public/quartzite-product-images';

export const HEAD_PROTECTION_PRODUCTS: CatalogProductSeed[] = [
  {
    id: 'd5555555-5555-5555-5555-555555555555',
    sku: 'QOS-HLMT-005',
    name: 'Helmet Cap Polyester',
    category: 'head-protection',
    brand: 'QUARTZITE',
    description: 'High impact industrial safety helmet with adjustable suspension.',
    imageUrl: '/images/products/helmet_-removebg-preview.png'
  },
  {
    id: 'd1111111-1111-1111-1111-111111111111',
    sku: 'QOS-HLMT-001',
    name: 'Helmet SH53',
    category: 'head-protection',
    brand: 'SH53',
    description: 'Industrial safety helmet available for quotation.',
    imageUrl: `${IMAGE_BASE}/products/d1111111-1111-1111-1111-111111111111/1784203010481-neakvl.png`
  }
];
