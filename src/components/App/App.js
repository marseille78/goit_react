import { useReducer } from "react";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";
import Notification from "../Notification";

const TYPES = {
  good: "good",
  neutral: "neutral",
  bad: "bad",
};

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
}

const reducer = (state, action) => {
  switch(action.type) {
    case TYPES.bad:
      return {...state, bad: state.bad + 1};
    case TYPES.neutral:
      return {...state, neutral: state.neutral + 1};
    case TYPES.good:
      return {...state, good: state.good + 1};
    default:
      return state;
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const countTotalFeedback = () => {
    return Object.values(state).reduce((sum, item) => sum + item, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

  const changeFeedback = (name) => {
    dispatch({type: TYPES[name]});
  };

  const feedback = (
    <Statistics
      good={state.good}
      neutral={state.neutral}
      bad={state.bad}
      total={countTotalFeedback()}
      positivePercentage={countPositiveFeedbackPercentage()}
    />
  );

  const notification = <Notification message="There is no feedback" />;

  return (
    <div className="container pt-3 pb-3">
        <div className="row mb-3">
          <div className="col">
            <FeedbackOptions
              options={Object.keys(state)}
              onLeaveFeedback={changeFeedback}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            {countTotalFeedback() === 0 ? notification : feedback}
          </div>
        </div>
      </div>
  );
};

export default App;
