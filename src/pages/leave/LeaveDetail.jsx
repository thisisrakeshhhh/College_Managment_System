import React from 'react';

const LeaveDetail = () => {
    const records = [
        { type: 'Sick Leave', from: 'Dec 12, 2025', to: 'Dec 14, 2025', days: 3, status: 'Approved' },
        { type: 'Casual Leave', from: 'Nov 05, 2025', to: 'Nov 05, 2025', days: 1, status: 'Approved' }
    ];

    return (
        <div className="leave-detail-page">
            <h2 className="section-title">Leave History & Status</h2>

            <div className="dashboard-grid" style={{ marginBottom: '30px' }}>
                <div className="dash-icon-card icon-blue">
                    <div className="dash-card-icon"><i className="fas fa-calendar-check"></i></div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b' }}>12 Days</div>
                        <span className="dash-card-text">Total Taken</span>
                    </div>
                </div>
                <div className="dash-icon-card icon-green">
                    <div className="dash-card-icon"><i className="fas fa-clock"></i></div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b' }}>3 Days</div>
                        <span className="dash-card-text">Remaining</span>
                    </div>
                </div>
            </div>

            <div style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ background: '#f8fafc' }}>
                        <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>TYPE</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>DURATION</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>DAYS</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((rec, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '18px 24px', color: '#1e293b', fontWeight: '600' }}>{rec.type}</td>
                                <td style={{ padding: '18px 24px', color: '#64748b' }}>{rec.from} - {rec.to}</td>
                                <td style={{ padding: '18px 24px', color: '#1e293b' }}>{rec.days}</td>
                                <td style={{ padding: '18px 24px' }}>
                                    <span style={{
                                        padding: '4px 10px',
                                        borderRadius: '12px',
                                        fontSize: '11px',
                                        fontWeight: '800',
                                        background: '#f0fdf4',
                                        color: '#22c55e'
                                    }}>{rec.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeaveDetail;
