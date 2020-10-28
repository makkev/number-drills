import React from 'react';

import './multiplication-settings.styles.scss';

const MultiplicationSettings = ({
  tablesOptions,
  select,
  handleOnSelect,
  toggleStart,
}) => {
  return (
    <div className="multiplication-settings">
      <h1 className="title">Multiplication Tables</h1>
      <div className="info">Practice is the key to success!!!</div>
      <h2 className="select">Select multiplication tables:</h2>

      <div className="selections">
        {tablesOptions.map(n => (
          <div
            key={n}
            className={select[n] ? 'selected' : 'not-selected'}
            onClick={() => handleOnSelect(n)}
          >
            {n}
          </div>
        ))}
      </div>

      {Object.keys(select).find(key => select[key] === true) && (
        <button type="button" className="go-button" onClick={toggleStart}>
          Let's Go
        </button>
      )}
    </div>
  );
};

export default MultiplicationSettings;
