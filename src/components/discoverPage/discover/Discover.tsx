import React from 'react';

import { DiscoverGeneric } from '../discoverGeneric/DiscoverGeneric';
import { MenuLinks } from '../menuLinks/MenuLinks';
// layouts
import { Container } from '@layout/container/Container';

// components
import { Faq } from '../faq/Faq';
import { RetirementCalculatorInfo } from '../retirementCalculatorInfo/RetirementCalculatorInfo';

// styles
import styles from './Discover.module';

type DiscoverProps = {
  category: string;
}

export const Discover: React.FC<DiscoverProps> = ({ category }) => {

  const discoverContent: DiscoverTopic = DISCOVER_PAGE.DATA[category];

  let discoverContentNode;
  if (discoverContent.id === 'faq') {
    discoverContentNode=(
      <Faq 
        topicId={ discoverContent.id }
        header={ discoverContent.header }
        info={ discoverContent.info }
      />
    );
  } else if (discoverContent.id === 'retirement-calculator-info') {
    discoverContentNode = (
      <RetirementCalculatorInfo
        topicId={ discoverContent.id }
        header={ discoverContent.header }
        info={ discoverContent.info }
      />
    );
  } else {
    discoverContentNode = (
      <DiscoverGeneric 
        topicId={ discoverContent.id }
        header={ discoverContent.header }
        info={ discoverContent.info }
      />
    );
  }

  return (
    <div className={styles.main}>
      <Container className={styles.container}>
        <MenuLinks 
          categorySelected={ category }
        />
        <div className={styles.secondSection}>
          { discoverContentNode }
        </div>
      </Container>
    </div>
  );
};
