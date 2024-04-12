import React from "react";

const InputField = ({
  isPassword,
  label,
  placeholder,
}: {
  isPassword?: boolean;
  label?: string;
  placeholder?: string;
}) => {
  return (
    <div className="flex py-1">
      {label && <label className="flex py-1 w-52 text-base">{label}</label>}
      <input
        type={isPassword ? "password" : "text"}
        placeholder={placeholder}
        className="flex p-1 w-52 text-base border-solid border-2 border-black rounded-md"
      />
    </div>
  );
};

export default InputField;
