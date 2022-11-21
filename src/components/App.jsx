import React from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notificaton';
import Statistics from './Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((total, value) => total + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const result = total ? (good / total) * 100 : 0;
    return +result.toFixed(0);
  }

  onGoodOptionClick = () => {
    this.setState(prevState => ({
      ...prevState,
      good: (prevState.good += 1),
    }));
  };

  onNeutralOptionClick = () => {
    this.setState(prevState => ({
      ...prevState,
      neutral: (prevState.neutral += 1),
    }));
  };

  onBadOptionClick = () => {
    this.setState(prevState => ({
      ...prevState,
      bad: (prevState.bad += 1),
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const isStatisticProvided = this.countTotalFeedback() > 0;

    return (
      <div className="app">
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGoodOptionClick={this.onGoodOptionClick}
            onNeutralOptionClick={this.onNeutralOptionClick}
            onBadOptionClick={this.onBadOptionClick}
          />
        </Section>
        <Section title="Statistics">
          {isStatisticProvided ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
