import { BigBoldTextProps } from "@/interfaces/Common.interface";

interface sizeSetting {
  [key: string]: string;
}

export default function BigBoldText({ size, children }: BigBoldTextProps) {
  const setting: sizeSetting = {
    "2xl": "text-2xl",
    xl: "text-xl",
  };

  return <div className={`font-bold ${setting[size]} mb-3`}>{children}</div>;
}
