import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// types
import styles from './GraphButton.module';

interface GraphButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => {};
  style?: 'light' | 'dark';
  to?: string;
  href?: string;
  type?: 'button' | 'link' | 'externalLink' | 'submit';
}

export const GraphButton: React.FC<GraphButtonProps> = ({
  className = '',
  children,
  onClick,
  style = 'light',
  to = '',
  href = '',
  type = 'button'
}) => {
  if (type === 'link' || to) {
    return (
      <Link
        className={classNames(
          styles.buttonContainer,
          style === 'dark' ? styles.dark : null,
          className
        )}
        onClick={onClick}
        to={to}
        type={type}
      >
        <span className={styles.button}>
          <span className={styles.text}>{children}</span>
        </span>
      </Link>
    );
  } else if (type === 'externalLink') {
    return (
      <a
        className={classNames(
          styles.buttonContainer,
          style === 'dark' ? styles.dark : null,
          className
        )}
        onClick={onClick}
        href={href}
        type={type}
      >
        <span className={styles.button}>
          <span className={styles.text}>{children}</span>
        </span>
      </a>
    );
  }
  return (
    <button
      className={classNames(
        styles.buttonContainer,
        style === 'dark' ? styles.dark : null,
        className
      )}
      onClick={onClick}
      type={type}
    >
      <span className={styles.button}>
        <span className={styles.text}>{children}</span>
      </span>
    </button>
  );
};
