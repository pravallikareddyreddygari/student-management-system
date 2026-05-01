import React, { useState, useEffect } from 'react';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import LoadingState from './components/LoadingState';
import studentsData from './data/students.json';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      // Load from localStorage if available, otherwise use initial data
      const savedStudents = localStorage.getItem('students');
      if (savedStudents) {
        setStudents(JSON.parse(savedStudents));
      } else {
        setStudents(studentsData.students);
      }
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAddStudent = (student) => {
    const newStudent = {
      id: Date.now(),
      ...student,
      createdAt: new Date().toISOString()
    };
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setIsFormOpen(false);
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setIsFormOpen(true);
  };

  const handleUpdateStudent = (updatedStudent) => {
    const updatedStudents = students.map(student => 
      student.id === updatedStudent.id ? updatedStudent : student
    );
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setIsFormOpen(false);
    setEditingStudent(null);
  };

  const handleDeleteStudent = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      const updatedStudents = students.filter(student => student.id !== id);
      setStudents(updatedStudents);
      localStorage.setItem('students', JSON.stringify(updatedStudents));
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <header className="header">
        <h1>📚 Student Management System</h1>
        <p className="subtitle">Manage student records efficiently</p>
      </header>

      {loading ? (
        <LoadingState />
      ) : (
        <>
          <button 
            className="btn-add" 
            onClick={() => setIsFormOpen(true)}
          >
            + Add Student
          </button>

          <StudentTable
            students={filteredStudents}
            onEdit={handleEditStudent}
            onDelete={handleDeleteStudent}
            onSearch={handleSearch}
          />

          {isFormOpen && (
            <StudentForm
              onSubmit={editingStudent ? handleUpdateStudent : handleAddStudent}
              onCancel={() => {
                setIsFormOpen(false);
                setEditingStudent(null);
              }}
              initialData={editingStudent}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
