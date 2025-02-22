import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function ImageBox({ children }: IProps) {
  return <div className="flex space-x-5 mb-7">{children}</div>;
}
