import Description from '../Description';
import Title from '../Title';
import Body from '../Body';
import ActionButtons from '../ActionButtons';
import styled from 'styled-components';
export default function QuestionBox({
  question,
  questionsLength,
  step,
  answer,
  setAnswers,
}) {
  const { title, description, type, required, options } = question;
  return (
    <QuestionBoxWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Body
        type={type}
        answer={answer}
        setAnswers={setAnswers}
        options={options}
      />
      <ActionButtons questionsLength={questionsLength} step={step} />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
