import React, { useContext } from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet-async';

// components
import { AboutUs } from '@components/homePage/aboutUs/AboutUs';
import { AboutYou } from '@components/homePage/aboutYou/AboutYou';
import { Growth } from '@components/homePage/growth/Growth';
import { Hero } from '@components/hero/Hero';
import { OurProcess } from '@components/homePage/ourProcess/OurProcess';
import { Research } from '@components/homePage/research/Research';
import { Slogan } from '@components/homePage/slogan/Slogan';
import { WhyEquities } from '@components/homePage/whyEquities/WhyEquities';

// contexts
import { LanguageContext } from '@contexts/language';

// types
import { HomePageProps } from "../../types/homePage";

// styles
import styles from './HomePage.module';

export const HomePage: React.FC<HomePageProps> = ({ className }) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className={classNames(styles.home, className)}>
      <Helmet
        title={ HOME_PAGE.HELMET.title[language] }
        meta={ HOME_PAGE.HELMET.meta }
      />
      {/* Below is for the desktop */}
      <Hero
        classNameBackgroundImage={
          classNames(
            styles.backgroundImage,
            styles.desktop
          )
        }
        description={ HOME_PAGE.HERO.info.description }
        headers={ HOME_PAGE.HERO.info.headers }
        id={ HOME_PAGE.HERO.id }
      />

      {/* Below is for the mobile */}
      <Hero
        classNameBackgroundImage={
          classNames(
            styles.backgroundImage,
            styles.mobile
          )
        }
        description={ HOME_PAGE.HERO.mobileInfo.description }
        headers={ HOME_PAGE.HERO.mobileInfo.headers }
        id={ HOME_PAGE.HERO.id }
      />
      <AboutUs />
      <AboutYou />
      <Slogan
        className={styles.sloganRetirement}
        sloganText={ HOME_PAGE.RETIREMENT_SLOGAN }
      />
      <WhyEquities />
      <Growth />
      <Slogan
        className={styles.sloganPerformance}
        sloganText={ HOME_PAGE.PERFORMANCE_SLOGAN }
      />
      <OurProcess />
      <Research />
    </div>
  );
}