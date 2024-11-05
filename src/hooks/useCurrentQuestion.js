import { useRecoilValue } from 'recoil';
import surveyState from '../recoil/selector/surveyStateSelector';
import useStep from './useStep';
export default function useCurrentQuestion() {
  const step = useStep();
  const surveyData = useRecoilValue(surveyState);
  const questions = surveyData?.questions || [];

  return questions[step];
}
