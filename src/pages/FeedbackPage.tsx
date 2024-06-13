import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeedbackForm from '../components/FeedbackForm';

const FeedbackPage: React.FC = () => {
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    navigate('/thank-you');
  };

  const handleShowFeedbacks = () => {
    navigate('/all-feedbacks'); // Navigate to a new page to show all feedbacks
  };

  return (
    <div className="container">
      <h1>Submit Feedback</h1>
      <FeedbackForm onSubmit={handleFormSubmit} />
      <div className="center-container">
        <button onClick={handleShowFeedbacks}>
          Show All Feedbacks
        </button>
      </div>
    </div>
  );
};

export default FeedbackPage;
