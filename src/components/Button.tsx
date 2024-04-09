import React from "react";

function Button({ text }: { text: string }) {
  return (
    <button
      value="text"
      className="py-1 my-2 w-52 text-white text-base bg-lime-500 rounded-md"
    >
      {text}
    </button>
  );
}

export default Button;
