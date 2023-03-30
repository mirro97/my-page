import { ContainerProps } from "@/interfaces/Common.interface";

export default function Point({ children }: ContainerProps) {
  return <strong className="inline-block text-orange-400">{children}</strong>;
}
