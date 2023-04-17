import { Component } from "react";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";

class App extends Component {

    state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positiveFeedback: 0,
    }
    
    handleLeaveFeedback = (option) => {
        this.setState((prevState) => {
          return {
            [option]: prevState[option] + 1,
          };
        }, this.countTotalFeedback);
      };

    countTotalFeedback = () => {
        this.setState((prevState) => {
          return {
            total: prevState.good + prevState.neutral + prevState.bad
          }
        }, this.countPositiveFeedbackPercentage)
    }

    countPositiveFeedbackPercentage = () => {
        this.setState((prevState) => {
          return {
            positiveFeedback: Math.round((prevState.good / prevState.total) * 100)
            }
        })
    }
  
    render() {

      const {good, neutral, bad, total, positiveFeedback} = this.state;
      const options = ["good", "neutral", "bad"];

      return <>
      
        <Section title='Please leave feedback'>
         <FeedbackOptions 
           options={options}
           onLeaveFeedback={this.handleLeaveFeedback}
         />
        </Section>
        
        <Section>
         <Statistics
           good={good}
           neutral={neutral}
           bad={bad}
           total={total}
           positiveFeedback={positiveFeedback}
        >
            <Notification message="There is no feedback" state={this.state}/>
        </Statistics>
        </Section>
       </>
      }
    }

 export default App;