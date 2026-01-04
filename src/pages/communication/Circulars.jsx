import React from 'react';

const Circulars = () => {
    const circulars = [
        { id: 'CIR/2026/01', title: 'New Year Celebration & Holiday Notice', date: 'Jan 01, 2026', type: 'Holiday' },
        { id: 'CIR/2025/45', title: 'Schedule for Periodic Test - III', date: 'Dec 28, 2025', type: 'Academic' },
        { id: 'CIR/2025/44', title: 'Annual Sports Day Instructions', date: 'Dec 20, 2025', type: 'Event' },
        { id: 'CIR/2025/43', title: 'Winter Vacation Assignment', date: 'Dec 15, 2025', type: 'Academic' }
    ];

    return (
        <div className="circulars-page">
            <h2 className="section-title">Communication | Circulars</h2>

            <div style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ background: '#f8fafc' }}>
                        <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>REF NO</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>TITLE</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>DATE</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>TYPE</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {circulars.map((cir, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '18px 24px', color: '#64748b', fontSize: '12px' }}>{cir.id}</td>
                                <td style={{ padding: '18px 24px', color: '#1e293b', fontWeight: '600' }}>{cir.title}</td>
                                <td style={{ padding: '18px 24px', color: '#64748b' }}>{cir.date}</td>
                                <td style={{ padding: '18px 24px' }}>
                                    <span style={{
                                        padding: '4px 10px',
                                        borderRadius: '12px',
                                        fontSize: '11px',
                                        fontWeight: '800',
                                        background: cir.type === 'Holiday' ? '#fef2f2' : (cir.type === 'Academic' ? '#eff6ff' : '#f0fdf4'),
                                        color: cir.type === 'Holiday' ? '#ef4444' : (cir.type === 'Academic' ? '#2563eb' : '#22c55e')
                                    }}>{cir.type}</span>
                                </td>
                                <td style={{ padding: '18px 24px' }}>
                                    <i className="fas fa-file-pdf" style={{ color: '#ef4444', cursor: 'pointer', fontSize: '18px' }}></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Circulars;
