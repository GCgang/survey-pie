import { useRecoilValue } from 'recoil';
import surveyState from '../recoil/atom/surveyState';
import useStep from './useStep';

export default function useCurrentQuestion() {
  const questions = useRecoilValue(surveyState).questions;
  const step = useStep();

  return questions[step];
}
