import { Component } from "react";
import Controls from "./Controls";
import Progress from "./Progress";
import Publication from "./Publication";

const LS_KEY = "reader_item_index";

class Reader extends Component {
  state = {
    index: 0,
  };

  componentDidMount = () => {
    const savedState = localStorage.getItem(LS_KEY);

    if (savedState) {
      this.setState({ index: Number(savedState) });
    }
  };

  componentDidUpdate(_, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  changeValue = (val) => {
    this.setState((state) => ({ index: state.index + val }));
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;

    const currentItem = items[index];

    return (
      <div>
        <Controls
          current={index + 1}
          total={totalItems}
          onChange={this.changeValue}
        />

        <Progress current={index + 1} total={items.length} />

        <Publication title={currentItem.title} text={currentItem.text} />
      </div>
    );
  }
}

export default Reader;
