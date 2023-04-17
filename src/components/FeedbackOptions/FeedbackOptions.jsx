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

export default FeedbackOptions;