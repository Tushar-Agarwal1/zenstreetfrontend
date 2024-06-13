// App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackPage from './pages/FeedbackPage';
import ThankYouPage from './pages/ThankYouPage';
import AllFeedbacksPage from './pages/AllFeedbacksPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedbackPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/all-feedbacks" element={<AllFeedbacksPage />} />
      </Routes>
    </Router>
  );
};

export default App;
