import React from 'react';
import classNames from 'classnames';

// components
import { ContainerInHalves } from '@layout/containerInHalves/ContainerInHalves';
import { Container } from '@layout/container/Container';
import { FooterInfo } from './footerInfo/FooterInfo';

// context

// styles
import styles from './Footer.module';
import { FooterCallToAction } from './footerCallToAction/FooterCallToAction';
import { Section } from '@layout/section/Section';

export const Footer: React.FC = () => {

  const footerConfig = FOOTER_CONFIG;

  const copyrightNode = (
    <Container className={styles.containerBottom}>
      <div className={styles.footerBottomContainer}>
        <div className={styles.footerBottomTextContainer}>
          <p>
            &copy; Copyright 2021 Promo Example, Inc. <strong>|</strong> All rights reserved.
          </p>
        </div>
      </div>
    </Container>
  );

  return (
    <>

  {/* FOR THE DESKTOP */}
      <div className={classNames(styles.main, styles.desktop)}>
        <ContainerInHalves
          halfContainers={
            styles.halfContainers
          }
          classNameFlexDirection={
            styles.flexDirection
          }
          firstChild={
            <FooterInfo 
              footerInfo={ footerConfig.info }
            />
          }
          secondChild={
            <FooterCallToAction
              callToActionInfo={ footerConfig.callToActionInfo }
            />
          }
          classNameContainerSecond={ styles.containerSecond }
        />
        { copyrightNode }
      </div>

  {/* FOR THE MOBILE */}
      <div className={classNames(styles.mobile)}>
        <Section className={ styles.mobileCallToAction }>
          <Container>
            <FooterCallToAction
              callToActionInfo={ footerConfig.callToActionInfo }
            />
          </Container>
        </Section>
        <div className={ styles.main }>
          <Container>
            <FooterInfo 
              footerInfo={ footerConfig.info }
            />
            { copyrightNode }
          </Container>
        </div>
      </div>
    </>
  );
}