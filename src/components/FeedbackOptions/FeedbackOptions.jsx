import PropTypes from 'prop-types';
import { StyledButton, StyledButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledButtonList>
      {options.map(option => (
        <li key={option}>
          <StyledButton type="button" name={option} onClick={onLeaveFeedback}>
            {option[0].toUpperCase() + option.slice(1)}
          </StyledButton>
        </li>
      ))}
    </StyledButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
