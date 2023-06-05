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
    <div className="container"> {/* Add the container class */}
      <h1 className="title">Welcome to the School of Engineering</h1> {/* Add the title class */}
      <h2>Engineering Programs:</h2>
      <ul className="program-list"> {/* Add the program-list class */}
        {engineeringPrograms.map((program, index) => (
          <li key={index}>{program}</li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;


