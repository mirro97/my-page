import { ContainerProps } from "@/interfaces/Common.interface";

export default function BasicBox({ children }: ContainerProps) {
  return <div className="sm:px-5 ">{children}</div>;
}
