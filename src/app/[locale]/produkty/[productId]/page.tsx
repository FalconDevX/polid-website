import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { catalogProducts, type ProductCategoryKey } from '@/data/products';
import ProductImageCarousel from '@/components/ProductDetail/ProductImageCarousel';
import m3PurpleGreen from '../../../../assets/images/m3-purple-green.png';
import m3RedGreenDark from '../../../../assets/images/m3-red-green-dark.png';
import m3MaterialDetail from '../../../../assets/images/m3-material-detail.jpg';
import m3MaterialDetailRedTeal from '../../../../assets/images/m3-material-detail-red-teal.jpg';
import styles from '@/components/ProductDetail/ProductDetail.module.css';

const weights: Record<string, string> = {
  m3: '150 g', m4: '190 g', p3: '150 g', p4: '190 g', pk4: '190 g', pb3: '150 g', pb4: '190 g',
  b2: '125 g', b3: '165 g', b4: '190 g', xl: '230 g', xxl: '270 g', z3: '165 g', z4: '190 g',
  e3: '165 g', e4: '190 g', w3: '165 g', w4: '190 g',
};

const materialInfo: Record<ProductCategoryKey, string> = {
  microfiber: 'Mikrofibra powstaje z cienkich włókien poliestrowych i poliamidowych. Jest miękka, wytrzymała i skutecznie zbiera kurz oraz zabrudzenia także bez silnych detergentów.',
  viscoseMix: 'Wiskoza jest miękkim i bardzo chłonnym włóknem. Dobrze oddaje wodę, dlatego sprawdza się również na delikatnych powierzchniach, panelach i parkietach.',
  viscoseWhite: 'Wiskoza jest miękkim i bardzo chłonnym włóknem. Biała wersja ułatwia kontrolę czystości i dobrze sprawdza się na delikatnych podłogach.',
  cottonViscose: 'Połączenie bawełny i włókien syntetycznych zapewnia dobrą chłonność, trwałość oraz skuteczne zbieranie wody, kurzu i błota.',
  cottonViscose2: 'Mieszanka bawełny i włókien syntetycznych łączy wysoką chłonność z trwałością. Dwukolorowe włókna nadają końcówce charakterystyczny wygląd.',
  cotton: 'Podwyższona zawartość bawełny zapewnia miękkość i wysoką chłonność. Materiał dobrze rozprowadza wodę i nie rysuje czyszczonych powierzchni.',
  cottonWrap: 'Oplot WRAP to bawełniany warkocz zabezpieczony nitką. Jest lekki, trwały, łatwo się wyciska i szybko schnie.',
};

const benefits: Record<ProductCategoryKey, string[]> = {
  microfiber: ['Chłonie ponad 500 ml płynu', 'Czyści także na sucho', 'Nie rysuje powierzchni', 'Pasuje do standardowych trzonków'],
  viscoseMix: ['Bardzo wysoka chłonność', 'Nie pozostawia smug', 'Do delikatnych podłóg', 'Łatwe wyciskanie'],
  viscoseWhite: ['Bardzo wysoka chłonność', 'Nie pozostawia smug', 'Do delikatnych podłóg', 'Uniwersalna biała kolorystyka'],
  cottonViscose: ['Do każdego rodzaju podłogi', 'Dobrze zbiera wodę i błoto', 'Mocne włókna sznurka', 'Klasyczny, uniwersalny gwint'],
  cottonViscose2: ['Do każdego rodzaju podłogi', 'Wysoka chłonność', 'Trwałe dwukolorowe włókna', 'Klasyczny, uniwersalny gwint'],
  cotton: ['Miękki i trwały', 'Doskonała chłonność', 'Nie rysuje podłoża', 'Można stosować z chemią domową'],
  cottonWrap: ['Szybko schnie', 'Łatwo się wyciska', 'Nie pozostawia smug', 'Skutecznie zbiera kurz'],
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => catalogProducts.map((product) => ({ locale, productId: product.id })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const { productId } = await params;
  const product = catalogProducts.find((item) => item.id === productId);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; productId: string }>;
}) {
  const { locale, productId } = await params;
  setRequestLocale(locale);

  const product = catalogProducts.find((item) => item.id === productId);
  if (!product) notFound();

  const titleClass = product.name.length > 40 ? styles.titleSmall : product.name.length > 30 ? styles.titleMedium : '';
  const productImages = product.id === 'm3' ? [m3PurpleGreen, m3RedGreenDark] : [product.image];
  const galleryImages =
    product.id === 'm3' ? [...productImages, m3MaterialDetail, m3MaterialDetailRedTeal] : [product.image, product.image, product.image];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.breadcrumbs}>
            <Link href="/produkty">Produkty</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>
          <div className={styles.heroGrid}>
            <ProductImageCarousel productName={product.name} productImages={productImages} isCarousel={product.id === 'm3'} />
            <div className={styles.summary}>
              <span className={styles.kicker}>Produkt POLID</span>
              <h1 className={titleClass}>{product.name}</h1>
              <p>{product.description}</p>
              <dl>
                <div>
                  <dt>Numer katalogowy</dt>
                  <dd>{product.id.toUpperCase()}</dd>
                </div>
                <div>
                  <dt>Rozmiar</dt>
                  <dd>{product.size}</dd>
                </div>
                <div>
                  <dt>Waga</dt>
                  <dd>{weights[product.id]}</dd>
                </div>
                <div>
                  <dt>Kolor</dt>
                  <dd>{product.color}</dd>
                </div>
              </dl>
              <Link className={styles.inquiry} href="/kontakt">
                Zapytaj o produkt
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.sectionHeading}>
          <span>Najważniejsze informacje</span>
          <h2>Cechy produktu</h2>
        </div>
        <div className={styles.featureGrid}>
          {benefits[product.category].map((benefit, index) => (
            <article key={benefit}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{benefit}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.material}>
        <div>
          <span>Skład i wykonanie</span>
          <h2>Krótko o materiale</h2>
        </div>
        <p>{materialInfo[product.category]}</p>
      </section>

      <section className={styles.gallery}>
        <div className={styles.sectionHeading}>
          <span>Produkt z bliska</span>
          <h2>Galeria</h2>
        </div>
        <div
          className={`${styles.galleryGrid} ${galleryImages.length === 2 ? styles.twoImageGallery : ''} ${
            galleryImages.length === 4 ? styles.fourImageGallery : ''
          }`}
        >
          {galleryImages.map((image, index) => (
            <div key={`${image.src}-${index}`} className={index === 0 && galleryImages.length === 3 ? styles.galleryLarge : ''}>
              <Image src={image} alt={`${product.name}, zdjęcie galerii ${index + 1}`} fill />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
