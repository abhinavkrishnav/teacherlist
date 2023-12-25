// TeacherList.js

import React from 'react';
import './TeacherList.css'; // Import the CSS file for styling

const TeacherList = () => {
  const teachers = Array.from({ length: 28 }, (_, index) => ({
    serialNo: index + 1,
    teacherName: `Teacher ${index + 1}`,
    uid: `UID${index + 1}`,
  }));

  return (
    <div className="teacher-list-container">
      <h1 className="page-heading">Teacher List</h1>
      <table className="teacher-table">
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Teacher Name</th>
            <th>UID</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={index}>
              <td>{teacher.serialNo}</td>
              <td>{teacher.teacherName}</td>
              <td>{teacher.uid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherList;
