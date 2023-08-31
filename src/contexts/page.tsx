import React from 'react';
import { createContext, useState } from 'react';
import {
  PageType,
  PageContextProps,
  PageContextProviderProps
} from '../types/page';

export const PageContext = createContext<PageContextProps>({
  page: '',
  setPage: () => {}
});

export const PageContextProvider: React.FC<PageContextProviderProps> = ({ children }) => {

  let startingPage = PAGES.HOME;
  if (window.location.href.split('/')[3] === 'es') {
    startingPage = window.location.href.split('/')[4];
  } else {
    startingPage = window.location.href.split('/')[3];
  }
  // If pageDisplayed is falsy then the home page is displayed
  if (!startingPage) {
    startingPage = PAGES.HOME;
  }

  const [page, setPage] = useState<PageType>(startingPage);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      { children }
    </PageContext.Provider>
  )
}