import React from "react";

function CheckboxField({
  name,
  checked,
  onClick,
}: {
  name: string;
  checked: boolean;
  onClick: React.MouseEventHandler<HTMLInputElement>;
}) {
  return (
    <label className="text-base">
      <input
        type="checkbox"
        className="text-base mr-1"
        checked={checked}
        onClick={onClick}
      ></input>
      {name}
    </label>
  );
}

export default CheckboxField;
