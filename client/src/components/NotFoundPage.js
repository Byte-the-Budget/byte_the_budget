import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>We can't seem to find the page you're looking for.</p>
      <p>
        Go back to the <Link to="/">home page</Link>.
      </p>
    </div>
  );
}

export default NotFoundPage;