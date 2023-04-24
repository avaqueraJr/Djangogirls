import React from 'react';

const StepCounter = ({ stepCounter }) => (
  <div className="step-counter">
    <h2>Steps: {stepCounter.steps}</h2>
    <p>Date: {stepCounter.date}</p>
  </div>
);

export default StepCounter;

