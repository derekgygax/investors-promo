import React from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet-async';

// components
import { Error } from '@components/errorPage/error/Error';

// types
import { ErrorPageProps } from '../../types/errorPage';

// styles
import styles from './ErrorPage.module';

export const ErrorPage: React.FC<ErrorPageProps> = ({ className }) => {
  return (
    <div className={classNames(styles.error, className)}>
      <Helmet
        title="404"
        meta={[
          {
            name: 'description',
            content: 'promo'
          },
          {
            name: 'keywords',
            content: '404 - promo'
          }
        ]}
      />
      <Error />
    </div>
  );
};
