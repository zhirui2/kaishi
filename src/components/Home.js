import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [category, setCategory] = useState('');
  const [numQuestions, setNumQuestions] = useState(10);
  const navigate = useNavigate();

  const startExam = () => {
    navigate('/exam', { state: { category, numQuestions } });
  };

  return (
    <div>
      <h1>选择考试类别和题目数量</h1>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="general">General Knowledge</option>
        <option value="science">Science</option>
        <option value="history">History</option>
      </select>
      <input
        type="number"
        value={numQuestions}
        onChange={(e) => setNumQuestions(e.target.value)}
      />
      <button onClick={startExam}>开始考试</button>
    </div>
  );
}

export default Home;