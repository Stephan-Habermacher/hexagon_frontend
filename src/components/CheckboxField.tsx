import React from "react";

function CheckboxField({
  name,
  checked,
  onChange,
}: {
  name: string;
  checked: boolean;
  onChange: (event: React.ReactEventHandler<HTMLInputElement>) => void;
}) {
  return (
    <label className="text-base">
      <input
        type="checkbox"
        className="text-base"
        checked={checked}
        onChange={onChange}
      ></input>
      {name}
    </label>
  );
}

export default CheckboxField;
