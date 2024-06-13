// AllFeedbacksPage.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Feedback {
  name: string;
  feedback: string;
}

const AllFeedbacksPage: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    console.log(feedbacks);
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('/api/feedback');
        console.log(response.data);
        setFeedbacks(response.data);

      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="container">
      <h1>All Feedbacks</h1>
      <div className="feedback-list">
        <ul>
          {feedbacks.length==0?<p>Loading</p>:feedbacks.map((feedback, index) => (
            <li key={index} className="feedback-item">
              <strong>{feedback.name}:</strong> {feedback.feedback}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllFeedbacksPage;
