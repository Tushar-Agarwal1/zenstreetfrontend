import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
  return (
    <div className="container">
      <h1>Thank You for Your Feedback!</h1>
      <Link to="/">Go back to Feedback Page</Link>
    </div>
  );
};

export default ThankYouPage;
