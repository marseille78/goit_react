import { Component } from "react";

import "./Dropdown.css";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  handleToggle = () => {
    this.setState(({ visible }) => {
      return {
        visible: !visible,
      };
    });
  };

  render() {
    const { visible } = this.state;

    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.handleToggle}
        >
          {visible ? "Скрыть" : "Показать"}
        </button>

        {visible && <div className="Dropdown__menu">Выпадающее меню</div>}
      </div>
    );
  }
}

export default Dropdown;
