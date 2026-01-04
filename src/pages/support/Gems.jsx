import React from 'react';

const Gems = () => {
    const gems = [
        { name: 'Aarav Mehta', achievement: 'National Level Chess Champion', grade: 'Grade XI', image: '/assets/images/image2.jpeg' },
        { name: 'Ananya Singh', achievement: 'Young Scientist Award 2025', grade: 'Grade X', image: '/assets/images/image2.jpeg' }
    ];

    return (
        <div className="gems-page">
            <h2 className="section-title">Gems of St. Xavier's</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '30px' }}>
                {gems.map((gem, index) => (
                    <div key={index} style={{
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        padding: '30px',
                        borderRadius: '24px',
                        color: 'white',
                        display: 'flex',
                        gap: '20px',
                        alignItems: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '120px', opacity: 0.1 }}>
                            <i className="fas fa-gem"></i>
                        </div>
                        <img src={gem.image} alt={gem.name} style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '4px solid rgba(255,255,255,0.2)' }} />
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h3 style={{ margin: 0, fontSize: '20px' }}>{gem.name}</h3>
                            <p style={{ margin: '5px 0', fontSize: '14px', opacity: 0.8 }}>{gem.grade}</p>
                            <div style={{ marginTop: '15px', background: 'rgba(255,255,255,0.1)', padding: '8px 15px', borderRadius: '10px', display: 'inline-block', fontSize: '13px', fontWeight: '600' }}>
                                <i className="fas fa-trophy" style={{ marginRight: '8px' }}></i>
                                {gem.achievement}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gems;
