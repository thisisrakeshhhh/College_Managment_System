import React from 'react';

const AcademicPlanning = () => {
    return (
        <div className="dashboard-content reveal">
            <div className="content-header">
                <h2>Academic Planning Tools</h2>
                <p>Strategic curriculum management and scheduling tracker.</p>
            </div>

            <div className="dashboard-sections" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div className="section-column">
                    <div className="section-box" style={{ marginBottom: '24px' }}>
                        <h3><i className="fas fa-calendar-alt"></i> Weekly Timetable</h3>
                        <div style={{ background: 'var(--bg-main)', borderRadius: '12px', padding: '15px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '10px', marginBottom: '12px' }}>
                                <span style={{ fontWeight: '800', fontSize: '12px', color: 'var(--primary)' }}>MON</span>
                                <span style={{ fontSize: '13px' }}>09:30 Java (BCA 4) | 11:15 Cloud (MCA 2)</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '10px', marginBottom: '12px' }}>
                                <span style={{ fontWeight: '800', fontSize: '12px', color: 'var(--primary)' }}>TUE</span>
                                <span style={{ fontSize: '13px' }}>14:00 Advanced Database Management</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '10px' }}>
                                <span style={{ fontWeight: '800', fontSize: '12px', color: 'var(--primary)' }}>WED</span>
                                <span style={{ fontSize: '13px' }}>10:30 Operating Systems (Theory)</span>
                            </div>
                        </div>
                    </div>

                    <div className="section-box">
                        <h3><i className="fas fa-tasks"></i> Syllabus Progress</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div className="progress-item">
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '5px' }}>
                                    <span>Java Programming (BCA 4th Sem)</span>
                                    <strong>75%</strong>
                                </div>
                                <div style={{ height: '8px', background: 'var(--bg-main)', borderRadius: '10px' }}><div style={{ width: '75%', height: '100%', background: 'var(--primary)', borderRadius: '10px' }}></div></div>
                            </div>
                            <div className="progress-item">
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '5px' }}>
                                    <span>Cloud Computing (MCA 2nd Sem)</span>
                                    <strong>40%</strong>
                                </div>
                                <div style={{ height: '8px', background: 'var(--bg-main)', borderRadius: '10px' }}><div style={{ width: '40%', height: '100%', background: 'var(--warning)', borderRadius: '10px' }}></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-column">
                    <div className="section-box">
                        <h3><i className="fas fa-file-invoice"></i> Exam Schedules</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ padding: '15px', border: '1px solid var(--border)', borderRadius: '12px' }}>
                                <h4 style={{ margin: '0 0 5px 0', fontSize: '14px' }}>Mid-Term Internal 2</h4>
                                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Date: 15 Feb 2026 | Subjects: Core Comp.</span>
                            </div>
                            <div style={{ padding: '15px', border: '1px solid var(--border)', borderRadius: '12px' }}>
                                <h4 style={{ margin: '0 0 5px 0', fontSize: '14px' }}>Final Lab Practical</h4>
                                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Date: 22 Feb 2026 | Subjects: Labs 01-05</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademicPlanning;
