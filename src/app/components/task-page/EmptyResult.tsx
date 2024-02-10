import { EmptyResultProps } from "../interfaces/global";

const EmptyResult = ({
  msg,
  color,
  Icon,
  IconClasses = "",
}: EmptyResultProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full p-8 gap-4 ${color}`}
    >
      {<Icon size="64" className={IconClasses} />}
      <span>{msg}</span>
    </div>
  );
};

export default EmptyResult;
