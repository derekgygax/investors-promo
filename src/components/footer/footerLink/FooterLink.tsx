
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

//styles
import styles from './FooterLink.module';

type FooterLinkProps = {
  linkClassName?: string;
  label: string;
  url: string;
};

export const FooterLink: React.FC<FooterLinkProps> = ({
  linkClassName,
  label,
  url
}) => {

  return (
    <Link
      className={ classNames( styles.navLink, linkClassName) }
      to={ url }
    >
      <p>{ label }</p>
    </Link>
  );
}
