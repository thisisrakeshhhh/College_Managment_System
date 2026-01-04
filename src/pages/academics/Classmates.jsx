import React from 'react';

const Classmates = () => {
    const classmates = [
        { name: 'Aarav Mehta', regNo: '1742', rollNo: '01' },
        { name: 'Ananya Singh', regNo: '1745', rollNo: '02' },
        { name: 'Deepak Kumar', regNo: '1748', rollNo: '03' },
        { name: 'Ishita Sharma', regNo: '1750', rollNo: '04' },
        { name: 'Kabir Verma', regNo: '1752', rollNo: '05' },
        { name: 'Megha Gupta', regNo: '1755', rollNo: '06' },
        { name: 'Priya Reddy', regNo: '1758', rollNo: '07' },
        { name: 'Rahul Das', regNo: '1760', rollNo: '08' }
    ];

    return (
        <div className="classmates-page">
            <h2 className="section-title">My Classmates (XI - NM)</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                {classmates.map((student, index) => (
                    <div key={index} style={{
                        background: 'white',
                        padding: '20px',
                        borderRadius: '16px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        border: '1px solid #f1f5f9'
                    }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '12px',
                            background: '#eff6ff',
                            color: '#2563eb',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '18px',
                            fontWeight: 'bold'
                        }}>
                            {student.rollNo}
                        </div>
                        <div>
                            <h4 style={{ margin: 0, color: '#1e293b' }}>{student.name}</h4>
                            <p style={{ margin: '4px 0', color: '#64748b', fontSize: '13px' }}>Reg No: {student.regNo}</p>
                        </div>
                        <div style={{ marginLeft: 'auto' }}>
                            <i className="fas fa-message" style={{ color: '#94a3b8', cursor: 'pointer' }}></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classmates;
