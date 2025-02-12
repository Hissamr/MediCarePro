import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('doctor'); // 'doctor' or 'patient'
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const loginData = { username, password, role };
  
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // If login is successful, store token in localStorage
        localStorage.setItem('token', data.token);
  
        // Redirect to the appropriate homepage based on the role
        if (role === 'doctor') {
          navigate('/doctordash'); // Redirect to doctor home page
        } else if (role === 'patient') {
          navigate('/patientdash'); // Redirect to patient home page
        }
      } else {
        setError(data.message); // Display error message if login fails
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Something went wrong. Please try again later.');
    }
  };
  

  return (
    <div>
      <div className="login">
        <h1 className="title">Login</h1>
        <div className="container">
          <div className="doc-container">
            <h3 className="doc-title">Doctor</h3>
            <form className="mb-3" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="InputName" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputName"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="InputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="InputPassword"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="role" className="form-label">
                  Role
                </label>
                <select
                  className="form-control"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="doctor">Doctor</option>
                  <option value="patient">Patient</option>
                </select>
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
            <p className="sign-up">
              Create New Account for Doctor{' '}
              <Link to="/docsignup" style={{ textDecoration: 'none' }}>
                Sign-Up
              </Link>
            </p>
            <p className="sign-up">
              Create New Account for Patient{' '}
              <Link to="/patsignup" style={{ textDecoration: 'none' }}>
                Sign-Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
