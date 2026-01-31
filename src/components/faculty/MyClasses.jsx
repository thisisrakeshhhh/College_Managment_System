import React from 'react';

const MyClasses = () => {
    const classes = [
        { id: 1, name: "BCA 4th Sem", subject: "Java Programming", room: "302", type: "Theory" },
        { id: 2, name: "MCA 2nd Sem", subject: "Cloud Computing", room: "Lab 5", type: "Practical" },
        { id: 3, name: "B.Tech CSE", subject: "System Design", room: "Seminar Hall", type: "Theory" },
    ];

    return (
        <div className="dashboard-content">
            <div className="content-header reveal">
                <h2>My Assigned Classes</h2>
                <p>Manage your lectures, students, and academic records.</p>
            </div>

            <div className="classes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
                {classes.map(cls => (
                    <div className="section-box" key={cls.id}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                            <div>
                                <h3 style={{ margin: 0, fontSize: '18px' }}>{cls.name}</h3>
                                <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{cls.subject}</span>
                            </div>
                            <span className="status-badge" style={{ background: 'var(--bg-main)', color: 'var(--primary)' }}>{cls.type}</span>
                        </div>

                        <div style={{ marginBottom: '20px', fontSize: '14px', color: 'var(--text-main)' }}>
                            <i className="fas fa-map-marker-alt" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
                            Location: <strong>{cls.room}</strong>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <button className="btn-primary" style={{ padding: '10px', fontSize: '13px' }}>View Students</button>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button className="btn-secondary" style={{ flex: 1, padding: '10px', fontSize: '12px', background: 'var(--bg-main)', border: '1px solid var(--border)', color: 'var(--text-main)' }}>Mark Attendance</button>
                                <button className="btn-secondary" style={{ flex: 1, padding: '10px', fontSize: '12px', background: 'var(--bg-main)', border: '1px solid var(--border)', color: 'var(--text-main)' }}>Upload Grades</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyClasses;
