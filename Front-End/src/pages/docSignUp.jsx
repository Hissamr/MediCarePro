import React, { useState } from 'react';
import './signUp.css';
import { Link } from 'react-router-dom';

function DocSignUp() {
  const [doctor, setDoctor] = useState({
    name: '',
    username: '',
    specialization: '',
    experience: '',
    phoneno: '',
    email: '',
    password: '',
    confirmpass: '',
    dob: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  var name = doctor.name;
  var username = doctor.username;
  var specialization = doctor.specialization;
  var experience = doctor.experience;
  var phoneno = doctor.phoneno;
  var email = doctor.email;
  var password = doctor.password;
  var dob = doctor.dob;
  var address = doctor.address;
  var address2 = doctor.address2;
  var city = doctor.city;
  var state = doctor.state;
  var zip = doctor.zip;

  const [err, setErr] = useState('');

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({
      ...doctor,
      [name]: value
    });
  };

  // Handle form submit
  async function handleSubmit(e){
    e.preventDefault();
    
    // Basic validation
    if (doctor.password !== doctor.confirmpass) {
      setErr('Passwords do not match');
      return;
    }
    if (doctor.password.length < 8 || doctor.password.length > 20) {
      setErr('Password must be 8-20 characters long.');
      return;
    }

    let result = await fetch("http://localhost:8000/doctor", {
      method:'post',
      body:JSON.stringify({name,username,specialization,experience,phoneno,email,password,dob,address,address2,city,state,zip}),
      headers:{
        'Content-Type': 'application/json'
      }
    });

    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));

    // Clear error message if validation is successful
    setErr('');

    // Log form data for now (you can replace this with an API call)
    console.log('Form submitted', doctor);

    // Reset form after submission
    setDoctor({
      name: '',
      username: '',
      specialization: '',
      experience: '',
      phoneno: '',
      email: '',
      password: '',
      confirmpass: '',
      dob: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    });
  };

  return (
    <div>
      <h1 className='title'>Doctor Sign-up</h1>
      <div className="signup-container">
        <div className="form">
          <form className="row mb-3" onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-3">
              <label htmlFor="InputName" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="InputName"
                name="name"
                value={doctor.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Username */}
            <div className="mb-3">
              <label htmlFor="InputUserName" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="InputUserName"
                name="username"
                value={doctor.username}
                onChange={handleChange}
                required
              />
            </div>

            {/* Specialization */}
            <div className="mb-3">
              <label htmlFor="InputSpecialization" className="form-label">Specialization</label>
              <input
                type="text"
                className="form-control"
                id="InputSpecialization"
                name="specialization"
                value={doctor.specialization}
                onChange={handleChange}
                aria-describedby='SpecializationHelpBlock'
                required
              />
              <div id="SpecializationHelpBlock" className="form-text">
                e.g., cardiologist, dermatologist, etc.
              </div>
            </div>

            {/* Year of Experience */}
            <div className="mb-3">
              <label htmlFor="InputExp" className="form-label">Year of Experience</label>
              <input
                type="number"
                className="form-control"
                id="InputExp"
                name="experience"
                value={doctor.experience}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="InputEmail" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="InputEmail"
                name="email"
                value={doctor.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3 col-6">
              <label htmlFor="InputPassword" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="InputPassword"
                name="password"
                value={doctor.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-3 col-6">
              <label htmlFor="InputConfirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="InputConfirmPassword"
                name="confirmpass"
                value={doctor.confirmpass}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Info */}
            <div id="passwordHelpBlock" className="form-text">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </div>

            {/* Phone Number */}
            <div className="mb-3 pt-3">
              <label htmlFor="InputPhone" className="form-label">Phone no</label>
              <input
                type="number"
                className="form-control"
                id="InputPhone"
                name="phoneno"
                value={doctor.phoneno}
                onChange={handleChange}
                required
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-3">
              <label htmlFor="InputDOB" className="form-label">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                id="InputDOB"
                name="dob"
                value={doctor.dob}
                onChange={handleChange}
                required
              />
            </div>

            {/* Address */}
            <div className="col-12 pt-3">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                name="address"
                value={doctor.address}
                onChange={handleChange}
                placeholder="1234 Main St"
                required
              />
            </div>

            {/* Address 2 */}
            <div className="col-12 pt-3">
              <label htmlFor="inputAddress2" className="form-label">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                name="address2"
                value={doctor.address2}
                onChange={handleChange}
                placeholder="Apartment, studio, or floor"
              />
            </div>

            {/* City */}
            <div className="col-md-6 pt-3">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                name="city"
                value={doctor.city}
                onChange={handleChange}
                required
              />
            </div>

            {/* State */}
            <div className="col-md-4 pt-3">
              <label htmlFor="inputState" className="form-label">State</label>
              <select
                id="inputState"
                className="form-select"
                name="state"
                value={doctor.state}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option>Tamil Nadu</option>
              </select>
            </div>

            {/* Zip */}
            <div className="col-md-2 pt-3">
              <label htmlFor="inputZip" className="form-label">Zip</label>
              <input
                type="text"
                className="form-control"
                id="inputZip"
                name="zip"
                value={doctor.zip}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="col-12 pt-3">
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
          </form>

          {/* Error message */}
          {err && <div className="alert alert-danger">{err}</div>}

          <p className="sign-up">
            Already have an Account? <Link to="/" style={{ textDecoration: 'none' }}>Sign-In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DocSignUp;
