import PropTypes from "prop-types";

const Statistics = ({good, neutral, bad, total, positiveFeedback, title}) => {
  
    return (
         <>
        <h2>{title}</h2>
        <ul>
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
        </ul> 
        </>
    )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
}

export default Statistics;