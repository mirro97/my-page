import { ContainerProps } from "@/interfaces/Common.interface";

export default function ContentBox({ children }: ContainerProps) {
  return (
    <div className="mb-7 last:mb-0 pb-7 border-b-1 border-solid border-b-gray-300 last:border-b-0">
      {children}
    </div>
  );
}
