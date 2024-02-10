import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  handleClick: MouseEventHandler;
  isDisabled?: boolean;
};
const Button = ({ children, handleClick, isDisabled = false }: ButtonProps) => {
  return (
    <>
      <button
        className="w-full rounded-md text-white bg-light-green py-3 px-6 shadow-md shadow-pink-500/20 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        disabled={isDisabled}
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
