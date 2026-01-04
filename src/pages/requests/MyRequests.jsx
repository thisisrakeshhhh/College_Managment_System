import React from 'react';

const MyRequests = () => {
    const requests = [
        { id: 'REQ-1002', type: 'Character Certificate', date: 'Dec 28, 2025', status: 'Pending' },
        { id: 'REQ-0985', type: 'Bus Route Change', date: 'Nov 12, 2025', status: 'Approved' }
    ];

    return (
        <div className="my-requests-page">
            <h2 className="section-title">Track My Requests</h2>

            <div style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ background: '#f8fafc' }}>
                        <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>REQUEST ID</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>CATEGORY</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>DATE SUBMITTED</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((req, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '18px 24px', color: '#2563eb', fontWeight: 'bold' }}>#{req.id}</td>
                                <td style={{ padding: '18px 24px', color: '#1e293b', fontWeight: '600' }}>{req.type}</td>
                                <td style={{ padding: '18px 24px', color: '#64748b' }}>{req.date}</td>
                                <td style={{ padding: '18px 24px' }}>
                                    <span style={{
                                        padding: '4px 10px',
                                        borderRadius: '12px',
                                        fontSize: '11px',
                                        fontWeight: '800',
                                        background: req.status === 'Pending' ? '#fffbeb' : '#f0fdf4',
                                        color: req.status === 'Pending' ? '#92400e' : '#22c55e'
                                    }}>{req.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRequests;
