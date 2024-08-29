import { useState } from "react";

const NAMES = { name: "name", number: "number", error: "error" };

const ContactForm = ({ addContact, existContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState(false);

  const resetForm = () => {
    setName("");
    setNumber("");
    setError(false);
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case NAMES.name:
        return setName(value);
      case NAMES.number:
        return setNumber(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isError()) {
      setError(true);
    } else {
      setError(false);
      addContact({ name, number });
      resetForm();
    }
  };

  const isError = () => {
    return name.trim().length === 0 || number.trim().length === 0;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="numberInput" className="form-label">
            Number
          </label>
          <input
            type="text"
            className="form-control"
            id="numberInput"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add contact
        </button>
      </form>

      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          Enter All Data.
        </div>
      )}

      {existContact && (
        <div className="alert alert-danger mt-3" role="alert">
          Contact with the same already exists.
        </div>
      )}
    </div>
  );
};

export default ContactForm;
