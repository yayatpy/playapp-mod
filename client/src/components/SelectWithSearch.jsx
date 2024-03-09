import { useState } from "react";
import Select from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "0.25rem", // Customize border radius
    background: "#f8fafc", // Customize background color
    border: "1px solid #cbd5e1", // Customize border
    marginBottom: "1rem",
  }),
  option: (provided) => ({
    ...provided,
    fontSize: "16px",
    lineHeight: "1.5", // Customize line height for options
    color: "#0f172a",
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: "16px",
    lineHeight: "1.5", // Customize line height for selected value
    color: "#0f172a",
  }),
};

const SelectWithSearch = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    onChange(selectedOption);
  };

  const handleInputChange = (inputValue) => {
    setFilteredOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={filteredOptions}
      onInputChange={handleInputChange}
      isClearable
      placeholder="Cari nama pegawai"
      styles={customStyles}
    />
  );
};

export default SelectWithSearch;
