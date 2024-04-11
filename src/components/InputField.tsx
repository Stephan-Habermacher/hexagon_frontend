import React from "react";

const InputField = ({
  text,
  isPassword,
}: {
  text: string;
  isPassword?: boolean;
}) => {
  return (
    <div className="flex">
      <label className="flex text-base">{text}</label>
      <input
        type={isPassword ? "password" : "text"}
        placeholder={text}
        className="flex text-base border-solid border-2 border-black rounded-md"
      />
    </div>
  );
};

export default InputField;
