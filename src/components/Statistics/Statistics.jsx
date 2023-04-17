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
}

export default Statistics;