import React, { useState, useEffect } from 'react';

import Results from '../../components/results/results.component';

import StageTypes from './stage.types';

import './multiplication-drill.styles.scss';
import '../../components/multiplication-settings/multiplication-settings.styles.scss';

const MultiplicationDrillPage = ({ questions }) => {
  const [currentQuestIdx, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [currentStage, setCurrentStage] = useState(StageTypes.WAIT_FOR_ANSWER);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [answersGiven, setAnswersGiven] = useState([]);

  const resetValues = () => {
    setCurrentAnswer('');
    setIsCorrect(false);
  };

  const handleOnChange = e => {
    const { value } = e.target;
    setCurrentAnswer(Number(value));
  };

  const checkAnswer = event => {
    event.preventDefault();
    if (currentAnswer === questions[currentQuestIdx].correctAnswer) {
      setIsCorrect(true);
      setScore(score + 1);
    }
    setAnswersGiven(prevState => [...prevState, currentAnswer]);

    setCurrentStage(StageTypes.CHECK_ANSWER);
  };

  const handleNext = () => {
    if (currentQuestIdx + 1 >= questions.length) {
      // TODO: testing
      // if (currentQuestIdx + 1 >= 2) {
      setCurrentStage(StageTypes.SHOW_RESULTS);
      return;
    }
    setCurrentQuestion(currentQuestIdx + 1);
    resetValues();
    setCurrentStage(StageTypes.WAIT_FOR_ANSWER);
  };

  return (
    <div className="multiplication-drill-page">
      <div className="question-container">
        <div className="question-info">
          <div>Score: {score}</div>
          <div>Time: 10</div>
        </div>

        {currentStage === StageTypes.SHOW_RESULTS && (
          <Results questions={questions} answersGiven={answersGiven} />
        )}

        {currentStage !== StageTypes.SHOW_RESULTS && (
          <div className="question-body">
            <div className="question-number">{`${currentQuestIdx + 1}/${
              questions.length + 1
            }`}</div>
            <div>{`${questions[currentQuestIdx].number1} x ${questions[currentQuestIdx].number2} =`}</div>
            <form onSubmit={checkAnswer}>
              <div>
                <input
                  type="text"
                  readOnly={currentStage !== StageTypes.WAIT_FOR_ANSWER}
                  // disabled={currentStage !== StageTypes.WAIT_FOR_ANSWER}
                  autoFocus
                  value={currentAnswer}
                  onChange={handleOnChange}
                  // ref={a => (this._inputAnswer = a)}
                  style={
                    currentStage === StageTypes.CHECK_ANSWER
                      ? { background: '#ecf0f1' }
                      : {}
                  }
                />
                {isCorrect && currentStage === StageTypes.CHECK_ANSWER && (
                  <div style={{ color: '#16a085' }}>&#10004;</div>
                )}
                {!isCorrect && currentStage === StageTypes.CHECK_ANSWER && (
                  <div>
                    <div style={{ color: '#e74c3c' }}>&#10006;</div>
                    <div className="correction-text">{`Correct answer is ${questions[currentQuestIdx].correctAnswer}`}</div>
                  </div>
                )}
              </div>
              {/* TODO: enable this component on mobile devices  */}
              {/* {currentStage === StageTypes.WAIT_FOR_ANSWER && (
                <div className="button-container">
                  <button
                    className="go-button"
                    type="submit"
                    // onClick={() => setCurrentQuestion(currentQuestIdx + 1)}
                  >
                    Submit
                  </button>
                </div>
              )} */}

              {currentStage === StageTypes.CHECK_ANSWER && (
                <div className="button-container">
                  <button className="go-button" onClick={() => handleNext()}>
                    Next
                  </button>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiplicationDrillPage;
