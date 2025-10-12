import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export default function LinkText({ href, children, className }: IProps) {
  return (
    <a
      className={twMerge("underline inline-block text-orange-500", className)}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}
