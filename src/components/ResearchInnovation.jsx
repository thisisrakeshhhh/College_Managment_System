import React from 'react';

const ResearchInnovation = () => {
    const labs = [
        { title: "KCC Lab", desc: "Advanced Computing & Cloud Technology Hub" },
        { title: "Eicher-CU CoE", desc: "Automobile Engineering & Design Centre" },
        { title: "CoE-Ultratech", desc: "Civil Engineering & Structural Research" },
        { title: "Coforge Lab", desc: "Software Development & IT Innovation" },
        { title: "LIVE Kitchen", desc: "Hospitality & Culinary Arts Excellence" },
        { title: "Media Studios", desc: "Journalism & Creative Arts Production" }
    ];

    return (
        <section className="research-section" style={{ padding: '100px 0', background: 'white' }}>
            <div className="container">
                <div className="section-header">
                    <span className="badge-naac" style={{ background: 'var(--accent)', color: 'var(--dark)' }}>INNOVATION HUB</span>
                    <h2>Pioneering <span className="gradient-text">Research</span> & Excellence</h2>
                    <p>Discover the inspiring stories and gain valuable insights straight from our research labs.</p>
                </div>

                <div className="labs-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    marginTop: '50px'
                }}>
                    {labs.map((lab, index) => (
                        <div key={index} className="lab-card reveal hover-scale" style={{
                            padding: '40px',
                            borderRadius: 'var(--radius-lg)',
                            background: 'white',
                            border: '1px solid var(--border)',
                            position: 'relative'
                        }}>
                            <div className="lab-icon" style={{
                                width: '50px',
                                height: '4px',
                                background: 'var(--primary)',
                                marginBottom: '20px'
                            }}></div>
                            <h3 style={{ fontSize: '24px', marginBottom: '15px', color: 'var(--secondary)' }}>{lab.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{lab.desc}</p>
                            <button style={{
                                marginTop: '20px',
                                background: 'none',
                                color: 'var(--primary)',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                Learn More <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchInnovation;
