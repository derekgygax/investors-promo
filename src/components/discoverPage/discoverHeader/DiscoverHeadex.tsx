import React, { useContext } from 'react';
import classNames from 'classnames';

// context
import { LanguageContext } from '@contexts/language';

// styles
import styles from './DiscoverHeader.module.scss';

type DiscoverHeaderProps = {
  topicId: string;
  header: DiscoverTopicInfo;
}

export const DiscoverHeader: React.FC<DiscoverHeaderProps> = ({
  header,
  topicId
}) => {

  const { language } = useContext(LanguageContext);

  return (
    <div>
      <div className={styles.topicHeader}>
        <h1 className={styles.header}>
          { header.label ? header.label[language] : header.title[language] }
        </h1>
        <div className={classNames(styles.barLong, styles.full)} />
      </div>
      <div>
        { header.descriptions.map((description, index) => {
          return (
            <p
              key={`${topicId}_description_${index}`}
              className={styles.description}
            >
              { description[language] }
            </p>
          );
        })}
      </div>
    </div>
  );
}