import { useState } from 'react';
import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';
import { useParams } from 'react-router-dom';
export default function SurveyPage() {
  const params = useParams();

  const questions = [
    {
      title: '질문 1',
      description: '설명 1',
      type: 'text',
      required: false,
      options: {
        placeholder: '입력...',
      },
    },
    {
      title: '질문 2',
      description: '설명 2',
      type: 'textarea',
      required: false,
      options: {
        placeholder: '입력...',
      },
    },
    {
      title: '질문 3',
      description: '설명 3',
      type: 'select',
      required: false,
      options: {
        items: ['답변1', '답변2', '답변3', '답변4', '답변5'],
      },
    },
  ];

  const step = parseInt(params.step);

  const [answers, setAnswers] = useState([]);

  return (
    <div>
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
