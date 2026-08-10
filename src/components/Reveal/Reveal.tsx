import type { CSSProperties, ElementType, ReactNode } from 'react';
import styles from './Reveal.module.css';

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  style?: CSSProperties;
  delay?: number;
}

export default function Reveal({ children, className = '', as: Tag = 'div', style, delay = 0 }: RevealProps) {
  return (
    <Tag className={`${styles.reveal} ${className}`} style={{ ...style, animationDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
