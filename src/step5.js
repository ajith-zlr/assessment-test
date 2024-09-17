import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import DateFnsAdapter from '@mui/lab/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const Step5 = ({ prevStep, handleSubmit }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [error, setError] = useState(false);

  const onSubmit = () => {
    if (!dateRange[0] || !dateRange[1]) {
      setError(true);
    } else {
      handleSubmit({ dateRange });
    }
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Select Date Range</h2>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          startText="Start Date"
          endText="End Date"
          value={dateRange}
          onChange={(newValue) => setDateRange(newValue)}
          renderInput={(startProps, endProps) => (
            <>
              <TextField {...startProps} />
              <TextField {...endProps} />
            </>
          )}
        />
      </LocalizationProvider>
      {error && <p className="text-red-500">Please select a date range.</p>}
      <div className="mt-4">
        <Button variant="contained" color="primary" onClick={prevStep}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={onSubmit} className="ml-4">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Step5;