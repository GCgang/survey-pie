import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import styled from 'styled-components';

export default function ActionButtons({ questionLength, step }) {
  const isLast = questionLength - 1 === step;
  const navigate = useNavigate();
  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        <Button type="SECONDARY" onClick={() => navigate(`${step - 1}`)}>
          이전
        </Button>
      )}
      {isLast ? (
        <Button type="PRIMARY" onClick={() => navigate('done')}>
          제출
        </Button>
      ) : (
        <Button type="PRIMARY" onClick={() => navigate(`${step + 1}`)}>
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
}

const ActionButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 72px;
  justify-content: center;
`;
