import { Component } from "react";

import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeOptionId: 0,
  };

  setActiveIdx = (index) => {
    this.setState({ activeOptionId: index });
  };

  makeOptionsClassNames = (index) => {
    const { activeOptionId } = this.state;
    const optionClasses = ["ColorPicker__option"];

    if (index === activeOptionId) {
      optionClasses.push("ColorPicker__option--active");
    }

    return optionClasses.join(" ");
  };

  render() {
    const { options } = this.props;
    const { activeOptionId } = this.state;

    const { label } = options[activeOptionId];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>

        <p>Выбран цвет: {label}</p>

        <div>
          {options.map(({ label, color }, idx) => {
            return (
              <button
                key={label}
                className={this.makeOptionsClassNames(idx)}
                type="button"
                onClick={() => this.setActiveIdx(idx)}
                style={{
                  backgroundColor: color,
                }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
