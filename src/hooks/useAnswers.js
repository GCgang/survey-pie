import { useRecoilValue } from 'recoil';
import answersState from '../recoil/atom/answersState';

export default function useAnswers() {
  return useRecoilValue(answersState);
}