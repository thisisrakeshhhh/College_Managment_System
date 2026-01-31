import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FacultyDashboard.css';

// Import Modular Components
import Overview from '../components/faculty/Overview';
import MyClasses from '../components/faculty/MyClasses';
import AttendanceManagement from '../components/faculty/AttendanceManagement';
import StudentPerformance from '../components/faculty/StudentPerformance';
import LeaveRequests from '../components/faculty/LeaveRequests';
import Announcements from '../components/faculty/Announcements';
import AcademicPlanning from '../components/faculty/AcademicPlanning';
import SalaryPayslips from '../components/faculty/SalaryPayslips';
import Settings from '../components/faculty/Settings';

const FacultyDashboard = () => {
    const navigate = useNavigate();
    const [sidebarActive, setSidebarActive] = useState(false);
    const [activeRoute, setActiveRoute] = useState('overview');
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Animation Observer
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        // Function to re-scan for .reveal elements
        const scanAndObserve = () => {
            document.querySelectorAll('.reveal:not(.active)').forEach(el => observer.observe(el));
        };

        // Initial scan
        scanAndObserve();

        // Re-scan periodically to catch elements added after loading states
        const scanInterval = setInterval(scanAndObserve, 1000);

        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => {
            clearInterval(timer);
            clearInterval(scanInterval);
            observer.disconnect();
        };
    }, [activeRoute]);

    const getGreeting = () => {
        const hour = currentTime.getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 17) return "Good Afternoon";
        return "Good Evening";
    };

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            navigate('/');
        }
    };

    // Sub-component Dispatcher
    const renderSection = () => {
        switch (activeRoute) {
            case 'overview': return <Overview greeting={getGreeting()} />;
            case 'classes': return <MyClasses />;
            case 'attendance': return <AttendanceManagement />;
            case 'performance': return <StudentPerformance />;
            case 'leaves': return <LeaveRequests />;
            case 'announcements': return <Announcements />;
            case 'planning': return <AcademicPlanning />;
            case 'salary': return <SalaryPayslips />;
            case 'settings': return <Settings />;
            default: return <Overview greeting={getGreeting()} />;
        }
    };

    return (
        <div className="faculty-body">
            {/* Mobile Toggle & Sidebar Overlay */}
            <button className="mobile-toggle" onClick={() => setSidebarActive(!sidebarActive)}>
                <i className="fas fa-bars"></i>
            </button>
            {sidebarActive && <div className="sidebar-overlay" onClick={() => setSidebarActive(false)}></div>}

            <aside className={`sidebar ${sidebarActive ? 'active' : ''}`}>
                <div className="sidebar-brand">
                    <div className="brand-wrapper">
                        <div className="brand-logo">
                            <i className="fas fa-university"></i>
                        </div>
                        <span className="brand-name">SXIT PORTAL</span>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    <div className={`nav-item ${activeRoute === 'overview' ? 'active' : ''}`} onClick={() => { setActiveRoute('overview'); setSidebarActive(false); }}>
                        <i className="fas fa-th-large"></i> Overview
                    </div>
                    <div className={`nav-item ${activeRoute === 'classes' ? 'active' : ''}`} onClick={() => { setActiveRoute('classes'); setSidebarActive(false); }}>
                        <i className="fas fa-chalkboard-user"></i> My Classes
                    </div>
                    <div className={`nav-item ${activeRoute === 'attendance' ? 'active' : ''}`} onClick={() => { setActiveRoute('attendance'); setSidebarActive(false); }}>
                        <i className="fas fa-calendar-check"></i> Attendance
                    </div>
                    <div className={`nav-item ${activeRoute === 'performance' ? 'active' : ''}`} onClick={() => { setActiveRoute('performance'); setSidebarActive(false); }}>
                        <i className="fas fa-chart-line"></i> Performance
                    </div>
                    <div className={`nav-item ${activeRoute === 'leaves' ? 'active' : ''}`} onClick={() => { setActiveRoute('leaves'); setSidebarActive(false); }}>
                        <i className="fas fa-envelope-open-text"></i> Leave & Requests
                    </div>
                    <div className={`nav-item ${activeRoute === 'announcements' ? 'active' : ''}`} onClick={() => { setActiveRoute('announcements'); setSidebarActive(false); }}>
                        <i className="fas fa-bullhorn"></i> Announcements
                    </div>
                    <div className={`nav-item ${activeRoute === 'planning' ? 'active' : ''}`} onClick={() => { setActiveRoute('planning'); setSidebarActive(false); }}>
                        <i className="fas fa-calendar-days"></i> Academic Planning
                    </div>
                    <div className={`nav-item ${activeRoute === 'salary' ? 'active' : ''}`} onClick={() => { setActiveRoute('salary'); setSidebarActive(false); }}>
                        <i className="fas fa-wallet"></i> Salary & Payslips
                    </div>
                    <div className={`nav-item ${activeRoute === 'settings' ? 'active' : ''}`} onClick={() => { setActiveRoute('settings'); setSidebarActive(false); }}>
                        <i className="fas fa-cog"></i> Settings
                    </div>

                    <div className="sidebar-footer">
                        <div className="sidebar-profile-card">
                            <div className="profile-mini-info">
                                <div className="avatar-sm">PS</div>
                                <div className="info">
                                    <span className="name">Prof. Smith</span>
                                    <span className="role">Senior Faculty</span>
                                </div>
                            </div>
                        </div>
                        <div className="nav-item logout" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt"></i> Logout
                        </div>
                    </div>
                </nav>
            </aside>

            <main className="faculty-main">
                <header className="dash-header">
                    <div className="header-search-box">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Search student records..." />
                    </div>

                    <div className="header-right">
                        <div className="user-profile">
                            <div className="avatar">PS</div>
                            <span className="user-name">Prof. Smith</span>
                        </div>
                    </div>
                </header>

                <div className="section-viewport">
                    {renderSection()}
                </div>
            </main>
        </div>
    );
};

export default FacultyDashboard;
