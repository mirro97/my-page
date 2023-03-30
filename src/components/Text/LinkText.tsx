import { LinkTextProps } from "@/interfaces/Common.interface";

export default function LinkText({ href, children }: LinkTextProps) {
  return (
    <a
      className="underline inline-block text-orange-500"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}
