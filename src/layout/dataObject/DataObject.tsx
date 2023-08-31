import React, { useContext} from "react";
import classNames from "classnames";

// context
import { LanguageContext } from "@contexts/language";

// types
import { DataStyles } from "../../types/dataParams";

// styles
import styles from './DataObject.module.scss';

type DataObjectProps = {
  data: TopicData;
  dataStyles: DataStyles;
  objectNumber: number,
  showSteps: boolean;
  topicId: string;
};


export const DataObject: React.FC<DataObjectProps> = ({
  data,
  dataStyles,
  objectNumber,
  showSteps,
  topicId
}) => {

  const { language } = useContext(LanguageContext);

  const wordStep = {
    es: 'Paso',
    en: 'Step'
  };

  return (
    <div
      className={
        classNames(
          styles.dataContainer,
          dataStyles.dataContainer.join(" ")
        )
      }
      key={`${topicId}_data_${objectNumber}`}
    >
      <div 
        className={
          classNames(
            styles.icon, 
            dataStyles.icon.join(" "),
            // This is a special one needed specified as a global variable
            // from types.d.ts
            data.id === WHY_EQUITIES_PRODUCTS_AND_SERVICES_ID ? styles.whyEquitiesProductsServices: null,
          )
        }
        style={{ 
          backgroundImage: `url("${data.imageUrl}")` 
        }}
      />
      <div className={classNames(dataStyles.dataInfoContainer?.join(" "))}>
        {
          showSteps ? (
            // NEED THE SPANISH TRANLATION
            <h4 className={styles.step}>
              { `${ wordStep[language] } ${ objectNumber + 1 }` }
            </h4>
          ) : null
        }
        <h3 className={styles.title}>
          { data.label[language] }
        </h3>
        <p className={styles.text}>
          { data.text[language] }
        </p>
      </div>
    </div>
  );
}