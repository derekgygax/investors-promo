import React from 'react';
import classNames from 'classnames';

// components
import { Container } from '@layout/container/Container';

// styles
import styles from './ContainerInHalves.module';

type ContainerInHalvesProps = {
  firstChild: React.ReactNode;
  classNameFlexDirection?: string;
  halfContainers?: string;
  secondChild: React.ReactNode;
  classNameContainerSecond?: string;
}

export const ContainerInHalves: React.FC<ContainerInHalvesProps> = ({
  firstChild,
  classNameFlexDirection,
  halfContainers,
  secondChild,
  classNameContainerSecond,
}) => {
  return (
    <Container className={classNames(styles.container, classNameFlexDirection)}>
      <div className={classNames(styles.containerFirst, halfContainers)}>
        {firstChild}
      </div>
      <div 
        className={
          classNames(
            styles.containerSecond,
            halfContainers,
            classNameContainerSecond
          )
        }
      >
        {secondChild}
      </div>
    </Container>
  )
}