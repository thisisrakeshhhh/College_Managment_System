import React from 'react';

const Settings = () => {
    return (
        <div className="dashboard-content reveal">
            <div className="content-header">
                <h2>Settings & Profile</h2>
                <p>Manage your account security and application preferences.</p>
            </div>

            <div className="dashboard-sections" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '24px' }}>
                <div className="section-column">
                    <div className="section-box" style={{ marginBottom: '24px' }}>
                        <h3><i className="fas fa-id-card"></i> Profile Details</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                            <div>
                                <label style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>FULL NAME</label>
                                <input type="text" readOnly defaultValue="Prof. Smith" style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', borderRadius: '10px', background: 'var(--bg-main)', fontSize: '14px' }} />
                            </div>
                            <div>
                                <label style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>DEPARTMENT</label>
                                <input type="text" readOnly defaultValue="Computer Science" style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', borderRadius: '10px', background: 'var(--bg-main)', fontSize: '14px' }} />
                            </div>
                            <div style={{ gridColumn: 'span 2' }}>
                                <label style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>EMAIL ADDRESS</label>
                                <input type="text" readOnly defaultValue="smith.prof@college.edu.in" style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', borderRadius: '10px', background: 'var(--bg-main)', fontSize: '14px' }} />
                            </div>
                        </div>
                    </div>

                    <div className="section-box">
                        <h3><i className="fas fa-key"></i> Security</h3>
                        <div style={{ marginTop: '20px' }}>
                            <button className="btn-secondary" style={{ padding: '12px 25px', fontSize: '13px', background: 'var(--bg-main)', border: '1px solid var(--border)', color: 'var(--text-main)' }}>Change Password</button>
                            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '12px' }}>Last changed: 3 months ago</p>
                        </div>
                    </div>
                </div>

                <div className="section-column">
                    <div className="section-box" style={{ marginBottom: '24px' }}>
                        <h3><i className="fas fa-sliders-h"></i> Preferences</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '14px' }}>Theme Mode</span>
                                <div style={{ background: 'var(--bg-main)', padding: '5px', borderRadius: '25px', display: 'flex' }}>
                                    <button style={{ border: 'none', background: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '11px', fontWeight: '700', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>Light</button>
                                    <button style={{ border: 'none', background: 'transparent', padding: '5px 15px', borderRadius: '20px', fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)' }}>Dark</button>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '14px' }}>Push Notifications</span>
                                <input type="checkbox" defaultChecked style={{ width: '40px', height: '20px', accentColor: 'var(--primary)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
