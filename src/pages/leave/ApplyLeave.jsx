import React from 'react';

const ApplyLeave = () => {
    return (
        <div className="apply-leave-page">
            <h2 className="section-title">Leave & Appointments | Apply Leave</h2>

            <div style={{ maxWidth: '800px', background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>Leave Type</label>
                        <select style={{ padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0', background: 'white' }}>
                            <option>Sick Leave</option>
                            <option>Casual Leave</option>
                            <option>Bereavement Leave</option>
                        </select>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>From Date</label>
                        <input type="date" style={{ padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>To Date</label>
                        <input type="date" style={{ padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0' }} />
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '25px' }}>
                    <label style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>Reason for Leave</label>
                    <textarea rows="4" placeholder="Enter detailed reason here..." style={{ padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0', resize: 'none' }}></textarea>
                </div>

                <div style={{ display: 'flex', gap: '15px' }}>
                    <button className="btn-primary" style={{ padding: '12px 30px' }}>Submit Application</button>
                    <button style={{ padding: '12px 30px', borderRadius: '10px', border: '1px solid #e2e8f0', background: 'white', color: '#64748b' }}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ApplyLeave;
