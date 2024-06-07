import React from "react";
import { useNavigate } from "react-router-dom";

function Button({
  text,
  onClick,
  disabled,
}: {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      value="text"
      onClick={onClick}
      disabled={disabled}
      className="py-2 px-8 my-2 text-white text-base bg-lime-500 hover:bg-lime-600 rounded-md disabled:bg-slate-500"
    >
      {text}
    </button>
  );
}

export default Button;
