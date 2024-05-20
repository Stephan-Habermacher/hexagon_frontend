import React from "react";

function Datepicker({
  label,
  onChange,
}: {
  label?: string;
  onChange: () => void;
}) {
  return (
    <div className="flex py-1">
      {label && <label className="flex py-1 w-52 text-base">{label}</label>}
      <input
        type="date"
        onChange={onChange}
        className="flex py-1 w-52 text-base border-solid border-2 border-black rounded-md"
      />
    </div>
  );
}

export default Datepicker;
