import React, { useState, useEffect } from 'react';

import './multiplication.styles.scss';

const handleOnClick = (num, select, setSelect) => {
  setSelect({
    ...select,
    [num]: !select[num],
  });
};

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

  useEffect(() => {
    console.log(select);
  }, [select]);

  return (
    <div className="multiplication-page">
      <h1 className="title">Multiplication Tables</h1>
      <div className="info">Practice is the key to success!!!</div>
      <h2 className="select">Select multiplication tables:</h2>

      <div className="selections">
        {tablesOptions.map(n => (
          <div
            key={n}
            className={select[n] ? 'selected' : 'not-selected'}
            onClick={() => handleOnClick(n, select, setSelect)}
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiplicationPage;
