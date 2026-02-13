import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css';

// Academic Pages
import Attendance from './academics/Attendance';
import SwitchUsers from './academics/SwitchUsers';
import Classmates from './academics/Classmates';
import Subjects from './academics/Subjects';
import IssuedBooks from './academics/IssuedBooks';

// Transport Pages
import BusDetail from './transport/BusDetail';
import TrackPickUp from './transport/TrackPickUp';
import TrackDropOff from './transport/TrackDropOff';

// Exam Pages
import ReportCard from './exams/ReportCard';

// Fee Pages
import FeeHistory from './fees/FeeHistory';
import OnlinePayment from './fees/OnlinePayment';

// Communication Components
import Circulars from './communication/Circulars';
import Planners from './communication/Planners';
import Resources from './communication/Resources';
import Polls from './communication/Polls';
import MyCalendar from './communication/MyCalendar';
import Galleries from './communication/Galleries';
import LessonPlanner from './communication/LessonPlanner';

// Leave Components
import ApplyLeave from './leave/ApplyLeave';
import LeaveDetail from './leave/LeaveDetail';
import FixAppt from './leave/FixAppt';
import MyAppt from './leave/MyAppt';

// Request Components
import Greetings from './requests/Greetings';
import NewRequest from './requests/NewRequest';
import MyRequests from './requests/MyRequests';

// Support Components
import GKQA from './support/GKQA';
import Gems from './support/Gems';
import Newsletter from './support/Newsletter';
import PrincipalsDesk from './support/PrincipalsDesk';
import StarFacilitator from './support/StarFacilitator';
import { Exuberant, Victorious, Performer } from './support/Achievements';

const CONFIG = {
    pages: {
        dashboard: 'Dashboard Overview',
        subjects: "Subjects",
        issuedbooks: "Issued Books",
        reportcard: "Report Card",
        feehistory: "Fee Payment History",
        onlinepayment: "Online Payment",
        circulars: "Circulars",
        planners: "Planners",
        resources: "Resources",
        polls: "Polls",
        calendar: "My Calendar",
        gallery: "Galleries",
        lessonplanner: "Lesson Planner",
        applyleave: "Apply Leave",
        leavedetail: "Leave Detail",
        fixappointment: "Fix Appt",
        myappointment: "My Appt",
        mygreetings: "Greetings",
        newrequest: "New Request",
        myrequest: "My Requests",
        gk: "GK Q/A",
        gems: "Gems",
        newsletter: "Newsletter",
        principal: "Principal's Desk",
        starfacilitator: "Star Facilitator",
        exuberant: "Exuberant",
        victorious: "Victorious",
        performeroftheweek: "Performer",
        contact: "Support",
        busdetail: "Bus Detail",
        trackpickup: "Track Bus – Pick Up",
        trackdrop: "Track Bus – Drop Off",
        attendance: "Attendance",
        switchuser: "Switch Users",
        classmates: "Classmates"
    }
};

