import React, { useState } from 'react';
import Question from './Question';
import Results from './Results';
import { questions } from '../data/questions';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    return <Results score={score} totalQuestions={questions.length} />;
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>Knowledge Quiz</h1>
        <p className="quiz-description">Test your knowledge with these interesting questions!</p>
      </div>
      <div className="progress">
        Question {currentQuestionIndex + 1} of {questions.length}
      </div>
      <Question
        question={questions[currentQuestionIndex]}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
      />
      {selectedAnswer && (
        <button 
          className="next-button"
          onClick={handleNextQuestion}
        >
          {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      )}
    </div>
  );
};

export default Quiz; 