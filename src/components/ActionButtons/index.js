import { useNavigate } from 'react-router-dom';
import Button from '../Button';
export default function ActionButtons({ questionLength, step }) {
  const isLast = questionLength - 1 === step;
  const navigate = useNavigate();
  return (
    <div>
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
    </div>
  );
}
