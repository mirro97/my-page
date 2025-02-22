import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  size?: "sm" | "xl" | "2xl" | "3xl";
  isBold?: boolean;
  isPoint?: boolean;
  children: ReactNode;
  className?: string;
}

const textSize = {
  sm: "text-sm",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
};

export default function Text({ size = "sm", isBold, isPoint, children, className }: IProps) {
  return (
    <p
      className={twMerge(
        textSize[size],
        isBold ? "font-bold" : "",
        isPoint ? "inline-block font-bold text-orange-400" : "",
        className
      )}
    >
      {children}
    </p>
  );
}
