import React, { useContext } from 'react';
import classNames from 'classnames';
import { useCollapse } from 'react-collapsed';

// utils
import { scrollToBottom } from '../../../../utils';

// contexts
import { LanguageContext } from '@contexts/language';

// styles
import styles from './DropDown.module';

type DropDownProps = {
  questionInfo: DescriptionFAQ;
}

export const DropDown: React.FC<DropDownProps> = ({ 
  questionInfo,
}) => {
  const { language } = useContext(LanguageContext);
  const { getCollapseProps, getToggleProps } = useCollapse();

  const question = questionInfo.question[language];
  const answer = questionInfo.answer[language];

  return (
    <div className={styles.dropDown}>
      <div className={styles.flex} {...getToggleProps()}>
        <div className={styles.question}>
          {question}
        </div>
        <img 
          className={styles.rotatedIcon}
          src={require("@assets/arrow-point-to-right-dark-blue.png")}
        />
      </div>
      <div className={classNames(styles.barLong, styles.fullLong)} />
      <div {...getCollapseProps()}>
        <p className={styles.visible}>{answer}</p>
        {questionInfo.showEmail ? (
          <div className={styles.contactButtonDark}>
            <div
              className={styles.text}
              onClick={scrollToBottom}
            >
              { questionInfo.showEmail.text[language] }
            </div>
          </div>
          ) : ( null )
        }
      </div>
    </div>
  );
};
