import React from 'react';

const PrincipalsDesk = () => {
    return (
        <div className="principals-desk-page">
            <h2 className="section-title">Message from the Principal's Desk</h2>

            <div style={{ background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 4px 25px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9', display: 'flex', gap: '40px' }}>
                <div style={{ width: '250px' }}>
                    <div style={{ width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden', marginBottom: '15px' }}>
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80" alt="Principal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h4 style={{ margin: 0, color: '#1e293b' }}>Dr. S.K. Verma</h4>
                        <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>B.Ed, M.A, Ph.D</p>
                    </div>
                </div>

                <div style={{ flex: 1 }}>
                    <h3 style={{ color: '#2563eb', fontSize: '24px', marginBottom: '20px' }}>Welcome to the Academic Session 2025-26</h3>
                    <div style={{ color: '#475569', lineHeight: '1.8', fontSize: '16px' }}>
                        <p>Dear Students and Parents,</p>
                        <p>Education is not just about learning facts, but about training the mind to think. At St. Xavier's, we strive to provide an environment where every child feels valued and inspired to reach their full potential.</p>
                        <p>As we navigate through this academic session, I encourage all students to remain curious, persistent, and compassionate. Our goal is to nurture not just successful students, but well-rounded global citizens.</p>
                        <p>Let's make this year a remarkable journey of discovery and growth.</p>
                        <p style={{ marginTop: '30px', fontWeight: 'bold' }}>Warm Regards,<br />Dr. S.K. Verma</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrincipalsDesk;
