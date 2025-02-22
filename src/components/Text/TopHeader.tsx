import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function TopHeader({ children }: IProps) {
  return (
    <div className="font-bold sm:text-4xl text-3xl sm:leading-relaxed leading-relaxed">
      {children}
    </div>
  );
}
