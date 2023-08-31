import { Dispatch, SetStateAction } from "react";

export type PageType = string;

export type PageContextProps = {
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
}

export type PageContextProviderProps = {
  children: React.ReactNode;
}