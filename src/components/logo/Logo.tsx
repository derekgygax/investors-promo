import React from "react";

// props
type LogoProps = {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {

  const companyLogo = require('@assets/logo-white.svg');

  return (
    <img
      className={className}
      src={ companyLogo }
    />
  )
}