import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function Point({ children }: IProps) {
  return <strong className="inline-block text-orange-400">{children}</strong>;
}
