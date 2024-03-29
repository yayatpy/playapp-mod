const FormRow = ({
  type,
  name,
  labelText,
  defaultValue,
  onChange,
  disabled,
  readOnly,
  value,
  required,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        className="form-input"
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue}
        required={required}
        readOnly={readOnly || false}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormRow;
