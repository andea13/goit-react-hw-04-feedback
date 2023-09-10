import { useState } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import { NotificationMessage } from '../NotificationMessage/NotificationMessage';
import { AppContainer } from './App.styled';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackType = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevFeedback => prevFeedback + 1);
        break;
      case 'neutral':
        setNeutral(prevFeedback => prevFeedback + 1);
        break;
      case 'bad':
        setBad(prevFeedback => prevFeedback + 1);
        break;
      default:
        console.log('This feedback type does not exist!');
    }
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let positivePercentage = Math.round((good * 100) / countTotalFeedback());

    return positivePercentage;
  };

  return (
    <AppContainer
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          handleFeedbackType={handleFeedbackType}
        />
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <NotificationMessage />
      )}
    </AppContainer>
  );
}

export default App;
