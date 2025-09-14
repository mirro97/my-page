interface IProps {
  list: string[];
}

export default function TextList({ list }: IProps) {
  return (
    <ul className="list-outside">
      {list.map((el, index) => (
        <li key={index} className="list-['-'] pl-[6px] ml-[12px]">
          {el}
        </li>
      ))}
    </ul>
  );
}
