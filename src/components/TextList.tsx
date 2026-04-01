interface IProps {
  list: string[];
}

const BULLET: Record<string, string> = {
  disc: "•",
  circle: "◦",
  square: "▪",
};

const getItemConfig = (text: string) => {
  if (text.startsWith(">>")) {
    return {
      content: text.slice(2).trim(),
      bullet: BULLET.square,
      marginLeft: "ml-[48px]",
    };
  }
  if (text.startsWith(">")) {
    return {
      content: text.slice(1).trim(),
      bullet: BULLET.circle,
      marginLeft: "ml-[25px]",
    };
  }
  return {
    content: text,
    bullet: BULLET.disc,
    marginLeft: "ml-[5px]",
  };
};

export default function TextList({ list }: IProps) {
  return (
    <ul>
      {list.map((el, index) => {
        const { content, bullet, marginLeft } = getItemConfig(el);

        return (
          <li key={`${el}-${index}`} className={`flex gap-[6px] ${marginLeft} text-[14px]`}>
            <span className="shrink-0">{bullet}</span>
            <span>{content}</span>
          </li>
        );
      })}
    </ul>
  );
}
