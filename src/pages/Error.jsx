import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Sorry, we goofed! It's an error.</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}