import React, { useContext } from 'react';

// context
import { LanguageContext } from '@contexts/language';

// styles
import styles from './VideoParallax.module';

export const VideoParallax: React.FC = () => {

  const {language } = useContext(LanguageContext);

  return (
    <div className={styles.main}>
      <video width="400" controls muted>
        <source src="/assets/videos/promo-info.mp4" type="video/mp4" />
        {
          language === 'es' 
          ? ''
          : 'Your browser does not support HTML video.'
        }
      </video>
    </div >
  );
};

