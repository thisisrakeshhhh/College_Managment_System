import React from 'react';

const SwitchUsers = () => {
    const users = [
        { name: 'Niket Sharma', regNo: '1741', class: 'XI-NM', status: 'Active', avatar: '/assets/images/image2.jpeg' },
        { name: 'Rohan Sharma', regNo: '2105', class: 'IX-B', status: 'Linked', avatar: '/assets/images/image2.jpeg' }
    ];

    return (
        <div className="switch-users-page">
            <h2 className="section-title">Switch Users / Linked Accounts</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {users.map((user, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '20px',
                        background: 'white',
                        borderRadius: '16px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        border: user.status === 'Active' ? '2px solid #2563eb' : '1px solid #e2e8f0'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <img src={user.avatar} alt={user.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
                            <div>
                                <h3 style={{ margin: 0, color: '#1e293b' }}>{user.name}</h3>
                                <p style={{ margin: '4px 0', color: '#64748b', fontSize: '14px' }}>Reg No: {user.regNo} | Class: {user.class}</p>
                                {user.status === 'Active' && <span style={{ background: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>Current Active</span>}
                            </div>
                        </div>

                        <button className="btn-primary" style={{
                            padding: '10px 20px',
                            fontSize: '14px',
                            opacity: user.status === 'Active' ? 0.5 : 1,
                            cursor: user.status === 'Active' ? 'default' : 'pointer'
                        }} disabled={user.status === 'Active'}>
                            {user.status === 'Active' ? 'Already Active' : 'Switch Account'}
                        </button>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '30px', padding: '20px', background: '#eff6ff', borderRadius: '12px', border: '1px dashed #2563eb' }}>
                <p style={{ margin: 0, color: '#1e3a8a', textAlign: 'center' }}>
                    <i className="fas fa-plus-circle" style={{ marginRight: '8px' }}></i>
                    Link another student account using Registration Number and Password
                </p>
            </div>
        </div>
    );
};

export default SwitchUsers;
