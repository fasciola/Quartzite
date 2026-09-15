import { Product } from '../types';
import { CATEGORIES } from './categories';
import { WORKWEAR_PRODUCTS } from './workwear';
import { SAFETY_FOOTWEAR_PRODUCTS } from './safetyFootwear';
import { HEAD_PROTECTION_PRODUCTS } from './headProtection';
import { NAVIGATION_SURVEY_PRODUCTS } from './navigationSurvey';
import { GEOLOGY_FIELD_TOOL_PRODUCTS } from './geologyFieldTools';
import { MAGNIFICATION_PRODUCTS } from './magnificationInspection';
import { BAGS_OUTDOOR_PRODUCTS } from './bagsOutdoor';

const ACTIVE_CATALOG_PRODUCTS = [
  ...WORKWEAR_PRODUCTS,
  ...SAFETY_FOOTWEAR_PRODUCTS,
  ...HEAD_PROTECTION_PRODUCTS,
  ...NAVIGATION_SURVEY_PRODUCTS,
  ...GEOLOGY_FIELD_TOOL_PRODUCTS,
  ...MAGNIFICATION_PRODUCTS,
  ...BAGS_OUTDOOR_PRODUCTS
];

const CATEGORY_LABELS = new Map(CATEGORIES.map((category) => [category.id, category.name]));

export const PRODUCTS: Product[] = ACTIVE_CATALOG_PRODUCTS.map((product) => ({
  id: product.id,
  name: product.name,
  category: product.category,
  brand: product.brand,
  description: product.description,
  imageUrl: product.imageUrl,
  specifications: [
    `SKU: ${product.sku}`,
    `CATEGORY: ${CATEGORY_LABELS.get(product.category) || 'Quartzite Catalog'}`,
    'AVAILABILITY: Request current availability'
  ],
  features: ['Available for commercial quotation from Quartzite Trading Services'],
  isFeatured: false,
  inStock: true
}));
