import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ text, onClick }: { text: string; onClick?: () => void }) {
  return (
    <button
      value="text"
      onClick={onClick}
      className="py-2 px-8 my-2 text-white text-base bg-lime-500 hover:bg-lime-600 rounded-md"
    >
      {text}
    </button>
  );
}

export default Button;
