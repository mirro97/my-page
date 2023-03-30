import { ContainerProps } from "@/interfaces/Common.interface";

export default function BoldText({ children }: ContainerProps) {
  return <div className="font-bold">{children}</div>;
}
