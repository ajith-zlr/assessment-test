import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Step1 = ({ nextStep }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!firstName || !lastName) {
      setError(true);
    } else {
      nextStep({ firstName, lastName });
    }
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">What is your name?</h2>
      <div className="mb-4">
        <TextField
          fullWidth
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          error={error && !firstName}
          helperText={error && !firstName ? 'First name is required' : ''}
        />
      </div>
      <div className="mb-4">
        <TextField
          fullWidth
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          error={error && !lastName}
          helperText={error && !lastName ? 'Last name is required' : ''}
        />
      </div>
      <Button variant="contained" color="primary" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
};

export default Step1;
