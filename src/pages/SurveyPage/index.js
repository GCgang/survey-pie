import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';
import styled from 'styled-components';
export default function SurveyPage() {
  return (
    <SurveyPageWrapper>
      <ProgressIndicator />
      <QuestionBox />
    </SurveyPageWrapper>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;
