import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import styled from 'styled-components';
import questionsLengthSelector from '../../recoil/selector/questionsLengthSelector';
import { useRecoilValue } from 'recoil';
import useStep from '../../hooks/useStep';
import useAnswers from '../../hooks/useAnswers';
import postAnswers from '../../services/postAnswers';
import useSurveyId from '../../hooks/useSurveyId';
import { useState } from 'react';

export default function ActionButtons() {
  const questionsLength = useRecoilValue(questionsLengthSelector);
  const step = useStep();
  const surveyId = useSurveyId();
  const answers = useAnswers();
  const navigate = useNavigate();
  const [isPosting, setIsPosting] = useState(false);
  const isLast = questionsLength - 1 === step;
  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        <Button type="SECONDARY" onClick={() => navigate(`${step - 1}`)}>
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="PRIMARY"
          onClick={() => {
            setIsPosting(true);
            postAnswers(surveyId, answers)
              .then(() => {
                navigate(`/done/${surveyId}`);
              })
              .catch((error) => {
                alert(
                  `에러가 발생했습니다. 다시 시도해주세요.(${error.response.status})`,
                );
                setIsPosting(false);
              });
          }}
          disabled={isPosting}
        >
          {isPosting ? '제출중...' : '제출'}
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
