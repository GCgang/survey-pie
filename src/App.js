import { useState } from 'react';
import ProgressIndicator from './components/ProgressIndicator';
import QuestionBox from './components/QuestionBox';

function App() {
  const questions = [
    {
      title: '질문 1',
      description: '설명 1',
      type: 'text',
      required: false,
      options: {},
    },
    {
      title: '질문 2',
      description: '설명 2',
      type: 'text',
      required: false,
      options: {},
    },
  ];

  const step = 1;
  const [answers, setAnswers] = useState([]);

  return (
    <div className="App">
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswers={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      />
    </div>
  );
}

export default App;
