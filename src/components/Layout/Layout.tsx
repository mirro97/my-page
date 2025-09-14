import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Layout({ children }: ContainerProps) {
  return (
    <div className="mx-auto max-w-screen-md flex justify-center flex-col px-6 sm:px-6 md:px-7">
      {children}
    </div>
  );
}
