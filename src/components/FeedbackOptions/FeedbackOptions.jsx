import { BtnWrapper, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const buttonsMarkup = options.map(option => {
    return (
      <Button
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </Button>
    );
  });
  return <BtnWrapper>{buttonsMarkup}</BtnWrapper>;
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
