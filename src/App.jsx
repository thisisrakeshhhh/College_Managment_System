import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StudentDashboard from './pages/StudentDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import Attendance from './pages/academics/Attendance';
import Classmates from './pages/academics/Classmates';
import IssuedBooks from './pages/academics/IssuedBooks';
import Subjects from './pages/academics/Subjects';
import ReportCard from './pages/exams/ReportCard';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />

                {/* Student Routes */}
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/student-dashboard/attendance" element={<Attendance />} />
                <Route path="/student-dashboard/classmates" element={<Classmates />} />
                <Route path="/student-dashboard/books" element={<IssuedBooks />} />
                <Route path="/student-dashboard/subjects" element={<Subjects />} />
                <Route path="/student-dashboard/report-card" element={<ReportCard />} />

                {/* Faculty Routes */}
                <Route path="/faculty-dashboard" element={<FacultyDashboard />} />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
