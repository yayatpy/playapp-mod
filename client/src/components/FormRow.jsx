const FormRow = ({
  type,
  name,
  labelText,
  defaultValue,
  onChange,
  disabled,
  readOnly,
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
        defaultValue={defaultValue || ""}
        required
        readOnly={readOnly || false}
      />
    </div>
  );
};

export default FormRow;
