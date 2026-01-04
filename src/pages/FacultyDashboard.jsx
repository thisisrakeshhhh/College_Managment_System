import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FacultyDashboard.css';
import './FacultyDashboard_Addons.css';

const FacultyDashboard = () => {
    const navigate = useNavigate();
    const [activeRoute, setActiveRoute] = useState('dashboard');
    const [sidebarActive, setSidebarActive] = useState(false);

    const loadRoute = (route) => {
        setActiveRoute(route);
        if (window.innerWidth <= 768) setSidebarActive(false);
    };

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            navigate('/');
        }
    };

    const toggleSidebar = () => setSidebarActive(!sidebarActive);

    const renderContent = () => {
        if (activeRoute === 'dashboard') {
            return (
                <div className="overview-container animate-fade-in">
                    {/* Stats Row */}
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon blue"><i className="fas fa-user-graduate"></i></div>
                            <div className="stat-info">
                                <span className="value">2,847</span>
                                <span className="label">Total Students</span>
                                <div className="stat-trend up">↑ 12.5%</div>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon green"><i className="fas fa-chalkboard-teacher"></i></div>
                            <div className="stat-info">
                                <span className="value">156</span>
                                <span className="label">Total Teachers</span>
                                <div className="stat-trend up">↑ 3.2%</div>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon orange"><i className="fas fa-indian-rupee-sign"></i></div>
                            <div className="stat-info">
                                <span className="value">₹84.5K</span>
                                <span className="label">Fees Collected</span>
                                <div className="stat-trend up">↑ 8.1%</div>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon purple"><i className="fas fa-chart-line"></i></div>
                            <div className="stat-info">
                                <span className="value">94.2%</span>
                                <span className="label">Attendance Rate</span>
                                <div className="stat-trend down">↓ 1.3%</div>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-sections">
                        {/* Quick Management */}
                        <div className="section-box">
                            <h2><i className="fas fa-bolt"></i> Quick Management</h2>
                            <div className="action-grid">
                                <div className="action-card" onClick={() => loadRoute('teachers')}>
                                    <i className="fas fa-user-plus"></i>
                                    <span>Manage Teachers</span>
                                </div>
                                <div className="action-card" onClick={() => loadRoute('examinations')}>
                                    <i className="fas fa-file-signature"></i>
                                    <span>Create Exam</span>
                                </div>
                                <div className="action-card" onClick={() => loadRoute('notifications')}>
                                    <i className="fas fa-bullhorn"></i>
                                    <span>Post Notice</span>
                                </div>
                                <div className="action-card" onClick={() => loadRoute('fees')}>
                                    <i className="fas fa-receipt"></i>
                                    <span>Record Fees</span>
                                </div>
                                <div className="action-card" onClick={() => loadRoute('timetable')}>
                                    <i className="fas fa-calendar-alt"></i>
                                    <span>Update Schedule</span>
                                </div>
                                <div className="action-card" onClick={() => loadRoute('settings')}>
                                    <i className="fas fa-cogs"></i>
                                    <span>System Settings</span>
                                </div>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="section-box">
                            <h2><i className="fas fa-history"></i> Recent Activity</h2>
                            <div className="activity-list">
                                <div className="activity-item">
                                    <div className="activity-circle" style={{ background: '#e0e7ff', color: '#4338ca' }}><i className="fas fa-user-plus"></i></div>
                                    <div className="activity-text">
                                        <h4>New Admission</h4>
                                        <p>Rahul Kumar Grade X-B</p>
                                    </div>
                                </div>
                                <div className="activity-item">
                                    <div className="activity-circle" style={{ background: '#dcfce7', color: '#15803d' }}><i className="fas fa-check-circle"></i></div>
                                    <div className="activity-text">
                                        <h4>Fees Received</h4>
                                        <p>₹12,400 from Sneha (Grade XII)</p>
                                    </div>
                                </div>
                                <div className="activity-item">
                                    <div className="activity-circle" style={{ background: '#fef3c7', color: '#b45309' }}><i className="fas fa-file-alt"></i></div>
                                    <div className="activity-text">
                                        <h4>Exam Created</h4>
                                        <p>Unit Test III - Physics Grade XI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (activeRoute === 'teachers') {
            const teachers = [
                { id: 1, name: 'Dr. Sarah Wilson', subject: 'Physics', experience: '8 Years', contact: 'sarah.w@college.edu' },
                { id: 2, name: 'Prof. Rajesh Kumar', subject: 'Mathematics', experience: '12 Years', contact: 'rajesh.k@college.edu' },
                { id: 3, name: 'Mrs. Emily Davis', subject: 'English', experience: '5 Years', contact: 'emily.d@college.edu' },
                { id: 4, name: 'Mr. John Smith', subject: 'Chemistry', experience: '9 Years', contact: 'john.s@college.edu' },
                { id: 5, name: 'Ms. Priya Patel', subject: 'Computer Science', experience: '4 Years', contact: 'priya.p@college.edu' }
            ];

            return (
                <div className="dynamic-view container animate-fade-in">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <h2 className="section-title" style={{ margin: 0 }}>Faculty Management</h2>
                        <button className="btn-primary" style={{ padding: '10px 20px', borderRadius: '12px', background: 'var(--primary)', color: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <i className="fas fa-plus"></i> Add Teacher
                        </button>
                    </div>

                    <div className="table-container" style={{ background: 'white', borderRadius: '20px', padding: '20px', boxShadow: 'var(--shadow-soft)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                                    <th style={{ padding: '16px', textAlign: 'left', color: '#64748b' }}>Name</th>
                                    <th style={{ padding: '16px', textAlign: 'left', color: '#64748b' }}>Subject</th>
                                    <th style={{ padding: '16px', textAlign: 'left', color: '#64748b' }}>Experience</th>
                                    <th style={{ padding: '16px', textAlign: 'left', color: '#64748b' }}>Contact</th>
                                    <th style={{ padding: '16px', textAlign: 'center', color: '#64748b' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teachers.map((teacher) => (
                                    <tr key={teacher.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '16px', fontWeight: '600', color: '#1e293b' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                                                    {teacher.name.charAt(0)}
                                                </div>
                                                {teacher.name}
                                            </div>
                                        </td>
                                        <td style={{ padding: '16px', color: '#475569' }}>
                                            <span style={{ background: '#f0f9ff', color: '#0369a1', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>
                                                {teacher.subject}
                                            </span>
                                        </td>
                                        <td style={{ padding: '16px', color: '#475569' }}>{teacher.experience}</td>
                                        <td style={{ padding: '16px', color: '#475569' }}>{teacher.contact}</td>
                                        <td style={{ padding: '16px', textAlign: 'center' }}>
                                            <button style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', marginRight: '8px' }}><i className="fas fa-edit"></i></button>
                                            <button style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}><i className="fas fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }

        if (activeRoute === 'fees') {
            const transactions = [
                { id: 101, student: 'Rahul Kumar', grade: 'X-B', amount: '₹12,400', date: 'Oct 24, 2024', status: 'Paid' },
                { id: 102, student: 'Sneha Gupta', grade: 'XII-A', amount: '₹8,500', date: 'Oct 23, 2024', status: 'Pending' },
                { id: 103, student: 'Amit Singh', grade: 'IX-C', amount: '₹15,000', date: 'Oct 22, 2024', status: 'Paid' },
                { id: 104, student: 'Priya Sharma', grade: 'XI-B', amount: '₹6,000', date: 'Oct 21, 2024', status: 'Overdue' },
            ];

            return (
                <div className="dynamic-view container animate-fade-in">
                    <h2 className="section-title" style={{ marginBottom: '24px' }}>Fee Management</h2>
                    <div className="stats-grid" style={{ marginBottom: '24px' }}>
                        <div className="stat-card">
                            <div className="stat-icon green"><i className="fas fa-check-circle"></i></div>
                            <div className="stat-info">
                                <span className="value">₹4.2L</span>
                                <span className="label">Collected</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon orange"><i className="fas fa-clock"></i></div>
                            <div className="stat-info">
                                <span className="value">₹1.8L</span>
                                <span className="label">Pending</span>
                            </div>
                        </div>
                    </div>
                    <div className="table-container" style={{ background: 'white', borderRadius: '20px', padding: '20px', boxShadow: 'var(--shadow-soft)' }}>
                        <h3>Recent Transactions</h3>
                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                                    <th style={{ padding: '12px', textAlign: 'left', color: '#64748b' }}>Student</th>
                                    <th style={{ padding: '12px', textAlign: 'left', color: '#64748b' }}>Grade</th>
                                    <th style={{ padding: '12px', textAlign: 'left', color: '#64748b' }}>Amount</th>
                                    <th style={{ padding: '12px', textAlign: 'left', color: '#64748b' }}>Date</th>
                                    <th style={{ padding: '12px', textAlign: 'center', color: '#64748b' }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map(t => (
                                    <tr key={t.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '12px', fontWeight: '600', color: '#1e293b' }}>{t.student}</td>
                                        <td style={{ padding: '12px', color: '#475569' }}>{t.grade}</td>
                                        <td style={{ padding: '12px', fontWeight: '600', color: '#1e293b' }}>{t.amount}</td>
                                        <td style={{ padding: '12px', color: '#475569' }}>{t.date}</td>
                                        <td style={{ padding: '12px', textAlign: 'center' }}>
                                            <span style={{
                                                padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600',
                                                background: t.status === 'Paid' ? '#dcfce7' : t.status === 'Pending' ? '#fff7ed' : '#fee2e2',
                                                color: t.status === 'Paid' ? '#15803d' : t.status === 'Pending' ? '#c2410c' : '#b91c1c'
                                            }}>
                                                {t.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }

        if (activeRoute === 'timetable') {
            return (
                <div className="dynamic-view container animate-fade-in">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <h2 className="section-title" style={{ margin: 0 }}>Class Timetable</h2>
                        <select style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
                            <option>Grade X-A</option>
                            <option>Grade X-B</option>
                            <option>Grade XI-Science</option>
                        </select>
                    </div>
                    <div className="table-container" style={{ background: 'white', borderRadius: '20px', padding: '20px', boxShadow: 'var(--shadow-soft)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: '#f8fafc' }}>
                                    <th style={{ padding: '16px', border: '1px solid #e2e8f0' }}>Time</th>
                                    <th style={{ padding: '16px', border: '1px solid #e2e8f0' }}>Monday</th>
                                    <th style={{ padding: '16px', border: '1px solid #e2e8f0' }}>Tuesday</th>
                                    <th style={{ padding: '16px', border: '1px solid #e2e8f0' }}>Wednesday</th>
                                    <th style={{ padding: '16px', border: '1px solid #e2e8f0' }}>Thursday</th>
                                    <th style={{ padding: '16px', border: '1px solid #e2e8f0' }}>Friday</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { time: '09:00 - 10:00', mon: 'Maths', tue: 'Physics', wed: 'Chemistry', thu: 'Maths', fri: 'English' },
                                    { time: '10:00 - 11:00', mon: 'Physics', tue: 'Chemistry', wed: 'Biology', thu: 'Physics', fri: 'Maths' },
                                    { time: '11:00 - 11:30', mon: 'BREAK', tue: 'BREAK', wed: 'BREAK', thu: 'BREAK', fri: 'BREAK', isBreak: true },
                                    { time: '11:30 - 12:30', mon: 'English', tue: 'Maths', wed: 'Physics', thu: 'Chemistry', fri: 'Biology' },
                                    { time: '12:30 - 01:30', mon: 'Computer', tue: 'English', wed: 'Maths', thu: 'English', fri: 'Physics' },
                                ].map((slot, i) => (
                                    <tr key={i}>
                                        <td style={{ padding: '16px', border: '1px solid #e2e8f0', fontWeight: 'bold', color: '#64748b' }}>{slot.time}</td>
                                        {slot.isBreak ? (
                                            <td colSpan="5" style={{ padding: '16px', border: '1px solid #e2e8f0', background: '#f1f5f9', textAlign: 'center', fontWeight: 'bold', color: '#94a3b8' }}>LUNCH BREAK</td>
                                        ) : (
                                            <>
                                                <td style={{ padding: '16px', border: '1px solid #e2e8f0', textAlign: 'center' }}>{slot.mon}</td>
                                                <td style={{ padding: '16px', border: '1px solid #e2e8f0', textAlign: 'center' }}>{slot.tue}</td>
                                                <td style={{ padding: '16px', border: '1px solid #e2e8f0', textAlign: 'center' }}>{slot.wed}</td>
                                                <td style={{ padding: '16px', border: '1px solid #e2e8f0', textAlign: 'center' }}>{slot.thu}</td>
                                                <td style={{ padding: '16px', border: '1px solid #e2e8f0', textAlign: 'center' }}>{slot.fri}</td>
                                            </>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }

        if (activeRoute === 'examinations') {
            return (
                <div className="dynamic-view container animate-fade-in">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <h2 className="section-title" style={{ margin: 0 }}>Examinations</h2>
                        <button className="btn-primary" style={{ padding: '10px 20px', borderRadius: '12px', background: 'var(--primary)', color: 'white', border: 'none' }}>
                            <i className="fas fa-plus"></i> New Exam
                        </button>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                        <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-soft)', borderLeft: '4px solid #3b82f6' }}>
                            <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>Half Yearly Exams</h3>
                            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '16px' }}><i className="fas fa-calendar"></i> Dec 10 - Dec 24, 2024</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ background: '#eff6ff', color: '#2563eb', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>Upcoming</span>
                                <button style={{ border: 'none', background: 'none', color: '#2563eb', fontWeight: '600', cursor: 'pointer' }}>View Schedule</button>
                            </div>
                        </div>
                        <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-soft)', borderLeft: '4px solid #10b981' }}>
                            <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>Unit Test II</h3>
                            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '16px' }}><i className="fas fa-calendar"></i> Oct 05 - Oct 12, 2024</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ background: '#ecfdf5', color: '#059669', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>Completed</span>
                                <button style={{ border: 'none', background: 'none', color: '#059669', fontWeight: '600', cursor: 'pointer' }}>View Results</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (activeRoute === 'notifications') {
            return (
                <div className="dynamic-view container animate-fade-in">
                    <h2 className="section-title" style={{ marginBottom: '24px' }}>Notifications & Circulars</h2>
                    <div style={{ background: 'white', borderRadius: '20px', padding: '20px', boxShadow: 'var(--shadow-soft)' }}>
                        {[
                            { title: 'Winter Vacation Announcement', date: '2 hours ago', type: 'General', icon: 'snowflake' },
                            { title: 'Exam Schedule Revised - Grade X', date: 'Yesterday', type: 'Academic', icon: 'file-alt' },
                            { title: 'Annual Sports Day Registrations', date: '2 days ago', type: 'Event', icon: 'running' },
                            { title: 'Parent-Teacher Meeting', date: '3 days ago', type: 'Meeting', icon: 'users' },
                        ].map((note, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', borderBottom: i < 3 ? '1px solid #f1f5f9' : 'none' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', fontSize: '20px' }}>
                                    <i className={`fas fa-${note.icon}`}></i>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ margin: '0 0 4px 0', fontSize: '16px' }}>{note.title}</h4>
                                    <p style={{ margin: 0, color: '#94a3b8', fontSize: '13px' }}>{note.date} • {note.type}</p>
                                </div>
                                <button style={{ border: 'none', background: 'none', color: '#64748b', cursor: 'pointer' }}><i className="fas fa-ellipsis-v"></i></button>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        if (activeRoute === 'settings') {
            return (
                <div className="dynamic-view container animate-fade-in">
                    <h2 className="section-title" style={{ marginBottom: '24px' }}>System Settings</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 2fr', gap: '24px' }}>
                        <div style={{ background: 'white', borderRadius: '20px', padding: '24px', boxShadow: 'var(--shadow-soft)', height: 'fit-content' }}>
                            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#e0f2fe', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', color: '#0284c7' }}>AD</div>
                                <h3 style={{ margin: 0 }}>Faculty User</h3>
                                <p style={{ color: '#64748b', margin: '4px 0 0' }}>Super Faculty</p>
                            </div>
                            <div className="nav-item" style={{ padding: '12px', borderRadius: '8px', cursor: 'pointer', marginBottom: '8px' }}><i className="fas fa-user-circle" style={{ width: '24px' }}></i> Profile</div>
                            <div className="nav-item" style={{ padding: '12px', borderRadius: '8px', cursor: 'pointer', marginBottom: '8px' }}><i className="fas fa-lock" style={{ width: '24px' }}></i> Security</div>
                            <div className="nav-item" style={{ padding: '12px', borderRadius: '8px', cursor: 'pointer', marginBottom: '8px' }}><i className="fas fa-bell" style={{ width: '24px' }}></i> Notifications</div>
                        </div>
                        <div style={{ background: 'white', borderRadius: '20px', padding: '32px', boxShadow: 'var(--shadow-soft)' }}>
                            <h3 style={{ marginTop: 0, marginBottom: '24px' }}>General Settings</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#475569' }}>School Name</label>
                                    <input type="text" defaultValue="St. Xavier's Institute" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#475569' }}>Academic Year</label>
                                    <input type="text" defaultValue="2024-2025" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#475569' }}>Faculty Email</label>
                                    <input type="email" defaultValue="faculty@college.edu" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#475569' }}>Phone</label>
                                    <input type="text" defaultValue="+91 98765 43210" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
                                </div>
                            </div>
                            <div style={{ marginTop: '32px', textAlign: 'right' }}>
                                <button className="btn-primary" style={{ padding: '12px 32px', borderRadius: '12px', background: 'var(--primary)', color: 'white', border: 'none', fontSize: '15px' }}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="dynamic-view container animate-fade-in">
                <button className="btn-back" onClick={() => loadRoute('dashboard')}>
                    <i className="fas fa-arrow-left"></i> Back to Overview
                </button>
                <div style={{ padding: '80px 40px', background: 'white', borderRadius: '24px', textAlign: 'center', boxShadow: 'var(--shadow-soft)' }}>
                    <i className="fas fa-tools" style={{ fontSize: '60px', color: 'var(--primary)', marginBottom: '20px' }}></i>
                    <h2 style={{ fontSize: '28px', color: '#1e293b', marginBottom: '10px' }}>{activeRoute.toUpperCase()}</h2>
                    <p style={{ color: '#64748b', fontSize: '18px' }}>This management module is coming soon in the next update.</p>
                </div>
            </div>
        );
    };

    return (
        <div className="faculty-body">
            {/* Mobile Toggle */}
            <button className="mobile-toggle" onClick={toggleSidebar}>
                <i className={sidebarActive ? "fas fa-times" : "fas fa-bars"}></i>
            </button>

            {/* Sidebar */}
            <aside className={`sidebar ${sidebarActive ? 'active' : ''}`}>
                <div className="sidebar-brand">
                    <div className="brand-wrapper">
                        <div className="brand-logo">
                            <img src="/assets/images/logo.png" alt="Logo" />
                        </div>
                        <span className="brand-name">ST. XAVIER'S</span>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    <div className={`nav-item ${activeRoute === 'dashboard' ? 'active' : ''}`} onClick={() => loadRoute('dashboard')}>
                        <i className="fas fa-th-large"></i>
                        <span>Dashboard</span>
                    </div>
                    <div className={`nav-item ${activeRoute === 'teachers' ? 'active' : ''}`} onClick={() => loadRoute('teachers')}>
                        <i className="fas fa-chalkboard-teacher"></i>
                        <span>Teachers</span>
                    </div>
                    <div className={`nav-item ${activeRoute === 'fees' ? 'active' : ''}`} onClick={() => loadRoute('fees')}>
                        <i className="fas fa-indian-rupee-sign"></i>
                        <span>Fees</span>
                    </div>
                    <div className={`nav-item ${activeRoute === 'timetable' ? 'active' : ''}`} onClick={() => loadRoute('timetable')}>
                        <i className="fas fa-calendar-alt"></i>
                        <span>Timetable</span>
                    </div>
                    <div className={`nav-item ${activeRoute === 'examinations' ? 'active' : ''}`} onClick={() => loadRoute('examinations')}>
                        <i className="fas fa-file-signature"></i>
                        <span>Examinations</span>
                    </div>
                    <div className={`nav-item ${activeRoute === 'notifications' ? 'active' : ''}`} onClick={() => loadRoute('notifications')}>
                        <i className="fas fa-bullhorn"></i>
                        <span>Notifications</span>
                    </div>
                    <div className={`nav-item ${activeRoute === 'settings' ? 'active' : ''}`} onClick={() => loadRoute('settings')}>
                        <i className="fas fa-cogs"></i>
                        <span>Settings</span>
                    </div>

                    <div className="nav-item logout" onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="faculty-main">
                <header className="dash-header">
                    <h1>{activeRoute === 'dashboard' ? 'Faculty Faculty Panel' : activeRoute.charAt(0).toUpperCase() + activeRoute.slice(1)}</h1>
                    <div className="header-right">
                        <div className="user-profile">
                            <div className="avatar">AD</div>
                            <span className="user-name">Hi, Faculty</span>
                        </div>
                    </div>
                </header>

                <div className="content-area">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default FacultyDashboard;
