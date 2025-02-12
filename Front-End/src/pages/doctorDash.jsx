import React from "react";
import "./dashboard.css";
function DoctorDash() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Doctor Dashboard</h2>

      {/* Patient List */}
      <div className="card shadow mb-4">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Patient List</h5>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Patient Name</th>
                <th>Age</th>
                <th>Condition</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>45</td>
                <td>Hypertension</td>
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
                <th>Patient</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12/02/2025</td>
                <td>10:00 AM</td>
                <td>Jane Smith</td>
                <td>
                  <button className="btn btn-info btn-sm">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Medical Records */}
      <div className="card shadow mb-4">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">Medical Records</h5>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Patient</th>
                <th>Date</th>
                <th>Details</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>11/02/2025</td>
                <td>Blood Pressure Check</td>
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

export default DoctorDash;
