import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };
  onBtnClick = e => {
    const btnType = e.target.getAttribute('data-stat');

    switch (btnType) {
      case 'good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;
      case 'neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        break;
      case 'bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        break;
      default:
        console.log(`Sorry, please click on button.`);
    }
      this.countTotalFeedback();
      this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
    return this.total;
  };

    countPositiveFeedbackPercentage = () => {
      this.setState(prevState => ({
      positivePercentage: (prevState.good / (prevState.good + prevState.neutral + prevState.bad)) * 100,
    }));
    return this.positivePercentage;
  };
  

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;

    return (
      <div>
        <button data-stat="good" onClick={this.onBtnClick}>
          Good
        </button>
        <button data-stat="neutral" onClick={this.onBtnClick}>
          Neutral
        </button>
        <button data-stat="bad" onClick={this.onBtnClick}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Feedback: {Math.round(positivePercentage)}%</p>
      </div>
    );
  }
}
