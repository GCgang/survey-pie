import { useParams } from 'react-router-dom';
export default function useSurveyId() {
  const params = useParams();

  return parseInt(params.surveyId);
}
