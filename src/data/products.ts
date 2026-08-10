import type { StaticImageData } from 'next/image';
import microfiber from '../assets/images/product-microfiber.jpg';
import viscoseMix from '../assets/images/product-viscose-mix.jpg';
import viscoseWhite from '../assets/images/product-viscose-white.jpg';
import cottonViscose from '../assets/images/product-cotton-viscose.jpg';
import cottonViscose2 from '../assets/images/product-cotton-viscose-2.jpg';
import cotton from '../assets/images/product-cotton.jpg';
import cottonWrap from '../assets/images/product-cotton-wrap.jpg';

export type ProductCategoryKey =
  | 'microfiber'
  | 'viscoseMix'
  | 'viscoseWhite'
  | 'cottonViscose'
  | 'cottonViscose2'
  | 'cotton'
  | 'cottonWrap';

export interface ProductCategory {
  id: ProductCategoryKey;
  key: ProductCategoryKey;
  image: StaticImageData;
  caps: string;
}

export interface CatalogProduct {
  id: string;
  name: string;
  category: ProductCategoryKey;
  material: string;
  color: string;
  size: string;
  image: StaticImageData;
  description: string;
}

export const products: ProductCategory[] = [
  { id: 'microfiber', key: 'microfiber', image: microfiber, caps: '#e8437e' },
  { id: 'viscoseMix', key: 'viscoseMix', image: viscoseMix, caps: '#e0a815' },
  { id: 'viscoseWhite', key: 'viscoseWhite', image: viscoseWhite, caps: '#3fa796' },
  { id: 'cottonViscose', key: 'cottonViscose', image: cottonViscose, caps: '#4caf7d' },
  { id: 'cottonViscose2', key: 'cottonViscose2', image: cottonViscose2, caps: '#6b8f4e' },
  { id: 'cotton', key: 'cotton', image: cotton, caps: '#e07a2f' },
  { id: 'cottonWrap', key: 'cottonWrap', image: cottonWrap, caps: '#c0392b' },
];

export const homeProducts: ProductCategoryKey[] = ['viscoseMix', 'microfiber', 'cotton', 'cottonWrap'];

const descriptions: Record<'microfiber' | 'viscose' | 'cottonViscose' | 'cotton' | 'wrap', string> = {
  microfiber: 'Mikrofibra świetnie zbiera brud i kurz, chłonie nawet osiem razy więcej niż sama waży i pozwala czyścić bez silnych detergentów.',
  viscose: 'Delikatny i niezwykle chłonny mop wiskozowy. Nie pozostawia smug i sprawdza się także na panelach oraz parkietach.',
  cottonViscose: 'Klasyczny, trwały mop sznurkowy do każdego rodzaju podłogi. Dobrze zbiera wodę, kurz i błoto.',
  cotton: 'Super trwały i chłonny mop z podwyższoną zawartością bawełny, odpowiedni do płytek, paneli i terakoty.',
  wrap: 'Lekki mop z oplotu bawełnianego. Szybko schnie, łatwo się wyciska i nie pozostawia smug.',
};

export const catalogProducts: CatalogProduct[] = [
  { id: 'm3', name: 'Mop z mikrofibry M3', category: 'microfiber', material: 'Mikrofibra', color: 'Mix kolor', size: 'MAXI', image: microfiber, description: descriptions.microfiber },
  { id: 'm4', name: 'Mop z mikrofibry M4', category: 'microfiber', material: 'Mikrofibra', color: 'Mix kolor', size: 'MEGA', image: microfiber, description: descriptions.microfiber },
  { id: 'p3', name: 'Mop wiskoza mix kolor P3 MAXI', category: 'viscoseMix', material: 'Wiskoza', color: 'Mix kolor', size: 'MAXI', image: viscoseMix, description: descriptions.viscose },
  { id: 'p4', name: 'Mop wiskoza mix kolor P4 MEGA', category: 'viscoseMix', material: 'Wiskoza', color: 'Mix kolor', size: 'MEGA', image: viscoseMix, description: descriptions.viscose },
  { id: 'pk4', name: 'Mop wiskoza mix kolor PK4 MEGA', category: 'viscoseMix', material: 'Wiskoza', color: 'Mix kolor', size: 'MEGA', image: viscoseMix, description: descriptions.viscose },
  { id: 'pb3', name: 'Mop wiskoza biały PB3 MAXI', category: 'viscoseWhite', material: 'Wiskoza', color: 'Biały', size: 'MAXI', image: viscoseWhite, description: descriptions.viscose },
  { id: 'pb4', name: 'Mop wiskoza biały PB4 MEGA', category: 'viscoseWhite', material: 'Wiskoza', color: 'Biały', size: 'MEGA', image: viscoseWhite, description: descriptions.viscose },
  { id: 'b2', name: 'Mop bawełniano-wiskozowy B2 MIDI', category: 'cottonViscose', material: 'Bawełna + wiskoza', color: 'Naturalny', size: 'MIDI', image: cottonViscose, description: descriptions.cottonViscose },
  { id: 'b3', name: 'Mop bawełniano-wiskozowy B3 MAXI', category: 'cottonViscose', material: 'Bawełna + wiskoza', color: 'Naturalny', size: 'MAXI', image: cottonViscose, description: descriptions.cottonViscose },
  { id: 'b4', name: 'Mop bawełniano-wiskozowy B4 MEGA', category: 'cottonViscose', material: 'Bawełna + wiskoza', color: 'Naturalny', size: 'MEGA', image: cottonViscose, description: descriptions.cottonViscose },
  { id: 'xl', name: 'Mop bawełniano-wiskozowy XL', category: 'cottonViscose', material: 'Bawełna + wiskoza', color: 'Naturalny', size: 'XL', image: cottonViscose, description: descriptions.cottonViscose },
  { id: 'xxl', name: 'Mop bawełniano-wiskozowy XXL', category: 'cottonViscose', material: 'Bawełna + wiskoza', color: 'Naturalny', size: 'XXL', image: cottonViscose, description: descriptions.cottonViscose },
  { id: 'z3', name: 'Mop bawełniano-wiskozowy kolorowy Z3 MAXI', category: 'cottonViscose2', material: 'Bawełna + wiskoza', color: 'Dwa kolory', size: 'MAXI', image: cottonViscose2, description: descriptions.cottonViscose },
  { id: 'z4', name: 'Mop bawełniano-wiskozowy kolorowy Z4 MEGA', category: 'cottonViscose2', material: 'Bawełna + wiskoza', color: 'Dwa kolory', size: 'MEGA', image: cottonViscose2, description: descriptions.cottonViscose },
  { id: 'e3', name: 'Mop bawełniany E3 MAXI', category: 'cotton', material: 'Bawełna', color: 'Naturalny', size: 'MAXI', image: cotton, description: descriptions.cotton },
  { id: 'e4', name: 'Mop bawełniany E4 MEGA', category: 'cotton', material: 'Bawełna', color: 'Naturalny', size: 'MEGA', image: cotton, description: descriptions.cotton },
  { id: 'w3', name: 'Mop bawełniany WRAP W3 MAXI', category: 'cottonWrap', material: 'Bawełna WRAP', color: 'Naturalny', size: 'MAXI', image: cottonWrap, description: descriptions.wrap },
  { id: 'w4', name: 'Mop bawełniany WRAP W4 MEGA', category: 'cottonWrap', material: 'Bawełna WRAP', color: 'Naturalny', size: 'MEGA', image: cottonWrap, description: descriptions.wrap },
];
