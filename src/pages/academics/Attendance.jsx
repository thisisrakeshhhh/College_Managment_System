import React from 'react';

const Attendance = () => {
    const stats = [
        { label: 'Total Days', value: 180, color: 'blue' },
        { label: 'Present', value: 171, color: 'green' },
        { label: 'Absent', value: 9, color: 'red' },
        { label: 'Percentage', value: '95%', color: 'purple' }
    ];

    const attendanceRecords = [
        { date: '2026-02-01', status: 'Present', time: '08:45 AM' },
        { date: '2026-01-31', status: 'Present', time: '08:50 AM' },
        { date: '2026-01-30', status: 'Present', time: '08:42 AM' },
        { date: '2026-01-29', status: 'Absent', time: '-' },
        { date: '2026-01-28', status: 'Present', time: '08:55 AM' },
        { date: '2026-01-27', status: 'Present', time: '08:48 AM' },
    ];

    return (
        <div className="attendance-page">
            <div className="overview-summary-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="summary-card" style={{ padding: '24px' }}>
                        <div className="summary-label">{stat.label}</div>
                        <div style={{ fontSize: '28px', fontWeight: '800', color: stat.color === 'red' ? '#ef4444' : stat.color === 'green' ? '#10b981' : '#1e293b' }}>{stat.value}</div>
                    </div>
                ))}
            </div>

            <div className="profile-card-premium" style={{ padding: '30px' }}>
                <h3 style={{ marginBottom: '20px', fontSize: '18px' }}>Recent Attendance Records</h3>
                <div className="attendance-list">
                    {attendanceRecords.map((record, idx) => (
                        <div key={idx} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '16px 0',
                            borderBottom: idx === attendanceRecords.length - 1 ? 'none' : '1px solid #f1f5f9'
                        }}>
                            <div>
                                <div style={{ fontWeight: '600' }}>{new Date(record.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                                <div style={{ fontSize: '12px', color: '#64748b' }}>Check-in: {record.time}</div>
                            </div>
                            <div style={{
                                padding: '6px 12px',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                background: record.status === 'Present' ? '#ecfdf5' : '#fef2f2',
                                color: record.status === 'Present' ? '#10b981' : '#ef4444'
                            }}>
                                {record.status}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Attendance;
