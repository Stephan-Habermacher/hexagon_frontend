import React from "react";

const InputField = ({ text }: { text: string }) => {
  return (
    <label className="text-base">
      {text}
      <input
        type="text"
        placeholder="PFO"
        className="py-1 w-52 border-solid border-2 border-black rounded-md"
      />
    </label>
  );
};

export default InputField;
