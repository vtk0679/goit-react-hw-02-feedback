import { Component } from "react";
import "./App.css";

import Statistics from "./components/Statistics";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }

  onLeaveFeedback = (e) => {
    const value = e.target.value;
    this.setState({ [value]: this.state[value] + 1 });
  };

  countTotalFeedback = () => {
    return Object.keys(this.state).reduce(
      (acc, key) => acc + this.state[key],
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const totalVotes = this.countTotalFeedback();
    return totalVotes
      ? Math.round((this.state.good * 100) / totalVotes)
      : totalVotes;
  };

  render() {
    const { good, bad, neutral } = this.state;
    const totalVotes = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalVotes}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
