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
import mopTurquoise from '../../assets/images/mop-turquoise.png';
import styles from './Home.module.css';

export default function HomeHero() {
  const t = useTranslations();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const phoneViewport = window.matchMedia('(max-width: 767px)').matches;
    if (!hero || reducedMotion || phoneViewport) return undefined;

    const parallax = [
      { x: -12, y: -8, ease: 0.045 },
      { x: 18, y: 26, ease: 0.065 },
      { x: -32, y: -17, ease: 0.085 },
      { x: 42, y: 23, ease: 0.055 },
      { x: -24, y: 48, ease: 0.1 },
      { x: 58, y: -36, ease: 0.075 },
    ];
    const current = parallax.map(() => ({ x: 0, y: 0 }));
    const target = { x: 0, y: 0 };
    let frameId: number | null = null;

    const renderParallax = () => {
      parallax.forEach((settings, index) => {
        current[index].x += (target.x - current[index].x) * settings.ease;
        current[index].y += (target.y - current[index].y) * settings.ease;
        hero.style.setProperty(`--mop-${index + 1}-x`, `${current[index].x * settings.x}px`);
        hero.style.setProperty(`--mop-${index + 1}-y`, `${current[index].y * settings.y}px`);
      });

      const moving = current.some((position) => Math.abs(target.x - position.x) > 0.001 || Math.abs(target.y - position.y) > 0.001);
      frameId = moving ? window.requestAnimationFrame(renderParallax) : null;
    };

    const startParallax = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(renderParallax);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      startParallax();
    };

    const resetParallax = () => {
      target.x = 0;
      target.y = 0;
      startParallax();
    };

    hero.addEventListener('pointermove', handlePointerMove);
    hero.addEventListener('pointerleave', resetParallax);

    return () => {
      hero.removeEventListener('pointermove', handlePointerMove);
      hero.removeEventListener('pointerleave', resetParallax);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroOrbit} aria-hidden="true">
        <div className={styles.mopOrbitSpinner}>
          <div className={`${styles.mop} ${styles.mopOne}`}><Image src={mopPurpleGreen} alt="" priority /></div>
          <div className={`${styles.mop} ${styles.mopTwo}`}><Image src={mopRedTeal} alt="" priority /></div>
          <div className={`${styles.mop} ${styles.mopThree}`}><Image src={mopPink} alt="" priority /></div>
          <div className={`${styles.mop} ${styles.mopFour}`}><Image src={mopPurple} alt="" priority /></div>
          <div className={`${styles.mop} ${styles.mopFive}`}><Image src={mopGreen} alt="" priority /></div>
          <div className={`${styles.mop} ${styles.mopSix}`}><Image src={mopTurquoise} alt="" priority /></div>
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
