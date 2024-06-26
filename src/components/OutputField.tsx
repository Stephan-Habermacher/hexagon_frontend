import { formatNumber } from "../utils/formatNumber";

function OutputField({
  label,
  value,
  useFormat,
}: {
  label: string;
  value: string | number;
  useFormat?: boolean;
}) {
  return (
    <div className="flex py-1">
      {label && <label className="flex py-1 w-52 text-base">{label}</label>}
      <output className="flex p-1 w-52 text-base border-solid border-2 border-black rounded-md bg-slate-200">
        {useFormat ? formatNumber(value) : value}
      </output>
    </div>
  );
}

export default OutputField;
