import React from 'react';

import './progress-bar.styles.scss';

const ProgressBar = ({ max, current }) => {
  const width = (current / max) * 100;
  return (
    <div className="progress-bar">
      <div className="progress-bar-full" style={{ width: `${width}%` }}></div>
    </div>
  );
};

export default ProgressBar;
