export interface Product {
  id: string;
  name: string;
  category: string;
  specifications: string[];
  imageUrl: string;
  features: string[];
  brand: string;
  description: string;
  price?: number;
  isFeatured?: boolean;
  inStock?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  longDescription: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  iconName: 'Shield' | 'Globe' | 'Zap' | 'MapPin' | 'CheckCircle' | 'HardHat';
}
