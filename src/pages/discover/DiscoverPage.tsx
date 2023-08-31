import React from 'react';
import classNames from 'classnames';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';

// components
import { Discover } from '@components/discoverPage/discover/Discover';

// contexts
import { LanguageContext } from '@contexts/language';

// styles
import styles from './DiscoverPage.module';

export const DiscoverPage: React.FC = () => {
  const { language } = useContext(LanguageContext);
  let { discoverCategory } = useParams();

  if (discoverCategory === undefined) {
    discoverCategory = DISCOVER_PAGE.CATEGORY_DEFAULT;
  }
  
  if (!DISCOVER_PAGE.DATA.hasOwnProperty(discoverCategory)) {
    if (language === 'es') {
      return <Navigate to='/es/error' replace />
    } else {
      return <Navigate to='/error' replace />
    }
  }

  return (
    <div className={classNames(styles.home)}>
      <Helmet
        title={language === 'es' ? 'Descubrir' : 'Discover'}
        meta={[
          {
            name: 'description',
            content: 'promo'
          },
          {
            name: 'keywords',
            content: 'promo'
          }
        ]}
      />
      <Discover
        category={ discoverCategory }
      />
    </div>
  );
};
