import React from 'react';

import './ChartBar.css';

function ChartBar(props) {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  let chartBarColor = '';
  if (Math.round((props.value / props.maxValue) * 100) >= 80) {
    chartBarColor = 'chart-bar__fill-red';
  }
  if (Math.round((props.value / props.maxValue) * 100) >= 45 && Math.round((props.value / props.maxValue) * 100)<80) {
    chartBarColor = 'chart-bar__fill-yellow';
  }
  if (Math.round((props.value / props.maxValue) * 100) < 45) {
    chartBarColor = 'chart-bar__fill-green';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className={chartBarColor} style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
