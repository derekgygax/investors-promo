import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// contexts
import { LanguageContext } from '@contexts/language';

// styles
import styles from './LinkBanner.module';

// utils
import { scrollToBottom } from '../../../utils';


interface LinkBannerProps {
  parentCategory: string;
  linkTypes: [string, string, string];
}

export const LinkBanner: React.FC<LinkBannerProps> = ({ parentCategory, linkTypes }) => {
  const { language } = useContext(LanguageContext);


  const links: any = {
    faq: {
      title: 'FAQs',
      titleES: 'FAQs',
      url: '/discover/faq',
      urlES: '/es/discover/faq',
      pageName: PAGES.DISCOVER
    },
    contact_us: {
      title: 'Contact Us',
      titleES: 'Contacto',
      url: '',
      urlES: ''
    },
    our_process: {
      title: 'Our Process',
      titleES: 'Nuestro Proceso',
      url: "/discover/our-process",
      urlES: "/es/discover/our-process",
      pageName: PAGES.DISCOVER
    },
    why_equities: {
      title: 'Why Equities?',
      titleES: '¿Por qué acciones?',
      url: '/discover/why-equities',
      urlES: '/es/discover/why-equities',
      pageName: PAGES.DISCOVER
    },
    client_experience: {
      title: 'Client Experience',
      titleES: 'Experiencia',
      url: '/discover/client-experience',
      urlES: '/es/discover/client-experience',
      pageName: PAGES.DISCOVER
    }
  }

  return (
    <div className={styles.linkBanner}>
      {linkTypes.map((link: any) => {
        const title = language === 'es' ? links[link].titleES : links[link].title;
        const url = language === 'es' ? links[link].urlES : links[link].url;
        return (
          <div key={parentCategory + '_' + link}>
            {link === 'contact_us' ? (
              <div
                className={styles.link}
                onClick={ scrollToBottom }
              >
                { title }
              </div>
            ) : (
              <Link
                className={styles.link}
                to={ url }
              >
                { title }
              </Link>
            )}
          </div>
        );
      })}
    </div>
  )
}