import { ContainerProps } from "@/interfaces/Common.interface";

export default function BottomSection({ children }: ContainerProps) {
  return (
    <footer className="py-14 text-center">
      <div className="rounded-3xl py-10 bg-orange-100 text-orange-400">
        {children}
      </div>
    </footer>
  );
}
