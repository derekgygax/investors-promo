import React, { useContext } from 'react';
import classNames from 'classnames';

// context
import { LanguageContext } from '@contexts/language';

// styles
import styles from './FooterInfo.module';
import { Logo } from '@components/logo/Logo';
import { FooterLink } from '../footerLink/FooterLink';
import { FooterDownload } from '../footerDownload/FooterDownload';
import { TelephoneButton } from '@components/telephoneButton/TelephoneButton';

type FooterInfoProps = {
  footerInfo: FooterInformation
}

export const FooterInfo: React.FC<FooterInfoProps> = ({
  footerInfo
}) => {

  const { language } = useContext(LanguageContext);
  const slogan = footerInfo.slogan[language];

  const leftLinks = footerInfo.leftLinks;
  const rightLinks = footerInfo.rightLinks;
  const callUsWords = footerInfo.callUsWords[language];

  return (
    <div className={styles.main}>
      <Logo
        className={styles.footerLogo}
      />
      <div className={styles.footerSlogan}>{ slogan }</div>
      <div className={styles.linksContainer}>
        <div className={styles.leftSide}>
          {leftLinks.map((link, index) => {
            return (
              <FooterLink
                key={`leftFooterLink_${index}_${ link.pageName }_${ link.label }`}
                url={ link.url[language] }
                label={ link.label[language] }
              />
            )
          })}
          <div className={styles.socialMediaIcons}>
            {
              footerInfo.socialMedia.map((media) => {
                return (
                  <a
                    key={`footer_socialMediaIcon_${ media.id }`}
                    target="_blank"
                    href={ media.href }
                  >
                    <img
                      className={styles.socialMediaIcon}
                      src={require(`@assets/icons/${ media.iconName }`)}
                    />
                  </a>
                );
              })
            }
          </div>
        </div>
        <div className={ styles.rightSide }>
          {rightLinks.map((link, index) => {
            return (
              link.download ? (
                <FooterDownload
                  key={`rightFooterDownload_${index}_download_${ link.label }`}
                  href={ link.url[language] }
                  label={ link.label[language] }
                />
              ) : (
                <FooterLink
                  key={`rightFooterLink_${index}_${ link.pageName }_${ link.label }`}
                  url={ link.url[language] }
                  label={ link.label[language] }
                />
            ));
          })}
        </div>
      </div>
      <div className={styles.callUsContainer}>
        <div className={classNames(styles.callUsWordsContainer)}>
          <strong className={styles.callUsWords}>
            { callUsWords }
          </strong>
        </div>
        <TelephoneButton
          className={ styles.footerTelephoneButton }
        />
      </div>
    </div>
  );
}