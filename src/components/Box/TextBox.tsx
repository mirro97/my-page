import { ReactNode } from "react";
import Text from "../Text";

interface IProps {
  title?: string;
  children: ReactNode;
}

export default function TextBox({ title, children }: IProps) {
  return (
    <div className="mb-5 last:mb-0">
      {title && (
        <Text size="xl" isBold>
          {title}
        </Text>
      )}
      {children}
    </div>
  );
}
