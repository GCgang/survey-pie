import styled from 'styled-components';
function Item({ children, onChange }) {
  return (
    <ItemWrapper>
      <label>
        <input type="checkbox" onChange={onChange} />
        <span />
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
}
export default function SelectInput({ answer = [], setAnswers, options }) {
  const handleChange = (isCheckd, index) => {
    if (isCheckd) {
      setAnswers([...answer, index]);
    } else {
      setAnswers(answer.filter((item) => item !== index));
    }
  };
  return (
    <SelectInputWrapper>
      {options.items.map((item, index) => {
        return (
          <Item
            key={index}
            onChange={(e) => handleChange(e.target.checked, index)}
          >
            {item}
          </Item>
        );
      })}
    </SelectInputWrapper>
  );
}

const ItemWrapper = styled.div`
  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] ~ span {
    width: 24px;
    height: 24px;
    border: 3px solid rgba(226, 223, 223, 1);
    border-radius: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
  }

  input[type='checkbox']:checked ~ span {
    border: 8px solid rgba(101, 66, 241, 1);
  }

  input[type='checkbox'] ~ div {
    font-size: 14px;
    line-height: 18px;
    display: inline-block;
    vertical-align: middle;
  }

  input[type='checkbox']:checked ~ div {
    font-weight: bold;
  }
`;

const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
