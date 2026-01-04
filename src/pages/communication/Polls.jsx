import React, { useState } from 'react';

const Polls = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div className="polls-page">
            <h2 className="section-title">School Polls & Surveys</h2>

            <div style={{ maxWidth: '600px', background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                <span style={{ background: '#eff6ff', color: '#2563eb', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>Featured Poll</span>
                <h3 style={{ marginTop: '15px', color: '#1e293b', fontSize: '20px' }}>What should be the theme for our upcoming Annual Sports Day?</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '25px' }}>
                    {['Olympic Spirit', 'Future Legends', 'United Through Sports'].map((option, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelected(idx)}
                            style={{
                                padding: '16px 20px',
                                borderRadius: '14px',
                                border: `2px solid ${selected === idx ? '#2563eb' : '#f1f5f9'}`,
                                background: selected === idx ? '#eff6ff' : 'white',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                transition: 'all 0.2s'
                            }}
                        >
                            <span style={{ fontWeight: '500', color: selected === idx ? '#2563eb' : '#1e293b' }}>{option}</span>
                            {selected === idx && <i className="fas fa-check-circle" style={{ color: '#2563eb' }}></i>}
                        </div>
                    ))}
                </div>

                <button
                    className="btn-primary"
                    style={{ width: '100%', marginTop: '30px', padding: '16px', opacity: selected === null ? 0.6 : 1 }}
                    disabled={selected === null}
                >
                    Submit My Vote
                </button>
                <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '13px', color: '#94a3b8' }}>Ends in 3 days • 152 students voted</p>
            </div>
        </div>
    );
};

export default Polls;
