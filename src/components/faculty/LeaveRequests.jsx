import React from 'react';

const LeaveRequests = () => {
    const requests = [
        { id: 1, name: "Aaryan Sharma", class: "BCA 4th Sem", reason: "Medical Leave", dates: "24 Jan – 26 Jan", status: "Pending" },
        { id: 2, name: "Isha Verma", class: "MCA 2nd Sem", reason: "Family Event", dates: "01 Feb – 02 Feb", status: "Pending" },
    ];

    return (
        <div className="dashboard-content reveal">
            <div className="content-header">
                <h2>Leave Approval Panel</h2>
                <p>Review and decide on student leave requests.</p>
            </div>

            <div className="section-viewport" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '24px' }}>
                {requests.map(req => (
                    <div className="section-box reveal" key={req.id}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                            <div>
                                <h3 style={{ margin: 0, fontSize: '18px' }}>{req.name}</h3>
                                <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{req.class}</span>
                            </div>
                            <span className="status-badge pending">{req.status}</span>
                        </div>

                        <div style={{ background: 'var(--bg-main)', padding: '15px', borderRadius: '12px', marginBottom: '20px' }}>
                            <div style={{ marginBottom: '8px' }}>
                                <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', display: 'block' }}>REASON</span>
                                <strong style={{ fontSize: '14px' }}>{req.reason}</strong>
                            </div>
                            <div>
                                <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', display: 'block' }}>DATES</span>
                                <strong style={{ fontSize: '14px' }}>{req.dates}</strong>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button className="btn-primary" style={{ flex: 1, padding: '12px', fontSize: '13px' }}>Approve</button>
                            <button className="btn-secondary" style={{ flex: 1, padding: '12px', fontSize: '13px', background: 'transparent', border: '1px solid var(--danger)', color: 'var(--danger)' }}>Reject</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeaveRequests;
