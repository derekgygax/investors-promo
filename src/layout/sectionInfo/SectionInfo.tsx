import React from 'react';
import classNames from 'classnames';
import { useContext } from 'react';

// components
import { Description } from './description/Description';

// context
import { LanguageContext } from '@contexts/language';

// styles
import styles from './SectionInfo.module';

type SectionInfoProps = {
  classNameDescription?: string;
  classNameHeader?: string;
  classNameMain: string;
  classNameTitle?: string;
  classNameTitleContainer?: string;
  detailsLink?: TopicDetailsLink;
  description: LanguageVariation[];
  header?: LanguageVariation;
  titles: LanguageVariation[];
  topicId: string;
}

export const SectionInfo: React.FC<SectionInfoProps> = ({
  classNameDescription,
  classNameHeader,
  classNameMain,
  classNameTitle,
  classNameTitleContainer,
  description,
  detailsLink,
  header,
  titles,
  topicId,
}) => {

  const { language } = useContext(LanguageContext);
  const headerText = header ? (header[language]) : null;

  return (
    <div className={classNameMain}>
      <div className={styles.headerTitleContainer}>
        <div className={ classNames(styles.titleContainer, classNameTitleContainer) }>
          { titles.map((title, index) => {
            return (
              <h1
                key={`${ topicId }_title_${ index }`}
                className={ classNames(styles.title, classNameTitle) }
              >
                { title[language] }
              </h1>
            );
          })}
        </div>
        {
          headerText ? (
            <h1 className={classNames(styles.header, classNameHeader)}>
              { headerText }
            </h1>
          ) : null
        }
      </div>
      <Description 
        classNameDescription={ classNameDescription }
        description={ description }
        detailsLink={ detailsLink }
        topicId={ topicId }
      />
    </div>
  );
}