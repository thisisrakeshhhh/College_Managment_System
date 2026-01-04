import React, { useState } from 'react';
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
    const [sidebarActive, setSidebarActive] = useState(false);
    const [activeRoute, setActiveRoute] = useState('dashboard');
    const [openDropdowns, setOpenDropdowns] = useState({});

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    const toggleDropdown = (e, key) => {
        e.stopPropagation();
        setOpenDropdowns(prev => {
            // If the clicked item is already open, close it (return empty object or remove key)
            if (prev[key]) {
                return {};
            }
            // Otherwise, open the clicked item and close all others (return object with only this key)
            return { [key]: true };
        });
    };

    const loadRoute = (route) => {
        setActiveRoute(route);
        // Close sidebar on mobile after selection
        if (window.innerWidth <= 768) {
            setSidebarActive(false);
        }
    };

    const handleLogout = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        console.log('Logout logic triggered');
        try {
            if (window.confirm('Are you sure you want to logout?')) {
                navigate('/');
            }
        } catch (error) {
            console.error('Logout navigation failed:', error);
            window.location.href = '/'; // Fallback
        }
    };

    // Component Mapping
    const componentMap = {
        'attendance': <Attendance />,
        'switchuser': <SwitchUsers />, // Changed from 'switch-users' to match CONFIG.pages
        'classmates': <Classmates />,
        'subjects': <Subjects />,
        'issuedbooks': <IssuedBooks />, // Changed from 'issued-books' to match CONFIG.pages
        'busdetail': <BusDetail />, // Changed from 'bus-detail' to match CONFIG.pages
        'trackpickup': <TrackPickUp />, // Changed from 'track-pickup' to match CONFIG.pages
        'trackdrop': <TrackDropOff />, // Changed from 'track-dropoff' to match CONFIG.pages
        'reportcard': <ReportCard />, // Changed from 'report-card' to match CONFIG.pages
        'feehistory': <FeeHistory />, // Changed from 'fee-history' to match CONFIG.pages
        'onlinepayment': <OnlinePayment />, // Changed from 'online-payment' to match CONFIG.pages
        'circulars': <Circulars />,
        'planners': <Planners />,
        'resources': <Resources />,
        'polls': <Polls />,
        'calendar': <MyCalendar />, // Changed from 'my-calendar' to match CONFIG.pages
        'gallery': <Galleries />, // Changed from 'galleries' to match CONFIG.pages
        'lessonplanner': <LessonPlanner />, // Changed from 'lesson-planner' to match CONFIG.pages
        'applyleave': <ApplyLeave />, // Changed from 'apply-leave' to match CONFIG.pages
        'leavedetail': <LeaveDetail />, // Changed from 'leave-detail' to match CONFIG.pages
        'fixappointment': <FixAppt />, // Changed from 'fix-appt' to match CONFIG.pages
        'myappointment': <MyAppt />, // Changed from 'my-appt' to match CONFIG.pages
        'mygreetings': <Greetings />, // Changed from 'greetings' to match CONFIG.pages
        'newrequest': <NewRequest />, // Changed from 'new-request' to match CONFIG.pages
        'myrequest': <MyRequests />, // Changed from 'my-requests' to match CONFIG.pages
        'gk': <GKQA />, // Changed from 'gk-qa' to match CONFIG.pages
        'gems': <Gems />,
        'newsletter': <Newsletter />,
        'principal': <PrincipalsDesk />, // Changed from 'principals-desk' to match CONFIG.pages
        'starfacilitator': <StarFacilitator />, // Changed from 'star-facilitator' to match CONFIG.pages
        'exuberant': <Exuberant />,
        'victorious': <Victorious />,
        'performeroftheweek': <Performer /> // Changed from 'performer' to match CONFIG.pages
    };

    const renderContent = () => {
        if (activeRoute === 'dashboard') {
            return (
                <div id="dashboard-view" className="dashboard-view">
                    {/* Profile Header */}
                    <div className="profile-header">
                        <img src="/assets/images/image2.jpeg" alt="Niket Sharma" className="profile-avatar" />
                        <div className="profile-info-wrapper">
                            <h2 className="profile-name">Niket Sharma</h2>
                            <p className="profile-details">Reg No: 1741, GRADE XI NON MEDICAL - Discovery</p>
                        </div>
                    </div>

                    {/* Frequently Used */}
                    <div className="section-title">Frequently Used</div>
                    <div className="dashboard-grid">
                        <div className="dash-icon-card icon-orange" onClick={() => loadRoute('busdetail')}>
                            <div className="dash-card-icon"><i className="fas fa-bus"></i></div>
                            <span className="dash-card-text">Bus Detail</span>
                        </div>
                        <div className="dash-icon-card icon-orange" onClick={() => loadRoute('trackpickup')}>
                            <div className="dash-card-icon"><i className="fas fa-map-location-dot"></i></div>
                            <span className="dash-card-text">Track Bus - Pick up</span>
                        </div>
                        <div className="dash-icon-card icon-blue" onClick={() => loadRoute('feehistory')}>
                            <div className="dash-card-icon"><i className="fas fa-file-invoice-dollar"></i></div>
                            <span className="dash-card-text">Fee Payment History</span>
                        </div>
                        <div className="dash-icon-card icon-red" onClick={() => loadRoute('classmates')}>
                            <div className="dash-card-icon"><i className="fas fa-users"></i></div>
                            <span className="dash-card-text">Classmates</span>
                        </div>
                        <div className="dash-icon-card icon-blue" onClick={() => loadRoute('attendance')}>
                            <div className="dash-card-icon"><i className="fas fa-clipboard-user"></i></div>
                            <span className="dash-card-text">Attendance</span>
                        </div>
                        <div className="dash-icon-card icon-blue" onClick={() => loadRoute('onlinepayment')}>
                            <div className="dash-card-icon"><i className="fas fa-credit-card"></i></div>
                            <span className="dash-card-text">Online Payment</span>
                        </div>
                    </div>

                    {/* Academics */}
                    <div className="section-title">Academics</div>
                    <div className="dashboard-grid">
                        <div className="dash-icon-card icon-blue" onClick={() => loadRoute('attendance')}>
                            <div className="dash-card-icon"><i className="fas fa-clipboard-check"></i></div>
                            <span className="dash-card-text">Attendance</span>
                        </div>
                        <div className="dash-icon-card icon-orange" onClick={() => loadRoute('switchuser')}>
                            <div className="dash-card-icon"><i className="fas fa-users-viewfinder"></i></div>
                            <span className="dash-card-text">Switch Users</span>
                        </div>
                        <div className="dash-icon-card icon-red" onClick={() => loadRoute('classmates')}>
                            <div className="dash-card-icon"><i className="fas fa-user-group"></i></div>
                            <span className="dash-card-text">Classmates</span>
                        </div>
                        <div className="dash-icon-card icon-green" onClick={() => loadRoute('subjects')}>
                            <div className="dash-card-icon"><i className="fas fa-book"></i></div>
                            <span className="dash-card-text">Subjects</span>
                        </div>
                        <div className="dash-icon-card icon-blue" onClick={() => loadRoute('issuedbooks')}>
                            <div className="dash-card-icon"><i className="fas fa-book-open-reader"></i></div>
                            <span className="dash-card-text">Issued Books</span>
                        </div>
                    </div>

                    {/* Transport */}
                    <div className="section-title">Transport</div>
                    <div className="dashboard-grid">
                        <div className="dash-icon-card icon-orange" onClick={() => loadRoute('busdetail')}>
                            <div className="dash-card-icon"><i className="fas fa-bus"></i></div>
                            <span className="dash-card-text">Bus Detail</span>
                        </div>
                        <div className="dash-icon-card icon-orange" onClick={() => loadRoute('trackpickup')}>
                            <div className="dash-card-icon"><i className="fas fa-map-location-dot"></i></div>
                            <span className="dash-card-text">Track Pick Up</span>
                        </div>
                        <div className="dash-icon-card icon-orange" onClick={() => loadRoute('trackdrop')}>
                            <div className="dash-card-icon"><i className="fas fa-route"></i></div>
                            <span className="dash-card-text">Track Drop Off</span>
                        </div>
                    </div>

                    {/* Examination */}
                    <div className="section-title">Examination</div>
                    <div className="dashboard-grid">
                        <div className="dash-icon-card icon-green" onClick={() => loadRoute('reportcard')}>
                            <div className="dash-card-icon"><i className="fas fa-file-contract"></i></div>
                            <span className="dash-card-text">Report Card</span>
                        </div>
                    </div>

                    {/* Fees */}
                    <div className="section-title">Fees</div>
                    <div className="dashboard-grid">
                        <div className="dash-icon-card icon-blue" onClick={() => loadRoute('feehistory')}>
                            <div className="dash-card-icon"><i className="fas fa-history"></i></div>
                            <span className="dash-card-text">Fee History</span>
                        </div>
                        <div className="dash-icon-card icon-blue" onClick={() => loadRoute('onlinepayment')}>
                            <div className="dash-card-icon"><i className="fas fa-credit-card"></i></div>
                            <span className="dash-card-text">Online Payment</span>
                        </div>
                    </div>

                    {/* Communication */}
                    <div className="section-title">Communication</div>
                    <div className="dashboard-grid">
                        <div className="dash-icon-card icon-purple" onClick={() => loadRoute('circulars')}>
                            <div className="dash-card-icon"><i className="fas fa-bullhorn"></i></div>
                            <span className="dash-card-text">Circulars</span>
                        </div>
                        <div className="dash-icon-card icon-purple" onClick={() => loadRoute('planners')}>
                            <div className="dash-card-icon"><i className="fas fa-calendar-days"></i></div>
                            <span className="dash-card-text">Planners</span>
                        </div>
                        <div className="dash-icon-card icon-purple" onClick={() => loadRoute('resources')}>
                            <div className="dash-card-icon"><i className="fas fa-layer-group"></i></div>
                            <span className="dash-card-text">Resources</span>
                        </div>
                        <div className="dash-icon-card icon-purple" onClick={() => loadRoute('polls')}>
                            <div className="dash-card-icon"><i className="fas fa-square-poll-vertical"></i></div>
                            <span className="dash-card-text">Polls</span>
                        </div>
                        <div className="dash-icon-card icon-purple" onClick={() => loadRoute('calendar')}>
                            <div className="dash-card-icon"><i className="fas fa-calendar-check"></i></div>
                            <span className="dash-card-text">My Calendar</span>
                        </div>
                        <div className="dash-icon-card icon-purple" onClick={() => loadRoute('gallery')}>
                            <div className="dash-card-icon"><i className="fas fa-images"></i></div>
                            <span className="dash-card-text">Galleries</span>
                        </div>
                        <div className="dash-icon-card icon-purple" onClick={() => loadRoute('lessonplanner')}>
                            <div className="dash-card-icon"><i className="fas fa-chalkboard-user"></i></div>
                            <span className="dash-card-text">Lesson Planner</span>
                        </div>
                    </div>

                    {/* Leave & Appointments */}
                    <div className="section-title">Leave & Appointments</div>
                    <div className="dashboard-grid">
                        <div className="dash-icon-card icon-red" onClick={() => loadRoute('applyleave')}>
                            <div className="dash-card-icon"><i className="fas fa-user-clock"></i></div>
                            <span className="dash-card-text">Apply Leave</span>
                        </div>
                        <div className="dash-icon-card icon-red" onClick={() => loadRoute('leavedetail')}>
                            <div className="dash-card-icon"><i className="fas fa-list-check"></i></div>
                            <span className="dash-card-text">Leave Detail</span>
                        </div>
                        <div className="dash-icon-card icon-red" onClick={() => loadRoute('fixappointment')}>
                            <div className="dash-card-icon"><i className="fas fa-handshake"></i></div>
                            <span className="dash-card-text">Fix Appt</span>
                        </div>
                        <div className="dash-icon-card icon-red" onClick={() => loadRoute('myappointment')}>
                            <div className="dash-card-icon"><i className="fas fa-clipboard-list"></i></div>
                            <span className="dash-card-text">My Appt</span>
                        </div>
                    </div>

                    {/* Requests & More */}
                    <div className="section-title">Requests & More</div>
                    <div className="dashboard-grid">
                        <div className="dash-icon-card icon-green" onClick={() => loadRoute('mygreetings')}>
                            <div className="dash-card-icon"><i className="fas fa-gift"></i></div>
                            <span className="dash-card-text">Greetings</span>
                        </div>
                        <div className="dash-icon-card icon-blue" onClick={() => loadRoute('newrequest')}>
                            <div className="dash-card-icon"><i className="fas fa-plus-circle"></i></div>
                            <span className="dash-card-text">New Request</span>
                        </div>
                        <div className="dash-icon-card icon-blue" onClick={() => loadRoute('myrequest')}>
                            <div className="dash-card-icon"><i className="fas fa-clock-rotate-left"></i></div>
                            <span className="dash-card-text">My Requests</span>
                        </div>
                        <div className="dash-icon-card icon-orange" onClick={() => loadRoute('contact')}>
                            <div className="dash-card-icon"><i className="fas fa-headset"></i></div>
                            <span className="dash-card-text">Support</span>
                        </div>
                    </div>

                    {/* Extra Support */}
                    <div className="section-title">Extra Support</div>
                    <div className="dashboard-grid">
                        <div className="dash-icon-card icon-purple" onClick={() => loadRoute('gk')}>
                            <div className="dash-card-icon"><i className="fas fa-brain"></i></div>
                            <span className="dash-card-text">GK Q/A</span>
                        </div>
                        <div className="dash-icon-card icon-purple" onClick={() => loadRoute('gems')}>
                            <div className="dash-card-icon"><i className="fas fa-gem"></i></div>
                            <span className="dash-card-text">Gems</span>
                        </div>
                        <div className="dash-icon-card icon-purple" onClick={() => loadRoute('newsletter')}>
                            <div className="dash-card-icon"><i className="fas fa-newspaper"></i></div>
                            <span className="dash-card-text">Newsletter</span>
                        </div>
                        <div className="dash-icon-card icon-purple" onClick={() => loadRoute('principal')}>
                            <div className="dash-card-icon"><i className="fas fa-pen-nib"></i></div>
                            <span className="dash-card-text">Principal's Desk</span>
                        </div>
                        <div className="dash-icon-card icon-purple" onClick={() => loadRoute('starfacilitator')}>
                            <div className="dash-card-icon"><i className="fas fa-star"></i></div>
                            <span className="dash-card-text">Star Facilitator</span>
                        </div>
                        <div className="dash-icon-card icon-purple" onClick={() => loadRoute('exuberant')}>
                            <div className="dash-card-icon"><i className="fas fa-child-reaching"></i></div>
                            <span className="dash-card-text">Exuberant</span>
                        </div>
                        <div className="dash-icon-card icon-purple" onClick={() => loadRoute('victorious')}>
                            <div className="dash-card-icon"><i className="fas fa-trophy"></i></div>
                            <span className="dash-card-text">Victorious</span>
                        </div>
                        <div className="dash-icon-card icon-purple" onClick={() => loadRoute('performeroftheweek')}>
                            <div className="dash-card-icon"><i className="fas fa-award"></i></div>
                            <span className="dash-card-text">Performer</span>
                        </div>
                    </div>
                </div>
            );
        } else {
            const CurrentComponent = componentMap[activeRoute];

            return (
                <div className="dynamic-content-area" style={{ padding: '20px', background: '#f8fafc', borderRadius: '16px', minHeight: '80vh' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <h2 style={{ color: '#1e293b', margin: 0 }}>{CONFIG.pages[activeRoute] || activeRoute}</h2>
                        <button
                            className="btn-primary"
                            style={{ padding: '8px 16px', fontSize: '14px' }}
                            onClick={() => loadRoute('dashboard')}
                        >
                            <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i> Back to Dashboard
                        </button>
                    </div>

                    {CurrentComponent ? CurrentComponent : (
                        <div style={{ padding: '40px', textAlign: 'center', background: 'white', borderRadius: '12px' }}>
                            <p style={{ color: '#64748b' }}>Content for "{CONFIG.pages[activeRoute] || activeRoute}" is coming soon...</p>
                        </div>
                    )}
                </div>
            );
        }
    };

    return (
        <div className="dashboard-body">
            {/* MENU BUTTON */}
            <button className={`menu-toggle ${sidebarActive ? 'active' : ''}`} onClick={toggleSidebar} aria-label="Open Menu">
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>

            <div className={`sidebar-overlay ${sidebarActive ? 'active' : ''}`} onClick={toggleSidebar}></div>

            {/* Sidebar */}
            <aside className={`sidebar ${sidebarActive ? 'active' : ''}`} id="sidebar">
                <div className="sidebar-header">
                    <img src="/assets/images/logo.png" alt="Logo" />
                    <h2>ST. XAVIER'S | Student Dashboard</h2>
                </div>

                <nav className="sidebar-nav">
                    <ul>
                        {/* FREQUENTLY USED */}
                        <li className={`nav-item has-dropdown ${openDropdowns.frequent ? 'open' : ''}`}>
                            <div className="nav-link" onClick={(e) => toggleDropdown(e, 'frequent')}>
                                <span>🏠 Frequently Used</span>
                                <span className="arrow"></span>
                            </div>
                            <ul className="dropdown">
                                <li className="sub-item" onClick={() => loadRoute('busdetail')}>Bus Detail</li>
                                <li className="sub-item" onClick={() => loadRoute('trackpickup')}>Track Bus - Pick up</li>
                                <li className="sub-item" onClick={() => loadRoute('feehistory')}>Fee Payment History</li>
                                <li className="sub-item" onClick={() => loadRoute('classmates')}>Classmates</li>
                                <li className="sub-item" onClick={() => loadRoute('attendance')}>Attendance</li>
                                <li className="sub-item" onClick={() => loadRoute('onlinepayment')}>Online Payment</li>
                            </ul>
                        </li>

                        {/* ACADEMICS */}
                        <li className={`nav-item has-dropdown ${openDropdowns.academics ? 'open' : ''}`}>
                            <div className="nav-link" onClick={(e) => toggleDropdown(e, 'academics')}>
                                <span>📘 Academics</span>
                                <span className="arrow"></span>
                            </div>
                            <ul className="dropdown">
                                <li className="sub-item" onClick={() => loadRoute('attendance')}>Attendance</li>
                                <li className="sub-item" onClick={() => loadRoute('switchuser')}>Switch Users</li>
                                <li className="sub-item" onClick={() => loadRoute('classmates')}>Classmates</li>
                                <li className="sub-item" onClick={() => loadRoute('subjects')}>Subjects</li>
                                <li className="sub-item" onClick={() => loadRoute('issuedbooks')}>Issued Books</li>
                            </ul>
                        </li>

                        {/* TRANSPORT */}
                        <li className={`nav-item has-dropdown ${openDropdowns.transport ? 'open' : ''}`}>
                            <div className="nav-link" onClick={(e) => toggleDropdown(e, 'transport')}>
                                <span>🚌 Transport</span>
                                <span className="arrow"></span>
                            </div>
                            <ul className="dropdown">
                                <li className="sub-item" onClick={() => loadRoute('busdetail')}>Bus Detail</li>
                                <li className="sub-item" onClick={() => loadRoute('trackpickup')}>Track Bus – Pick Up</li>
                                <li className="sub-item" onClick={() => loadRoute('trackdrop')}>Track Bus – Drop Off</li>
                            </ul>
                        </li>

                        {/* EXAMINATION */}
                        <li className={`nav-item has-dropdown ${openDropdowns.exams ? 'open' : ''}`}>
                            <div className="nav-link" onClick={(e) => toggleDropdown(e, 'exams')}>
                                <span>📝 Examination</span>
                                <span className="arrow"></span>
                            </div>
                            <ul className="dropdown">
                                <li className="sub-item" onClick={() => loadRoute('reportcard')}>Report Card</li>
                            </ul>
                        </li>

                        {/* FEES */}
                        <li className={`nav-item has-dropdown ${openDropdowns.fees ? 'open' : ''}`}>
                            <div className="nav-link" onClick={(e) => toggleDropdown(e, 'fees')}>
                                <span>💰 Fees</span>
                                <span className="arrow"></span>
                            </div>
                            <ul className="dropdown">
                                <li className="sub-item" onClick={() => loadRoute('feehistory')}>Fee Payment History</li>
                                <li className="sub-item" onClick={() => loadRoute('onlinepayment')}>Online Payment</li>
                            </ul>
                        </li>

                        {/* COMMUNICATION */}
                        <li className={`nav-item has-dropdown ${openDropdowns.communication ? 'open' : ''}`}>
                            <div className="nav-link" onClick={(e) => toggleDropdown(e, 'communication')}>
                                <span>💬 Communication</span>
                                <span className="arrow"></span>
                            </div>
                            <ul className="dropdown">
                                <li className="sub-item" onClick={() => loadRoute('circulars')}>Circulars</li>
                                <li className="sub-item" onClick={() => loadRoute('planners')}>Planners</li>
                                <li className="sub-item" onClick={() => loadRoute('resources')}>Resources</li>
                                <li className="sub-item" onClick={() => loadRoute('polls')}>Polls</li>
                                <li className="sub-item" onClick={() => loadRoute('calendar')}>My Calendar</li>
                                <li className="sub-item" onClick={() => loadRoute('gallery')}>Galleries</li>
                                <li className="sub-item" onClick={() => loadRoute('lessonplanner')}>Lesson Planner</li>
                            </ul>
                        </li>

                        {/* LEAVE & APPOINTMENTS */}
                        <li className={`nav-item has-dropdown ${openDropdowns.leave ? 'open' : ''}`}>
                            <div className="nav-link" onClick={(e) => toggleDropdown(e, 'leave')}>
                                <span>📅 Leave & Appointments</span>
                                <span className="arrow"></span>
                            </div>
                            <ul className="dropdown">
                                <li className="sub-item" onClick={() => loadRoute('applyleave')}>Apply Leave</li>
                                <li className="sub-item" onClick={() => loadRoute('leavedetail')}>Leave Detail</li>
                                <li className="sub-item" onClick={() => loadRoute('fixappointment')}>Fix Appt</li>
                                <li className="sub-item" onClick={() => loadRoute('myappointment')}>My Appt</li>
                            </ul>
                        </li>

                        {/* REQUESTS & MORE */}
                        <li className={`nav-item has-dropdown ${openDropdowns.requests ? 'open' : ''}`}>
                            <div className="nav-link" onClick={(e) => toggleDropdown(e, 'requests')}>
                                <span>📮 Requests & More</span>
                                <span className="arrow"></span>
                            </div>
                            <ul className="dropdown">
                                <li className="sub-item" onClick={() => loadRoute('mygreetings')}>Greetings</li>
                                <li className="sub-item" onClick={() => loadRoute('newrequest')}>New Request</li>
                                <li className="sub-item" onClick={() => loadRoute('myrequest')}>My Requests</li>
                                <li className="sub-item" onClick={() => loadRoute('contact')}>Support</li>
                            </ul>
                        </li>

                        {/* EXTRA SUPPORT */}
                        <li className={`nav-item has-dropdown ${openDropdowns.support ? 'open' : ''}`}>
                            <div className="nav-link" onClick={(e) => toggleDropdown(e, 'support')}>
                                <span>🤝 Extra Support</span>
                                <span className="arrow"></span>
                            </div>
                            <ul className="dropdown">
                                <li className="sub-item" onClick={() => loadRoute('gk')}>GK Q/A</li>
                                <li className="sub-item" onClick={() => loadRoute('gems')}>Gems</li>
                                <li className="sub-item" onClick={() => loadRoute('newsletter')}>Newsletter</li>
                                <li className="sub-item" onClick={() => loadRoute('principal')}>Principal's Desk</li>
                                <li className="sub-item" onClick={() => loadRoute('starfacilitator')}>Star Facilitator</li>
                                <li className="sub-item" onClick={() => loadRoute('exuberant')}>Exuberant</li>
                                <li className="sub-item" onClick={() => loadRoute('victorious')}>Victorious</li>
                                <li className="sub-item" onClick={() => loadRoute('performeroftheweek')}>Performer</li>
                            </ul>
                        </li>


                        {/* LOGOUT */}
                        <li
                            className="nav-item logout"
                            onClick={handleLogout}
                            onMouseDown={(e) => { e.preventDefault(); handleLogout(e); }}
                            role="button"
                            tabIndex={0}
                        >
                            <span>🚪</span>
                            <span>Logout</span>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className={`dash-main ${sidebarActive ? 'active' : ''}`}>
                {renderContent()}
            </main>
        </div>
    );
};

export default StudentDashboard;
