import { atom } from 'recoil';

const surveyState = atom({
  key: 'surveyState',
  default: {
    id: 1,
    title: '제목',
    questions: [
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
    ],
  },
});

export default surveyState;
