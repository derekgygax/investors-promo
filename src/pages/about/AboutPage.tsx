import React from 'react';
import classNames from 'classnames';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';

// components
import { Hero } from '@components/hero/Hero';

import { Team } from '@components/aboutPage/team/Team';
import { VideoParallax } from '@components/aboutPage/videoParallax/VideoParallax';

// contexts
import { LanguageContext } from '@contexts/language';

// types
import { AboutPageProps } from '../../types/aboutPage';

// styles
import styles from './AboutPage.module';
import { OldSlogan } from '@components/aboutPage/oldSlogan/OldSlogan';
import { HistoryAndIdentity } from '@components/aboutPage/historyAndIdentity/HistoryAndIdentity';

export const AboutPage: React.FC<AboutPageProps> = ({ className }) => {
  const { language } = useContext(LanguageContext);

  const heroInfo = {
    classNameBackgroundImage: styles.backgroundImage,
    description: {
      es: 'Dedicados a obtener rendimientos sobresalientes a largo plazo y a proporcionar posibilidades de inversión adicionales a nuestros clientes durante más de 20 años.',
      en: 'Dedicated to delivering above-average long-term returns and providing additional investment possibilities to our clients for over 20 years.'
    },
    headers: [
      {
        es: 'Enfocados en',
        en: 'Focused on'
      },
      {
        es: 'Proporcionar',
        en: 'Delivering'
      },
      {
        es: 'Rendimientos',
        en: 'Performance'
      }
    ],
    id: 'about'
  }


  return (
    <div className={classNames(styles.home, className)}>
      <Helmet
        title={language === 'es' ? 'Quiénes Somos' : 'About Us'}
        meta={[
          {
            name: 'description',
            content: 'promo'
          },
          {
            name: 'keywords',
            content: 'promo, ESG, SRI, socially responsible investing, environmental social and governance, sustainable investing, impact investing, values-based investing, conscious investing, green investing'
          }
        ]}
      />
      <Hero 
        classNameBackgroundImage={ heroInfo.classNameBackgroundImage }
        description={ heroInfo.description }
        headers={ heroInfo.headers }
        id={ heroInfo.id }
      />
      <HistoryAndIdentity />
      <Team/>
      <VideoParallax />
      <OldSlogan />
    </div>
  );
};
