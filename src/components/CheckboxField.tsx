import React from "react";

function CheckboxField({ name }: { name: string }) {
  return (
    <label className="text-base">
      <input type="checkbox" className="text-base"></input>
      {name}
    </label>
  );
}

export default CheckboxField;
