import type { StaticImageData } from 'next/image';
import microfiber from '../assets/images/product-microfiber.jpg';
import viscoseMix from '../assets/images/product-viscose-mix.jpg';
import viscoseWhite from '../assets/images/product-viscose-white.jpg';
import cottonViscose from '../assets/images/product-cotton-viscose.jpg';
import cottonViscose2 from '../assets/images/product-cotton-viscose-2.jpg';
import cotton from '../assets/images/product-cotton.jpg';
import cottonWrap from '../assets/images/product-cotton-wrap.jpg';

export type SupportedLocale = 'pl' | 'en' | 'ru' | 'uk';
export type ProductCategoryKey = 'microfiber' | 'viscoseMix' | 'viscoseWhite' | 'cottonViscose' | 'cottonViscose2' | 'cotton' | 'cottonWrap';

export interface ProductCategory { id: ProductCategoryKey; key: ProductCategoryKey; image: StaticImageData; caps: string }
export interface CatalogProduct {
  id: string; name: string; category: ProductCategoryKey; material: string; color: string; size: string; image: StaticImageData; description: string;
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

export const homeProducts: ProductCategoryKey[] = [
  'microfiber',
  'viscoseMix',
  'viscoseWhite',
  'cottonViscose',
  'cottonViscose2',
  'cotton',
  'cottonWrap',
];

const specs = [
  ['m3', 'microfiber', 'MAXI'], ['m4', 'microfiber', 'MEGA'], ['p3', 'viscoseMix', 'MAXI'], ['p4', 'viscoseMix', 'MEGA'],
  ['pk4', 'viscoseMix', 'MEGA'], ['pb3', 'viscoseWhite', 'MAXI'], ['pb4', 'viscoseWhite', 'MEGA'], ['b2', 'cottonViscose', 'MIDI'],
  ['b3', 'cottonViscose', 'MAXI'], ['b4', 'cottonViscose', 'MEGA'], ['xl', 'cottonViscose', 'XL'], ['xxl', 'cottonViscose', 'XXL'],
  ['z3', 'cottonViscose2', 'MAXI'], ['z4', 'cottonViscose2', 'MEGA'], ['e3', 'cotton', 'MAXI'], ['e4', 'cotton', 'MEGA'],
  ['w3', 'cottonWrap', 'MAXI'], ['w4', 'cottonWrap', 'MEGA'],
] as const;

const content: Record<SupportedLocale, Record<ProductCategoryKey, { name: string; material: string; color: string; description: string }>> = {
  pl: {
    microfiber: { name: 'Mop z mikrofibry', material: 'Mikrofibra', color: 'Mix kolorów', description: 'Mikrofibra świetnie zbiera brud i kurz, bardzo dobrze chłonie i pozwala czyścić bez silnych detergentów.' },
    viscoseMix: { name: 'Mop wiskozowy mix kolorów', material: 'Wiskoza', color: 'Mix kolorów', description: 'Delikatny i niezwykle chłonny mop wiskozowy. Nie pozostawia smug i sprawdza się na panelach oraz parkietach.' },
    viscoseWhite: { name: 'Mop wiskozowy biały', material: 'Wiskoza', color: 'Biały', description: 'Delikatny i niezwykle chłonny biały mop wiskozowy do podłóg wymagających ostrożnego czyszczenia.' },
    cottonViscose: { name: 'Mop bawełniano-wiskozowy', material: 'Bawełna + wiskoza', color: 'Naturalny', description: 'Klasyczny i trwały mop sznurkowy do każdego rodzaju podłogi. Dobrze zbiera wodę, kurz i błoto.' },
    cottonViscose2: { name: 'Kolorowy mop bawełniano-wiskozowy', material: 'Bawełna + wiskoza', color: 'Dwa kolory', description: 'Dwukolorowy, trwały mop sznurkowy o wysokiej chłonności, odpowiedni do każdego rodzaju podłogi.' },
    cotton: { name: 'Mop bawełniany', material: 'Bawełna', color: 'Naturalny', description: 'Trwały i chłonny mop z podwyższoną zawartością bawełny, odpowiedni do płytek, paneli i terakoty.' },
    cottonWrap: { name: 'Mop bawełniany WRAP', material: 'Bawełna WRAP', color: 'Naturalny', description: 'Lekki mop z oplotu bawełnianego. Szybko schnie, łatwo się wyciska i nie pozostawia smug.' },
  },
  en: {
    microfiber: { name: 'Microfiber mop', material: 'Microfiber', color: 'Mixed colours', description: 'Microfiber picks up dirt and dust efficiently, absorbs very well and cleans without harsh detergents.' },
    viscoseMix: { name: 'Mixed-colour viscose mop', material: 'Viscose', color: 'Mixed colours', description: 'A soft and highly absorbent viscose mop. It leaves no streaks and works well on laminate and parquet.' },
    viscoseWhite: { name: 'White viscose mop', material: 'Viscose', color: 'White', description: 'A soft, highly absorbent white viscose mop for floors that require gentle cleaning.' },
    cottonViscose: { name: 'Cotton-viscose mop', material: 'Cotton + viscose', color: 'Natural', description: 'A classic, durable string mop for every floor type. It picks up water, dust and mud effectively.' },
    cottonViscose2: { name: 'Two-colour cotton-viscose mop', material: 'Cotton + viscose', color: 'Two colours', description: 'A durable, highly absorbent two-colour string mop suitable for every floor type.' },
    cotton: { name: 'Cotton mop', material: 'Cotton', color: 'Natural', description: 'A durable, absorbent mop with a high cotton content, suitable for tiles, laminate and terracotta.' },
    cottonWrap: { name: 'Cotton WRAP mop', material: 'WRAP cotton', color: 'Natural', description: 'A lightweight braided-cotton mop. It dries quickly, wrings easily and leaves no streaks.' },
  },
  ru: {
    microfiber: { name: 'Швабра из микрофибры', material: 'Микрофибра', color: 'Разные цвета', description: 'Микрофибра эффективно собирает грязь и пыль, отлично впитывает и позволяет убирать без агрессивных средств.' },
    viscoseMix: { name: 'Вискозная швабра разных цветов', material: 'Вискоза', color: 'Разные цвета', description: 'Мягкая и очень впитывающая вискозная швабра. Не оставляет разводов и подходит для ламината и паркета.' },
    viscoseWhite: { name: 'Белая вискозная швабра', material: 'Вискоза', color: 'Белый', description: 'Мягкая и очень впитывающая белая вискозная швабра для деликатной уборки пола.' },
    cottonViscose: { name: 'Хлопково-вискозная швабра', material: 'Хлопок + вискоза', color: 'Натуральный', description: 'Классическая прочная верёвочная швабра для любых полов. Хорошо собирает воду, пыль и грязь.' },
    cottonViscose2: { name: 'Двухцветная хлопково-вискозная швабра', material: 'Хлопок + вискоза', color: 'Два цвета', description: 'Прочная двухцветная верёвочная швабра с высокой впитываемостью для любых полов.' },
    cotton: { name: 'Хлопковая швабра', material: 'Хлопок', color: 'Натуральный', description: 'Прочная и впитывающая швабра с высоким содержанием хлопка для плитки, ламината и терракоты.' },
    cottonWrap: { name: 'Хлопковая швабра WRAP', material: 'Хлопок WRAP', color: 'Натуральный', description: 'Лёгкая швабра из плетёного хлопка. Быстро сохнет, легко отжимается и не оставляет разводов.' },
  },
  uk: {
    microfiber: { name: 'Швабра з мікрофібри', material: 'Мікрофібра', color: 'Різні кольори', description: 'Мікрофібра ефективно збирає бруд і пил, чудово вбирає та дозволяє прибирати без агресивних засобів.' },
    viscoseMix: { name: 'Віскозна швабра різних кольорів', material: 'Віскоза', color: 'Різні кольори', description: 'М’яка та дуже поглинаюча віскозна швабра. Не залишає розводів і підходить для ламінату та паркету.' },
    viscoseWhite: { name: 'Біла віскозна швабра', material: 'Віскоза', color: 'Білий', description: 'М’яка та дуже поглинаюча біла віскозна швабра для делікатного очищення підлоги.' },
    cottonViscose: { name: 'Бавовняно-віскозна швабра', material: 'Бавовна + віскоза', color: 'Натуральний', description: 'Класична міцна мотузкова швабра для будь-якої підлоги. Добре збирає воду, пил і бруд.' },
    cottonViscose2: { name: 'Двоколірна бавовняно-віскозна швабра', material: 'Бавовна + віскоза', color: 'Два кольори', description: 'Міцна двоколірна мотузкова швабра з високою поглинальною здатністю для будь-якої підлоги.' },
    cotton: { name: 'Бавовняна швабра', material: 'Бавовна', color: 'Натуральний', description: 'Міцна й поглинаюча швабра з високим вмістом бавовни для плитки, ламінату та теракоти.' },
    cottonWrap: { name: 'Бавовняна швабра WRAP', material: 'Бавовна WRAP', color: 'Натуральний', description: 'Легка швабра з плетеної бавовни. Швидко сохне, легко віджимається й не залишає розводів.' },
  },
};

export function getCatalogProducts(locale: string): CatalogProduct[] {
  const language = (locale in content ? locale : 'pl') as SupportedLocale;
  return specs.map(([id, category, size]) => {
    const localized = content[language][category];
    const code = id === 'xl' || id === 'xxl' ? '' : ` ${id.toUpperCase()}`;
    return { id, category, size, image: products.find((item) => item.id === category)!.image, ...localized, name: `${localized.name}${code} ${size}` };
  });
}

export const catalogProducts = getCatalogProducts('pl');
