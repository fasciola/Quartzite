import { CatalogProductSeed } from './types';

const IMAGE_BASE = 'https://yawwbukquozgjuwmdrkh.supabase.co/storage/v1/object/public/quartzite-product-images';

export const BAGS_OUTDOOR_PRODUCTS: CatalogProductSeed[] = [
  {
    id: 'fdd17d8a-86aa-4be1-b600-296b5ff09281',
    sku: 'QZ-IMP-021',
    name: 'Tactical MOLLE Backpack Jungle Camouflage',
    category: 'bags-outdoor-gear',
    brand: 'QUARTZITE',
    description: 'Tactical MOLLE backpack in jungle camouflage for field equipment.',
    imageUrl: `${IMAGE_BASE}/Tactical_MOLLE_Backpack_Jungle_Camouflage.jpg`
  },
  {
    id: '02438add-479c-41e9-bb30-ae56846e4e0e',
    sku: 'QZ-IMP-022',
    name: 'Tactical MOLLE Backpack Khaki Tan',
    category: 'bags-outdoor-gear',
    brand: 'QUARTZITE',
    description: 'Tactical MOLLE backpack in khaki tan for field equipment.',
    imageUrl: `${IMAGE_BASE}/Tactical_MOLLE_Backpack_Khaki_Tan.jpg`
  },
  {
    id: 'c79b22ff-4d84-4e1f-8784-c28585312c86',
    sku: 'QZ-IMP-023',
    name: 'Tactical MOLLE Backpack Military Camouflage',
    category: 'bags-outdoor-gear',
    brand: 'QUARTZITE',
    description: 'Tactical MOLLE backpack in military camouflage.',
    imageUrl: `${IMAGE_BASE}/Tactical_MOLLE_Backpack_Military_Camouflage.jpg`
  },
  {
    id: '14b4a045-c781-4469-816f-b7c7cfb5b663',
    sku: 'QZ-IMP-024',
    name: 'Tactical MOLLE Backpack Navy Blue',
    category: 'bags-outdoor-gear',
    brand: 'QUARTZITE',
    description: 'Tactical MOLLE backpack in navy blue for field operations.',
    imageUrl: `${IMAGE_BASE}/Tactical_MOLLE_Backpack_Navy_Blue.jpg`
  },
  {
    id: 'a01d9c54-b041-406a-9c2a-211a9125b6d8',
    sku: 'QZ-IMP-025',
    name: 'Tactical MOLLE Backpack Olive Green',
    category: 'bags-outdoor-gear',
    brand: 'QUARTZITE',
    description: 'Tactical MOLLE backpack in olive green for field operations.',
    imageUrl: `${IMAGE_BASE}/Tactical_MOLLE_Backpack_Olive_Green.jpg`
  },
  {
    id: 'a0384be0-84c3-498a-8c71-3a5d5419b4e0',
    sku: 'QZ-IMP-026',
    name: 'Tactical MOLLE Backpack Red',
    category: 'bags-outdoor-gear',
    brand: 'QUARTZITE',
    description: 'Tactical MOLLE backpack in red for field operations.',
    imageUrl: `${IMAGE_BASE}/Tactical_MOLLE_Backpack_Red.jpg`
  },
  {
    id: '6a308e8b-98e2-4708-8553-f71c8dec546c',
    sku: 'QZ-IMP-028',
    name: 'Wide Brim Outdoor Sun Hat Dark Gray',
    category: 'bags-outdoor-gear',
    brand: 'QUARTZITE',
    description: 'Wide-brim dark gray outdoor sun hat for field work.',
    imageUrl: `${IMAGE_BASE}/Wide_Brim_Outdoor_Sun_Hat_Dark_Gray.jpg`
  }
];
