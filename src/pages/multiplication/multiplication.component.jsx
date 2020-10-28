import React, { useState, useEffect } from 'react';

import MultiplicationSettings from '../../components/multiplication-settings/multiplication-settings.component';
import MultiplicationDrillPage from '../multiplication-drill/multiplication-drill.component';

import { shuffle, filterQuestions } from './multiplication.utils';
import './multiplication.styles.scss';

import { quiz } from '../../data/quiz';

const tablesOptions = [2, 3, 4, 5, 6, 7, 8, 9, 12];

const MultiplicationPage = () => {
  const [select, setSelect] = useState({
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    12: false,
  });

  const [isStart, setIsStart] = useState(false);

  const [selectedQuestions, setSelectedQuestions] = useState([]);

  useEffect(() => {
    console.log(select);
  }, [select]);

  // const handleOnClick = (num, select, setSelect) => {
  const handleOnSelect = num => {
    setSelect({
      ...select,
      [num]: !select[num],
    });
  };

  const handleStart = () => {
    setIsStart(!isStart);
    setSelectedQuestions(shuffle(filterQuestions(quiz.questions, select)));
  };

  // console.log('history', history);
  console.log('isStart: ', isStart);

  return isStart ? (
    <MultiplicationDrillPage questions={selectedQuestions} />
  ) : (
    <MultiplicationSettings
      tablesOptions={tablesOptions}
      select={select}
      handleOnSelect={handleOnSelect}
      isStart={isStart}
      toggleStart={handleStart}
    />
  );
};

export default MultiplicationPage;
