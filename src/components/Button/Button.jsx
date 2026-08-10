import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ to, href, children, variant = 'solid', ...rest }) {
  const className = `${styles.btn} ${variant === 'outline' ? styles.outline : styles.solid}`;

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  );
}
