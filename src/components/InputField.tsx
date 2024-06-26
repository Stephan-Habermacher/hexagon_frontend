import { formatNumber, unformatNumber } from "../utils/formatNumber";

const InputField = ({
  textarea,
  isPassword,
  label,
  placeholder,
  value,
  useFormat,
  onChange,
  onChangeTextArea,
  disabled,
}: {
  textarea?: string;
  isPassword?: boolean;
  label?: string;
  placeholder?: string;
  value: string | number;
  useFormat?: boolean;
  onChange: (value: string | number) => void;
  onChangeTextArea?: (value: string) => void;
  disabled?: boolean;
}) => {
  return (
    <div className="flex py-1">
      {textarea != undefined && onChangeTextArea && (
        <textarea
          className="flex py-1 w-52 text-base"
          rows={1}
          value={textarea}
          onChange={(e) => onChangeTextArea(e.target.value)}
        ></textarea>
      )}
      {label && <label className="flex py-1 w-52 text-base">{label}</label>}
      <input
        type={isPassword ? "password" : "text"}
        value={useFormat ? formatNumber(value) : value}
        onChange={(e) =>
          onChange(useFormat ? unformatNumber(e.target.value) : e.target.value)
        }
        placeholder={placeholder}
        className="flex p-1 w-52 text-base border-solid border-2 border-black rounded-md disabled:bg-slate-200"
        disabled={disabled}
      />
    </div>
  );
};

export default InputField;
