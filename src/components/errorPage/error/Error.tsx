import React, { useContext } from 'react';
import classNames from 'classnames';

// components
import { Container } from '@layout/container/Container';

// context
import { LanguageContext } from '@contexts/language';

// types
import { ErrorProps } from '../../../types/error';

// styles
import styles from './Error.module';

export const Error: React.FC<ErrorProps> = ({ className }) => {

  const { language } = useContext(LanguageContext);

  return (
    <div className={classNames(styles.main, className)}>
      <Container className={styles.container}>
        <h1 className={styles.header}>404</h1>
        <div className={styles.barContainer}>
          <div className={styles.bar} />
        </div>
        <h3 className={styles.subheader}>
          {
            language === 'es' ? 'Página no encontrada' : 'Page Not Found'
          }
        </h3>
      </Container>
    </div>
  );
};
