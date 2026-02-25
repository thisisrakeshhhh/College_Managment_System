import React from 'react';

const CampusLife = () => {
    const memories = [
        { img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&q=80", title: "Student Clubs" },
        { img: "https://images.unsplash.com/photo-1577416416183-fce1832fa6f9?w=400&q=80", title: "Sports Complex" },
        { img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80", title: "Cultural Events" },
        { img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=80", title: "Modern Library" }
    ];

    return (
        <section className="campus-life" style={{ padding: '100px 0', background: 'var(--bg)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <div className="campus-content reveal">
                        <span className="badge-naac" style={{ background: 'var(--primary)' }}>VIRTUAL TOUR</span>
                        <h2 style={{ fontSize: '48px', fontWeight: '900', color: 'var(--secondary)', marginBottom: '25px' }}>
                            Step Inside <span className="gradient-text">SXIT</span> - Virtually!
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '30px', lineHeight: '1.8' }}>
                            Experience the vibrant campus life, world-class facilities, and the "Home away from Home" atmosphere that makes St. Xavier's unique. Join a community of achievers and dreamers.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div className="facility-item" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <i className="fas fa-bed" style={{ color: 'var(--primary)' }}></i>
                                <span style={{ fontWeight: '600' }}>Hostel Life</span>
                            </div>
                            <div className="facility-item" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <i className="fas fa-utensils" style={{ color: 'var(--primary)' }}></i>
                                <span style={{ fontWeight: '600' }}>24/7 Dining</span>
                            </div>
                            <div className="facility-item" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <i className="fas fa-running" style={{ color: 'var(--primary)' }}></i>
                                <span style={{ fontWeight: '600' }}>Sports Arena</span>
                            </div>
                            <div className="facility-item" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <i className="fas fa-wifi" style={{ color: 'var(--primary)' }}></i>
                                <span style={{ fontWeight: '600' }}>Smart Campus</span>
                            </div>
                        </div>
                        <button className="btn-primary" style={{ marginTop: '40px' }}>Take a Virtual Tour</button>
                    </div>

                    <div className="campus-gallery reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        {memories.map((item, index) => (
                            <div key={index} className="gallery-item hover-scale" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '200px' }}>
                                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '15px',
                                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                    color: 'white',
                                    fontWeight: '600'
                                }}>
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CampusLife;
