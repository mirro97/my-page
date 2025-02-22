import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function BasicBox({ children }: IProps) {
  return <section className="sm:px-5">{children}</section>;
}
