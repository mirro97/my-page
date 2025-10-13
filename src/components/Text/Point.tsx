import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function Point({ children }: IProps) {
  return <strong className="absolute top-[-8px] inline-block text-orange-400">{children}</strong>;
}
