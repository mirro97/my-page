import { ContainerProps } from "@/interfaces/Common.interface";

export default function ImageBox({ children }: ContainerProps) {
  return <div className="flex space-x-5 mb-7">{children}</div>;
}
