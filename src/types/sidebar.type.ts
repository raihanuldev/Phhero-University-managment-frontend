import { ReactNode } from "react";

// Routes Type
export type TRoute = {
    name?: string;
  path: string;
  element: JSX.Element;
};

// Admin SIdebar Type
export type TSidebar = {
    key: string;
    label: ReactNode;
    children?: TSidebar[];
  }| undefined;


export type TUserPath = {
  name: string;
  path: string;
  element: JSX.Element;
  children?: TRoute[];
};
