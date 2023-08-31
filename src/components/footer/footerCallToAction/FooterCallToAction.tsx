import React, { useContext } from "react";

// components
import { CallToAction } from "@components/callToAction/CallToAction";

// context
import { LanguageContext } from "@contexts/language";

// styles
import styles from './FooterCallToAction.module';

type FooterCallToActionProps = {
  callToActionInfo: FooterCallToAction
}

export const FooterCallToAction: React.FC<FooterCallToActionProps> = ({
  callToActionInfo
}) => {

  const { language } = useContext(LanguageContext);
  const invitationText = callToActionInfo.invitation[language];

  return (
    <div>
      <h1 className={styles.header}>
          { invitationText }
      </h1>
      <div className={styles.bar} />
      <CallToAction 
        buttonText={ callToActionInfo.buttonText }
      />
    </div>
  );
}