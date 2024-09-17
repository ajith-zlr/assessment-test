const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


const { VehicleType, Booking } = require('./Model/Todo'); 


console.log(VehicleType,"veeeeeeeeeeeeeeeeeeeeeeeeeeeee");


app.use(express.json());
app.use(cors());
console.log("At backend");

mongoose.connect('mongodb+srv://nimmanasathish31:sathish1234@cluster0.3ftao.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

app.get('/vehicles', async (req, res) => {
    try {
        const vehicleTypes = await VehicleType.find();
        res.status(200).json(vehicleTypes);
    } catch (error) {
        console.error("Error fetching vehicle types:", error);
        res.status(500).send("Failed to fetch vehicle types.");
    }
});

app.post('/book', async (req, res) => {
    // Destructure the vehicleId, startTime, and endTime from the request body
    const { vehicleId, startTime, endTime } = req.body;

    console.log(vehicleId, "vehicleId", startTime, "startTime", endTime, "endTime");

    try {
        // Check if the vehicle is already booked for the selected time
        const existingBooking = await Booking.findOne({
            vehicleId,
            $or: [
                { startTime: { $lte: endTime, $gte: startTime } },
                { endTime: { $lte: endTime, $gte: startTime } }
            ]
        });

        if (existingBooking) {
            return res.status(400).send("Vehicle is already booked for the selected time.");
        }

        // Create a new booking
        const booking = new Booking({ vehicleId, startTime, endTime });
        await booking.save();

        res.status(200).json(booking);
    } catch (error) {
        console.error("Error booking vehicle:", error);
        res.status(500).send("Failed to book vehicle.");
    }
});










// app.post('/add', async (req, res) => {
//     const task = req.body.task;
//     try {
//         await TodoModel.create({
//             task: task
//         });
//         res.status(200).send("Task added successfully.");
//     } catch (error) {
//         console.error("Error adding task:", error);
//         res.status(500).send("Failed to add task.");
//     }
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


