import { ContainerProps } from "@/interfaces/Common.interface";

export default function TextBox({ children }: ContainerProps) {
  return <div className="mb-5 last:mb-0">{children}</div>;
}
