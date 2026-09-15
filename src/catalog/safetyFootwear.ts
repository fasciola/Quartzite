import { CatalogProductSeed } from './types';

const IMAGE_BASE = 'https://yawwbukquozgjuwmdrkh.supabase.co/storage/v1/object/public/quartzite-product-images';

export const SAFETY_FOOTWEAR_PRODUCTS: CatalogProductSeed[] = [
  {
    id: '4ae14dd6-f3fe-499e-b320-ede678bd834d',
    sku: 'QZ-IMP-003',
    name: 'ANTENG AT501 Wheat Nubuck Steel Toe Safety Work Boots',
    category: 'safety-footwear',
    brand: 'ANTENG',
    description: 'Steel-toe safety work boots for industrial and field operations.',
    imageUrl: `${IMAGE_BASE}/ANTENG_AT501_Wheat_Nubuck_Steel_Toe_Safety_Work_Boots.jpg`
  },
  {
    id: '0b4d689c-405e-47d8-8b32-73d69ea44d10',
    sku: 'QZ-IMP-006',
    name: 'Caterpillar CAT Wheat Suede Work Boot',
    category: 'safety-footwear',
    brand: 'CATERPILLAR',
    description: 'Protective work boot suitable for industrial and field use.',
    imageUrl: `${IMAGE_BASE}/Caterpillar_CAT_Wheat_Suede_Work_Boot.jpg`
  },
  {
    id: '1678702d-db44-4ee8-894a-e9954f032730',
    sku: 'QZ-IMP-013',
    name: 'GUYISA Gray High Top Steel Toe Safety Shoes',
    category: 'safety-footwear',
    brand: 'GUYISA',
    description: 'High-top steel-toe safety shoes for demanding work environments.',
    imageUrl: `${IMAGE_BASE}/GUYISA_Gray_High_Top_Steel_Toe_Safety_Shoes.jpg`
  },
  {
    id: 'b7090a52-fac9-4004-b6f2-65d190843692',
    sku: 'QZ-IMP-017',
    name: 'HERDUN Black High Ankle Safety Work Boot',
    category: 'safety-footwear',
    brand: 'HERDUN',
    description: 'High-ankle safety work boot for industrial and field teams.',
    imageUrl: `${IMAGE_BASE}/HERDUN_Black_High_Ankle_Safety_Work_Boot.jpg`
  },
  {
    id: '1967c025-b025-4103-835d-9543eb6bd356',
    sku: 'QOS-SHOE-008',
    name: 'Safety Shoe Border Feet Guard Ankle Light Brown',
    category: 'safety-footwear',
    brand: 'FEET GUARD',
    description: 'Light-brown ankle safety shoe for professional work environments.',
    imageUrl: `${IMAGE_BASE}/products/1967c025-b025-4103-835d-9543eb6bd356/1784227768767-exj0rj.png`
  }
];
