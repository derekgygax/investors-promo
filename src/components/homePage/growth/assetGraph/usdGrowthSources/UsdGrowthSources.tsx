import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// contexts
import { LanguageContext } from '@contexts/language';

// components
import { Container } from '@layout/container/Container';

// styles
import styles from './UsdGrowthSources.module.scss';

type UsdGrowthSourcesProps = {
  sourcesConfig: AssetsGraphSources;
  sourcesOpen: boolean;
  onChangeSourcesOpen: (boolean) => void;
}

export const UsdGrowthSources: React.FC<UsdGrowthSourcesProps> = ({
  sourcesConfig,
  sourcesOpen,
  onChangeSourcesOpen
}) => {
  const { language } = useContext(LanguageContext);

  return (
    <Container className={styles.main}>
      <div
        onClick={() => {
          onChangeSourcesOpen(!sourcesOpen);
        }}
      >
        <span className={ styles.sourceButton }>
          { sourcesConfig.sourcesLabel[language] }
        </span>
      </div>
      <div className={ sourcesOpen ? null : styles.hideSources }>
        <div>
          <p className={ styles.description }>
            { sourcesConfig.description[language] }
          </p>
        </div>
        <div>
          <Link
            to={ sourcesConfig.link.url[language] }
          >
            <p>{ sourcesConfig.link.label[language] }</p>
          </Link>
        </div>
      </div>
    </Container>
  );
}
