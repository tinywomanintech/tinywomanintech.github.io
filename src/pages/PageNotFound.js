import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="text-center py-5">
      <h1>Sorry, this page isn't available</h1>
      <p>
        please back to &nbsp;
        <Link to="/" className="text-decoration-none">
          here
        </Link>
      </p>
    </div>
  );
};

export default PageNotFound;
