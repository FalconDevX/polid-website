import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { catalogProducts, getCatalogProducts, type ProductCategoryKey, type SupportedLocale } from '@/data/products';
import ProductImageCarousel from '@/components/ProductDetail/ProductImageCarousel';
import ProductGallery from '@/components/ProductDetail/ProductGallery';
import m3PurpleGreen from '../../../../assets/images/m3-purple-green.png';
import m3RedGreenDark from '../../../../assets/images/m3-red-green-dark.png';
import m3MaterialDetail from '../../../../assets/images/m3-material-detail.jpg';
import m3MaterialDetailRedTeal from '../../../../assets/images/m3-material-detail-red-teal.jpg';
import styles from '@/components/ProductDetail/ProductDetail.module.css';

const weights: Record<string, string> = { m3: '150 g', m4: '190 g', p3: '150 g', p4: '190 g', pk4: '190 g', pb3: '150 g', pb4: '190 g', b2: '125 g', b3: '165 g', b4: '190 g', xl: '230 g', xxl: '270 g', z3: '165 g', z4: '190 g', e3: '165 g', e4: '190 g', w3: '165 g', w4: '190 g' };

const detailCopy: Record<SupportedLocale, Record<string, string | string[]>> = {
  pl: { products: 'Produkty', kicker: 'Produkt POLID', number: 'Numer katalogowy', size: 'Rozmiar', weight: 'Waga', color: 'Kolor', inquiry: 'Zapytaj o produkt', info: 'Najważniejsze informacje', features: 'Cechy produktu', composition: 'Skład i wykonanie', material: 'O materiale', closeup: 'Produkt z bliska', gallery: 'Galeria', galleryImage: 'zdjęcie galerii', carouselImage: 'zdjęcie', previous: 'Poprzednie zdjęcie', next: 'Następne zdjęcie', close: 'Zamknij podgląd', benefits: ['Wysoka chłonność', 'Skuteczne czyszczenie', 'Nie rysuje powierzchni', 'Pasuje do standardowych trzonków'] },
  en: { products: 'Products', kicker: 'POLID product', number: 'Catalogue number', size: 'Size', weight: 'Weight', color: 'Colour', inquiry: 'Ask about this product', info: 'Key information', features: 'Product features', composition: 'Composition and manufacture', material: 'About the material', closeup: 'A closer look', gallery: 'Gallery', galleryImage: 'gallery image', carouselImage: 'image', previous: 'Previous image', next: 'Next image', close: 'Close preview', benefits: ['High absorbency', 'Effective cleaning', 'Does not scratch surfaces', 'Fits standard handles'] },
  ru: { products: 'Товары', kicker: 'Продукт POLID', number: 'Каталожный номер', size: 'Размер', weight: 'Вес', color: 'Цвет', inquiry: 'Спросить о товаре', info: 'Основная информация', features: 'Характеристики товара', composition: 'Состав и производство', material: 'О материале', closeup: 'Товар вблизи', gallery: 'Галерея', galleryImage: 'изображение галереи', carouselImage: 'изображение', previous: 'Предыдущее изображение', next: 'Следующее изображение', close: 'Закрыть просмотр', benefits: ['Высокая впитываемость', 'Эффективная уборка', 'Не царапает поверхности', 'Подходит к стандартным ручкам'] },
  uk: { products: 'Товари', kicker: 'Продукт POLID', number: 'Каталожний номер', size: 'Розмір', weight: 'Вага', color: 'Колір', inquiry: 'Запитати про товар', info: 'Основна інформація', features: 'Характеристики товару', composition: 'Склад і виробництво', material: 'Про матеріал', closeup: 'Товар зблизька', gallery: 'Галерея', galleryImage: 'зображення галереї', carouselImage: 'зображення', previous: 'Попереднє зображення', next: 'Наступне зображення', close: 'Закрити перегляд', benefits: ['Висока поглинальна здатність', 'Ефективне очищення', 'Не дряпає поверхні', 'Підходить до стандартних ручок'] },
};

