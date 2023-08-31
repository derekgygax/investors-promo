import React from 'react';

// components
import { Section } from '@layout/section/Section';
import { TopicSection } from '@layout/topicSection/TopicSection';

// types
import { DataParams } from '../../../types/dataParams';

// styles
import styles from './AboutUs.module';
import stylesSixIconTopic from '../sixIconTopic.module';

export const AboutUs: React.FC = () => {

  const topic: Topic = HOME_PAGE.ABOUT_US;

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
        topicHeaderClassName={ styles.topicHeader }
        dataParams={ dataParams }
        sectionDataClassName={ stylesSixIconTopic.sectionData }
      />
    </Section>
  );
}