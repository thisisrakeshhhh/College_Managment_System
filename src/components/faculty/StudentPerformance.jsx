import React from 'react';

const StudentPerformance = () => {
    const performances = [
        { name: 'Aaryan Sharma', marks: 88, grade: 'A', status: 'Good' },
        { name: 'Isha Verma', marks: 92, grade: 'A+', status: 'Good' },
        { name: 'Rahul Gupta', marks: 35, grade: 'D', status: 'Needs Improvement' },
        { name: 'Sneha Kapur', marks: 76, grade: 'B', status: 'Good' },
    ];

    return (
        <div className="dashboard-content">
            <div className="content-header reveal">
                <h2>Student Performance Analytics</h2>
                <p>Analyze academic results and identify students needing support.</p>
            </div>

            <div className="section-box" style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <label style={{ fontSize: '13px', fontWeight: '700' }}>Class Selector:</label>
                        <select style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-main)', minWidth: '180px' }}>
                            <option>BCA 4th Sem</option>
                            <option>MCA 2nd Sem</option>
                        </select>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button className="btn-secondary" style={{ padding: '10px 20px', fontSize: '12px', background: 'var(--bg-main)', border: '1px solid var(--border)', color: 'var(--text-main)' }}>Upload Grades</button>
                        <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '12px' }}>Edit Grades</button>
                    </div>
                </div>
            </div>

            <div className="section-box">
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border)' }}>
                                <th style={{ padding: '15px 12px', color: 'var(--text-muted)', fontSize: '13px' }}>STUDENT NAME</th>
                                <th style={{ padding: '15px 12px', color: 'var(--text-muted)', fontSize: '13px' }}>MARKS</th>
                                <th style={{ padding: '15px 12px', color: 'var(--text-muted)', fontSize: '13px' }}>GRADE</th>
                                <th style={{ padding: '15px 12px', color: 'var(--text-muted)', fontSize: '13px' }}>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {performances.map((p, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid var(--bg-main)', background: p.status === 'Needs Improvement' ? 'rgba(239, 68, 68, 0.02)' : 'transparent' }}>
                                    <td style={{ padding: '15px 12px' }}><strong>{p.name}</strong></td>
                                    <td style={{ padding: '15px 12px' }}>{p.marks}/100</td>
                                    <td style={{ padding: '15px 12px' }}><span style={{ fontWeight: '800' }}>{p.grade}</span></td>
                                    <td style={{ padding: '15px 12px' }}>
                                        <span className="status-badge" style={{
                                            background: p.status === 'Good' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                            color: p.status === 'Good' ? 'var(--success)' : 'var(--danger)'
                                        }}>{p.status}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div style={{ marginTop: '24px' }} className="stats-grid">
                <div className="stat-card" style={{ padding: '20px' }}>
                    <div className="stat-icon purple" style={{ width: '40px', height: '40px', fontSize: '16px' }}><i className="fas fa-chart-line"></i></div>
                    <div className="stat-info">
                        <span className="value" style={{ fontSize: '20px' }}>78.4%</span>
                        <span className="label">Class Average</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentPerformance;
