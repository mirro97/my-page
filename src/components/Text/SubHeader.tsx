import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function SubHeader({ children }: IProps) {
  return (
    <div className="font-bold py-10 sm:text-4xl text-3xl sm:leading-relaxed leading-relaxed">
      {children}
    </div>
  );
}
