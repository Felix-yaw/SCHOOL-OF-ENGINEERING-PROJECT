
import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [showStudentDetails, setShowStudentDetails] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);

  const toggleStudentDetails = () => {
    setShowStudentDetails(!showStudentDetails);
  };

  const toggleCourses = () => {
    setShowCourses(!showCourses);
  };

  const toggleDepartments = () => {
    setShowDepartments(!showDepartments);
  };

  return (
    <div className="container">
      <h1>Dashboard</h1>

      <button className="toggle-btn" onClick={toggleStudentDetails}>
        Student Details
      </button>
      {showStudentDetails && (
        <div className="section">
          <h2>Student Details:</h2>
          {/* Add your student details content here */}
        </div>
      )}

      <button className="toggle-btn" onClick={toggleCourses}>
        Courses
      </button>
      {showCourses && (
        <div className="section">
          <h2>Courses:</h2>
          {/* Add your courses content here */}
        </div>
      )}

      <button className="toggle-btn" onClick={toggleDepartments}>
        Departments
      </button>
      {showDepartments && (
        <div className="section">
          <h2>Departments:</h2>
          {/* Add your departments content here */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
