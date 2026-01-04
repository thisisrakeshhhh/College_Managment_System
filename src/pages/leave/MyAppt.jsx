import React from 'react';

const MyAppt = () => {
    const appointments = [
        { with: 'Ms. Neha Kapoor', role: 'Class Teacher', date: 'Jan 10, 2026', time: '02:30 PM', status: 'Upcoming' },
        { with: 'Dr. S.K. Verma', role: 'Principal', date: 'Dec 05, 2025', time: '03:00 PM', status: 'Completed' }
    ];

    return (
        <div className="my-appt-page">
            <h2 className="section-title">My Scheduled Appointments</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
                {appointments.map((appt, index) => (
                    <div key={index} style={{
                        background: 'white',
                        padding: '24px',
                        borderRadius: '24px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                        border: '1px solid #f1f5f9',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            right: '25px',
                            fontSize: '11px',
                            fontWeight: 'bold',
                            padding: '4px 10px',
                            borderRadius: '20px',
                            background: appt.status === 'Upcoming' ? '#eff6ff' : '#f8fafc',
                            color: appt.status === 'Upcoming' ? '#2563eb' : '#64748b'
                        }}>{appt.status}</div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-user-tie" style={{ color: '#2563eb', fontSize: '20px' }}></i>
                            </div>
                            <div>
                                <h4 style={{ margin: 0, color: '#1e293b' }}>{appt.with}</h4>
                                <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>{appt.role}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', background: '#f8fafc', borderRadius: '12px' }}>
                            <div>
                                <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>Date</span>
                                <div style={{ fontWeight: 'bold', color: '#1e293b', fontSize: '13px' }}>{appt.date}</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>Time Slot</span>
                                <div style={{ fontWeight: 'bold', color: '#1e293b', fontSize: '13px' }}>{appt.time}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAppt;
