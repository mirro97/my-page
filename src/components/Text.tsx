import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  size: "sm" | "xl" | "2xl" | "3xl";
  isBold?: boolean;
  children: ReactNode;
}

const textSize = {
  sm: "text-sm",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
};

export default function Text({ size, isBold, children }: IProps) {
  return (
    <p className={twMerge(textSize[size], isBold ? "font-bold" : "'")}>
      {children}
    </p>
  );
}
