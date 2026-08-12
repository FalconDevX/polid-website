'use client';

import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
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

const distantMops = [
  [mopPurpleGreen, 8, 12, 23, 0, 32, -18, -128],
  [mopRedTeal, 22, 84, 58, -9, -24, 20, 34],
  [mopPink, 72, 8, 38, -17, 22, 16, 112],
  [mopPurple, 86, 74, 27, -5, -30, -14, -42],
  [mopGreen, 10, 58, 47, -13, 18, 28, 168],
  [mopTurquoise, 58, 93, 21, -22, -28, 12, 71],
  [mopPurpleGreen, 36, 7, 66, -28, 25, -22, -83],
  [mopRedTeal, 91, 31, 31, -19, -18, -26, 139],
  [mopPink, 5, 91, 43, -31, 28, 18, -16],
  [mopPurple, 47, 78, 20, -11, -24, 24, 92],
  [mopGreen, 78, 49, 52, -26, 32, -16, -157],
  [mopTurquoise, 28, 33, 35, -36, -22, -20, 53],
  [mopPurpleGreen, 61, 12, 26, -15, 20, 26, 146],
  [mopRedTeal, 16, 43, 72, -24, 26, -14, -61],
  [mopPink, 77, 91, 30, -34, -20, 22, 19],
  [mopPurple, 55, 4, 50, -20, 24, 18, -105],
  [mopGreen, 94, 63, 22, -30, -28, -18, 78],
  [mopTurquoise, 42, 94, 41, -7, 18, -24, 177],
  [mopPurpleGreen, 2, 28, 32, -18, -20, 24, 48],
  [mopRedTeal, 14, 72, 24, -32, 28, -16, -142],
  [mopPink, 31, 97, 46, -12, -24, -22, 87],
  [mopPurple, 68, 2, 28, -27, 22, 26, 14],
  [mopGreen, 97, 18, 39, -4, -26, -18, -94],
  [mopTurquoise, 96, 86, 20, -21, 30, 14, 132],
  [mopPurpleGreen, 3, 48, 55, -35, -18, -24, -36],
  [mopRedTeal, 49, 2, 18, -16, 24, 20, 161],
  [mopPink, 98, 46, 34, -29, -28, 22, 62],
  [mopPurple, 51, 98, 26, -8, 20, -26, -118],
  [mopGreen, 19, 3, 43, -25, 26, 18, 103],
  [mopTurquoise, 82, 97, 30, -14, -22, -20, -68],
  [mopPurpleGreen, 12, 18, 29, -10, 24, 18, 126],
  [mopRedTeal, 9, 37, 42, -23, -20, 24, -47],
  [mopPink, 18, 64, 21, -37, 28, -16, 73],
  [mopPurple, 7, 76, 36, -18, -24, -20, -136],
  [mopGreen, 17, 89, 25, -29, 18, 26, 31],
  [mopTurquoise, 11, 97, 48, -6, -26, 14, 158],
  [mopPurpleGreen, 88, 8, 39, -31, 22, -22, -79],
  [mopRedTeal, 93, 25, 20, -15, -28, 18, 97],
  [mopPink, 86, 44, 51, -27, 24, 20, -12],
  [mopPurple, 98, 55, 27, -39, -18, -26, 143],
  [mopGreen, 89, 82, 34, -20, 26, 16, -111],
  [mopTurquoise, 92, 96, 23, -34, -22, -18, 56],
  [mopPurpleGreen, 39, 42, 24, -12, 16, -12, -38],
  [mopRedTeal, 43, 49, 36, -28, -14, 18, 84],
  [mopPink, 38, 57, 20, -19, 18, 14, 151],
  [mopPurple, 46, 38, 30, -33, -16, -18, -117],
  [mopGreen, 48, 45, 18, -7, 14, 16, 27],
  [mopTurquoise, 45, 55, 41, -24, -18, 12, 106],
  [mopPurpleGreen, 47, 63, 22, -16, 16, -16, -72],
  [mopRedTeal, 52, 35, 34, -36, -12, 18, 164],
  [mopPink, 54, 43, 26, -10, 18, -14, 49],
  [mopPurple, 51, 51, 19, -30, -16, 16, -148],
  [mopGreen, 55, 58, 38, -21, 14, 18, 92],
  [mopTurquoise, 58, 64, 23, -38, -18, -12, -19],
  [mopPurpleGreen, 61, 39, 31, -14, 16, 14, 134],
  [mopRedTeal, 63, 47, 21, -27, -14, -18, -96],
  [mopPink, 60, 54, 35, -5, 18, 12, 66],
  [mopPurple, 64, 60, 17, -32, -16, 16, 178],
  [mopGreen, 42, 33, 27, -18, 14, -14, -54],
  [mopTurquoise, 57, 31, 32, -25, -18, 18, 118],
  [mopPurpleGreen, 31, 18, 28, -9, 18, -16, 39],
  [mopRedTeal, 39, 23, 19, -22, -16, 20, -124],
  [mopPink, 47, 16, 42, -35, 20, 14, 97],
  [mopPurple, 56, 25, 24, -13, -18, -20, -61],
  [mopGreen, 64, 19, 35, -27, 16, 18, 152],
  [mopTurquoise, 72, 27, 21, -17, -20, -14, 18],
  [mopPurpleGreen, 35, 29, 31, -31, 18, 16, -93],
  [mopRedTeal, 68, 13, 26, -6, -16, -18, 73],
  [mopPink, 30, 82, 22, -24, -18, 16, -147],
  [mopPurple, 38, 75, 38, -11, 20, -18, 58],
  [mopGreen, 46, 85, 18, -34, -16, 20, 121],
  [mopTurquoise, 55, 77, 33, -20, 18, 14, -36],
  [mopPurpleGreen, 63, 83, 25, -8, -20, -16, 166],
  [mopRedTeal, 71, 73, 44, -29, 16, 18, -108],
  [mopPink, 34, 69, 27, -15, -18, -20, 82],
  [mopPurple, 67, 88, 20, -37, 20, 16, -12],
] as const;

