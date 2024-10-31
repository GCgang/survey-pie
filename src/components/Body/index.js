import TextInput from '../TextInput';
import SelectInput from '../SelectInput';
import TextAreaInput from '../TextAreaInput';
import styled from 'styled-components';

export default function Body({ type, answer, setAnswers, options }) {
  let InputComponent = null;
  if (type === 'select') {
    InputComponent = SelectInput;
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
    InputComponent = TextAreaInput;
  }
  return (
    <BodyWrapper>
      <InputComponent
        answer={answer}
        setAnswers={setAnswers}
        options={options}
      />
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  margin: 0 38px;
  flex: 1;
`;
