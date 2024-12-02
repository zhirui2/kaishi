import React from 'react';
import { useLocation } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const { questions, answers } = location.state;

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (question.correct_answer === answers[index]) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div>
      <h1>考试结果</h1>
      <h2>你的得分: {calculateScore()}</h2>
      <h2>正确答案:</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          <p>你的答案: {answers[index]}</p>
          <p>正确答案: {question.correct_answer}</p>
        </div>
      ))}
    </div>
  );
}

export default Result;