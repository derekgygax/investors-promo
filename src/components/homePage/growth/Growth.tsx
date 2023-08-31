import React, { useState } from 'react';
import classNames from 'classnames';

// components
import { AssetGraph } from './assetGraph/AssetGraph';
import { Container } from '@layout/container/Container';

// styles
import styles from './Growth.module';
import { SectionInfo } from '@layout/sectionInfo/SectionInfo';
import { ToggleGraph } from './assetGraph/toggleGraph/ToggleGraph';
import { Section } from '@layout/section/Section';
import { UsdGrowthSources } from './assetGraph/usdGrowthSources/UsdGrowthSources';

export const Growth: React.FC = () => {

  const topic: TopicNoData = HOME_PAGE.GROWTH;

  const [ sourcesOpen, setSourcesOpen ] = useState(false);

  return (
    <Section
      className={
        sourcesOpen
        ? classNames(styles.backgroundColor, styles.sourcesOpen)
        : classNames(styles.backgroundColor)
      }
    >
      <div className={styles.main}>
        <Container>
          <SectionInfo
            classNameDescription={ styles.descriptionContainer }
            classNameMain={styles.desktop}
            classNameTitle={ styles.title }
            classNameTitleContainer={ styles.infoTitleContainer }
            titles={ topic.info.title }
            description={ topic.info.description }
            topicId={ topic.id }
          />
          <SectionInfo
            classNameDescription={ styles.descriptionContainer }
            classNameMain={styles.mobile}
            classNameTitle={ styles.title }
            classNameTitleContainer={ styles.infoTitleContainer }
            titles={ topic.mobileInfo.title }
            description={ topic.mobileInfo.description }
            topicId={ topic.id }
          />
          <div className={styles.toggleAndGraph}>
            <ToggleGraph />
            <AssetGraph />
          </div>
        </Container>
        <UsdGrowthSources 
          sourcesConfig={ ASSETS_GRAPH_CONFIG.sources }
          sourcesOpen={ sourcesOpen }
          onChangeSourcesOpen={(isOpen) => { setSourcesOpen(isOpen) }}
        />
      </div>
    </Section>
  )
}
