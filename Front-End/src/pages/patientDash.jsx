import React from "react";
import "./dashboard.css"; // Ensure you have this CSS file for styling

function PatientDash() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Patient Dashboard</h2>

      {/* Medical Records */}
      <div className="card shadow mb-4">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Medical Records</h5>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Details</th>
                <th>Doctor</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>11/02/2025</td>
                <td>Blood Pressure Check</td>
                <td>Dr. John</td>
                <td>
                  <button className="btn btn-info btn-sm">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="card shadow mb-4">
        <div className="card-header bg-success text-white">
          <h5 className="mb-0">Upcoming Appointments</h5>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Doctor</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12/02/2025</td>
                <td>10:00 AM</td>
                <td>Dr. Smith</td>
                <td>
                  <button className="btn btn-info btn-sm">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Prescriptions */}
      <div className="card shadow mb-4">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">Prescriptions</h5>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Medication</th>
                <th>Dosage</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>10/02/2025</td>
                <td>Amlodipine</td>
                <td>5 mg</td>
                <td>
                  <button className="btn btn-info btn-sm">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PatientDash;
