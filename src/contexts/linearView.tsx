import React from 'react';
import { createContext, useState } from 'react';
import { Dispatch, SetStateAction } from "react";

// types
type LinearViewType = true | false;
type LinearViewContextProps = {
  linearView: boolean;
  setLinearView: Dispatch<SetStateAction<boolean>>;
}
type LinearViewContextProviderProps = {
  children: React.ReactNode;
}

export const LinearViewContext = createContext<LinearViewContextProps>({
  linearView: false,
  setLinearView: () => {}
});

export const LinearViewContextProvider: React.FC<LinearViewContextProviderProps> = ({ children }) => {
  const [linearView, setLinearView] = useState<LinearViewType>(false);

  return (
    <LinearViewContext.Provider value={{ linearView, setLinearView }}>
      {children}
    </LinearViewContext.Provider>
  );
};