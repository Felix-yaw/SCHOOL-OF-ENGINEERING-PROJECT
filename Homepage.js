import React from 'react';
import './Homepage.css'; // Import the CSS file

const Homepage = () => {
  // Array of engineering programs
  const engineeringPrograms = [
    'Computer Engineering',
    'Biomedical Engineering',
    'Materials Engineering',
    'Food Processing Engineering'
  ];

  return (
    <div className="container">
      <h1 className="title">Welcome to the University Of Ghana School of Engineering</h1>
      <h2>WE MAKE THINGS WORK!!!</h2>
      <h3>Engineering Programs Offered:</h3>
      <ul className="program-list">
        {engineeringPrograms.map((program, index) => (
          <li key={index}>{program}</li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;


