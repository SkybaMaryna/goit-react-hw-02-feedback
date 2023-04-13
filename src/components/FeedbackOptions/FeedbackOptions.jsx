import PropTypes from 'prop-types';
import { StyledButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <StyledButton type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </StyledButton>
      <StyledButton type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </StyledButton>
      <StyledButton type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </StyledButton>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
