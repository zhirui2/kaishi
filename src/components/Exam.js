import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Exam() {
  const location = useLocation();
  const { category, numQuestions } = location.state;
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=${numQuestions}&category=${category === 'general' ? 9 : category === 'science' ? 17 : 23}`
      );
      setQuestions(response.data.results);
    };
    fetchQuestions();
  }, [category, numQuestions]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/result', { state: { questions, answers } });
    }
  };

  return (
    <div>
      <h1>答题页面</h1>
      {questions.length > 0 && (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].incorrect_answers.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Exam;