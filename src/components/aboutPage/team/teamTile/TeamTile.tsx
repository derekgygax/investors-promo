import React from 'react';
import classNames from 'classnames';
import { useState, useContext } from 'react';

// contexts
import { LanguageContext } from '@contexts/language';

// types
import { TeamTilesProps } from '../../../../types/teamTile';

// styles
import styles from './TeamTile.module';


export const TeamTile: React.FC<TeamTilesProps> = ({
  className = '',
  text,
  textEs,
  textMore,
  textMoreEs,
  imageUrl,
  title,
  titleEs,
  name
}) => {
  const { language } = useContext(LanguageContext);
  const [visible, setVisible] = useState(false);

  return (
    <div key={title} className={styles.benefit}>
      <div style={{ backgroundImage: `url("${imageUrl}")` }} className={styles.benefitIcon} />
      <div>
        <h3 className={styles.benefitName}>{name}</h3>
        <h4 className={styles.benefitTitle}>
          {language === 'es' ? titleEs : title}
        </h4>
        <p className={styles.benefitText}>
          {language === 'es' ? textEs : text}
        </p>
        <span
          className={classNames(styles.benefitText, styles.moreButton)}
          onClick={() => { setVisible(!visible); }}
        >
          {language === 'es' ?
            (!visible ? 'Más' : 'Menos') : 
            (!visible ? 'More' : 'Less') 
          }
        </span>
        <div className={visible ? '' : styles.hide}>
          <div className={styles.benefitText}>
            {language === 'es' ? textMoreEs : textMore}
          </div> 
        </div>
      </div>
    </div>
  )
};

