import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css';

const CONFIG = {
    pages: {
        dashboard: 'Dashboard Overview',
        attendance: "Attendance",
        subjects: "Subjects",
        reportcard: "Report Card",
        classmates: "Classmates",
        issuedbooks: "Issued Books",
    }
};

const StudentDashboard = () => {
    const navigate = useNavigate();
    const [sidebarActive, setSidebarActive] = useState(false);
    const [activeRoute, setActiveRoute] = useState('dashboard');

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
            document.querySelectorAll('.reveal:not(.active)').forEach(el => observer.observe(el));
        };

        scanAndObserve();
        const scanInterval = setInterval(scanAndObserve, 1000);

        return () => {
            clearInterval(scanInterval);
            observer.disconnect();
        };
    }, [activeRoute]);

    const toggleSidebar = () => setSidebarActive(!sidebarActive);

    const loadRoute = (route) => {
        setActiveRoute(route);
        if (window.innerWidth <= 768) setSidebarActive(false);
    };

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            navigate('/');
        }
    };

    const renderContent = () => {
        if (activeRoute === 'dashboard') {
            return (
                <div className="dashboard-view">
                    <div className="profile-header reveal">
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" alt="Student" className="profile-avatar" />
                        <div className="profile-info-wrapper">
                            <h2 className="profile-name">John Doe</h2>
                            <p className="profile-details">Reg No: 2024001, Grade XII - Science</p>
                            <span className="profile-badge">Active Student</span>
                        </div>
                    </div>

                    <div className="section-title reveal">Quick Overview</div>
                    <div className="dashboard-grid">
                        <div className="dash-icon-card reveal" style={{ transitionDelay: '0.1s' }} onClick={() => loadRoute('attendance')}>
                            <div className="dash-card-icon"><i className="fas fa-calendar-check"></i></div>
                            <span className="dash-card-text">Attendance</span>
                            <div style={{ marginTop: '5px', fontSize: '18px', fontWeight: '700', color: 'var(--primary)' }}>95%</div>
                        </div>
                        <div className="dash-icon-card reveal" style={{ transitionDelay: '0.2s' }} onClick={() => loadRoute('subjects')}>
                            <div className="dash-card-icon"><i className="fas fa-book"></i></div>
                            <span className="dash-card-text">Subjects</span>
                            <div style={{ marginTop: '5px', fontSize: '18px', fontWeight: '700', color: 'var(--secondary)' }}>6 Active</div>
                        </div>
                        <div className="dash-icon-card reveal" style={{ transitionDelay: '0.3s' }} onClick={() => loadRoute('reportcard')}>
                            <div className="dash-card-icon"><i className="fas fa-file-invoice"></i></div>
                            <span className="dash-card-text">Reports</span>
                            <div style={{ marginTop: '5px', fontSize: '18px', fontWeight: '700', color: 'var(--success)' }}>Grade: A+</div>
                        </div>
                    </div>

                    <div className="section-title reveal">Recent Activities</div>
                    <div className="dashboard-grid">
                        <div className="dash-icon-card reveal" style={{ transitionDelay: '0.4s' }} onClick={() => loadRoute('classmates')}>
                            <div className="dash-card-icon"><i className="fas fa-user-group"></i></div>
                            <span className="dash-card-text">Classmates</span>
                        </div>
                        <div className="dash-icon-card reveal" style={{ transitionDelay: '0.5s' }} onClick={() => loadRoute('issuedbooks')}>
                            <div className="dash-card-icon"><i className="fas fa-book-reader"></i></div>
                            <span className="dash-card-text">Library</span>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="dynamic-content-area reveal">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                        <h2 style={{ margin: 0 }}>{CONFIG.pages[activeRoute]}</h2>
                        <button className="btn-primary" onClick={() => loadRoute('dashboard')}>
                            <i className="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                    <div className="glass-card" style={{ padding: '40px', textAlign: 'center' }}>
                        <p>Content for {CONFIG.pages[activeRoute]} is loading...</p>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="dashboard-body">
            <button className={`menu-toggle ${sidebarActive ? 'active' : ''}`} onClick={toggleSidebar}>
                <div className="hamburger"><span></span><span></span><span></span></div>
            </button>

            <div className={`sidebar-overlay ${sidebarActive ? 'active' : ''}`} onClick={toggleSidebar}></div>

            <aside className={`sidebar ${sidebarActive ? 'active' : ''}`}>
                <div className="sidebar-header">
                    <i className="fas fa-graduation-cap" style={{ fontSize: '40px', color: 'var(--primary)', marginBottom: '10px' }}></i>
                    <h2>SXIT Portal</h2>
                </div>

                <nav className="sidebar-nav">
                    <ul>
                        <li className={`nav-item ${activeRoute === 'dashboard' ? 'active' : ''}`} onClick={() => loadRoute('dashboard')}>
                            <i className="fas fa-th-large"></i> Dashboard
                        </li>
                        <li className={`nav-item ${activeRoute === 'attendance' ? 'active' : ''}`} onClick={() => loadRoute('attendance')}>
                            <i className="fas fa-calendar-alt"></i> Attendance
                        </li>
                        <li className={`nav-item ${activeRoute === 'subjects' ? 'active' : ''}`} onClick={() => loadRoute('subjects')}>
                            <i className="fas fa-book-open"></i> Subjects
                        </li>
                        <li className={`nav-item ${activeRoute === 'reportcard' ? 'active' : ''}`} onClick={() => loadRoute('reportcard')}>
                            <i className="fas fa-file-alt"></i> Report Card
                        </li>
                        <li className="nav-item" onClick={handleLogout} style={{ marginTop: 'auto', color: 'var(--danger)' }}>
                            <i className="fas fa-sign-out-alt"></i> Logout
                        </li>
                    </ul>

                    <div className="sidebar-footer" style={{ marginTop: 'auto', padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <div className="status-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '5px' }}>Current Session</div>
                            <div style={{ fontSize: '14px', fontWeight: '700', color: 'white' }}>Academic Year 2024-25</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
                                <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '800' }}>SYSTEM ACTIVE</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside>

            <main className={`dash-main ${sidebarActive ? 'active' : ''}`}>
                <header className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <h1 style={{ fontSize: '24px', fontWeight: '800' }}>Student Dashboard</h1>
                    <div className="user-nav" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <i className="fas fa-bell" style={{ color: 'var(--text-muted)' }}></i>
                        <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>JD</div>
                    </div>
                </header>
                {renderContent()}
            </main>
        </div>
    );
};

export default StudentDashboard;