export default function HomeHero() {
  const t = useTranslations();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const phoneViewport = window.matchMedia('(max-width: 767px)').matches;
    if (!hero || reducedMotion || phoneViewport) return undefined;

    const mopElements = Array.from(hero.querySelectorAll<HTMLElement>('[data-main-mop]'));
    const current = mopElements.map(() => ({ x: 0, y: 0, rotation: 0 }));
    const target = mopElements.map(() => ({ x: 0, y: 0, rotation: 0 }));
    let frameId: number | null = null;

    const renderRepulsion = () => {
      current.forEach((position, index) => {
        position.x += (target[index].x - position.x) * 0.055;
        position.y += (target[index].y - position.y) * 0.055;
        position.rotation += (target[index].rotation - position.rotation) * 0.045;
        hero.style.setProperty(`--mop-${index + 1}-x`, `${position.x}px`);
        hero.style.setProperty(`--mop-${index + 1}-y`, `${position.y}px`);
        hero.style.setProperty(`--mop-${index + 1}-rotate`, `${position.rotation}deg`);
      });

      const moving = current.some((position, index) => (
        Math.abs(target[index].x - position.x) > 0.05
        || Math.abs(target[index].y - position.y) > 0.05
        || Math.abs(target[index].rotation - position.rotation) > 0.02
      ));
      frameId = moving ? window.requestAnimationFrame(renderRepulsion) : null;
    };

    const startRepulsion = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(renderRepulsion);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const effectRadius = 340;
      const maxDistance = 125;

      mopElements.forEach((mop, index) => {
        const rect = mop.getBoundingClientRect();
        const deltaX = rect.left + rect.width / 2 - event.clientX;
        const deltaY = rect.top + rect.height / 2 - event.clientY;
        const distance = Math.hypot(deltaX, deltaY);
        const influence = Math.max(0, 1 - distance / effectRadius);
        const force = influence * influence * influence * maxDistance;
        const normalizer = Math.max(distance, 1);

        target[index].x = (deltaX / normalizer) * force;
        target[index].y = (deltaY / normalizer) * force;
        target[index].rotation = (deltaX / normalizer) * influence * influence * 14;
      });

      startRepulsion();
    };

    const resetRepulsion = () => {
      target.forEach((position) => {
        position.x = 0;
        position.y = 0;
        position.rotation = 0;
      });
      startRepulsion();
    };

    hero.addEventListener('pointermove', handlePointerMove);
    hero.addEventListener('pointerleave', resetRepulsion);

    return () => {
      hero.removeEventListener('pointermove', handlePointerMove);
      hero.removeEventListener('pointerleave', resetRepulsion);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroLightBeams} aria-hidden="true" />
      <div className={styles.distantMops} aria-hidden="true">
        {distantMops.map(([image, top, left, size, delay, driftX, driftY, rotation], index) => (
          <div
            className={styles.distantMop}
            key={`${image.src}-${index}`}
            style={{
              '--distant-top': `${top}%`,
              '--distant-left': `${left}%`,
              '--distant-size': `${size}px`,
              '--distant-delay': `${delay}s`,
              '--distant-duration': `${34 + (index % 6) * 5}s`,
              '--distant-x': `${driftX}px`,
              '--distant-y': `${driftY}px`,
              '--distant-rotation': `${rotation}deg`,
            } as CSSProperties}
          >
            <Image src={image} alt="" sizes={`${size}px`} />
          </div>
        ))}
      </div>
      <div className={styles.heroOrbit} aria-hidden="true">
        <div className={styles.mopOrbitSpinner}>
          <div data-main-mop className={`${styles.mop} ${styles.mopOne}`}><Image src={mopPurpleGreen} alt="" priority /></div>
          <div data-main-mop className={`${styles.mop} ${styles.mopTwo}`}><Image src={mopRedTeal} alt="" priority /></div>
          <div data-main-mop className={`${styles.mop} ${styles.mopThree}`}><Image src={mopPink} alt="" priority /></div>
          <div data-main-mop className={`${styles.mop} ${styles.mopFour}`}><Image src={mopPurple} alt="" priority /></div>
          <div data-main-mop className={`${styles.mop} ${styles.mopFive}`}><Image src={mopGreen} alt="" priority /></div>
          <div data-main-mop className={`${styles.mop} ${styles.mopSix}`}><Image src={mopTurquoise} alt="" priority /></div>
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
