import { useRecoilValue } from 'recoil';
import questionsState from '../recoil/atom/questionsState';
import useStep from './useStep';

export default function useCurrentQuestion() {
  const questions = useRecoilValue(questionsState);
  const step = useStep();

  return questions[step];
}
