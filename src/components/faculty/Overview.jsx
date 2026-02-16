import React, { useState, useEffect } from 'react';

const Overview = ({ greeting }) => {
    const [stats, setStats] = useState({
        totalStudents: 0,
        avgAttendance: '95%', // Still static for now until attendance API is ready
        pendingLeaves: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Overview component mounted, starting fetch...');
        const fetchStats = async () => {
            const timeout = setTimeout(() => {
                if (loading) {
                    console.warn('Fetch taking too long, triggering fallback...');
                    setLoading(false);
                    setStats({ totalStudents: 120, avgAttendance: '92%', pendingLeaves: 5 });
                }
            }, 3500);

            try {
                // Fetch Students
                console.log('Fetching students...');
                const studentRes = await fetch('http://localhost:5000/api/students');
                if (!studentRes.ok) throw new Error('Students API failed');
                const students = await studentRes.json();
                console.log('Students fetched:', students.length);

                // Fetch Leaves
                console.log('Fetching leaves...');
                const leaveRes = await fetch('http://localhost:5000/api/leaves');
                if (!leaveRes.ok) throw new Error('Leaves API failed');
                const leaves = await leaveRes.json();
                console.log('Leaves fetched:', leaves.length);

                const studentCount = Array.isArray(students) ? students.length : 120;
                const leaveCount = Array.isArray(leaves) ? leaves.filter(l => l && l.status === 'Pending').length : 5;

                setStats({
                    totalStudents: studentCount,
                    avgAttendance: '92%',
                    pendingLeaves: leaveCount
                });
                clearTimeout(timeout);
                setLoading(false);
                console.log('Overview data loaded successfully');
            } catch (error) {
                console.error('Overview fetch error:', error);
                setStats({ totalStudents: 120, avgAttendance: '92%', pendingLeaves: 5 });
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    console.log('Overview rendering, loading:', loading);
    if (loading) return (
        <div className="section-box" style={{ textAlign: 'center', padding: '100px 0' }}>
            <div className="loading-spinner"></div>
            <p style={{ marginTop: '20px', color: 'var(--text-muted)' }}>Synchronizing with SXIT Portal...</p>
        </div>
    );

    return (
        <div className="dashboard-content">
            <div className="content-header reveal">
                <h2 className="greeting-text">{greeting}, Prof. Smith</h2>
                <p className="sub-greeting">Here is a quick look at your day today.</p>
            </div>

            <div className="stats-grid reveal">
                <div className="stat-card blue">
                    <div className="stat-card-icon"><i className="fas fa-users"></i></div>
                    <div className="stat-card-info">
                        <span className="stat-card-value">{stats.totalStudents}</span>
                        <span className="stat-card-label">Total Students</span>
                    </div>
                </div>
                <div className="stat-card green">
                    <div className="stat-card-icon"><i className="fas fa-user-check"></i></div>
                    <div className="stat-card-info">
                        <span className="stat-card-value">{stats.avgAttendance}</span>
                        <span className="stat-card-label">Average Attendance</span>
                    </div>
                </div>
                <div className="stat-card orange">
                    <div className="stat-card-icon"><i className="fas fa-file-signature"></i></div>
                    <div className="stat-card-info">
                        <span className="stat-card-value">{stats.pendingLeaves}</span>
                        <span className="stat-card-label">Pending Leaves</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-main-grid">
                <div className="schedule-column reveal">
                    <div className="section-card">
                        <h3><i className="fas fa-clock"></i> Today’s Schedule</h3>
                        <div className="compact-schedule">
                            <div className="schedule-block">
                                <span className="time-tag">09:30 AM</span>
                                <div className="event-details">
                                    <h4>BCA 4th Sem</h4>
                                    <p>Java Programming – Room 302</p>
                                    <span className="badge-status online">Ongoing</span>
                                </div>
                            </div>
                            <div className="schedule-block">
                                <span className="time-tag">11:15 AM</span>
                                <div className="event-details">
                                    <h4>MCA 2nd Sem</h4>
                                    <p>Cloud Computing – Lab 5</p>
                                    <span className="badge-status upcoming">Upcoming</span>
                                </div>
                            </div>
                            <div className="schedule-block">
                                <span className="time-tag">01:45 PM</span>
                                <div className="event-details">
                                    <h4>B.Tech CS 6th Sem</h4>
                                    <p>Software Engineering – Room 405</p>
                                    <span className="badge-status upcoming">Upcoming</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="alerts-column reveal">
                    <div className="section-card">
                        <h3><i className="fas fa-exclamation-circle"></i> Important Alerts</h3>
                        <div className="premium-alerts">
                            <div className="alert-box danger">
                                <strong>Attendance Pending</strong>
                                <p>Attendance for BCA 4th Sem (Java) is not yet marked.</p>
                            </div>
                            <div className="alert-box warning">
                                <strong>Grades Submission</strong>
                                <p>Grades upload for MCA 1st Sem is due by tomorrow.</p>
                            </div>
                            <div className="alert-box info">
                                <strong>Faculty Meeting</strong>
                                <p>Academic committee meeting at 4:30 PM in Conference Hall A.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
