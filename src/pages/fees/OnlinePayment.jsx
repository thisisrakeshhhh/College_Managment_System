import React from 'react';

const OnlinePayment = () => {
    return (
        <div className="online-payment-page">
            <h2 className="section-title">Online Fee Payment</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                {/* Due Details */}
                <div style={{ background: 'white', padding: '24px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                    <h3 style={{ marginBottom: '20px', color: '#1e293b' }}>Upcoming Dues</h3>
                    <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <span style={{ color: '#1e293b', fontWeight: '600' }}>January 2026 Fee</span>
                            <span style={{ color: '#2563eb', fontWeight: 'bold' }}>₹ 12,500</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '14px', color: '#64748b' }}>
                            <span>Due Date: Jan 10, 2026</span>
                            <span>Late Fee: ₹ 0.00</span>
                        </div>
                        <div style={{ borderTop: '1px dashed #cbd5e1', paddingTop: '15px', display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b' }}>Total Payable</span>
                            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b' }}>₹ 12,500</span>
                        </div>
                    </div>
                </div>

                {/* Payment Gateway Mock */}
                <div style={{ background: 'white', padding: '24px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(37, 99, 235, 0.05)', border: '1px solid #eef2ff' }}>
                    <h3 style={{ marginBottom: '20px', color: '#1e293b' }}>Payment Method</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{
                            padding: '16px',
                            borderRadius: '12px',
                            border: '2px solid #2563eb',
                            background: '#eff6ff',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px'
                        }}>
                            <i className="fas fa-credit-card" style={{ color: '#2563eb', fontSize: '20px' }}></i>
                            <span style={{ color: '#1e293b', fontWeight: '600' }}>Debit / Credit Card</span>
                            <i className="fas fa-check-circle" style={{ marginLeft: 'auto', color: '#2563eb' }}></i>
                        </div>
                        <div style={{
                            padding: '16px',
                            borderRadius: '12px',
                            border: '1px solid #e2e8f0',
                            background: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px'
                        }}>
                            <i className="fas fa-mobile-alt" style={{ color: '#64748b', fontSize: '20px' }}></i>
                            <span style={{ color: '#1e293b' }}>UPI / Google Pay</span>
                        </div>
                        <div style={{
                            padding: '16px',
                            borderRadius: '12px',
                            border: '1px solid #e2e8f0',
                            background: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px'
                        }}>
                            <i className="fas fa-university" style={{ color: '#64748b', fontSize: '20px' }}></i>
                            <span style={{ color: '#1e293b' }}>Net Banking</span>
                        </div>
                    </div>

                    <button className="btn-primary" style={{ width: '100%', marginTop: '30px', padding: '16px', fontSize: '16px' }}>
                        Proceed to Secure Payment
                    </button>
                    <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '12px', color: '#94a3b8' }}>
                        <i className="fas fa-lock" style={{ marginRight: '8px' }}></i>
                        Your payment is secured with 256-bit encryption
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OnlinePayment;
