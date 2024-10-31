import styled from 'styled-components';

export default function TextAreaInput({ answer, setAnswer, options }) {
  return <TextArea placeholder={options.placeholder}></TextArea>;
}

const TextArea = styled.textarea`
  width: 100%;
  height: 196px;
  resize: none;
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
