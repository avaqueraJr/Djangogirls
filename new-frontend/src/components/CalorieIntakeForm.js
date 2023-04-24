import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { createCalorieIntake } from '../services/api';

const CalorieIntakeForm = () => {
  const [calories, setCalories] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createCalorieIntake({ calories });
    setCalories('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Calories"
        value={calories}
        onChange={(event) => setCalories(event.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Calorie Intake
      </Button>
    </form>
  );
};

export default CalorieIntakeForm;
