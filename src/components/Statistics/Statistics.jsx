import PropTypes from "prop-types";

const Statistics = ({good, neutral, bad, total, positiveFeedback, children}) => {
  
  const stateArr = Object.values(children.props.state);
  const fedbackValue = stateArr.every(value => value === 0) 
  
    return (
         <>
        <h2>Statistics</h2>
        {fedbackValue ? children : <ul>
          <li>
            good: {good}
          </li>
    
          <li>
            neutral: {neutral}
          </li>
    
          <li>
            bad: {bad}
          </li>
    
          <li>
            Total: {total}
          </li>
    
          <li>
            Positive Feedback: {positiveFeedback}%
          </li>
        </ul> }
        </>
    )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}

export default Statistics;