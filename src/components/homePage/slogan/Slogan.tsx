import React from 'react';
import classNames from 'classnames';
import { useContext } from 'react';

// components
import { ContainerInHalves } from '@layout/containerInHalves/ContainerInHalves';
import { CallToAction } from '../../callToAction/CallToAction';

// contexts
import { LanguageContext } from '@contexts/language';

// styles
import styles from './Slogan.module';
import { Section } from '@layout/section/Section';

export type SloganProps = {
  sloganText: LanguageVariation;
  className: string;
};

export const Slogan: React.FC<SloganProps> = ({
  className,
  sloganText
}) => {

  const { language } = useContext(LanguageContext);

  return (
    <Section
      className={ classNames(styles.section, className) }
    >
        <ContainerInHalves
          halfContainers={styles.halfContainers}
          firstChild={          
            <h1 className={styles.sloganText}>
            { sloganText[language] }
            </h1>
          }
          secondChild={
            <CallToAction
              showPhoneNumber={true}
            />
          }
          classNameContainerSecond={ styles.containerSecond }
        />
    </Section>
  );
};

