import React from 'react';
import classNames from 'classnames';

// types
import { ContainerProps } from '../../types/container';

// styles
import styles from './Container.module';

export const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <div className={classNames(styles.container, className)}>
    {children}
  </div>
);
