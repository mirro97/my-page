import { ReactNode } from "react";
import Text from "../Text";

interface IProps {
  children: ReactNode;
}

export default function TopHeader({ children }: IProps) {
  return (
    <div className="font-bold sm:text-4xl text-3xl sm:leading-relaxed leading-relaxed">
      <Text size="3xl" isPoint>
        &#123;
      </Text>
      <p className="ml-[24px] break-keep">{children}</p>
      <Text size="3xl" isPoint>
        &#123;
      </Text>
    </div>
  );
}
