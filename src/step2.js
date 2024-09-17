import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';

const Step2 = ({ nextStep, prevStep }) => {
  const [numberOfWheels, setNumberOfWheels] = useState('');
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!numberOfWheels) {
      setError(true);
    } else {
      nextStep({ numberOfWheels });
    }
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Number of wheels</h2>
      <RadioGroup
        value={numberOfWheels}
        onChange={(e) => setNumberOfWheels(e.target.value)}
      >
        <FormControlLabel value="2" control={<Radio />} label="2" />
        <FormControlLabel value="4" control={<Radio />} label="4" />
      </RadioGroup>
      {error && <p className="text-red-500">Please select an option.</p>}
      <div className="mt-4">
        <Button variant="contained" color="primary" onClick={prevStep}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext} className="ml-4">
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step2;
