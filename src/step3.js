import React, { useState, useEffect } from 'react';
import { Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';
import axios from 'axios';

const Step3 = ({ nextStep, prevStep, formData }) => {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [error, setError] = useState(false);


  console.log(vehicleTypes,"typed.............");

 
  
  useEffect(() => {
    axios.get('http://localhost:3001/vehicles').then((response) => {

      console.log(response,"resppppppppppppppppppppppppp");
      
      const filteredTypes = response.data.filter((vehicleType) =>
        vehicleType.subtypes.some((subtype) => {
          return formData.numberOfWheels === '2' ? subtype.name === 'Bike' : subtype.name === 'Car';
        })
      );
      setVehicleTypes(filteredTypes);
    });
  }, [formData.numberOfWheels]);

  const handleNext = () => {
    if (!selectedType) {
      setError(true);
    } else {
      nextStep({ vehicleType: selectedType });
    }
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Select Vehicle Type</h2>
      <RadioGroup
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        {vehicleTypes.map((type) => (
          <FormControlLabel key={type._id} value={type._id} control={<Radio />} label={type.type} />
        ))}
      </RadioGroup>
      {error && <p className="text-red-500">Please select a vehicle type.</p>}
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

export default Step3;