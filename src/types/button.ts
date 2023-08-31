export type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => {};
  style?: 'light' | 'dark';
  to?: string;
  href?: string;
  type?: 'button' | 'link' | 'externalLink' | 'submit';
  noArrow?: boolean;
  imageBeforeText?: string;
};