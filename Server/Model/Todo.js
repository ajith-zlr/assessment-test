// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const TodoSchema = new Schema({
//     task: String
// })
// const TodoModel = mongoose.model("Todo1", TodoSchema);

// module.exports = TodoModel;



const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    name: String
  });
  
  // Subtype Schema
  const subtypeSchema = new mongoose.Schema({
    name: String,
    vehicles: [vehicleSchema]
  });
  
  // Vehicle Type Schema
  const vehicleTypeSchema = new mongoose.Schema({
    type: String,
    subtypes: [subtypeSchema]
  });

  const bookingSchema = new mongoose.Schema({
    vehicleId: { type: String, required: true }, 
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true }
  });
  
  // Booking Schema
  // const bookingSchema = new mongoose.Schema({
  //   vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'VehicleType' },  
  //   startTime: Date,
  //   endTime: Date
  // });

const VehicleType = mongoose.model('VehicleType', vehicleTypeSchema);
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = { VehicleType, Booking };
