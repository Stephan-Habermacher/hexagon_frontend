import React from "react";

function Button({ text }: { text: string }) {
  return (
    <button
      value="text"
      className="py-2 px-8 my-2 text-white text-base bg-lime-500 rounded-md"
    >
      {text}
    </button>
  );
}

export default Button;
