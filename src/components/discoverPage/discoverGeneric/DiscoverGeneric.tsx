import React, { useContext } from 'react';

// components
import { Container } from '@layout/container/Container';

// contexts
import { LanguageContext } from '@contexts/language';

// styles
import styles from './DiscoverGeneric.module';
import { DiscoverHeader } from '../discoverHeader/DiscoverHeadex';

type DiscoverGenericProps = {
  topicId: string;
  header: DiscoverTopicInfo;
  info: DiscoverTopicInfo[];
};

export const DiscoverGeneric: React.FC<DiscoverGenericProps> = ({
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
            {info.map((section, index_0) => {
              return (
                <div
                  key={`${ topicId }_${ section.id }_${ index_0 }`}
                  className={ styles.section }
                >
                  <div className={ styles.sectionHeader }>
                    <h4 className={styles.sectionHeaderText}>
                      { section.title[language] }
                    </h4>
                  </div>
                  <div className={ styles.sectionDescriptions }>
                    { section.descriptions.map((description, index_1) => {
                      return (
                        <p
                          key={`${ topicId }_${section.id}_${index_0}_description_${index_1}`}
                          className={styles.description}
                        >
                          { description[language] }
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};
