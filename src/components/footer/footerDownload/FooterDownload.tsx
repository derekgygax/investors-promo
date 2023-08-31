import React from "react";

// styles
import styles from './FooterDownload.module';

// props
type FooterDownloadProps = {
  href: string;
  label: string;
}

export const FooterDownload: React.FC<FooterDownloadProps> = ({
  href,
  label,
}) => {
  return (
    <a
      className={styles.link}
      target="_blank"
      href={ href }
      download
    >
      <p>{ label }</p>
    </a>
  )
}