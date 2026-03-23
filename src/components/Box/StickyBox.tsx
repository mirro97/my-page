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
    <div className="siri-glow-wrapper mb-10 sticky top-4 h-fit sm:p-0 sm:top-[10%] sm:rounded-none">
      {/* 회전하는 gradient 테두리 — 모바일 only */}
      <div className="siri-glow-border sm:hidden" />
      {/* glass 배경 + 콘텐츠 */}
      <div className="glass-card p-6 sm:p-0 sm:border-none sm:bg-transparent sm:shadow-none sm:bg-opacity-0 sm:overflow-visible sm:rounded-none">
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