const materialDetails: Record<SupportedLocale, Record<ProductCategoryKey, string>> = {
  pl: {
    microfiber: 'Mikrofibra powstaje z bardzo cienkich włókien poliestrowych i poliamidowych. Gęsta struktura skutecznie zatrzymuje kurz, włosy i drobne zabrudzenia, również podczas czyszczenia na sucho. Materiał bardzo dobrze chłonie wodę, łatwo się wyciska i pozwala ograniczyć użycie detergentów. Jest miękki, dlatego nadaje się do płytek, paneli i innych gładkich powierzchni.',
    viscoseMix: 'Wiskoza jest miękkim, delikatnym i wyjątkowo chłonnym włóknem. Szybko pobiera wodę, ale również łatwo ją oddaje podczas wyciskania. Dzięki temu mop sprawdza się na panelach, parkietach, płytkach i powierzchniach wymagających ostrożnego mycia. Wielokolorowe pasma ułatwiają dopasowanie wariantu do pozostałych akcesoriów.',
    viscoseWhite: 'Biała wiskoza łączy wysoką chłonność z delikatnością dla czyszczonej powierzchni. Jasne włókna ułatwiają ocenę stopnia zabrudzenia i kontrolę czystości mopa. Materiał dobrze rozprowadza wodę, nie pozostawia smug i nadaje się do paneli, parkietów oraz płytek.',
    cottonViscose: 'Połączenie bawełny i wiskozy zapewnia równowagę między trwałością a chłonnością. Bawełna wzmacnia sznurki i dobrze zbiera cięższe zabrudzenia, natomiast wiskoza szybko pochłania wodę. Mop jest odpowiedni do codziennego mycia płytek, paneli, terakoty oraz powierzchni użytkowych.',
    cottonViscose2: 'Dwukolorowa mieszanka bawełny i wiskozy zachowuje wysoką chłonność klasycznego mopa sznurkowego, a jednocześnie wyróżnia się dekoracyjnym wyglądem. Mocne włókna dobrze zbierają wodę, kurz i błoto, nie strzępią się łatwo i mogą być stosowane na większości typowych podłóg.',
    cotton: 'Podwyższona zawartość bawełny zapewnia miękkość, trwałość i bardzo dobre pochłanianie wody. Bawełniane sznurki skutecznie rozprowadzają wilgoć i zbierają zabrudzenia bez rysowania podłoża. Materiał dobrze sprawdza się na płytkach, terakocie, panelach i powierzchniach wylewanych.',
    cottonWrap: 'WRAP to bawełniany warkocz zabezpieczony dodatkową nitką. Taka konstrukcja ogranicza strzępienie, ułatwia wyciskanie i przyspiesza schnięcie. Lekki materiał dobrze zbiera kurz, nie pozostawia smug i nadaje się do regularnego czyszczenia różnych rodzajów posadzek.',
  },
  en: {
    microfiber: 'Microfiber is made from extremely fine polyester and polyamide fibres. Its dense structure traps dust, hair and fine dirt, even when used dry. It absorbs water efficiently, wrings out easily and reduces the need for strong detergents. The soft fibres are suitable for tiles, laminate and other smooth floors.',
    viscoseMix: 'Viscose is soft, gentle and highly absorbent. It takes up water quickly and releases it easily during wringing. This makes it suitable for laminate, parquet, tiles and other surfaces that require careful cleaning. The mixed-colour strands offer a wide choice of visual variants.',
    viscoseWhite: 'White viscose combines high absorbency with gentle floor care. The light fibres make it easier to assess dirt and cleanliness. It distributes water evenly, leaves no streaks and is suitable for laminate, parquet and tiles.',
    cottonViscose: 'A blend of cotton and viscose balances durability and absorbency. Cotton strengthens the strands and collects heavier dirt, while viscose absorbs water quickly. It is suitable for everyday cleaning of tiles, laminate, terracotta and utility floors.',
    cottonViscose2: 'The two-colour cotton and viscose blend retains the absorbency of a classic string mop while adding a distinctive look. Strong fibres collect water, dust and mud, resist fraying and work on most common floor types.',
    cotton: 'A high cotton content provides softness, durability and excellent water absorption. The cotton strands spread moisture evenly and collect dirt without scratching. They work well on tiles, terracotta, laminate and poured floors.',
    cottonWrap: 'WRAP is a braided cotton strand secured with an additional thread. This construction reduces fraying, makes wringing easier and speeds up drying. The lightweight material collects dust, leaves no streaks and suits regular floor cleaning.',
  },
  ru: {
    microfiber: 'Микрофибра состоит из очень тонких полиэстеровых и полиамидных волокон. Плотная структура удерживает пыль, волосы и мелкие загрязнения даже при сухой уборке. Материал хорошо впитывает воду, легко отжимается и позволяет сократить использование сильных моющих средств.',
    viscoseMix: 'Вискоза — мягкое, деликатное и очень впитывающее волокно. Она быстро набирает воду и легко отдаёт её при отжиме. Поэтому материал подходит для ламината, паркета, плитки и поверхностей, требующих бережной уборки.',
    viscoseWhite: 'Белая вискоза сочетает высокую впитываемость и бережное отношение к полу. Светлые волокна упрощают контроль загрязнения. Материал равномерно распределяет воду, не оставляет разводов и подходит для ламината, паркета и плитки.',
    cottonViscose: 'Сочетание хлопка и вискозы обеспечивает прочность и высокую впитываемость. Хлопок укрепляет нити и собирает тяжёлые загрязнения, а вискоза быстро впитывает воду. Подходит для ежедневной уборки плитки, ламината и терракоты.',
    cottonViscose2: 'Двухцветная смесь хлопка и вискозы сохраняет впитываемость классической верёвочной швабры и отличается выразительным видом. Прочные волокна собирают воду, пыль и грязь и подходят для большинства типов полов.',
    cotton: 'Высокое содержание хлопка обеспечивает мягкость, прочность и отличное впитывание воды. Хлопковые нити равномерно распределяют влагу и собирают загрязнения, не царапая поверхность.',
    cottonWrap: 'WRAP — это хлопковая коса, закреплённая дополнительной нитью. Такая конструкция уменьшает осыпание, облегчает отжим и ускоряет высыхание. Материал хорошо собирает пыль и не оставляет разводов.',
  },
  uk: {
    microfiber: 'Мікрофібра складається з дуже тонких поліестерових і поліамідних волокон. Щільна структура утримує пил, волосся та дрібний бруд навіть під час сухого прибирання. Матеріал добре вбирає воду, легко віджимається та дозволяє зменшити використання сильних мийних засобів.',
    viscoseMix: 'Віскоза — м’яке, делікатне та дуже поглинаюче волокно. Вона швидко вбирає воду й легко віддає її під час віджимання. Тому матеріал підходить для ламінату, паркету, плитки та поверхонь, що потребують обережного очищення.',
    viscoseWhite: 'Біла віскоза поєднує високу поглинальну здатність із дбайливим очищенням підлоги. Світлі волокна полегшують контроль забруднення. Матеріал рівномірно розподіляє воду, не залишає розводів і підходить для ламінату, паркету та плитки.',
    cottonViscose: 'Поєднання бавовни та віскози забезпечує міцність і високу поглинальну здатність. Бавовна зміцнює нитки та збирає важчий бруд, а віскоза швидко вбирає воду. Підходить для щоденного очищення плитки, ламінату й теракоти.',
    cottonViscose2: 'Двоколірна суміш бавовни та віскози зберігає поглинальні властивості класичної мотузкової швабри та має виразний вигляд. Міцні волокна збирають воду, пил і бруд та підходять для більшості типів підлоги.',
    cotton: 'Високий вміст бавовни забезпечує м’якість, міцність і чудове вбирання води. Бавовняні нитки рівномірно розподіляють вологу та збирають забруднення, не дряпаючи поверхню.',
    cottonWrap: 'WRAP — це бавовняна коса, закріплена додатковою ниткою. Така конструкція зменшує осипання, полегшує віджимання та пришвидшує висихання. Матеріал добре збирає пил і не залишає розводів.',
  },
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => catalogProducts.map((product) => ({ locale, productId: product.id })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; productId: string }> }): Promise<Metadata> {
  const { locale, productId } = await params;
  const product = getCatalogProducts(locale).find((item) => item.id === productId);
  return product ? { title: product.name, description: product.description } : {};
}

