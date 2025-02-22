import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  href: string;
}

export default function LinkText({ href, children }: IProps) {
  return (
    <a className="underline inline-block text-orange-500" href={href} target="_blank">
      {children}
    </a>
  );
}
