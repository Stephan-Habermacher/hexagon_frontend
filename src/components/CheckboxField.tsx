import React from "react";

function CheckboxField({ name }: { name: string }) {
  return (
    <label className="text-base">
      <input type="checkbox"></input>
      {name}
    </label>
  );
}

export default CheckboxField;