export default async function ProductDetailPage({ params }: { params: Promise<{ locale: string; productId: string }> }) {
  const { locale, productId } = await params;
  setRequestLocale(locale);
  const language = (locale in detailCopy ? locale : 'pl') as SupportedLocale;
  const text = detailCopy[language];
  const product = getCatalogProducts(language).find((item) => item.id === productId);
  if (!product) notFound();

  const titleClass = product.name.length > 40 ? styles.titleSmall : product.name.length > 30 ? styles.titleMedium : '';
  const productImages = product.id === 'm3' ? [m3PurpleGreen, m3RedGreenDark] : [product.image];
  const galleryImages = product.id === 'm3' ? [...productImages, m3MaterialDetail, m3MaterialDetailRedTeal] : [product.image, product.image, product.image];
  const benefits = text.benefits as string[];

  return (
    <div className={styles.page}>
      <section className={styles.hero}><div className={styles.heroInner}>
        <div className={styles.breadcrumbs}><Link href="/produkty">{text.products as string}</Link><span>/</span><span>{product.name}</span></div>
        <div className={styles.heroGrid}>
          <ProductImageCarousel productName={product.name} productImages={productImages} isCarousel={product.id === 'm3'} labels={{ previous: text.previous as string, next: text.next as string, image: text.carouselImage as string }} />
          <div className={styles.summary}><span className={styles.kicker}>{text.kicker as string}</span><h1 className={titleClass}>{product.name}</h1><p>{product.description}</p>
            <dl><div><dt>{text.number as string}</dt><dd>{product.id.toUpperCase()}</dd></div><div><dt>{text.size as string}</dt><dd>{product.size}</dd></div><div><dt>{text.weight as string}</dt><dd>{weights[product.id]}</dd></div><div><dt>{text.color as string}</dt><dd>{product.color}</dd></div></dl>
            <Link className={styles.inquiry} href="/kontakt">{text.inquiry as string}</Link>
          </div>
        </div>
      </div></section>
      <section className={styles.features}><div className={styles.sectionHeading}><span>{text.info as string}</span><h2>{text.features as string}</h2></div><div className={styles.featureGrid}>{benefits.map((benefit, index) => <article key={benefit}><span>{String(index + 1).padStart(2, '0')}</span><h3>{benefit}</h3></article>)}</div></section>
      <section className={styles.material}><div><span>{text.composition as string}</span><h2>{text.material as string}</h2></div><p>{materialDetails[language][product.category]}</p></section>
      <section className={styles.gallery}><div className={styles.sectionHeading}><span>{text.closeup as string}</span><h2>{text.gallery as string}</h2></div><ProductGallery images={galleryImages} productName={product.name} labels={{ previous: text.previous as string, next: text.next as string, close: text.close as string, image: text.galleryImage as string }} /></section>
    </div>
  );
}
