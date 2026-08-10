'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Button from '../Button/Button';
import mopPurpleGreen from '../../assets/images/mop-purple-green.png';
import mopRedTeal from '../../assets/images/mop-red-teal.png';
import mopPink from '../../assets/images/mop-pink.png';
import mopPurple from '../../assets/images/mop-purple.png';
import mopGreen from '../../assets/images/mop-green.png';
import styles from './Home.module.css';

export default function HomeHero() {
  const t = useTranslations();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const depths = [12, 20, 28, 36, 46];
    const current = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let frameId: number;

    const renderParallax = () => {
      current.x += (target.x - current.x) * 0.075;
      current.y += (target.y - current.y) * 0.075;

      depths.forEach((depth, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        hero.style.setProperty(`--mop-${index + 1}-x`, `${current.x * depth * direction}px`);
        hero.style.setProperty(`--mop-${index + 1}-y`, `${current.y * depth * direction}px`);
      });

      frameId = window.requestAnimationFrame(renderParallax);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const resetParallax = () => {
      target.x = 0;
      target.y = 0;
    };

    hero.addEventListener('pointermove', handlePointerMove);
    hero.addEventListener('pointerleave', resetParallax);
    frameId = window.requestAnimationFrame(renderParallax);

    return () => {
      hero.removeEventListener('pointermove', handlePointerMove);
      hero.removeEventListener('pointerleave', resetParallax);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroOrbit} aria-hidden="true">
        <div className={`${styles.mop} ${styles.mopOne}`}>
          <Image src={mopPurpleGreen} alt="" priority />
        </div>
        <div className={`${styles.mop} ${styles.mopTwo}`}>
          <Image src={mopRedTeal} alt="" priority />
        </div>
        <div className={`${styles.mop} ${styles.mopThree}`}>
          <Image src={mopPink} alt="" priority />
        </div>
        <div className={`${styles.mop} ${styles.mopFour}`}>
          <Image src={mopPurple} alt="" priority />
        </div>
        <div className={`${styles.mop} ${styles.mopFive}`}>
          <Image src={mopGreen} alt="" priority />
        </div>
      </div>
      <div className={styles.heroContent}>
        <span className={styles.heroEyebrow}>{t('intro.eyebrow')}</span>
        <h1 className={styles.heroTitle}>{t('hero.title')}</h1>
        <p className={styles.heroSubtitle}>{t('hero.subtitle')}</p>
        <Button to="/produkty">{t('hero.cta')}</Button>
      </div>
    </section>
  );
}
