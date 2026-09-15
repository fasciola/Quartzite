import { CatalogProductSeed } from './types';

const IMAGE_BASE = 'https://yawwbukquozgjuwmdrkh.supabase.co/storage/v1/object/public/quartzite-product-images';

export const WORKWEAR_PRODUCTS: CatalogProductSeed[] = [
  {
    id: 'd3333333-3333-3333-3333-333333333333',
    sku: 'QOS-TRSR-003',
    name: 'Industrial Cargo Trousers',
    category: 'workwear-hi-vis',
    brand: 'ROBUST WORKWEAR',
    description: 'Heavy duty multi-pocket work trousers with double knee reinforcements.',
    imageUrl: `${IMAGE_BASE}/products/d3333333-3333-3333-3333-333333333333/1784203097772-udc6kr.png`
  },
  {
    id: '04681ce0-3c5d-433b-b934-6ff27e1b9280',
    sku: 'QOS-SHRT-010',
    name: 'Pant Shirt Robustman',
    category: 'workwear-hi-vis',
    brand: 'ROBUSTMAN',
    description: 'Pant Shirt Robustman.',
    imageUrl: `${IMAGE_BASE}/products/04681ce0-3c5d-433b-b934-6ff27e1b9280/1784300435743-bek91i.jpg`
  },
  {
    id: '2600063e-d27e-4031-a1b7-adda455ee82a',
    sku: 'QOS-SHRT-007',
    name: 'Safety Shirt (Yellow + Navy Blue)',
    category: 'workwear-hi-vis',
    brand: 'ABID & ALI ASGAR',
    description: 'High-visibility safety shirt in yellow and navy blue.',
    imageUrl: `${IMAGE_BASE}/products/2600063e-d27e-4031-a1b7-adda455ee82a/1784197751693-nrbm1tf.png`
  },
  {
    id: 'd6666666-6666-6666-6666-666666666666',
    sku: 'QOS-TSHR-006',
    name: 'T-Shirt F/S',
    category: 'workwear-hi-vis',
    brand: 'QUARTZITE',
    description: 'Professional field workwear available for quotation.',
    imageUrl: `${IMAGE_BASE}/products/d6666666-6666-6666-6666-666666666666/1784195616954-olignp.png`
  },
  {
    id: 'edb3f475-4896-45c7-9fc8-d23c82acddc3',
    sku: 'QOS-TSHR-011',
    name: 'T-Shirt Pro S/S',
    category: 'workwear-hi-vis',
    brand: 'QUARTZITE',
    description: 'Professional field workwear available for quotation.',
    imageUrl: `${IMAGE_BASE}/products/edb3f475-4896-45c7-9fc8-d23c82acddc3/1784301482436-a9b37m.jpg`
  },
  {
    id: '592e3c71-a547-445f-a9f8-66078332d76a',
    sku: 'QOS-VEST-009',
    name: 'Vest Robustman',
    category: 'workwear-hi-vis',
    brand: 'ROBUSTMAN',
    description: 'Professional high-visibility work vest available for quotation.',
    imageUrl: `${IMAGE_BASE}/products/592e3c71-a547-445f-a9f8-66078332d76a/1784300125485-hitn5b6.jpg`
  }
];
