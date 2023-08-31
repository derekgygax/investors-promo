import React from "react";
import classNames from "classnames";

// layouts
import { Container } from "@layout/container/Container";

// types
import { DataParams } from '../../types/dataParams';

// styles
import styles from './SectionData.module';
import { DataObject } from "@layout/dataObject/DataObject";

type SectionDataProps = {
  classNameMain: string;
  dataParams: DataParams;
  topicData: TopicData[];
  topicId: string;
};

export const SectionData: React.FC<SectionDataProps> = ({
  classNameMain,
  dataParams,
  topicData,
  topicId,
}) => {

  const dataStyles = dataParams.styles;
  const showSteps: boolean = dataParams.showSteps ? dataParams.showSteps : false;

  return (
    <div className={classNames(styles.main, classNameMain)}>
      <Container
        className={
          classNames(
            styles.container,
            dataStyles.sectionDataContainer?.join(" ")
        )}
      >
        {topicData.map((data, index) => {
            return (
              <DataObject
                key={`${topicId}_desktop_data_${index}`}
                data={ data }
                dataStyles={ dataStyles }
                objectNumber={ index }
                showSteps={ showSteps }
                topicId={ topicId }
              />
            );
          })}
      </Container>
    </div>
  );
}