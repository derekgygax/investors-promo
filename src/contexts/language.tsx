import React from 'react';
import { createContext, useState} from 'react';
import { Dispatch, SetStateAction } from "react";

// types
export type LanguageType = 'en' | 'es';
type LanguageContextProps = {
  language: LanguageType;
  setLanguage: Dispatch<SetStateAction<LanguageType>>;
}
type LanguageContextProviderProps = {
  children: React.ReactNode;
};

export const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {}
});

export const LanguageContextProvider: React.FC<LanguageContextProviderProps> = ({ children }) => {

  const [language, setLanguage] = useState<LanguageType>(
    window.location.href.split('/')[3] === 'es' ? 'es' : 'en'
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
