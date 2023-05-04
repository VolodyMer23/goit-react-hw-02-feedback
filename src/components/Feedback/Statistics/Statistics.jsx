import { StatisticsWrapper, StatisticType} from "./Statistics.styled";
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
      <StatisticsWrapper>
        <StatisticType>Good: {good}</StatisticType>
        <StatisticType>Natural: {neutral}</StatisticType>
        <StatisticType>Bad: {bad}</StatisticType>
        <StatisticType>Total: {total}</StatisticType>
        <StatisticType>Positive Feedback: {positivePercentage}%</StatisticType>
      </StatisticsWrapper>
    );

};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;