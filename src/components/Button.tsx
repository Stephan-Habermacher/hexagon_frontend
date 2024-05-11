import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ text }: { text: string }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projekt");
  };

  return (
    <button
      value="text"
      onClick={handleClick}
      className="py-2 px-8 my-2 text-white text-base bg-lime-500 hover:bg-lime-600 rounded-md"
    >
      {text}
    </button>
  );
}

export default Button;
