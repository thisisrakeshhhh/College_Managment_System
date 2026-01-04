import React from 'react';

const Attendance = () => {
    const stats = [
        { label: 'Total Days', value: 180, color: 'blue' },
        { label: 'Present', value: 165, color: 'green' },
        { label: 'Absent', value: 15, color: 'red' },
        { label: 'Percentage', value: '91.6%', color: 'purple' }
    ];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <div className="attendance-page">
            <h2 className="section-title">Attendance Overview</h2>

            <div className="dashboard-grid" style={{ marginBottom: '30px' }}>
                {stats.map((stat, index) => (
                    <div key={index} className={`dash-icon-card icon-${stat.color}`}>
                        <div className="dash-card-icon">
                            <i className={`fas fa-${stat.label === 'Percentage' ? 'percent' : 'calendar-check'}`}></i>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b' }}>{stat.value}</div>
                            <span className="dash-card-text">{stat.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ background: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <h3 style={{ marginBottom: '20px', color: '#1e293b' }}>Monthly Summary</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '15px' }}>
                    {months.map(month => (
                        <div key={month} style={{
                            padding: '15px',
                            borderRadius: '12px',
                            border: '1px solid #e2e8f0',
                            textAlign: 'center',
                            background: '#f8fafc'
                        }}>
                            <div style={{ fontWeight: 'bold', color: '#2563eb', marginBottom: '5px' }}>{month}</div>
                            <div style={{ fontSize: '14px', color: '#64748b' }}>Attendance: 95%</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Attendance;
