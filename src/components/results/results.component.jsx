import React from 'react';

import './results.styles.scss';

const Results = ({ questions, answersGiven }) => {
  console.log('answersGiven', answersGiven);
  console.log('questions: ', questions);
  return (
    <div>
      <h2>Results</h2>
      {answersGiven.map((answer, i) => (
        <div className="result-line">
          <div index={i}>
            {`(${i + 1}) ${questions[i].number1} x ${
              questions[i].number2
            } = ${answer}`}
          </div>
          {answer === questions[i].correctAnswer && (
            <div>&nbsp;&nbsp;&#9989;</div>
          )}
          {answer !== questions[i].correctAnswer && (
            <div className="wrong-answer">
              &nbsp;-&nbsp;
              {`correct answer is ${questions[i].correctAnswer}`}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Results;
