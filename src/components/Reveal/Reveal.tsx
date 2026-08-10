import type { CSSProperties, ElementType, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  style?: CSSProperties;
  delay?: number;
}

export default function Reveal({ children, className = '', as: Tag = 'div', style }: RevealProps) {
  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
}
