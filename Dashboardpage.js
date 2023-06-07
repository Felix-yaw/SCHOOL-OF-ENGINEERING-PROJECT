import React from 'react';
import DashboardPage from './Dashboard';

const Something = () => {
  // Example data
  const studentName = 'John Doe';
  const department = 'Computer Science';
  const registeredCourses = ['Calculus', 'Programming with Engineers', 'Digital Circuits'];

  return (
    <div>
      {/* Other components */}
      <DashboardPage
        studentName={studentName}
        department={department}
        registeredCourses={registeredCourses}
      />
    </div>
  );
};

export default Something;
