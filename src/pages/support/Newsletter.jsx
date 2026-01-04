import React from 'react';

const Newsletter = () => {
    return (
        <div className="newsletter-page">
            <h2 className="section-title">School Monthly Newsletter</h2>

            <div style={{ display: 'flex', gap: '40px' }}>
                <div style={{ flex: 1, background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 25px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                    <div style={{ borderBottom: '2px solid #2563eb', paddingBottom: '20px', marginBottom: '30px', textAlign: 'center' }}>
                        <h3 style={{ margin: 0, color: '#1e293b', fontSize: '28px' }}>THE XAVIER CHRONICLE</h3>
                        <p style={{ margin: '5px 0', color: '#64748b', fontWeight: 'bold' }}>JANUARY 2026 EDITION</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                        <div>
                            <h4 style={{ color: '#2563eb' }}>School Spotlight</h4>
                            <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>
                                Our school hosted the 15th Annual Inter-School Science Fair where students from 20 schools participated and showcased innovative projects...
                            </p>
                        </div>
                        <div>
                            <h4 style={{ color: '#2563eb' }}>Upcoming Events</h4>
                            <ul style={{ color: '#475569', fontSize: '14px', paddingLeft: '20px' }}>
                                <li>Republic Day Parade</li>
                                <li>Final Pre-Boards Grade XII</li>
                                <li>Parent Teacher Meeting</li>
                            </ul>
                        </div>
                    </div>

                    <button className="btn-primary" style={{ width: '100%', marginTop: '30px', padding: '15px' }}>
                        <i className="fas fa-download" style={{ marginRight: '10px' }}></i>
                        Download Full Newsletter
                    </button>
                </div>

                <div style={{ width: '300px' }}>
                    <h3 style={{ color: '#1e293b', fontSize: '18px', marginBottom: '20px' }}>Previous Editions</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {['December 2025', 'November 2025', 'October 2025'].map(mon => (
                            <div key={mon} style={{ padding: '15px', background: 'white', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #f1f5f9' }}>
                                <i className="fas fa-file-pdf" style={{ color: '#ef4444' }}></i>
                                <span style={{ fontSize: '14px', color: '#1e293b' }}>{mon}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
