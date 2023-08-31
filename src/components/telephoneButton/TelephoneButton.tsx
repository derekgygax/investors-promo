import React from 'react';
import classNames from 'classnames';

// components
import { Button } from '@components/button/Button';

// styles
import styles from './TelephoneButton.module';

// props
type TelephoneButtonProps = {
  className?: string;
  text?: string;
}

export const TelephoneButton: React.FC<TelephoneButtonProps> = ({
  className,
  text
}) => {

  const buttonText = text ? text : TELEPHONE_NUMBER;

  return (
    <a href={`tel:${TELEPHONE_NUMBER}`}>
      <Button
        noArrow={true}
        className={
          classNames(
            styles.button,
            className
          )
        }
      >
        { buttonText }
      </Button>
    </a>
  );
}