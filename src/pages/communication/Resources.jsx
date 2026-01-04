import React from 'react';

const Resources = () => {
    const subjects = [
        { name: 'Mathematics', files: 5, color: 'blue' },
        { name: 'Physics', files: 3, color: 'orange' },
        { name: 'Chemistry', files: 8, color: 'green' },
        { name: 'English', files: 2, color: 'purple' }
    ];

    return (
        <div className="resources-page">
            <h2 className="section-title">Learning Resources</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                {subjects.map((sub, index) => (
                    <div key={index} style={{
                        background: 'white',
                        padding: '24px',
                        borderRadius: '20px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                        border: '1px solid #f1f5f9',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                        <div className={`dash-card-icon icon-${sub.color}`} style={{ width: '60px', height: '60px', fontSize: '24px', marginBottom: '15px' }}>
                            <i className="fas fa-folder-open"></i>
                        </div>
                        <h3 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>{sub.name}</h3>
                        <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>{sub.files} Study Manuals Available</p>
                        <button style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '10px',
                            border: '1px solid #e2e8f0',
                            background: '#f8fafc',
                            color: '#2563eb',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}>View Materials</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resources;
