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
    }
    
    handleLeaveFeedback = (option) => {
        this.setState((prevState) => {
          return {
            [option]: prevState[option] + 1,
          };
        }, this.countTotalFeedback);
      };

      countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
      }
      
      countPositiveFeedbackPercentage = () => {
        const totalFeedback = this.countTotalFeedback();
        const { good } = this.state;
        return Math.round((good / totalFeedback) * 100);
      }
  
    render() {
      
      const {good, neutral, bad} = this.state;
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
           total={this.countTotalFeedback()}
           positiveFeedback={this.countPositiveFeedbackPercentage()}
        >
            <Notification message="There is no feedback" state={this.state}/>
        </Statistics>
        </Section>
       </>
      }
    }

 export default App;