import React, { useContext } from 'react';

// context
import { LanguageContext } from '@contexts/language';

// components
import { TopicSection } from '@layout/topicSection/TopicSection';

// types
import { DataParams } from '../../../types/dataParams';

// styles
import styles from './WhyEquities.module';
import { Section } from '@layout/section/Section';
import classNames from 'classnames';

export const WhyEquities: React.FC = () => {

  const topic: Topic = HOME_PAGE.WHY_EQUITIES;
  const { language } = useContext(LanguageContext);

  const dataParams: DataParams = {
    styles: {
      icon: [ styles.icon ],
      dataContainer: [ styles.dataContainer ],
      dataInfoContainer: [ styles.dataInfoContainer ]
    }
  }

  return (
    <Section
      className={ styles.backgroundColor }
    >
      <TopicSection
        topic={ topic }
        topicHeaderClassName={
          language === 'es'
          ? classNames(styles.topicHeader, styles.topicHeaderSpanish)
          : styles.topicHeader
        }
        dataParams={ dataParams }
      />
    </Section>
  );
}