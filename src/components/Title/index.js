import styled from 'styled-components';

export default function Title({ children }) {
  return (
    <TitleWrapper>
      <span>Q. </span>
      {children}
    </TitleWrapper>
  );
}

const TitleWrapper = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: rgba(18, 17, 17, 1);
  margin: 0;

  span {
    margin-right: 12px;
  }
`;
