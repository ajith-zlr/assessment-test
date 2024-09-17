
// import React, { useState } from 'react';


// import axios from 'axios';
// import Step1 from './step1';
// import Step2 from './step2';
// import Step3 from './step3';
// import Step4 from './step4';
// import Step5 from './step5';
// import { Button } from '@mui/material';

// const App = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     numberOfWheels: '',
//     vehicleType: '',
//     specificModel: '',
//     dateRange: null,
//   });





//   const handleNextStep = (data) => {
//     setFormData({ ...formData, ...data });
//     setStep(step + 1);
//   };

//   const handlePrevStep = () => {
//     setStep(step - 1);
//   };

//   const handleSubmit = async () => {

    
    
//     try {
//     const res =   await axios.post('http://localhost:3001/book', formData);

//     console.log(res,"res");
//     alert("hiiiiiiiiiiiiiiiiiiiiiii")
    
    
      
//     } catch (error) {
//       console.error('Error booking vehicle:', error);
//       alert('Failed to book vehiclesss.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">


//   <Button onClick={handleSubmit}>hello</Button>
   
//       {step === 1 && <Step1 nextStep={handleNextStep} />}
//       {step === 2 && <Step2 nextStep={handleNextStep} prevStep={handlePrevStep} />}
//       {step === 3 && <Step3 nextStep={handleNextStep} prevStep={handlePrevStep} formData={formData} />}
//       {step === 4 && <Step4 nextStep={handleNextStep} prevStep={handlePrevStep} formData={formData} />}
//       {step === 5 && <Step5 prevStep={handlePrevStep} handleSubmit={handleSubmit} />} 
//     </div>
//   );
// };

// export default App;



import React, { useState } from 'react';


import axios from 'axios';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';
import { Button } from '@mui/material';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    numberOfWheels: '',
    vehicleType: '',
    specificModel: '',
    dateRange: null,
  });





  const handleNextStep = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    console.log(formData?.specificModel,"specific");
    

  
    
    try {
    const res =   await axios.post('http://localhost:3001/book', formData);

   
    console.log(res,"result...........................");
    
    
      
    } catch (error) {
      console.error('Error booking vehicle:', error);
      alert('Failed to book vehiclesss.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">


  <Button onClick={handleSubmit}>hello</Button>
   
      {step === 1 && <Step1 nextStep={handleNextStep} />}
      {step === 2 && <Step2 nextStep={handleNextStep} prevStep={handlePrevStep} />}
      {step === 3 && <Step3 nextStep={handleNextStep} prevStep={handlePrevStep} formData={formData} />}
      {step === 4 && <Step4 nextStep={handleNextStep} prevStep={handlePrevStep} formData={formData} />}
      {step === 5 && <Step5 prevStep={handlePrevStep} handleSubmit={handleSubmit} />} 
    </div>
  );
};

export default App;