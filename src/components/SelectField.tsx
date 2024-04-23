import React from "react";

const SelectField = ({ label, text }: { label?: string; text?: string }) => {
  return (
    <div className="flex py-1">
      {label && <label className="flex py-1 w-52 text-base">{label}</label>}
      <select className="w-52 text-base border-solid border-2 border-black rounded-md">
        <option className="text-base">{text}</option>
      </select>
    </div>
  );
};

export default SelectField;
