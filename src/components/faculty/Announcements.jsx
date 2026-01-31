import React from 'react';

const Announcements = () => {
    const historical = [
        { title: "Lab Exam Schedule", target: "BCA 4th Sem", date: "30 Jan 2026", type: "Urgent" },
        { title: "Mid-Term Project Submission", target: "All Classes", date: "28 Jan 2026", type: "Standard" },
    ];

    return (
        <div className="dashboard-content reveal">
            <div className="content-header">
                <h2>Announcements Management</h2>
                <p>Broadcast information and manage past circulars.</p>
            </div>

            <div style={{ textAlign: 'right', marginBottom: '25px' }}>
                <button className="btn-primary" style={{ padding: '12px 30px' }}><i className="fas fa-plus" style={{ marginRight: '8px' }}></i> Create New Circular</button>
            </div>

            <div className="section-box">
                <div style={{ paddingBottom: '15px', borderBottom: '1px solid var(--border)', marginBottom: '15px' }}>
                    <h3 style={{ margin: 0 }}>Sent Announcements</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {historical.map((ann, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', background: 'var(--bg-main)', borderRadius: '12px' }}>
                            <div>
                                <h4 style={{ margin: '0 0 5px 0' }}>{ann.title}</h4>
                                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Sent to <strong>{ann.target}</strong> on {ann.date}</span>
                            </div>
                            <span className="status-badge" style={{ background: ann.type === 'Urgent' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(79, 70, 229, 0.1)', color: ann.type === 'Urgent' ? 'var(--danger)' : 'var(--primary)', fontSize: '10px' }}>{ann.type}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Announcements;
