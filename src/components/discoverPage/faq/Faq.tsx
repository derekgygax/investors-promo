import React from 'react';

// components
import { Container } from '@layout/container/Container';
import { DropDown } from './dropDown/DropDown';

// styles
import styles from './Faq.module';
import { DiscoverHeader } from '../discoverHeader/DiscoverHeadex';

type FaqProps = {
  topicId: string;
  header: DiscoverTopicInfo;
  info: DiscoverTopicInfo[];
};

export const Faq: React.FC<FaqProps> = ({
  topicId,
  header,
  info,
}) => {
  
  return (
    <div className={styles.main}>
      <Container className={styles.container}>
        <div className={styles.textContainer}>
          <DiscoverHeader
            topicId={ topicId }
            header={ header }
          />
          {info.map((section) => {
            return (
              <div>
                {section.questions?.map((question) => {
                  return (
                    <DropDown 
                      key={`${topicId}_question_${question.id}`}
                      questionInfo={ question }
                    />
                  );
                })}
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  );
};
