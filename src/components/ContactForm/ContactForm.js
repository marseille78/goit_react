import { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    error: false,
  };

  resetForm = () => {
    this.setState({
      name: "",
      number: "",
      error: false,
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    if (this.isError()) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
      this.props.addContact({ name, number });
      this.resetForm();
    }
  };

  isError = () => {
    const { name, number } = this.state;

    return name.trim().length === 0 || number.trim().length === 0;
  };

  render() {
    const { name, number, error } = this.state;
    const { existContact } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
  }
}

export default ContactForm;
