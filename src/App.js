import { Routes, Route } from 'react-router-dom';
import SurveyPage from './pages/SurveyPage';
import CompletionPage from './pages/CompletionPage';
import styled from 'styled-components';
function App() {
  return (
    <AppWrapper>
      <Main>
        <Routes>
          <Route path="/survey/:surveyId" element={<SurveyPage />}>
            <Route path=":step" element={<SurveyPage />} />
          </Route>
          <Route path="/done/:surveyId" element={<CompletionPage />} />
        </Routes>
      </Main>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(245, 246, 246, 1);
`;

const Main = styled.main`
  width: 700px;
  min-height: 500px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  padding: 60px;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;
export default App;
