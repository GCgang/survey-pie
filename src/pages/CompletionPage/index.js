import styled from 'styled-components';
import congratulations from '../../assets/images/congratulations.png';
import reload from '../../assets/images/reload.png';
import Button from '../../components/Button';
import useSurveyId from '../../hooks/useSurveyId';
import { useNavigate } from 'react-router-dom';
export default function CompletionPage() {
  const surveyId = useSurveyId();
  const navigate = useNavigate();
  return (
    <CompletionPageWrapper>
      <CongratulationsIcon src={congratulations} alt="congratulations" />
      <CompletionMessage>설문을 완료했습니다.</CompletionMessage>
      <ReloadButton
        type="TERTIARY"
        onClick={() => {
          navigate(`/survey/${surveyId}/0`);
        }}
      >
        <ReloadButtonIcon src={reload} alt="reload" />
        새로운 응답 제출하기
      </ReloadButton>
    </CompletionPageWrapper>
  );
}

const CompletionPageWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const CongratulationsIcon = styled.img`
  width: 209px;
  height: 204px;
`;

const CompletionMessage = styled.h1`
  font-size: 'bold';
  font-size: 24px;
  line-height: 28px;
  margin-top: 16px;
  margin-bottom: 56px;
`;

const ReloadButtonIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const ReloadButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;
