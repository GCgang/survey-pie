import { selector } from 'recoil';
import surveyState from './surveyStateSelector';

const questionsLengthSelector = selector({
  key: 'questionsLengthSelector',
  get: ({ get }) => {
    const questions = get(surveyState).questions;

    return questions.length;
  },
});

export default questionsLengthSelector;
