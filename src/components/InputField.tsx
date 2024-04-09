import React from "react";

const InputField = ({
  text,
  isPassword,
}: {
  text: string;
  isPassword?: boolean;
}) => {
  return (
    <>
      <label className="text-base justify-start">{text}</label>
      <input
        type={isPassword ? "password" : "text"}
        placeholder={text}
        className="py-1 w-52 text-base border-solid border-2 border-black rounded-md justify-end"
      />
    </>
  );
};

export default InputField;
