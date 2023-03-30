import { ContainerProps } from "@/interfaces/Common.interface";

export default function TopHeader({ children }: ContainerProps) {
  return (
    <div className="font-bold sm:text-4xl text-3xl sm:leading-relaxed leading-relaxed">
      {children}
    </div>
  );
}
