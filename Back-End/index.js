const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const Doctor = require('./doctorSchema');
const Patient = require('./patientSchema');
//const uuid = require('uuid');
require('dotenv/config');
app.use(morgan('dev'));

//convert body response to json
app.use(express.json())

const cors = require('cors');

app.use(cors());

app.use((req, res, next)=>{
    console.log('middleware');
    next()
})

app.post('/login', async (req, res) => {
    const { username, password, role } = req.body;
  
    try {
      let user;
      // Check based on role (doctor or patient)
      if (role === 'doctor') {
        user = await Doctor.findOne({ username });
      } else if (role === 'patient') {
        user = await Patient.findOne({ username });
      } else {
        return res.status(400).json({ message: 'Invalid role' });
      }
  
      if (!user || user.password !== password) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }
  
      // On successful login, you can return a token or just a success message
      const token = 'your_jwt_token_here';  // Example token
      res.json({ message: 'Login successful', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

const doctorRoute = require('./doctorRoute');

app.use('/doctor', doctorRoute);

const patientRoute = require('./patientRoute');

app.use('/patient', patientRoute);

app.listen(process.env.PORT, ()=>{
    console.log('server started');
})

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log("database connected");
}).catch(()=>{
    console.log("database connected error");
});
