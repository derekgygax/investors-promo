import React, { useContext } from 'react';
import classNames from 'classnames';

// components
import { CallToAction } from '../callToAction/CallToAction';
import { ContainerInHalves } from '@layout/containerInHalves/ContainerInHalves';
import { Button } from '@components/button/Button';

// contexts
import { LanguageContext } from '../../contexts/language';

// utils
import { scrollToBottom } from '../../utils';

// styles
import styles from './Hero.module';

type HeroProps = {
  classNameBackgroundImage: string;
  description: LanguageVariation;
  headers: LanguageVariation[];
  id: string;
}

export const Hero: React.FC<HeroProps> = ({
  classNameBackgroundImage,
  description,
  headers,
  id
}) => {

  const { language } = useContext(LanguageContext);

  return (
    <div
      className={classNames(styles.main, classNameBackgroundImage)}
    >
      <div className={styles.backgroundBlue}>
        <ContainerInHalves
          classNameContainerSecond={ styles.containerSecond }
          firstChild={(
            <>
              <div className={styles.header}>
                {headers.map((header, index) => {
                  return (
                    <div key={`${id}_header_${index}`}>
                      { header[language] }
                    </div>
                  );
                })}
              </div>
              <div className={classNames(styles.barLong)} />
              <p className={styles.description}>
              { description[language] }
              </p>
            </>
          )}
          secondChild={(
            <>
            {/* FOR THE DESKTOP */}
            <CallToAction
              className={ styles.desktop }
              showPhoneNumber={true}
            />

            {/* FOR MOBILE */}
            <div className={classNames(styles.buttons, styles.mobile)}>
              <Button
                noArrow={true}
                className={styles.button}
                onClick={() => {
                  scrollToBottom();
                  return {};
                }}
              >
                Schedule A Meeting
              </Button>
            </div>
            </>
          )}
        />
      </div>
    </div>
  );
};

