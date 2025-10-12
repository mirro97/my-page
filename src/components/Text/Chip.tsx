const Chip = ({ text }: { text: string }) => {
  return (
    <span className="inline-block text-sm bg-gray-200 rounded-full px-3 py-1 hover:text-orange-400 transition-colors duration-300 ease-in-out">
      {text}
    </span>
  );
};

interface IProps {
  list: string[];
}

export default function ChipList({ list }: IProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {list.map((text) => (
        <Chip key={text} text={text} />
      ))}
    </div>
  );
}
