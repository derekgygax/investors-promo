import React from 'react';

// components
import { Section } from '@layout/section/Section';
import { TopicSection } from '@layout/topicSection/TopicSection';

// types
import { DataParams } from '../../../types/dataParams';

// styles
import styles from './AboutYou.module';
import stylesStepsTopic from '../stepsTopic.module';

export const AboutYou: React.FC = () => {

  const topic: Topic = HOME_PAGE.ABOUT_YOU;

  const dataParams: DataParams = {
    styles: {
      icon: [ stylesStepsTopic.icon ],
      dataContainer: [ stylesStepsTopic.dataContainer ],
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
        topicHeaderClassName={ styles.topicHeader}
        dataParams={ dataParams }
        sectionDataClassName={ stylesStepsTopic.sectionData }
      />
    </Section>
  );
}