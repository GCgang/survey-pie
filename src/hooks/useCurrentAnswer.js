import { useRecoilState } from 'recoil';
import answersState from '../recoil/atom/answersState';
import useStep from './useStep';

export default function useCurrentAnswer() {
  const [answers, setAnswers] = useRecoilState(answersState);
  const step = useStep();
  const answer = answers[step];

  const setAnswer = (newAnswer) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = newAnswer;

      return newAnswers;
    });
  };

  return [answer, setAnswer];
}
