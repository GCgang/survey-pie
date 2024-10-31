import { useParams } from 'react-router-dom';

export default function useStep() {
  const params = useParams();

  return parseInt(params.step);
}
