import TextInput from '../TextInput';
import SelectInput from '../SelectInput';
import TextAreaInput from '../TextAreaInput';

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
    <>
      <InputComponent
        answer={answer}
        setAnswers={setAnswers}
        options={options}
      />
    </>
  );
}
