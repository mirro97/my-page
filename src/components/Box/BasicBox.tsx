import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  className?: string;
  children: ReactNode;
}

export default function BasicBox({ className, children }: IProps) {
  return <section className={twMerge("sm:px-5", className)}>{children}</section>;
}
