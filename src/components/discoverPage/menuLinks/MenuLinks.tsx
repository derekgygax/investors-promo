import React, { useContext} from 'react';
import { Link } from 'react-router-dom';

// context
import { LanguageContext } from '@contexts/language';

// styles
import styles from './MenuLinks.module';

type MenuLinkProps = {
  categorySelected: string;
}

export const MenuLinks: React.FC<MenuLinkProps> = ({ categorySelected }) => {

  const { language } = useContext(LanguageContext);
  const menuLinks = DISCOVER_PAGE.MENU_LINKS;

  return (
    <div className={styles.main}>
      <div className={styles.menu}>
        {menuLinks.map((link: any) => {
          return (
            <div
              key={`discoverMenuLink_${link.id}`}
              className={styles.linkContainer}
            >
              <Link
                className={styles.link}
                to={ link.url[language] }
              >
                <span>
                  { link.label[language] }
                </span>
              </Link>
              {categorySelected === link.id ? (
                <div className={styles.barLong} />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  )
}