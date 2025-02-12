import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login'
import DocSignUp from './pages/docSignUp';
import PatSignUp from './pages/patSignUp';
import PatientDash from './pages/patientDash';
import DoctorDash from './pages/doctorDash';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/docsignup" element={<DocSignUp/>} />
            <Route path="/patsignup" element={<PatSignUp/>} />
            <Route path="/patientdash" element={<PatientDash/>} />
            <Route path="/doctordash" element={<DoctorDash/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
