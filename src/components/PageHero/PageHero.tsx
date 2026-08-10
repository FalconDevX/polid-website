import type { StaticImageData } from 'next/image';
import Reveal from '../Reveal/Reveal';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  image?: StaticImageData;
  lightOverlay?: boolean;
}

export default function PageHero({ eyebrow, title, image, lightOverlay = false }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-bg-alt px-7 pb-[5.5rem] pt-28 text-center transition-colors duration-[400ms]"
      style={image ? { backgroundImage: `url(${image.src})` } : undefined}
    >
      <div
        className={
          lightOverlay
            ? 'absolute inset-0 bg-[linear-gradient(180deg,rgba(10,20,13,0.22),rgba(10,20,13,0.38))]'
            : 'absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,13,0.55),rgba(10,10,13,0.72))]'
        }
      />
      <Reveal className="relative z-[1]">
        {eyebrow && (
          <span className="mb-[0.7rem] block text-[0.78rem] font-semibold uppercase tracking-[3px] text-[#c9efce]">
            {eyebrow}
          </span>
        )}
        <h1 className="text-[clamp(2.4rem,5vw,3.6rem)] text-[#fdfaf3]">{title}</h1>
      </Reveal>
    </section>
  );
}
