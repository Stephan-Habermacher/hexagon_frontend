import React from "react";

function OutputField({ label }: { label: string }) {
  return (
    <div className="flex py-1">
      {label && <label className="flex py-1 w-52 text-base">{label}</label>}
      <output className="flex p-1 w-52 text-base border-solid border-2 border-black rounded-md" />
    </div>
  );
}

export default OutputField;
