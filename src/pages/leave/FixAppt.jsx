import React from 'react';

const FixAppt = () => {
    return (
        <div className="fix-appt-page">
            <h2 className="section-title">Request an Appointment</h2>

            <div style={{ maxWidth: '600px', background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>Appoint With</label>
                        <select style={{ padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0', background: 'white' }}>
                            <option>Principal</option>
                            <option>Class Teacher (Ms. Neha Kapoor)</option>
                            <option>School Counselor</option>
                        </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>Preferred Date</label>
                        <input type="date" style={{ padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>Preferred Time Slot</label>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                            {['02:00 PM', '02:30 PM', '03:00 PM'].map(slot => (
                                <div key={slot} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '13px', cursor: 'pointer', background: '#f8fafc' }}>
                                    {slot}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>Agenda / Purpose</label>
                        <textarea rows="3" placeholder="Briefly describe the reason for meeting..." style={{ padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0', resize: 'none' }}></textarea>
                    </div>

                    <button className="btn-primary" style={{ padding: '15px', marginTop: '10px' }}>Request Appointment</button>
                    <p style={{ textAlign: 'center', fontSize: '12px', color: '#94a3b8' }}>Confirmations will be sent via SMS & Dashboard</p>
                </div>
            </div>
        </div>
    );
};

export default FixAppt;
