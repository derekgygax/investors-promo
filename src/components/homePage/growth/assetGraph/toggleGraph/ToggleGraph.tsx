import React, { useContext } from "react";

// context
import { LanguageContext } from "@contexts/language";
import { LinearViewContext } from "@contexts/linearView";

// components
import { GraphButton } from "../graphButton/GraphButton";

// style
import styles from './ToggleGraph.module';

export const ToggleGraph: React.FC = () => {

  const { linearView, setLinearView } = useContext(LinearViewContext);
  const { language } = useContext(LanguageContext);

  const logarithmicText = language === 'es' ? 'LOGARÍTMICA' : 'Logarithmic';
  const linearText = language === 'es' ? 'LINEAL' : 'Linear';

  return(
    <div className={styles.main}>
      <GraphButton 
        className={ styles.logarithmicButton }
        style={linearView ? "dark" : "light"}
        onClick={() => {
          setLinearView(false);
          return {};
        }}
      >
        { logarithmicText }
      </GraphButton>
      <GraphButton
        className={ styles.linearButton }
        style={linearView ? "light" : "dark"} 
        onClick={() => {
          setLinearView(true);
          return {};
        }}
      >
        { linearText }
      </GraphButton>
    </div>
  );
}