import React from 'react';
import classNames from 'classnames';
import { useContext } from 'react';

// components
import { Container } from '@layout/container/Container';

// styles
import styles from './OldSlogan.module';

// contexts
import { LanguageContext } from '@contexts/language';

interface OldSloganProps {
  className?: string,
}

export const OldSlogan: React.FC<OldSloganProps> = ({ className })  => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div
        className={classNames(styles.main, className)}
      >
        <Container className={styles.container}>
          <div className={styles.header}>
            {language === 'es'
              ? "No ahorre únicamente para su retiro; invierta para vivir."
              : "Don’t just save for retirement; invest for life"}
          </div>
          <div className={styles.bar} />
          {language === 'es'
              ? <div className={styles.description}>Esperamos con interés conocer sus objetivos financieros y mostrarle cómo podemos trabajar para ayudarlo a alcanzarlos.</div>
              : <div className={styles.description}>We look forward to discussing your financial goals and showing you how we can work to help you achieve them.</div>}
        </Container>
      </div>
    </>
  );
};