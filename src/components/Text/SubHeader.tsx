import { ContainerProps } from "@/interfaces/Common.interface";

export default function SubHeader({ children }: ContainerProps) {
  return (
    <div className="font-bold py-10 sm:text-4xl text-3xl sm:leading-relaxed leading-relaxed">
      {children}
    </div>
  );
}
