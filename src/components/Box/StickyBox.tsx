import { ContainerProps } from "@/interfaces/Common.interface";

export default function StickyBox({ children }: ContainerProps) {
  return (
    <div className="mb-10 sticky top-4 h-fit shadow-sm rounded-3xl bg-white sm:p-0 p-6 sm:bg-opacity-0 sm:top-2/4 sm:shadow-none">
      {children}
    </div>
  );
}
