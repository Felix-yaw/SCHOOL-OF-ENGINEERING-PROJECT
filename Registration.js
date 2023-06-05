import React, { useState } from 'react';
import './Registration.css';

function RegistrationPage() {
  const [studentID, setStudentID] = useState('');
  const [department, setDepartment] = useState('');

  const handleStudentIDChange = (event) => {
    setStudentID(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Student ID:', studentID);
    console.log('Department:', department);
    // Reset form fields
    setStudentID('');
    setDepartment('');
  };

  return (
    <div className="container">
      <h1 className="title">Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentID">Student ID:</label>
          <input
            type="text"
            id="studentID"
            value={studentID}
            onChange={handleStudentIDChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={handleDepartmentChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
