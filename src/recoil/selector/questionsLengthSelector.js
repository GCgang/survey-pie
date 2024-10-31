import { selector } from 'recoil';
import questionsState from '../atom/questionsState';

const questionsLengthSelector = selector({
  key: 'questionsLengthSelector',
  get: ({ get }) => {
    const questions = get(questionsState);

    return questions.length;
  },
});

export default questionsLengthSelector;
