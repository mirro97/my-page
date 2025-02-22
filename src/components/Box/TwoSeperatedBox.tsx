import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
export default function TwoSeperatedBox({ children }: IProps) {
  return (
    <div className="grid sm:grid-cols-2-section sm:gap-[16px] grid-cols-none border-b-1 border-solid border-b-gray-300 last:border-b-0 mb-7">
      {children}
    </div>
  );
}
