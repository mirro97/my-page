interface IProps {
  list: string[];
}

export default function TextList({ list }: IProps) {
  const getItemConfig = (text: string) => {
    if (text.startsWith(">>")) {
      return {
        content: text.slice(2).trim(),
        listStyle: "list-[square]",
        marginLeft: "ml-[48px]",
      };
    }
    if (text.startsWith(">")) {
      return {
        content: text.slice(1).trim(),
        listStyle: "list-[circle]",
        marginLeft: "ml-[30px]",
      };
    }
    return {
      content: text,
      listStyle: "list-disc",
      marginLeft: "ml-[12px]",
    };
  };

  return (
    <ul className="list-disc">
      {list.map((el, index) => {
        const { content, listStyle, marginLeft } = getItemConfig(el);

        return (
          <li key={`${el}-${index}`} className={`${listStyle} ${marginLeft} text-[14px] pl-[6px]`}>
            {content}
          </li>
        );
      })}
    </ul>
  );
}
