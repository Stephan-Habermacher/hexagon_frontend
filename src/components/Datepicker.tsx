function Datepicker({
  label,
  onChange,
  value,
}: {
  label?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}) {
  return (
    <div className="flex py-1">
      {label && <label className="flex py-1 w-52 text-base">{label}</label>}
      <input
        type="date"
        onChange={onChange}
        value={value}
        className="flex py-1 w-52 text-base border-solid border-2 border-black rounded-md"
      />
    </div>
  );
}

export default Datepicker;
