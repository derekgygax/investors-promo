import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// types
import { ButtonProps } from '../../types/button';

// styles
import styles from './Button.module';


export const Button: React.FC<ButtonProps> = ({
  className = '',
  children,
  onClick,
  style = 'light',
  to = '',
  href = '',
  type = 'button',
  noArrow,
  imageBeforeText
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
          { imageBeforeText ? (
            <span style={{
              backgroundImage: `url("${ imageBeforeText }")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              display: 'block',
              height: '13px',
              width: '13px',
            }}></span>
          ) : (
            null
          )
          }
          <span className={styles.text}>{children}</span>
          <span className={ !noArrow ? styles.rightArrowIcon : null} />
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
          { imageBeforeText ? (
            <span style={{
              backgroundImage: `url("${ imageBeforeText }")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              display: 'block',
              height: '13px',
              width: '13px',
            }}></span>
          ) : (
            null
          )
          }
          <span className={styles.text}>{children}</span>
          <span className={ !noArrow ? styles.rightArrowIcon : null} />
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
        { imageBeforeText ? (
            <span style={{
              backgroundImage: `url("${ imageBeforeText }")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              display: 'block',
              height: '13px',
              width: '13px',
            }}></span>
          ) : (
            null
          )
          }
        <span className={styles.text}>{children}</span>
        <span className={ !noArrow ? styles.rightArrowIcon : null} />
      </span>
    </button>
  );
};
