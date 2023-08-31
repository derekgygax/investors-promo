import React from 'react';
import classNames from 'classnames';

// components
import { ContainerInHalves } from '../containerInHalves/ContainerInHalves';
import { SectionData } from '../sectionData/SectionData';

// types
import { DataParams } from '../../types/dataParams';

// styles
import styles from './TopicSection.module';
import { SectionInfo } from '@layout/sectionInfo/SectionInfo';
import { SwiperMobile } from '@layout/swiperMobile/SwiperMobile';

type TopicSectionProps = {
  topicHeaderClassName: string;
  topic: Topic;
  dataParams: DataParams;
  sectionDataClassName?: string;
}

export const TopicSection: React.FC<TopicSectionProps> = ({
  topicHeaderClassName,
  topic,
  dataParams,
  sectionDataClassName,
}) => {

  return(
    <div className={classNames(styles.main)}>
      <ContainerInHalves
        classNameFlexDirection={styles.flexDirection}
        halfContainers={styles.halfContainers}
        classNameContainerSecond={ styles.containerSecond }
        firstChild={(
          // There are two SectionInfo's here. One of them is used for mobile
          // and one is used for the desktop. They are identically constructed
          // but have different information. That is why there are two, you see the 
          // different classNameMains to differentiate when each one is used
          <>
            <SectionInfo
              classNameHeader={ topicHeaderClassName }
              classNameMain={ styles.desktop }
              description={ topic.info.description }
              detailsLink={ topic.info.detailsLink }
              header={ topic.info.header }
              titles={ topic.info.title }
              topicId={ topic.id }
            />
            <SectionInfo
              classNameHeader={ topicHeaderClassName }
              classNameMain={styles.mobile}
              description={ topic.mobileInfo.description }
              detailsLink={ topic.mobileInfo.detailsLink }
              titles={ topic.mobileInfo.title }
              topicId={ topic.id }
            />
          </>
        )}
        secondChild={
          <>
            <SectionData
              classNameMain={ classNames(styles.desktop, sectionDataClassName) }
              topicId={ topic.id }
              topicData={ topic.data }
              dataParams={ dataParams }
            />
            <SwiperMobile
              classNameMain={ classNames(styles.mobile,  sectionDataClassName) }
              topicId={ topic.id }
              topicData={ topic.data }
              dataParams={ dataParams }
            />
          </>
        }
      />
    </div>
  );
}