import React from 'react';
import classNames from 'classnames';
import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

// components
import { Menu } from '../menu/Menu';
import { Logo } from '../logo/Logo'

// context
import { LanguageContext } from '@contexts/language';

// styles
import styles from './Header.module';

const HEADER_HEIGHT = 100;

export const Header: React.FC = () => {
  const [opacity, setOpacity] = useState(0);
  const [height, setHeight] = useState(HEADER_HEIGHT);

  const { language } = useContext(LanguageContext);

  const location = useLocation();
  const onDiscoverPage: boolean = location.pathname.indexOf(`/${PAGES.DISCOVER}`) > -1;

  // This is the link to the home page
  const toLink = language === 'es' ? '/es' : '/';

  const headerConfig = HEADER_CONFIG;

  const handleScroll = () => {
      const newOpacity = window.scrollY * 0.005;
      setOpacity(newOpacity > 0.98 ? 0.98 : newOpacity);

    const newHeight = HEADER_HEIGHT - window.scrollY;
    setHeight(newHeight < HEADER_HEIGHT ? HEADER_HEIGHT : newHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.section} style={{
      backgroundColor: `rgba(2, 36, 74, ${onDiscoverPage ? 1 : opacity})`,
      height: `${height}px`,
      marginBottom: `-${height}px`
    }}>
      <div className={styles.container}>
        <Link to={toLink} className={classNames(styles.logo)}>
          <Logo />
        </Link>
        <Menu
          menuConfig={ headerConfig.menu }
        />
      </div>
    </div>
  )
};
