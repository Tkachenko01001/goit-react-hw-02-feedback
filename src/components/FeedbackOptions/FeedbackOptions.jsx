import PropTypes from "prop-types";
import { List, Button } from "components/App/App.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map((option) => (
        <li key={option}>
          <Button onClick={() => onLeaveFeedback(option)}>
            <b>{option}</b>
          </Button>
        </li>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;