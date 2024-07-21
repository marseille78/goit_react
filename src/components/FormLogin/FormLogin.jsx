import { Component } from "react";

class FormLogin extends Component {
  state = {
    email: "",
    password: "",
    isChecked: false,
  };

  resetForm = () => {
    this.setState({ email: "", password: "", isChecked: false });
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { createUser, closeModal } = this.props;
    const { email, password } = this.state;

    createUser({ email, password });

    this.resetForm();
    closeModal();
  };

  handleCheck = () => {
    this.setState(({ isChecked }) => ({
      isChecked: !isChecked,
    }));
  };

  render() {
    const { email, password, isChecked } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={this.handleChange}
            value={email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={this.handleChange}
            value={password}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={isChecked}
            onChange={this.handleCheck}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" disabled={!isChecked}>
          Submit
        </button>
      </form>
    );
  }
}

export default FormLogin;
