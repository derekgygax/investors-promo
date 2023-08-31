import React, { useContext } from 'react';

// context
import { LanguageContext } from '@contexts/language';

// components
import { TopicSection } from '@layout/topicSection/TopicSection';
import { Section } from '@layout/section/Section';

// types
import { DataParams } from '../../../types/dataParams';

// styles
import styles from './OurProcess.module';
import stylesStepsTopic from '../stepsTopic.module';
import classNames from 'classnames';

export const OurProcess: React.FC = () => {

  const topic: Topic = HOME_PAGE.OUR_PROCESS;
  const { language } = useContext(LanguageContext);

  const dataParams: DataParams = {
    styles: {
      icon: [ stylesStepsTopic.icon ],
      // For some reason you can't get it to take both from the stylesSteps and ourProcess
      // you need to figure that out. It kinda worked for a second
      dataContainer: [ stylesStepsTopic.dataContainer, styles.dataContainer ],
      sectionDataContainer: [ stylesStepsTopic.sectionDataContainer ],
      dataInfoContainer: [ stylesStepsTopic.dataInfoContainer ]
    },
    showSteps: true
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
        sectionDataClassName={ stylesStepsTopic.sectionData }
      />
    </Section>
  );
}