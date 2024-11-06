import useCurrentQuestion from '../hooks/useCurrentQuestion';

export default function useRequiredOptions() {
  const question = useCurrentQuestion();

  return question?.required || false;
}
