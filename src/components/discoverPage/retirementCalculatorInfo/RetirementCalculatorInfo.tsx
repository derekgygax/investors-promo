import React from 'react';
// import classNames from 'classnames';
import { useContext } from 'react';

// components
import { Container } from '@layout/container/Container';

// styles
import styles from './RetirementCalculatorInfo.module';

// contexts
import { LanguageContext } from '@contexts/language';
import { DiscoverHeader } from '../discoverHeader/DiscoverHeadex';

type RetirementCalculatorInfoProps = {
  topicId: string;
  header: DiscoverTopicInfo;
  info: DiscoverTopicInfo[];
};

export const RetirementCalculatorInfo: React.FC<RetirementCalculatorInfoProps> = ({
  topicId,
  header,
  info,
}) => {

  const { language } = useContext(LanguageContext);

  return (
    <>
      <div className={styles.main}>
        <Container className={styles.container}>
          <div className={styles.textContainer}>
            <DiscoverHeader
              topicId={ topicId }
              header={ header }
            />
            {
              info.map((section, index_0) => {
                return (
                  <div key={`${ topicId }_${ section.id }_${ index_0 }`}>
                    <h4 className={styles.subHeader}>
                      { section.title[language] }
                    </h4>
                    <img 
                      className={styles.formulaImg} 
                      src={require(`@assets/discover/${ section.image?.name }`)}
                      alt={ section.image?.altText }
                    />
                    <ul className={styles.description}>
                    {
                      section.image?.descriptions.map((description, index_1) => {
                        return(
                          <li key={`${ topicId }_${section.id}_${index_0}_image_description_${index_1}`}>
                            { description[language] }
                          </li>
                        );
                      })
                    }
                    </ul>
                    <div>
                      {
                        section.descriptions.map((description, index_2) => {
                          return (
                            <p 
                              className={styles.description}
                              key={`${ topicId }_${section.id}_${index_0}_description_${index_2}`}
                            >
                              { description[language] }
                              { section.descriptionLinks ? (
                                <a
                                  className={ styles.descriptionLink }
                                  href={ 
                                    section.descriptionLinks[index_2].url
                                  }
                                >
                                  <span>
                                    { section.descriptionLinks[index_2].label[language] }.
                                  </span>
                                </a>
                              ) : ( null )
                              }
                            </p>
                          );
                        })
                      }
                    </div>
                  </div>
                );
              })
            }
          </div>
        </Container>
      </div>
    </>
  );
};
