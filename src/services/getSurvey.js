import mainApi from './apis/mainApi';

export default function getSurvey(surveyId) {
  return mainApi.get(`/surveys/${surveyId}`);
}
