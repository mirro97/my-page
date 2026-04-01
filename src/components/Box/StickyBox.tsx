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
    <div className="mb-10 sticky top-4 h-fit sm:p-0 sm:top-[10%]">
      <div className="bg-gradient-to-b from-orange-50/60 to-white/50 backdrop-blur-3xl backdrop-saturate-[1.8] border border-white/40 rounded-[22px] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset,0_4px_24px_rgba(0,0,0,0.06)] sm:p-0 sm:bg-none sm:bg-transparent sm:backdrop-filter-none sm:border-none sm:rounded-none sm:shadow-none">
        <Text size="2xl" isBold className="relative">
          {title}
          {hasTitlePoint && <Point>*</Point>}
        </Text>
        {content}
        <Text size="sm" className="text-gray-400">
          {subContent}
        </Text>
      </div>
    </div>
  );
}
