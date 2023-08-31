import React from 'react';
import classNames from 'classnames';

// styles
import styles from './Section.module.scss';

type SectionProps = {
  className: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ className, children }) => {
  return (
    <div className={ classNames(styles.main, className) }>
      { children }
    </div>
  );
}