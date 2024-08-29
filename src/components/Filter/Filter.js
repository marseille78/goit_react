import { useState } from "react";

const Filter = ({ changeFilter }) => {
  const [value, setValue] = useState("");

  const handleChange = ({ target: { value } }) => {
    setValue(value);
    changeFilter(value);
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="inputFilter" className="form-label">
          Find contacts by name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputFilter"
          onChange={handleChange}
          value={value}
        />
      </div>
    </form>
  );
};

export default Filter;
