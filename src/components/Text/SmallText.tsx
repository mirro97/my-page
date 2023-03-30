import { ContainerProps } from "@/interfaces/Common.interface";

export default function SmallText({ children }: ContainerProps) {
  return <p className="text-sm">{children}</p>;
}
