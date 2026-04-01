import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function TopSection({ children }: ContainerProps) {
  return (
    <div className="py-16 text-left mx-auto max-w-[750px] w-[calc(100%-32px)] ">{children}</div>
  );
}
