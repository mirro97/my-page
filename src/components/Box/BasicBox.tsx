import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function BasicBox({ children }: IProps) {
  return <div className="sm:px-5">{children}</div>;
}
