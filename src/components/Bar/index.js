import styled from 'styled-components';

const Bar = styled.div`
  width: 120px;
  height: 8px;
  border-radius: 16px;
  background: ${({ status }) => {
    if (status === 'pending') {
      return 'rgba(227, 226, 231, 1)';
    } else if (status === 'in-progress') {
      return 'rgba(101, 66, 241, 1)';
    } else if (status === 'done') {
      return 'rgba(186, 169, 255, 1)';
    }
  }};
`;

export default Bar;
