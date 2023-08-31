import React from 'react';
import classNames from 'classnames';
import { useContext, useState } from 'react';
import { Button } from '../button/Button';

// contexts
import { LanguageContext } from '@contexts/language';

// styles
import styles from './EmailForm.module'

// types
import { EmailFormProps } from '../../types/emailForm';
import { TelephoneButton } from '@components/telephoneButton/TelephoneButton';

export const EmailForm: React.FC<EmailFormProps> = ({
  showPhoneNumber,
  buttonText
}) => {

  const { language } = useContext(LanguageContext);

  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const emailFormConfig = EMAIL_FORM_CONFIG;

  async function handleSubmit(event: any) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    setIsLoading(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });
      event.target.reset();
      setIsComplete(true);
    } catch (error) {
      // TODO is this right???
      // did you get rid of something????
      // TODO you need to report it to the page if something bad happens!!
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        console.log('Unexpected error', error);
      }
    }
    setIsLoading(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {errorMessage}
        <div>
          <div className={styles.flexContainer}>
            <div className={styles.inputName}>
              <div>
                <label className={styles.contactUs}>
                  { emailFormConfig.labels.name[language] }
                </label>
              </div>
              <div>
                <input
                  className={styles.input}
                  placeholder={ emailFormConfig.placeHolders.name[language] }
                  type="text"
                  name="name"
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label className={styles.contactUs}>
                  { emailFormConfig.labels.email[language] }
                </label>
              </div>
              <div>
                <input
                  className={styles.input}
                  placeholder={ emailFormConfig.placeHolders.email[language] }
                  type="text"
                  name="email"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label className={styles.contactUs}>
              { emailFormConfig.labels.message[language] }
            </label>
          </div>
          <div className={styles.textareaContainer}>
            <textarea
              className={styles.textarea}
              name="message"
              placeholder={ emailFormConfig.placeHolders.message[language] }
              required
            />
          </div>
          <div className={styles.buttonsAndThankyou}>
            <div className={styles.buttons}>
              {
                showPhoneNumber ? (
                  <div className={ styles.phoneButtonDiv }>
                    <TelephoneButton 
                      className={classNames(styles.button)}
                    />
                  </div>
                ) : null
              }
              <div className={styles.buttonSumbit}>
                <Button
                  type="submit"
                  noArrow={true}
                  className={styles.button}
                >
                  {
                    isLoading ? emailFormConfig.loading[language] : buttonText[language]
                  }
                </Button>
              </div>
              </div>
            {isComplete &&
              <div className={styles.message}>
                <span>
                  { emailFormConfig.thankyou[language] }
                </span>
              </div>
            }
          </div>
        </div>
      </form>
    </div>
  );
}