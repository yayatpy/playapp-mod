import React, { useState } from "react";

const FilteredSelect = () => {
  const [filter, setFilter] = useState("");
  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "date", label: "Date" },
    { value: "elderberry", label: "Elderberry" },
    { value: "fig", label: "Fig" },
    { value: "grape", label: "Grape" },
    { value: "kiwi", label: "Kiwi" },
    { value: "lemon", label: "Lemon" },
    { value: "mango", label: "Mango" },
    { value: "orange", label: "Orange" },
    { value: "pear", label: "Pear" },
    { value: "quince", label: "Quince" },
    { value: "raspberry", label: "Raspberry" },
    { value: "strawberry", label: "Strawberry" },
    { value: "tangerine", label: "Tangerine" },
    { value: "uva", label: "Uva" },
    { value: "watermelon", label: "Watermelon" },
    { value: "xylocarp", label: "Xylocarp" },
    { value: "yellowhorn", label: "Yellowhorn" },
    { value: "zucchini", label: "Zucchini" },
  ];

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <select>
        {filteredOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilteredSelect;
