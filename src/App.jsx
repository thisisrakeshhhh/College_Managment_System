// This is the main setup for our college project. 
// We are using React Router to show different pages depending on the website address (URL).

import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Here we import all the different pages we've built for our college portal
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
    // This 'useEffect' runs once when the app starts.
    // It's a "safety net" to make sure everything is visible if any animations get stuck.
    useEffect(() => {
        const safetyTimer = setTimeout(() => {
            document.body.classList.add('reveal-all');
            console.log('Project Note: Force revealing all content for better user experience');
        }, 4000);

        return () => clearTimeout(safetyTimer);
    }, []);

    return (
        // The Router handles navigation without reloading the whole page
        <Router>
            <Routes>
                {/* The main landing page or home page */}
                <Route path="/" element={<LandingPage />} />

                {/* These are the pages only for Students */}
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/student-dashboard/attendance" element={<Attendance />} />
                <Route path="/student-dashboard/classmates" element={<Classmates />} />
                <Route path="/student-dashboard/books" element={<IssuedBooks />} />
                <Route path="/student-dashboard/subjects" element={<Subjects />} />
                <Route path="/student-dashboard/report-card" element={<ReportCard />} />

                {/* This is the page for Faculty/Teachers */}
                <Route path="/faculty-dashboard" element={<FacultyDashboard />} />

                {/* If someone types a wrong address, we send them back to the Home page */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
