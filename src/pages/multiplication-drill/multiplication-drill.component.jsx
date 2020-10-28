import React, { useState, useEffect } from 'react';

import StageTypes from './stage.types';

import './multiplication-drill.styles.scss';
import '../../components/multiplication-settings/multiplication-settings.styles.scss';

const MultiplicationDrillPage = ({ questions }) => {
  const [currentQuestIdx, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [currentStage, setCurrentStage] = useState(StageTypes.WAIT_FOR_ANSWER);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {}, [currentAnswer]);

  console.log(isCorrect);

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
    console.log('currentAnswer', currentAnswer);
    console.log(questions[currentQuestIdx].correctAnswer);
    console.log('-------');
    if (currentAnswer === questions[currentQuestIdx].correctAnswer) {
      setIsCorrect(true);
      setScore(score + 1);
    }

    setCurrentStage(StageTypes.SHOW_RESULTS);
  };

  const handleNext = () => {
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

        <div className="question-body">
          <div className="question-number">{`${currentQuestIdx + 1}/${
            questions.length + 1
          }`}</div>
          <div>{`${questions[currentQuestIdx].number1} x ${questions[currentQuestIdx].number2} =`}</div>
          <form onSubmit={checkAnswer}>
            <div>
              <input
                type="text"
                // readOnly={!this.state.showSubmitButton}
                autoFocus
                value={currentAnswer}
                onChange={handleOnChange}
                // ref={a => (this._inputAnswer = a)}
              />
              {isCorrect && currentStage === StageTypes.SHOW_RESULTS && (
                <div>&#10004;</div>
              )}
              {!isCorrect && currentStage === StageTypes.SHOW_RESULTS && (
                <div>&#10006;</div>
              )}
            </div>

            {currentStage === StageTypes.WAIT_FOR_ANSWER && (
              <div className="button-container">
                <button
                  className="go-button"
                  type="submit"
                  // onClick={() => setCurrentQuestion(currentQuestIdx + 1)}
                >
                  Submit
                </button>
              </div>
            )}

            {currentStage === StageTypes.SHOW_RESULTS && (
              <div className="button-container">
                <button className="go-button" onClick={() => handleNext()}>
                  Next
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationDrillPage;
