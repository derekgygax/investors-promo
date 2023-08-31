import React from 'react';
import { useContext } from 'react';

// components
import { EmailForm } from '../emailForm/EmailForm';

// contexts
import { LanguageContext } from '@contexts/language';

// styles
import styles from './CallToAction.module';

export type CallToActionProps = {
  buttonText?: LanguageVariation;
  className?: string;
  showPhoneNumber?: boolean;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  showPhoneNumber,
  className,
  buttonText
}) => {

  const { language } = useContext(LanguageContext);

  // If the button text isn't passed in then it will be what is shown here
  const contactButtonText: LanguageVariation = buttonText ? buttonText : {
    en: 'Send',
    es: 'Enviar'
  };

  return (
    <div className={ className }>
      <div className={ styles.description }>
        <span>{ CALL_TO_ACTION[language] }</span>
      </div>
      <EmailForm
        buttonText={contactButtonText}
        showPhoneNumber={showPhoneNumber ? true : false}
      />
    </div>
  );
}