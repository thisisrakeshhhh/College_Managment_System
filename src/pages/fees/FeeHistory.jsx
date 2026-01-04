import React from 'react';

const FeeHistory = () => {
    const transactions = [
        { id: 'TXN8821', month: 'December 2025', amount: '₹ 12,500', date: 'Dec 05, 2025', status: 'Success' },
        { id: 'TXN8645', month: 'November 2025', amount: '₹ 12,500', date: 'Nov 02, 2025', status: 'Success' },
        { id: 'TXN8412', month: 'October 2025', amount: '₹ 14,200', date: 'Oct 04, 2025', status: 'Success' },
        { id: 'TXN8190', month: 'September 2025', amount: '₹ 12,500', date: 'Sep 06, 2025', status: 'Success' }
    ];

    return (
        <div className="fee-history-page">
            <h2 className="section-title">Fee Payment History</h2>

            <div className="dashboard-grid" style={{ marginBottom: '30px' }}>
                <div className="dash-icon-card icon-green">
                    <div className="dash-card-icon"><i className="fas fa-check-circle"></i></div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b' }}>₹ 51,700</div>
                        <span className="dash-card-text">Total Paid (YTD)</span>
                    </div>
                </div>
                <div className="dash-icon-card icon-red">
                    <div className="dash-card-icon"><i className="fas fa-exclamation-circle"></i></div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b' }}>₹ 0.00</div>
                        <span className="dash-card-text">Pending Dues</span>
                    </div>
                </div>
            </div>

            <div style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ background: '#f8fafc' }}>
                        <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>TRANS ID</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>FEE FOR</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>AMOUNT</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>DATE</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>RECEIPT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((txn, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '18px 24px', color: '#2563eb', fontWeight: 'bold' }}>#{txn.id}</td>
                                <td style={{ padding: '18px 24px', color: '#1e293b' }}>{txn.month}</td>
                                <td style={{ padding: '18px 24px', color: '#1e293b', fontWeight: '600' }}>{txn.amount}</td>
                                <td style={{ padding: '18px 24px', color: '#64748b' }}>{txn.date}</td>
                                <td style={{ padding: '18px 24px' }}>
                                    <i className="fas fa-file-invoice" style={{ color: '#2563eb', cursor: 'pointer', fontSize: '18px' }}></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeeHistory;
