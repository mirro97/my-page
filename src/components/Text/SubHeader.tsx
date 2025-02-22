import { ReactNode } from "react";
import Text from "../Text";
import Point from "./Point";

interface IProps {
  children: ReactNode;
}

export default function SubHeader({ children }: IProps) {
  return (
    <div className="font-bold py-10 sm:text-4xl text-3xl sm:leading-relaxed leading-relaxed">
      <Text size="3xl" isPoint className="mr-[8px]">
        /
      </Text>
      {children}
    </div>
  );
}
