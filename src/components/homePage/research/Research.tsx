import React, { useContext } from 'react';

// context
import { LanguageContext } from '@contexts/language';

// components
import { TopicSection } from '@layout/topicSection/TopicSection';

// types
import { DataParams } from '../../../types/dataParams';

// styles
import styles from './Research.module';
import stylesSixIconTopic from '../sixIconTopic.module.scss';
import { Section } from '@layout/section/Section';
import classNames from 'classnames';

export const Research: React.FC = () => {

  const topic: Topic = HOME_PAGE.RESEARCH;
  const { language } = useContext(LanguageContext);

  const dataParams: DataParams = {
    styles: {
      icon: [ stylesSixIconTopic.icon ],
      dataContainer: [ stylesSixIconTopic.dataContainer ],
      dataInfoContainer: [ stylesSixIconTopic.dataInfoContainer ]
    }
  };

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
        sectionDataClassName={ stylesSixIconTopic.sectionData }
      />
    </Section>
  );
}