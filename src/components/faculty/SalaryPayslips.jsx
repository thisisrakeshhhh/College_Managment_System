import React from 'react';

const SalaryPayslips = () => {
    const history = [
        { month: 'December 2025', amount: '₹82,400', date: '01 Jan 2026', status: 'Paid' },
        { month: 'November 2025', amount: '₹82,400', date: '01 Dec 2025', status: 'Paid' },
    ];

    return (
        <div className="dashboard-content reveal">
            <div className="content-header">
                <h2>Salary & Payslips</h2>
                <p>Private portal for financial disbursements and documents.</p>
            </div>

            <div className="section-box" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', color: 'white', border: 'none', marginBottom: '30px', padding: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <span style={{ fontSize: '13px', opacity: 0.8 }}>LAST MONTH PAYOUT</span>
                        <h2 style={{ fontSize: '32px', margin: '5px 0', color: 'white' }}>₹82,400.00</h2>
                        <span style={{ fontSize: '12px', opacity: 0.7 }}>Credit Date: 01 Jan 2026</span>
                    </div>
                    <div style={{ padding: '15px', background: 'rgba(255,255,255,0.1)', borderRadius: '15px', textAlign: 'center' }}>
                        <i className="fas fa-wallet" style={{ fontSize: '24px', marginBottom: '8px', display: 'block' }}></i>
                        <span style={{ fontSize: '11px', fontWeight: '700' }}>STATUS: PAID</span>
                    </div>
                </div>
            </div>

            <div className="section-box">
                <div style={{ paddingBottom: '15px', borderBottom: '1px solid var(--border)', marginBottom: '15px' }}>
                    <h3 style={{ margin: 0 }}>Payslip History</h3>
                </div>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border)' }}>
                                <th style={{ padding: '15px 12px', color: 'var(--text-muted)', fontSize: '13px' }}>MONTH / YEAR</th>
                                <th style={{ padding: '15px 12px', color: 'var(--text-muted)', fontSize: '13px' }}>AMOUNT</th>
                                <th style={{ padding: '15px 12px', color: 'var(--text-muted)', fontSize: '13px' }}>STATUS</th>
                                <th style={{ padding: '15px 12px', color: 'var(--text-muted)', fontSize: '13px' }}>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((h, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid var(--bg-main)' }}>
                                    <td style={{ padding: '15px 12px' }}><strong>{h.month}</strong></td>
                                    <td style={{ padding: '15px 12px' }}>{h.amount}</td>
                                    <td style={{ padding: '15px 12px' }}><span className="status-badge" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)' }}>{h.status}</span></td>
                                    <td style={{ padding: '15px 12px' }}><button style={{ color: 'var(--primary)', border: 'none', background: 'none', cursor: 'pointer', fontWeight: '700' }}><i className="fas fa-download"></i> Payslip</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SalaryPayslips;
