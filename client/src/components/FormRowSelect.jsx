const FormRowSelect = ({
  name,
  labelText,
  list,
  defaultValue = "",
  required,
  onChange,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className="form-select"
        defaultValue={defaultValue}
        required={false || required}
        onChange={onChange}
      >
        {list.map((itemValue) => {
          const { value, labelOpt } = itemValue;
          return (
            <option key={value} value={value}>
              {labelOpt}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
