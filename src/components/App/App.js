import { Component } from "react";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";
import Notification from "../Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((sum, item) => sum + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  changeFeedback = (name) => {
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const feedback = (
      <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
      />
    );
    const notification = <Notification message="There is no feedback" />;
    return (
      <div className="container pt-3 pb-3">
        <div className="row mb-3">
          <div className="col">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.changeFeedback}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            {this.countTotalFeedback() === 0 ? notification : feedback}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
