import Title from '../Title';
import Description from '../Description';
import Body from '../Body';
import ActionButtons from '../ActionButtons';
import styled from 'styled-components';
import useCurrentQuestion from '../../hooks/useCurrentQuestion';
import useCurrentAnswer from '../../hooks/useCurrentAnswer';
export default function QuestionBox() {
  const question = useCurrentQuestion();
  const [answer, setAnswer] = useCurrentAnswer();

  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Description>{question.description}</Description>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
