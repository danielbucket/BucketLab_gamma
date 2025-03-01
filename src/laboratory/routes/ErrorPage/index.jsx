import { useRouteError } from 'react-router-dom';
import { ErrorPageWrapper } from './index.style';

export default function ErrorPage() {
  const errorData = useRouteError();

  return (
    <ErrorPageWrapper>
      <h1>Error Page</h1>
      {errorData.message && <p>{errorData.message}</p>}
    </ErrorPageWrapper>
  );
};