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
        marginLeft: "ml-[25px]",
      };
    }
    return {
      content: text,
      listStyle: "list-[disc]",
      marginLeft: "ml-[5px]",
    };
  };

  return (
    <ul>
      {list.map((el, index) => {
        const { content, listStyle, marginLeft } = getItemConfig(el);

        return (
          <li key={`${el}-${index}`} className={`${listStyle} ${marginLeft} text-[14px]`}>
            {content}
          </li>
        );
      })}
    </ul>
  );
}
