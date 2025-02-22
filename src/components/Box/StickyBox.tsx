import Text from "../Text";
import Point from "../Text/Point";

interface IProps {
  title: string;
  content: string;
  subContent?: string;
}

export default function StickyBox({ title, content, subContent }: IProps) {
  return (
    <div className="mb-10 sticky top-4 h-fit shadow-sm rounded-3xl bg-white sm:p-0 p-6 sm:bg-opacity-0 sm:top-2/4 sm:shadow-none opacity-95">
      <Text size="2xl" isBold>
        {title}
        <Point>*</Point>
      </Text>
      {content}
      <Text size="sm">{subContent}</Text>
    </div>
  );
}
