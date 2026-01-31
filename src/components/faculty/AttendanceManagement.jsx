import React, { useState } from 'react';

const AttendanceManagement = () => {
    const [selectedClass, setSelectedClass] = useState('BCA 4th Sem');
    const students = [
        { roll: 'BCA/22/01', name: 'Aaryan Sharma', status: 'P' },
        { roll: 'BCA/22/02', name: 'Isha Verma', status: 'P' },
        { roll: 'BCA/22/03', name: 'Rahul Gupta', status: 'A' },
        { roll: 'BCA/22/04', name: 'Sneha Kapur', status: 'P' },
    ];

    const history = [
        { date: '29 Jan 2026', class: 'BCA 4th Sem', present: 42, absent: 3, status: 'Completed' },
        { date: '28 Jan 2026', class: 'BCA 4th Sem', present: 40, absent: 5, status: 'Completed' },
        { date: '27 Jan 2026', class: 'BCA 4th Sem', present: 44, absent: 1, status: 'Completed' },
    ];

    return (
        <div className="dashboard-content">
            <div className="content-header">
                <h2 className="reveal">Attendance Management</h2>
                <p>Track daily attendance and review history.</p>
            </div>

            <div className="section-box" style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                        <label style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>SELECT CLASS</label>
                        <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-main)' }}>
                            <option>BCA 4th Sem</option>
                            <option>MCA 2nd Sem</option>
                            <option>B.Tech CSE</option>
                        </select>
                    </div>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                        <label style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>SELECT DATE</label>
                        <input type="date" defaultValue="2026-01-30" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-main)' }} />
                    </div>
                    <button className="btn-primary" style={{ padding: '12px 30px' }}>Load Students</button>
                </div>
            </div>

            <div className="dashboard-sections" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px' }}>
                <div className="section-column">
                    <div className="section-box">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <h3>Mark Attendance</h3>
                            <button style={{ border: 'none', background: 'none', color: 'var(--primary)', fontWeight: '700', fontSize: '12px' }}>Mark All Present</button>
                        </div>
                        <div className="student-list" style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
                                        <th style={{ padding: '12px', fontSize: '12px', color: 'var(--text-muted)' }}>ROLL NO</th>
                                        <th style={{ padding: '12px', fontSize: '12px', color: 'var(--text-muted)' }}>NAME</th>
                                        <th style={{ padding: '12px', fontSize: '12px', color: 'var(--text-muted)' }}>STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map((s, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid var(--bg-main)' }}>
                                            <td style={{ padding: '12px', fontSize: '13px' }}><strong>{s.roll}</strong></td>
                                            <td style={{ padding: '12px', fontSize: '13px' }}>{s.name}</td>
                                            <td style={{ padding: '12px' }}>
                                                <div style={{ display: 'flex', gap: '5px' }}>
                                                    <button style={{ width: '30px', height: '30px', borderRadius: '5px', border: '1px solid var(--border)', background: s.status === 'P' ? 'var(--success)' : 'white', color: s.status === 'P' ? 'white' : 'var(--text-main)', cursor: 'pointer' }}>P</button>
                                                    <button style={{ width: '30px', height: '30px', borderRadius: '5px', border: '1px solid var(--border)', background: s.status === 'A' ? 'var(--danger)' : 'white', color: s.status === 'A' ? 'white' : 'var(--text-main)', cursor: 'pointer' }}>A</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <button className="btn-primary" style={{ width: '100%', marginTop: '20px', padding: '12px' }}>Submit Attendance</button>
                    </div>
                </div>

                <div className="section-column">
                    <div className="section-box">
                        <h3>Last 7 Days History</h3>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                                <thead>
                                    <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
                                        <th style={{ padding: '10px 5px' }}>DATE</th>
                                        <th style={{ padding: '10px 5px' }}>P/A</th>
                                        <th style={{ padding: '10px 5px' }}>STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {history.map((h, i) => (
                                        <tr key={i}>
                                            <td style={{ padding: '10px 5px' }}>{h.date}</td>
                                            <td style={{ padding: '10px 5px' }}>{h.present}/{h.absent}</td>
                                            <td style={{ padding: '10px 5px' }}><span style={{ color: 'var(--success)', fontWeight: '700' }}>✓</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendanceManagement;
