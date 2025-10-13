import Text from "../Text";
import Point from "../Text/Point";

interface IProps {
  title: string;
  hasTitlePoint?: boolean;
  content?: string;
  subContent?: string;
}

export default function StickyBox({ title, hasTitlePoint, content, subContent }: IProps) {
  return (
    <div className="glass-card mb-10 sticky top-4 h-fit p-6 sm:p-0 sm:border-none sm:bg-opacity-0 sm:top-[10%] sm:shadow-none sm:bg-transparent sm:overflow-visible sm:rounded-none">
      <Text size="2xl" isBold className="relative">
        {title}
        {hasTitlePoint && <Point>*</Point>}
      </Text>
      {content}
      <Text size="sm" className="text-gray-400">
        {subContent}
      </Text>
    </div>
  );
}
