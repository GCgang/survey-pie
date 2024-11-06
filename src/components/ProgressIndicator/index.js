import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import useAnswers from '../../hooks/useAnswers';
import useStep from '../../hooks/useStep';
import questionsLengthSelector from '../../recoil/selector/questionsLengthSelector';
import Bar from '../Bar';
export default function ProgressIndicator() {
  const length = useRecoilValue(questionsLengthSelector);
  const [answers] = useAnswers();
  const step = useStep();
  const bars = [];
  for (let i = 0; i < length; ++i) {
    let status = 'pending';
    if (i === step) {
      status = 'in-progress';
    } else if (answers[i]) {
      status = 'done';
    }
    bars.push(<Bar key={i} status={status}></Bar>);
  }

  return (
    <ProgressIndicatorWrapper>
      <Bars>{bars}</Bars>
      <PageCount>
        <span>{step + 1}</span>/{length}
      </PageCount>
    </ProgressIndicatorWrapper>
  );
}

const ProgressIndicatorWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: calc(100% + 24px);
  left: 0;
  width: 100%;
`;

const Bars = styled.div`
  display: flex;
  gap: 8px;
`;
const PageCount = styled.div`
  color: rgba(99, 98, 98, 1);
  font-size: 16px;
  line-height: 19px;

  span {
    font-weight: bold;
    color: rgba(18, 17, 17, 1);
  }
`;
