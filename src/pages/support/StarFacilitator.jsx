import React from 'react';

const StarFacilitator = () => {
    return (
        <div className="star-facilitator-page">
            <h2 className="section-title">Star Facilitator of the Month</h2>

            <div style={{ background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 10px 40px rgba(37, 99, 235, 0.08)', border: '1px solid #eef2ff', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto 20px', border: '5px solid #eff6ff', overflow: 'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80" alt="Facilitator" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ margin: 0, color: '#1e293b', fontSize: '24px' }}>Ms. Neha Kapoor</h3>
                <p style={{ color: '#2563eb', fontWeight: 'bold', margin: '5px 0' }}>Chemistry Department</p>

                <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '20px', margin: '25px 0' }}>
                    <p style={{ margin: 0, color: '#475569', fontStyle: 'italic', lineHeight: '1.6' }}>
                        "Ms. Kapoor is recognized for her innovative teaching methods and her dedication towards simplifying complex chemical concepts for her students. Her recent workshop on 'Green Chemistry' was highly appreciated."
                    </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                    <div style={{ padding: '10px 20px', background: '#eff6ff', borderRadius: '12px', color: '#2563eb', fontSize: '13px', fontWeight: 'bold' }}>
                        <i className="fas fa-calendar" style={{ marginRight: '8px' }}></i>
                        January 2026
                    </div>
                    <div style={{ padding: '10px 20px', background: '#f0fdf4', borderRadius: '12px', color: '#22c55e', fontSize: '13px', fontWeight: 'bold' }}>
                        <i className="fas fa-award" style={{ marginRight: '8px' }}></i>
                        8+ Years Exp
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StarFacilitator;
