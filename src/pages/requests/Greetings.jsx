import React from 'react';

const Greetings = () => {
    const greetings = [
        { type: 'Birthday', title: 'Happy Birthday!', message: 'Wishing you a day filled with joy and a year of great success.', from: 'St. Xavier\'s Team', color: '#eff6ff' },
        { type: 'Diwali', title: 'Happy Diwali!', message: 'May the festival of lights bring prosperity and happiness to your home.', from: 'Principal\'s Office', color: '#fffbeb' },
        { type: 'New Year', title: 'Happy New Year 2026', message: 'May this year be full of new learnings and achievements.', from: 'School Management', color: '#f0fdf4' }
    ];

    return (
        <div className="greetings-page">
            <h2 className="section-title">Greetings & Best Wishes</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px' }}>
                {greetings.map((greet, index) => (
                    <div key={index} style={{
                        background: greet.color,
                        padding: '30px',
                        borderRadius: '24px',
                        border: '1px solid rgba(0,0,0,0.05)',
                        position: 'relative',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
                    }}>
                        <div style={{ position: 'absolute', top: '25px', right: '30px', fontSize: '24px', opacity: 0.1 }}>
                            <i className="fas fa-quote-right"></i>
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', color: '#64748b' }}>{greet.type} Greeting</span>
                        <h3 style={{ margin: '10px 0', color: '#1e293b' }}>{greet.title}</h3>
                        <p style={{ margin: '10px 0 20px 0', color: '#475569', lineHeight: '1.6', fontSize: '15px' }}>{greet.message}</p>
                        <div style={{ fontSize: '13px', color: '#64748b', fontWeight: 'bold' }}>— {greet.from}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Greetings;
