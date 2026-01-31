import React, { useState, useEffect } from 'react';

const Overview = ({ greeting }) => {
    const [stats, setStats] = useState({
        totalStudents: 0,
        avgAttendance: '95%', // Still static for now until attendance API is ready
        pendingLeaves: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetch Students
                const studentRes = await fetch('http://localhost:5000/api/students');
                if (!studentRes.ok) throw new Error('API unreachable');
                const students = await studentRes.json();

                // Fetch Leaves
                const leaveRes = await fetch('http://localhost:5000/api/leaves');
                if (!leaveRes.ok) throw new Error('API unreachable');
                const leaves = await leaveRes.json();

                setStats({
                    totalStudents: students.length || 120, // Fallback to 120
                    avgAttendance: '92%',
                    pendingLeaves: leaves.filter(l => l.status === 'Pending').length || 5
                });
                setLoading(false);
            } catch (error) {
                console.warn('Backend offline, using fallback data:', error);
                // Fallback Data if backend is down
                setStats({
                    totalStudents: 120,
                    avgAttendance: '92%',
                    pendingLeaves: 5
                });
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) return (
        <div className="section-box reveal" style={{ textAlign: 'center', padding: '100px 0' }}>
            <div className="loading-spinner"></div>
            <p style={{ marginTop: '20px', color: 'var(--text-muted)' }}>Synchronizing with SXIT Portal...</p>
        </div>
    );

    return (
        <div className="dashboard-content reveal">
            <div className="content-header">
                <h2>{greeting}, Prof. Smith</h2>
                <p>Here is a quick look at your day today.</p>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon blue"><i className="fas fa-users"></i></div>
                    <div className="stat-info">
                        <span className="value">{stats.totalStudents}</span>
                        <span className="label">Total Students</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon green"><i className="fas fa-user-check"></i></div>
                    <div className="stat-info">
                        <span className="value">{stats.avgAttendance}</span>
                        <span className="label">Average Attendance</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon orange"><i className="fas fa-file-signature"></i></div>
                    <div className="stat-info">
                        <span className="value">{stats.pendingLeaves}</span>
                        <span className="label">Pending Leaves</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-sections" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '24px' }}>
                <div className="section-column">
                    <div className="section-box">
                        <h3><i className="fas fa-clock"></i> Today’s Schedule</h3>
                        <div className="schedule-list">
                            <div className="schedule-item">
                                <span className="schedule-time">09:30 AM</span>
                                <div className="schedule-info">
                                    <h4>BCA 4th Sem</h4>
                                    <p>Java Programming – Room 302</p>
                                </div>
                                <span className="status-badge marked">Ongoing</span>
                            </div>
                            <div className="schedule-item">
                                <span className="schedule-time">11:15 AM</span>
                                <div className="schedule-info">
                                    <h4>MCA 2nd Sem</h4>
                                    <p>Cloud Computing – Lab 5</p>
                                </div>
                                <span className="status-badge pending">Upcoming</span>
                            </div>
                            <div className="schedule-item">
                                <span className="schedule-time">01:45 PM</span>
                                <div className="schedule-info">
                                    <h4>B.Tech CS 6th Sem</h4>
                                    <p>Software Engineering – Room 405</p>
                                </div>
                                <span className="status-badge pending">Upcoming</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-column">
                    <div className="section-box">
                        <h3><i className="fas fa-exclamation-circle"></i> Important Alerts</h3>
                        <div className="alerts-list">
                            <div className="alert-item" style={{ marginBottom: '12px', padding: '12px', background: '#fff1f2', borderLeft: '4px solid #f43f5e', borderRadius: '8px' }}>
                                <strong style={{ fontSize: '13px', display: 'block', color: '#9f1239' }}>Attendance Pending</strong>
                                <span style={{ fontSize: '12px', color: '#be123c' }}>Attendance for BCA 4th Sem (Java) is not yet marked.</span>
                            </div>
                            <div className="alert-item" style={{ marginBottom: '12px', padding: '12px', background: '#fffbeb', borderLeft: '4px solid #f59e0b', borderRadius: '8px' }}>
                                <strong style={{ fontSize: '13px', display: 'block', color: '#92400e' }}>Grades Submission</strong>
                                <span style={{ fontSize: '12px', color: '#b45309' }}>Grades upload for MCA 1st Sem is due by tomorrow.</span>
                            </div>
                            <div className="alert-item" style={{ padding: '12px', background: '#f0f9ff', borderLeft: '4px solid #0ea5e9', borderRadius: '8px' }}>
                                <strong style={{ fontSize: '13px', display: 'block', color: '#075985' }}>Faculty Meeting</strong>
                                <span style={{ fontSize: '12px', color: '#0369a1' }}>Academic committee meeting at 4:30 PM in Conference Hall A.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
