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
import useRequiredOptions from '../../hooks/useRequiredOptions';

export default function ActionButtons() {
  const questionsLength = useRecoilValue(questionsLengthSelector);
  const step = useStep();
  const surveyId = useSurveyId();
  const [answers, setAnswers] = useAnswers();
  const navigate = useNavigate();
  const [isPosting, setIsPosting] = useState(false);
  const isLast = questionsLength - 1 === step;
  const isRequired = useRequiredOptions();
  const isBlockToNext = isRequired ? !answers[step]?.length : false;

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
                setAnswers([]);
                navigate(`/done/${surveyId}`);
              })
              .catch((error) => {
                alert(
                  `에러가 발생했습니다. 다시 시도해주세요.(${error.response.status})`,
                );
                setIsPosting(false);
              });
          }}
          disabled={isPosting || isBlockToNext}
        >
          {isPosting ? '제출중...' : '제출'}
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => navigate(`${step + 1}`)}
          disabled={isBlockToNext}
        >
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
