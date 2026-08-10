'use client';

import { useCallback, useEffect, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import styles from './ProductDetail.module.css';

interface ProductGalleryProps {
  images: StaticImageData[];
  productName: string;
  labels: { previous: string; next: string; close: string; image: string };
}

export default function ProductGallery({ images, productName, labels }: ProductGalleryProps) {
  const [active, setActive] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const showPrevious = useCallback(() => { setZoom(1); setActive((current) => current === null ? 0 : (current - 1 + images.length) % images.length); }, [images.length]);
  const showNext = useCallback(() => { setZoom(1); setActive((current) => current === null ? 0 : (current + 1) % images.length); }, [images.length]);
  const close = () => { setZoom(1); setActive(null); };
  const open = (index: number) => { setZoom(1); setActive(index); };
  const zoomIn = () => setZoom((current) => Math.min(current + 0.5, 3));
  const zoomOut = () => setZoom((current) => Math.max(current - 0.5, 1));

  useEffect(() => {
    if (active === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = previousOverflow; };
  }, [active, showNext, showPrevious]);

  return <>
    <div className={`${styles.galleryGrid} ${images.length === 2 ? styles.twoImageGallery : ''} ${images.length === 4 ? styles.fourImageGallery : ''}`}>
      {images.map((image, index) => <div key={`${image.src}-${index}`} className={index === 0 && images.length === 3 ? styles.galleryLarge : ''}>
        <button type="button" className={styles.galleryButton} onClick={() => open(index)} aria-label={`${productName}, ${labels.image} ${index + 1}`}>
          <Image src={image} alt={`${productName}, ${labels.image} ${index + 1}`} fill />
        </button>
      </div>)}
    </div>
    {active !== null && <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={`${productName} — ${labels.image}`} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }} onWheel={(event) => { event.preventDefault(); if (event.deltaY < 0) zoomIn(); else zoomOut(); }}>
      <button type="button" className={styles.lightboxClose} onClick={close} aria-label={labels.close}>×</button>
      {images.length > 1 && <button type="button" className={`${styles.lightboxArrow} ${styles.lightboxPrevious}`} onClick={showPrevious} aria-label={labels.previous}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg></button>}
      <div className={`${styles.lightboxImage} ${zoom > 1 ? styles.lightboxImageZoomed : ''}`} onClick={() => setZoom((current) => current > 1 ? 1 : 2)}><Image src={images[active]} alt={`${productName}, ${labels.image} ${active + 1}`} fill priority style={{ transform: `scale(${zoom})` }} /></div>
      {images.length > 1 && <button type="button" className={`${styles.lightboxArrow} ${styles.lightboxNext}`} onClick={showNext} aria-label={labels.next}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg></button>}
      <div className={styles.zoomControls}><button type="button" onClick={zoomOut} disabled={zoom === 1} aria-label="Zoom out">−</button><span>{Math.round(zoom * 100)}%</span><button type="button" onClick={zoomIn} disabled={zoom === 3} aria-label="Zoom in">+</button></div>
      <span className={styles.lightboxCounter}>{active + 1} / {images.length}</span>
    </div>}
  </>;
}
