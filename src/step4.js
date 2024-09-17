import React, { useState, useEffect } from 'react';
import { Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';
import axios from 'axios';

const Step4 = ({ nextStep, prevStep, formData }) => {
  const [specificModels, setSpecificModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/vehicles/${formData.vehicleType}`).then((response) => {
      const models = response.data.subtypes.find(subtype => 
        formData.numberOfWheels === '2' ? subtype.name === 'Bike' : subtype.name === 'Car'
      ).models;
      setSpecificModels(models);
    });
  }, [formData.vehicleType, formData.numberOfWheels]);

  const handleNext = () => {
    if (!selectedModel) {
      setError(true);
    } else {
      nextStep({ specificModel: selectedModel });
    }
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Select Specific Model</h2>
      <RadioGroup
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
      >
        {specificModels.map((model) => (
          <FormControlLabel key={model._id} value={model._id} control={<Radio />} label={model.name} />
        ))}
      </RadioGroup>
      {error && <p className="text-red-500">Please select a specific model.</p>}
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

export default Step4;