import React from "react";

const SelectField = ({
  label,
  options,
  value,
  onChange,
}: {
  label?: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}) => {
  return (
    <div className="flex py-1">
      {label && <label className="flex py-1 w-52 text-base">{label}</label>}
      <select
        className="w-52 text-base border-solid border-2 border-black rounded-md"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
