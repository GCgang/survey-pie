import styled from 'styled-components';
export default function TextInput({ answer = '', setAnswer, options }) {
  return (
    <Input
      type="text"
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
      placeholder={options.placeholder}
      {...(options?.max && { maxLength: options?.max })}
    />
  );
}

const Input = styled.input`
  width: 100%;
  border: 1px solid rgba(224, 224, 224, 1);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 12px 18px;

  font-size: 18px;
  line-height: 21px;

  &:focus {
    outline: none;
    border: 1px solid rgba(101, 66, 241, 1);
  }
`;
