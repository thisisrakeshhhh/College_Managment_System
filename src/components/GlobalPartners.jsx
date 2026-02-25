import React from 'react';

const GlobalPartners = () => {
    const partners = [
        { name: "USA Universities", count: "150+" },
        { name: "UK Universities", count: "80+" },
        { name: "Australian Universities", count: "60+" },
        { name: "Canadian Universities", count: "40+" },
        { name: "European Universities", count: "120+" },
        { name: "Asian Universities", count: "100+" }
    ];

    return (
        <section className="global-partners" style={{ padding: '100px 0', background: 'var(--bg-soft)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="badge-naac" style={{ background: 'var(--primary)' }}>GLOBAL EXPOSURE</span>
                    <h2>Immerse yourself in a <span className="gradient-text">Global</span> Educational Experience</h2>
                    <p>with peers from 68+ countries and partnerships with top-ranked international universities.</p>
                </div>

                <div className="partners-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '50px' }}>
                    {partners.map((partner, index) => (
                        <div key={index} className="partner-card reveal hover-lift" style={{
                            background: 'white',
                            padding: '30px',
                            borderRadius: 'var(--radius-lg)',
                            textAlign: 'center',
                            border: '1px solid var(--border)'
                        }}>
                            <h3 style={{ fontSize: '32px', color: 'var(--primary)', marginBottom: '10px' }}>{partner.count}</h3>
                            <p style={{ fontWeight: '700', color: 'var(--secondary)' }}>{partner.name}</p>
                        </div>
                    ))}
                </div>

                <div className="global-stats-bar" style={{
                    marginTop: '60px',
                    padding: '40px',
                    background: 'var(--secondary)',
                    borderRadius: 'var(--radius-xl)',
                    color: 'white',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    textAlign: 'center'
                }}>
                    <div className="stat-item">
                        <h4 style={{ fontSize: '36px', marginBottom: '5px' }}>450+</h4>
                        <p style={{ opacity: 0.8 }}>International Tie-ups</p>
                    </div>
                    <div className="stat-item">
                        <h4 style={{ fontSize: '36px', marginBottom: '5px' }}>68+</h4>
                        <p style={{ opacity: 0.8 }}>Countries Represented</p>
                    </div>
                    <div className="stat-item">
                        <h4 style={{ fontSize: '36px', marginBottom: '5px' }}>2000+</h4>
                        <p style={{ opacity: 0.8 }}>Study Abroad Opportunities</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalPartners;
