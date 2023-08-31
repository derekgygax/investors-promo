import React, { useContext } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// context
import { LanguageContext } from '@contexts/language';

// styles
import styles from './Description.module';

type DescriptionProps = {
  classNameDescription?: string;
  description: LanguageVariation[];
  detailsLink?: TopicDetailsLink;
  topicId: string;
};

export const Description: React.FC<DescriptionProps> = ({
  classNameDescription,
  description,
  detailsLink,
  topicId,
}) => {

  const { language } = useContext(LanguageContext);
  const detailsLinkNode = detailsLink ? (
    <Link 
    className={ styles.detailsLink }
      to={detailsLink.url[language]}
    >
      { detailsLink.label[language] }
    </Link>
  ) : (null);

  return (
    <div className={ styles.main }>
      {
        description.map((descriptionPiece, index) => {
          return (
            <div
              key={`${topicId}_description_${index}`}
              className={
                index === 0
                ? classNames(styles.description, classNameDescription)
                : classNames(styles.description, styles.notFirstDescription, classNameDescription)
              }
            >
              <span className={styles.spanSmall}>
                { descriptionPiece[language] }
              </span>
              {
                index === (description.length - 1) ? (
                  <>
                    { detailsLinkNode }
                  </>
                ) : (null)
              }
            </div>
          );
        })
      }
    </div>
  );
}