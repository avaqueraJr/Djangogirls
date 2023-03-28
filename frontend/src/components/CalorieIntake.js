import React from 'react';

const CalorieIntake = ({ calorieIntake }) => (
  <div className="calorie-intake">
    <h2>Calories: {calorieIntake.calories}</h2>
    <p>Date: {calorieIntake.date}</p>
  </div>
);

export default CalorieIntake;
