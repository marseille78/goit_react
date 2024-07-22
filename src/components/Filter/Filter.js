import { Component } from "react";

class Filter extends Component {
  state = {
    value: "",
  };

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
    this.props.changeFilter(target.value);
  };

  render() {
    const { value } = this.state;

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
            onChange={this.handleChange}
            value={value}
          />
        </div>
      </form>
    );
  }
}

export default Filter;
