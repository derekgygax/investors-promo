
import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext } from '../../contexts/language';
import { useContext, useState } from 'react';

// styles
import styles from './Menu.module';

// types
import { LanguageType } from '@contexts/language';

type LanguageLink = {
  language: LanguageType,
  label: string,
  url: string
}

type MenuProps = {
  menuConfig: MENU_CONFIG;
}

export const Menu: React.FC<MenuProps> = ({ menuConfig }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [menuVisibility, setMenuVisibility] = useState('invisible');
  const pathname = useLocation().pathname;

  // this canSwitchToSpanish is set in the config files
  const canSwitchToSpanish = menuConfig.canSwitchToSpanish;
  const navItems = menuConfig.navItems;

  let languageLink: LanguageLink = {
    language: 'en',
    label: "English",
    // Remove the language prefix, the first 3 letters in pathname
    url: pathname.substring(3)
  };

  if (language === 'en') {
    languageLink = {
      language: 'es',
      label: 'Español',
      // Add the language prefix to the pathname
      // If on home page don't add the '/' at the end
      url: `/es${pathname === '/' ? '' : pathname}`
    };
  }

  return (
    <div className={styles.container}>
      <button className={styles.menuButton} onClick={() => setMenuVisibility('visible')} />
      <button
        className={classNames(
          styles.hideMenu,
          menuVisibility === 'visible' ? styles.visible : null
        )}
        onClick={() => setMenuVisibility('invisible')}
      />
      <div
        className={
          classNames(
            styles.menu,
            menuVisibility === 'visible' ? styles.visible : null
          )
        }
      >
        <nav className={styles.menuNavbar}>
          {navItems.map((item, i) => (
            <Link
              onClick={() => {
                setMenuVisibility('invisible');
              }}
              key={i}
              className={classNames(
                styles.menuNavbarLink,
                item.url[language] === pathname ? styles.active : null
              )}
              to= {item.url[language] }
            >
              { item.label[language] }
            </Link>
          ))}
          { canSwitchToSpanish ? (
            <Link
              className={styles.menuNavbarLink}
              onClick={() => {
                // Set the language globally
                setLanguage(languageLink.language);
              }}
              to={ languageLink.url }
            >
              { languageLink.label }
            </Link>
          ) : null }
        </nav>
      </div>
    </div>
  );
};
