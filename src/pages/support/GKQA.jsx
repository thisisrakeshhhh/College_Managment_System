import React from 'react';

const GKQA = () => {
    return (
        <div className="gk-qa-page">
            <h2 className="section-title">General Knowledge Q&A</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ background: 'white', padding: '24px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                    <span style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '13px' }}>TODAY'S TOPIC: SPACE EXPLORATION</span>
                    <h3 style={{ marginTop: '10px', color: '#1e293b' }}>Q: Which planet is known as the "Red Planet"?</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' }}>
                        {['Venus', 'Mars', 'Jupiter', 'Saturn'].map(opt => (
                            <button key={opt} style={{ padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', color: '#1e293b', fontWeight: '500', cursor: 'pointer' }}>
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div style={{ background: '#f0fdf4', padding: '20px', borderRadius: '16px', border: '1px solid #dcfce7' }}>
                        <h4 style={{ margin: 0, color: '#166534' }}>Did You Know?</h4>
                        <p style={{ margin: '10px 0 0 0', color: '#166534', fontSize: '14px', lineHeight: '1.5' }}>
                            A day on Venus is longer than a year on Venus. It takes Venus longer to rotate on its axis than it does to orbit the Sun.
                        </p>
                    </div>
                    <div style={{ background: '#eff6ff', padding: '20px', borderRadius: '16px', border: '1px solid #dbeafe' }}>
                        <h4 style={{ margin: 0, color: '#1e40af' }}>Word of the Day</h4>
                        <p style={{ margin: '10px 0 0 0', color: '#1e40af', fontSize: '14px', lineHeight: '1.5' }}>
                            <b>Ebullient</b>: Cheerful and full of energy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GKQA;
