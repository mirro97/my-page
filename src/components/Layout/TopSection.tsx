import { ContainerProps } from "@/interfaces/Common.interface";

export default function TopSection({ children }: ContainerProps) {
  return <div className="py-16 text-left">{children}</div>;
}
