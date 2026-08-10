'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import styles from './ProductDetail.module.css';

interface ProductImageCarouselProps {
  productName: string;
  productImages: StaticImageData[];
  isCarousel: boolean;
}

export default function ProductImageCarousel({ productName, productImages, isCarousel }: ProductImageCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const showPrevious = () => setActiveSlide((current) => (current - 1 + productImages.length) % productImages.length);
  const showNext = () => setActiveSlide((current) => (current + 1) % productImages.length);

  return (
    <div className={`${styles.mainImage} ${isCarousel ? styles.productCarousel : ''}`}>
      <Image key={activeSlide} src={productImages[activeSlide]} alt={`${productName}, zdjęcie ${activeSlide + 1}`} fill />
      {productImages.length > 1 && (
        <>
          <button type="button" className={`${styles.carouselArrow} ${styles.arrowLeft}`} onClick={showPrevious} aria-label="Poprzednie zdjęcie">
            <span />
          </button>
          <button type="button" className={`${styles.carouselArrow} ${styles.arrowRight}`} onClick={showNext} aria-label="Następne zdjęcie">
            <span />
          </button>
          <div className={styles.carouselDots} aria-hidden="true">
            {productImages.map((image, index) => (
              <span key={image.src} className={index === activeSlide ? styles.activeDot : ''} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
