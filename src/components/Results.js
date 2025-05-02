import React from 'react';

const Results = ({ score, totalQuestions }) => {
  const percentage = (score / totalQuestions) * 100;
  
  const getMessage = () => {
    if (percentage >= 80) return "Excellent! You're a quiz master! 🏆";
    if (percentage >= 60) return "Great job! You know your stuff! 🌟";
    if (percentage >= 40) return "Good effort! Keep learning! 📚";
    return "Keep practicing! You'll get better! 💪";
  };

  return (
    <div className="results-container">
      <h2>Quiz Completed!</h2>
      <div className="score-display">
        <p className="score-message">{getMessage()}</p>
        <p className="score-details">Your Score: {score} out of {totalQuestions}</p>
        <p className="score-percentage">Percentage: {percentage.toFixed(1)}%</p>
      </div>
      <button 
        className="restart-button"
        onClick={() => window.location.reload()}
      >
        Try Again
      </button>
    </div>
  );
};

export default Results; 