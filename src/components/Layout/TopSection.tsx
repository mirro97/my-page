import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function TopSection({ children }: ContainerProps) {
  return <div className="py-16 text-left">{children}</div>;
}