const StudentDashboard = () => {
    const navigate = useNavigate();
    const [sidebarActive, setSidebarActive] = useState(true);
    const [activeRoute, setActiveRoute] = useState('dashboard');
    const [openDropdowns, setOpenDropdowns] = useState({});
    const [email, setEmail] = useState('');

    useEffect(() => {
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

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

        // Re-scan periodically to catch dynamically loaded content
        const scanInterval = setInterval(scanAndObserve, 2000);

        return () => {
            clearInterval(scanInterval);
            observer.disconnect();
        };
    }, [activeRoute]);

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
        if (window.innerWidth <= 768) setSidebarActive(false);
    };

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            navigate('/');
        }
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            alert(`Subscribed: ${email}`);
            setEmail('');
        }
    };

    // Component Mapping
    const componentMap = {
        'attendance': <Attendance />,
        'switchuser': <SwitchUsers />,
        'classmates': <Classmates />,
        'subjects': <Subjects />,
        'issuedbooks': <IssuedBooks />,
        'busdetail': <BusDetail />,
        'trackpickup': <TrackPickUp />,
        'trackdrop': <TrackDropOff />,
        'reportcard': <ReportCard />,
        'feehistory': <FeeHistory />,
        'onlinepayment': <OnlinePayment />,
        'circulars': <Circulars />,
        'planners': <Planners />,
        'resources': <Resources />,
        'polls': <Polls />,
        'calendar': <MyCalendar />,
        'gallery': <Galleries />,
        'lessonplanner': <LessonPlanner />,
        'applyleave': <ApplyLeave />,
        'leavedetail': <LeaveDetail />,
        'fixappointment': <FixAppt />,
        'myappointment': <MyAppt />,
        'mygreetings': <Greetings />,
        'newrequest': <NewRequest />,
        'myrequest': <MyRequests />,
        'gk': <GKQA />,
        'gems': <Gems />,
        'newsletter': <Newsletter />,
        'principal': <PrincipalsDesk />,
        'starfacilitator': <StarFacilitator />,
        'exuberant': <Exuberant />,
        'victorious': <Victorious />,
        'performeroftheweek': <Performer />
    };

    const renderContent = () => {
        if (activeRoute === 'dashboard') {
            return (
                <div className="dashboard-content-minimal">
                    {/* Student Profile Card (Top) */}
                    <div className="profile-card-premium reveal">
                        <div className="profile-card-content">
                            <div className="profile-avatar-wrapper">
                                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" alt="Student" className="profile-avatar-large" />
                                <div className="status-indicator active"></div>
                            </div>
                            <div className="profile-details-main">
                                <h2 className="student-name">John Doe</h2>
                                <p className="registration-no">Registration No: 2024001</p>
                                <div className="student-meta">
                                    <span className="meta-tag"><i className="fas fa-graduation-cap"></i> Grade XII – Science</span>
                                    <span className="meta-tag status"><i className="fas fa-circle-check"></i> Active Student</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Overview Section (3 Cards ONLY) */}
                    <div className="section-header-minimal reveal">
                        <h3>Quick Overview</h3>
                        <p>Summary of your academic performance</p>
                    </div>
                    <div className="overview-summary-grid">
                        <div className="summary-card reveal icon-blue" onClick={() => loadRoute('attendance')}>
                            <div className="summary-icon"><i className="fas fa-calendar-check"></i></div>
                            <div className="summary-info">
                                <span className="summary-label">Attendance</span>
                                <h3 className="summary-value">95%</h3>
                                <div className="summary-progress-bar"><div className="progress" style={{ width: '95%' }}></div></div>
                            </div>
                        </div>
                        <div className="summary-card reveal icon-purple" onClick={() => loadRoute('subjects')}>
                            <div className="summary-icon"><i className="fas fa-book-open"></i></div>
                            <div className="summary-info">
                                <span className="summary-label">Subjects</span>
                                <h3 className="summary-value">6 Active</h3>
                                <p className="summary-subtext">Physics, Chemistry, Math...</p>
                            </div>
                        </div>
                        <div className="summary-card reveal icon-green" onClick={() => loadRoute('reportcard')}>
                            <div className="summary-icon"><i className="fas fa-award"></i></div>
                            <div className="summary-info">
                                <span className="summary-label">Overall Grade</span>
                                <h3 className="summary-value">A+</h3>
                                <p className="summary-subtext">Top 5% of your class</p>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activities Section */}
                    <div className="section-header-minimal reveal">
                        <h3>Recent Activities</h3>
                        <p>Latest updates from your classes</p>
                    </div>
                    <div className="recent-activities-layout">
                        <div className="activity-card-minimal reveal" onClick={() => loadRoute('classmates')}>
                            <div className="activity-icon-rounded"><i className="fas fa-user-group"></i></div>
                            <div className="activity-details">
                                <h4>Classmates</h4>
                                <p>View your peers and study groups</p>
                            </div>
                            <i className="fas fa-chevron-right arrow-indicator"></i>
                        </div>
                        <div className="activity-card-minimal reveal" onClick={() => loadRoute('issuedbooks')}>
                            <div className="activity-icon-rounded"><i className="fas fa-book-reader"></i></div>
                            <div className="activity-details">
                                <h4>Library / Issued Books</h4>
                                <p>6 books currently borrowed</p>
                            </div>
                            <i className="fas fa-chevron-right arrow-indicator"></i>
                        </div>
                    </div>
                </div>
            );
        } else {
            const CurrentComponent = componentMap[activeRoute];
            return (
                <div className="dynamic-content-area reveal">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                        <h2 style={{ margin: 0 }}>{CONFIG.pages[activeRoute] || activeRoute}</h2>
                        <button className="btn-primary" onClick={() => loadRoute('dashboard')}>
                            <i className="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                    {CurrentComponent ? CurrentComponent : (
                        <div className="glass-card" style={{ padding: '40px', textAlign: 'center' }}>
                            <p>Content for {CONFIG.pages[activeRoute]} is coming soon...</p>
                        </div>
                    )}
                </div>
            );
        }
    };

    return (
        <div className={`dashboard-body ${sidebarActive ? '' : 'sidebar-collapsed'}`}>
            {/* Mobile Overlay */}
            <div className={`sidebar-overlay ${sidebarActive ? 'active' : ''}`} onClick={toggleSidebar}></div>

            {/* Reusable Sidebar component logic integrated here */}
            <aside className={`sidebar-container-premium ${sidebarActive ? 'active' : 'collapsed'}`}>
                <div className="sidebar-header-premium">
                    <div className="logo-group" onClick={() => loadRoute('dashboard')}>
                        <i className="fas fa-graduation-cap"></i>
                        <span className="logo-text">SXIT PORTAL</span>
                    </div>
                </div>

                <nav className="sidebar-nav-premium">
                    <ul>
                        {/* DASHBOARD - SINGLE ITEM */}
                        <li className={`nav-item-premium ${activeRoute === 'dashboard' ? 'active' : ''}`} onClick={() => loadRoute('dashboard')}>
                            <div className="nav-link-premium">
                                <i className="fas fa-th-large"></i>
                                <span className="nav-text">Dashboard</span>
                            </div>
                        </li>

                        {/* FREQUENTLY USED */}
                        <li className={`nav-item-premium accordion-group ${openDropdowns.frequent ? 'open' : ''}`}>
                            <div className="accordion-header" onClick={(e) => toggleDropdown(e, 'frequent')}>
                                <i className="fas fa-star"></i>
                                <span className="nav-text">Frequently Used</span>
                                <i className="fas fa-chevron-down arrow-dropdown"></i>
                            </div>
                            <ul className="submenu accordion-content">
                                <li className={`submenu-item ${activeRoute === 'busdetail' ? 'active' : ''}`} onClick={() => loadRoute('busdetail')}>Bus Detail</li>
                                <li className={`submenu-item ${activeRoute === 'trackpickup' ? 'active' : ''}`} onClick={() => loadRoute('trackpickup')}>Track Bus – Pick Up</li>
                                <li className={`submenu-item ${activeRoute === 'feehistory' ? 'active' : ''}`} onClick={() => loadRoute('feehistory')}>Fee Payment History</li>
                                <li className={`submenu-item ${activeRoute === 'classmates' ? 'active' : ''}`} onClick={() => loadRoute('classmates')}>Classmates</li>
                                <li className={`submenu-item ${activeRoute === 'attendance' ? 'active' : ''}`} onClick={() => loadRoute('attendance')}>Attendance</li>
                                <li className={`submenu-item ${activeRoute === 'onlinepayment' ? 'active' : ''}`} onClick={() => loadRoute('onlinepayment')}>Online Payment</li>
                            </ul>
                        </li>

                        {/* ACADEMICS */}
                        <li className={`nav-item-premium accordion-group ${openDropdowns.academics ? 'open' : ''}`}>
                            <div className="accordion-header" onClick={(e) => toggleDropdown(e, 'academics')}>
                                <i className="fas fa-book"></i>
                                <span className="nav-text">Academics</span>
                                <i className="fas fa-chevron-down arrow-dropdown"></i>
                            </div>
                            <ul className="submenu accordion-content">
                                <li className={`submenu-item ${activeRoute === 'attendance' ? 'active' : ''}`} onClick={() => loadRoute('attendance')}>Attendance</li>
                                <li className={`submenu-item ${activeRoute === 'switchuser' ? 'active' : ''}`} onClick={() => loadRoute('switchuser')}>Switch Users</li>
                                <li className={`submenu-item ${activeRoute === 'classmates' ? 'active' : ''}`} onClick={() => loadRoute('classmates')}>Classmates</li>
                                <li className={`submenu-item ${activeRoute === 'subjects' ? 'active' : ''}`} onClick={() => loadRoute('subjects')}>Subjects</li>
                                <li className={`submenu-item ${activeRoute === 'issuedbooks' ? 'active' : ''}`} onClick={() => loadRoute('issuedbooks')}>Issued Books</li>
                            </ul>
                        </li>

                        {/* TRANSPORT */}
                        <li className={`nav-item-premium accordion-group ${openDropdowns.transport ? 'open' : ''}`}>
                            <div className="accordion-header" onClick={(e) => toggleDropdown(e, 'transport')}>
                                <i className="fas fa-bus"></i>
                                <span className="nav-text">Transport</span>
                                <i className="fas fa-chevron-down arrow-dropdown"></i>
                            </div>
                            <ul className="submenu accordion-content">
                                <li className={`submenu-item ${activeRoute === 'busdetail' ? 'active' : ''}`} onClick={() => loadRoute('busdetail')}>Bus Detail</li>
                                <li className={`submenu-item ${activeRoute === 'trackpickup' ? 'active' : ''}`} onClick={() => loadRoute('trackpickup')}>Track Pick Up</li>
                                <li className={`submenu-item ${activeRoute === 'trackdrop' ? 'active' : ''}`} onClick={() => loadRoute('trackdrop')}>Track Drop Off</li>
                            </ul>
                        </li>

                        {/* EXAMINATION */}
                        <li className={`nav-item-premium accordion-group ${openDropdowns.examination ? 'open' : ''}`}>
                            <div className="accordion-header" onClick={(e) => toggleDropdown(e, 'examination')}>
                                <i className="fas fa-file-invoice"></i>
                                <span className="nav-text">Examination</span>
                                <i className="fas fa-chevron-down arrow-dropdown"></i>
                            </div>
                            <ul className="submenu accordion-content">
                                <li className={`submenu-item ${activeRoute === 'reportcard' ? 'active' : ''}`} onClick={() => loadRoute('reportcard')}>Report Card</li>
                            </ul>
                        </li>

                        {/* FEES */}
                        <li className={`nav-item-premium accordion-group ${openDropdowns.fees ? 'open' : ''}`}>
                            <div className="accordion-header" onClick={(e) => toggleDropdown(e, 'fees')}>
                                <i className="fas fa-wallet"></i>
                                <span className="nav-text">Fees</span>
                                <i className="fas fa-chevron-down arrow-dropdown"></i>
                            </div>
                            <ul className="submenu accordion-content">
                                <li className={`submenu-item ${activeRoute === 'feehistory' ? 'active' : ''}`} onClick={() => loadRoute('feehistory')}>Fee History</li>
                                <li className={`submenu-item ${activeRoute === 'onlinepayment' ? 'active' : ''}`} onClick={() => loadRoute('onlinepayment')}>Online Payment</li>
                            </ul>
                        </li>

                        {/* COMMUNICATION */}
                        <li className={`nav-item-premium accordion-group ${openDropdowns.communication ? 'open' : ''}`}>
                            <div className="accordion-header" onClick={(e) => toggleDropdown(e, 'communication')}>
                                <i className="fas fa-comment-alt"></i>
                                <span className="nav-text">Communication</span>
                                <i className="fas fa-chevron-down arrow-dropdown"></i>
                            </div>
                            <ul className="submenu accordion-content">
                                <li className={`submenu-item ${activeRoute === 'circulars' ? 'active' : ''}`} onClick={() => loadRoute('circulars')}>Circulars</li>
                                <li className={`submenu-item ${activeRoute === 'planners' ? 'active' : ''}`} onClick={() => loadRoute('planners')}>Planners</li>
                                <li className={`submenu-item ${activeRoute === 'resources' ? 'active' : ''}`} onClick={() => loadRoute('resources')}>Resources</li>
                                <li className={`submenu-item ${activeRoute === 'polls' ? 'active' : ''}`} onClick={() => loadRoute('polls')}>Polls</li>
                                <li className={`submenu-item ${activeRoute === 'calendar' ? 'active' : ''}`} onClick={() => loadRoute('calendar')}>My Calendar</li>
                                <li className={`submenu-item ${activeRoute === 'gallery' ? 'active' : ''}`} onClick={() => loadRoute('gallery')}>Galleries</li>
                                <li className={`submenu-item ${activeRoute === 'lessonplanner' ? 'active' : ''}`} onClick={() => loadRoute('lessonplanner')}>Lesson Planner</li>
                            </ul>
                        </li>

                        {/* LEAVE & APPOINTMENTS */}
                        <li className={`nav-item-premium accordion-group ${openDropdowns.leave ? 'open' : ''}`}>
                            <div className="accordion-header" onClick={(e) => toggleDropdown(e, 'leave')}>
                                <i className="fas fa-calendar-alt"></i>
                                <span className="nav-text">Leave & Appointments</span>
                                <i className="fas fa-chevron-down arrow-dropdown"></i>
                            </div>
                            <ul className="submenu accordion-content">
                                <li className={`submenu-item ${activeRoute === 'applyleave' ? 'active' : ''}`} onClick={() => loadRoute('applyleave')}>Apply Leave</li>
                                <li className={`submenu-item ${activeRoute === 'leavedetail' ? 'active' : ''}`} onClick={() => loadRoute('leavedetail')}>Leave Detail</li>
                                <li className={`submenu-item ${activeRoute === 'fixappointment' ? 'active' : ''}`} onClick={() => loadRoute('fixappointment')}>Fix Appointment</li>
                                <li className={`submenu-item ${activeRoute === 'myappointment' ? 'active' : ''}`} onClick={() => loadRoute('myappointment')}>My Appointments</li>
                            </ul>
                        </li>

                        {/* REQUESTS & MORE */}
                        <li className={`nav-item-premium accordion-group ${openDropdowns.requests ? 'open' : ''}`}>
                            <div className="accordion-header" onClick={(e) => toggleDropdown(e, 'requests')}>
                                <i className="fas fa-paper-plane"></i>
                                <span className="nav-text">Requests & More</span>
                                <i className="fas fa-chevron-down arrow-dropdown"></i>
                            </div>
                            <ul className="submenu accordion-content">
                                <li className={`submenu-item ${activeRoute === 'mygreetings' ? 'active' : ''}`} onClick={() => loadRoute('mygreetings')}>Greetings</li>
                                <li className={`submenu-item ${activeRoute === 'newrequest' ? 'active' : ''}`} onClick={() => loadRoute('newrequest')}>New Request</li>
                                <li className={`submenu-item ${activeRoute === 'myrequest' ? 'active' : ''}`} onClick={() => loadRoute('myrequest')}>My Requests</li>
                            </ul>
                        </li>

                        {/* SUPPORT */}
                        <li className={`nav-item-premium accordion-group ${openDropdowns.support ? 'open' : ''}`}>
                            <div className="accordion-header" onClick={(e) => toggleDropdown(e, 'support')}>
                                <i className="fas fa-headset"></i>
                                <span className="nav-text">Support</span>
                                <i className="fas fa-chevron-down arrow-dropdown"></i>
                            </div>
                            <ul className="submenu accordion-content">
                                <li className={`submenu-item ${activeRoute === 'contact' ? 'active' : ''}`} onClick={() => loadRoute('contact')}>Extra Support</li>
                                <li className={`submenu-item ${activeRoute === 'gk' ? 'active' : ''}`} onClick={() => loadRoute('gk')}>GK Q/A</li>
                                <li className={`submenu-item ${activeRoute === 'gems' ? 'active' : ''}`} onClick={() => loadRoute('gems')}>Gems</li>
                                <li className={`submenu-item ${activeRoute === 'newsletter' ? 'active' : ''}`} onClick={() => loadRoute('newsletter')}>Newsletter</li>
                                <li className={`submenu-item ${activeRoute === 'principal' ? 'active' : ''}`} onClick={() => loadRoute('principal')}>Principal's Desk</li>
                                <li className={`submenu-item ${activeRoute === 'starfacilitator' ? 'active' : ''}`} onClick={() => loadRoute('starfacilitator')}>Star Facilitator</li>
                                <li className={`submenu-item ${activeRoute === 'exuberant' ? 'active' : ''}`} onClick={() => loadRoute('exuberant')}>Exuberant</li>
                                <li className={`submenu-item ${activeRoute === 'victorious' ? 'active' : ''}`} onClick={() => loadRoute('victorious')}>Victorious</li>
                                <li className={`submenu-item ${activeRoute === 'performeroftheweek' ? 'active' : ''}`} onClick={() => loadRoute('performeroftheweek')}>Performer</li>
                            </ul>
                        </li>

                        {/* LOGOUT */}
                        <li className="nav-item-premium logout-item" onClick={handleLogout}>
                            <div className="nav-link-premium">
                                <i className="fas fa-sign-out-alt"></i>
                                <span className="nav-text">Logout</span>
                            </div>
                        </li>
                    </ul>

                    {/* Newsletter Subscription at Bottom */}
                    <div className="sidebar-extra-section">
                        <div className="newsletter-box">
                            <h5>Newsletter</h5>
                            <p>Stay updated with our latest news</p>
                            <form onSubmit={handleSubscribe}>
                                <div className="email-input-group">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <button type="submit"><i className="fas fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                        <div className="copyright-text">
                            <p>&copy; 2024 SXIT Campus Portal</p>
                            <p>All Rights Reserved</p>
                        </div>
                    </div>
                </nav>
            </aside>

            <main className={`main-content-window ${sidebarActive ? 'active' : 'full-width'}`}>
                <header className="header-top-minimal">
                    <div className="header-left">
                        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                            <i className={`fas ${sidebarActive ? 'fa-align-left' : 'fa-bars'}`}></i>
                        </button>
                        <h1>Dashboard</h1>
                    </div>
                    <div className="header-right">
                        <div className="notification-icon"><i className="fas fa-bell"></i><span className="badge"></span></div>
                        <div className="user-profile-head" onClick={handleLogout}>
                            <span>JD</span>
                        </div>
                    </div>
                </header>
                <div className="content-inner-view">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default StudentDashboard;
