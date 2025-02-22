import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
export default function TwoSeperatedBox({ children }: IProps) {
  return (
    <div className="h-3/4 grid sm:grid-cols-2-section grid-cols-none border-b-1 border-solid border-b-gray-300 last:border-b-0 mb-7">
      {children}
    </div>
  );
}
