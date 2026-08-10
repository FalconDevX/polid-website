import type { MouseEventHandler, ReactNode } from 'react';
import { Link } from '@/i18n/navigation';

const base =
  'relative isolate overflow-hidden inline-flex items-center justify-center gap-2 px-[2.1rem] py-[0.95rem] text-[0.78rem] font-semibold tracking-[3px] uppercase border border-transparent cursor-pointer transition-[transform,box-shadow,color,background-color,border-color] duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]';
const solid = 'bg-gold text-white hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(37,122,62,0.28)] hover:bg-gold-dark';
const outline = 'bg-transparent text-ink border-border hover:-translate-y-0.5 hover:border-gold hover:text-gold-dark';

interface ButtonProps {
  to?: string;
  href?: string;
  variant?: 'solid' | 'outline';
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ to, href, children, variant = 'solid', className, onClick, disabled, type = 'button' }: ButtonProps) {
  const classes = `${base} ${variant === 'outline' ? outline : solid} ${className ?? ''}`;

  if (to) {
    return (
      <Link href={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
