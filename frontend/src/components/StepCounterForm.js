import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { createStepCounter } from '../services/api';

const StepCounterForm = () => {
  const [steps, setSteps] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createStepCounter({ steps });
    setSteps('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Steps"
        value={steps}
        onChange={(event) => setSteps(event.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Step Count
      </Button>
    </form>
  );
};

export default StepCounterForm;
