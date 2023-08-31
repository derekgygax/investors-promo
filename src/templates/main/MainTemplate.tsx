import React from 'react';
import classNames from 'classnames';

// components
import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import { PhoneFloatingButton } from '@components/phoneFloatingButton/PhoneFloatingButton';

// styles
import styles from './MainTemplate.module';

// types
import { MainTemplateProps } from '../../types/mainTemplate';

export const MainTemplate: React.FC<MainTemplateProps> = ({
  children,
  className
}) => {
  return (
    <div
      className={classNames(
        styles.main,
        className,
      )}
    >
      <Header />
      <div className={styles.fullPage}>
        {children}
        <PhoneFloatingButton />
      </div>
      <Footer />
    </div>
  );
};
