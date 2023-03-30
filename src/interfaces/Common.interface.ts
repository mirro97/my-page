import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
}

export interface LinkTextProps {
  children: ReactNode;
  href: string;
}

export interface BigBoldTextProps {
  children: ReactNode;
  size: string;
}
