import Description from '../Description';
import Title from '../Title';
import Body from '../Body';
import ActionButtons from '../ActionButtons';
export default function QuestionBox({
  question,
  questionsLength,
  step,
  answer,
  setAnswers,
}) {
  const { title, description, type, required, options } = question;
  return (
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Body type={type} answer={answer} setAnswers={setAnswers} />
      <ActionButtons questionsLength={questionsLength} step={step} />
    </div>
  );
}
