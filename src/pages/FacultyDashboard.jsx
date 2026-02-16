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
    const [sidebarActive, setSidebarActive] = useState(true);
    const [activeRoute, setActiveRoute] = useState('overview');
    const [openDropdowns, setOpenDropdowns] = useState({});
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
            const elements = document.querySelectorAll('.reveal:not(.active)');
            elements.forEach(el => {
                observer.observe(el);
                // Safety Fallback: Force visibility after a delay if the observer misses it
                setTimeout(() => {
                    const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        el.classList.add('active');
                    }
                }, 1000);
            });
        };

        // Initial scan
        scanAndObserve();

        // Re-scan periodically
        const scanInterval = setInterval(scanAndObserve, 2000);

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

    const toggleSidebar = () => setSidebarActive(!sidebarActive);

    const toggleDropdown = (e, key) => {
        e.stopPropagation();
        setOpenDropdowns(prev => {
            // Only allow one dropdown open at a time
            if (prev[key]) return {};
            return { [key]: true };
        });
    };

    const loadRoute = (route) => {
        setActiveRoute(route);
        if (window.innerWidth <= 1024) setSidebarActive(false);
    };

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            navigate('/');
        }
    };



    // Sub-component Dispatcher (Keep existing mapping logic but adapt to loadRoute if needed)
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
        <div className={`faculty-body ${sidebarActive ? '' : 'sidebar-collapsed'}`}>
            {/* Mobile Overlay */}
            <div className={`sidebar-overlay ${sidebarActive ? 'active' : ''}`} onClick={() => setSidebarActive(false)}></div>

            <aside className={`sidebar-container-premium ${sidebarActive ? 'active' : 'collapsed'}`}>
                <div className="sidebar-header-premium">
                    <div className="logo-group" onClick={() => loadRoute('overview')}>
                        <i className="fas fa-university"></i>
                        <span className="logo-text">Faculty PORTAL</span>
                    </div>
                </div>

                <nav className="sidebar-nav-premium">
                    <ul>
                        {/* DASHBOARD */}
                        <li className={`nav-item-premium ${activeRoute === 'overview' ? 'active' : ''}`} onClick={() => loadRoute('overview')}>
                            <div className="nav-link-premium">
                                <i className="fas fa-th-large"></i>
                                <span className="nav-text">Dashboard</span>
                            </div>
                        </li>

                        {/* ACADEMIC MANAGEMENT */}
                        <li className={`nav-item-premium accordion-group ${openDropdowns.academics ? 'open' : ''}`}>
                            <div className="accordion-header" onClick={(e) => toggleDropdown(e, 'academics')}>
                                <i className="fas fa-chalkboard-user"></i>
                                <span className="nav-text">Academic Management</span>
                                <i className="fas fa-chevron-down arrow-dropdown"></i>
                            </div>
                            <ul className="submenu accordion-content">
                                <li className={`submenu-item ${activeRoute === 'classes' ? 'active' : ''}`} onClick={() => loadRoute('classes')}>My Classes</li>
                                <li className={`submenu-item ${activeRoute === 'attendance' ? 'active' : ''}`} onClick={() => loadRoute('attendance')}>Attendance Management</li>
                                <li className={`submenu-item ${activeRoute === 'performance' ? 'active' : ''}`} onClick={() => loadRoute('performance')}>Student Performance</li>
                            </ul>
                        </li>

                        {/* ADMINISTRATION */}
                        <li className={`nav-item-premium accordion-group ${openDropdowns.admin ? 'open' : ''}`}>
                            <div className="accordion-header" onClick={(e) => toggleDropdown(e, 'admin')}>
                                <i className="fas fa-briefcase"></i>
                                <span className="nav-text">Administration</span>
                                <i className="fas fa-chevron-down arrow-dropdown"></i>
                            </div>
                            <ul className="submenu accordion-content">
                                <li className={`submenu-item ${activeRoute === 'leaves' ? 'active' : ''}`} onClick={() => loadRoute('leaves')}>Leave & Requests</li>
                                <li className={`submenu-item ${activeRoute === 'announcements' ? 'active' : ''}`} onClick={() => loadRoute('announcements')}>Announcements</li>
                                <li className={`submenu-item ${activeRoute === 'planning' ? 'active' : ''}`} onClick={() => loadRoute('planning')}>Academic Planning</li>
                            </ul>
                        </li>

                        {/* FINANCE */}
                        <li className={`nav-item-premium accordion-group ${openDropdowns.finance ? 'open' : ''}`}>
                            <div className="accordion-header" onClick={(e) => toggleDropdown(e, 'finance')}>
                                <i className="fas fa-wallet"></i>
                                <span className="nav-text">Finance</span>
                                <i className="fas fa-chevron-down arrow-dropdown"></i>
                            </div>
                            <ul className="submenu accordion-content">
                                <li className={`submenu-item ${activeRoute === 'salary' ? 'active' : ''}`} onClick={() => loadRoute('salary')}>Salary & Payslips</li>
                            </ul>
                        </li>

                        {/* ACCOUNT */}
                        <li className={`nav-item-premium accordion-group ${openDropdowns.account ? 'open' : ''}`}>
                            <div className="accordion-header" onClick={(e) => toggleDropdown(e, 'account')}>
                                <i className="fas fa-cog"></i>
                                <span className="nav-text">Account</span>
                                <i className="fas fa-chevron-down arrow-dropdown"></i>
                            </div>
                            <ul className="submenu accordion-content">
                                <li className={`submenu-item ${activeRoute === 'settings' ? 'active' : ''}`} onClick={() => loadRoute('settings')}>Settings</li>
                                <li className="submenu-item logout" onClick={handleLogout}>Logout</li>
                            </ul>
                        </li>

                        {/* EXIT PORTAL */}
                        <li className="nav-item-premium exit-item" onClick={handleLogout}>
                            <div className="nav-link-premium logout-premium">
                                <i className="fas fa-sign-out-alt"></i>
                                <span className="nav-text">Exit Portal</span>
                            </div>
                        </li>
                    </ul>

                    {/* Footer Extra section */}
                    <div className="sidebar-extra-section">
                        <div className="copyright-text">
                            <p>&copy; 2026 Faculty Campus Portal</p>
                            <p>Faculty Access Board</p>
                        </div>
                    </div>
                </nav>
            </aside>

            <main className="faculty-main">
                <header className="dash-header">
                    <div className="header-left-group">
                        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                            <i className={`fas ${sidebarActive ? 'fa-align-left' : 'fa-bars'}`}></i>
                        </button>
                        <div className="header-search-box">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="Search student records..." />
                        </div>
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
