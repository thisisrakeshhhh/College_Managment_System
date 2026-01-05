import React from 'react';

const FeeStructureModal = ({ isOpen, onClose, courseName }) => {
    if (!isOpen) return null;

    const feesData = [
        { department: 'Computer Engineering', fee: '₹1,25,000 / Year' },
        { department: 'Information Technology', fee: '₹1,15,000 / Year' },
        { department: 'Electronics & Telecommunication', fee: '₹1,05,000 / Year' },
        { department: 'Mechanical Engineering', fee: '₹98,000 / Year' },
        { department: 'Civil Engineering', fee: '₹85,000 / Year' },
        { department: 'Electrical Engineering', fee: '₹85,000 / Year' },
    ];

    return (
        <div className="login-overlay active" style={{ display: 'flex', zIndex: 1000 }}>
            <div className="login-box" style={{ maxWidth: '600px', width: '90%' }}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <h3 className="gradient-text" style={{ fontSize: '24px', marginBottom: '10px', textAlign: 'center' }}>
                    {courseName ? `${courseName} - Fees` : 'Detailed Fee Structure'}
                </h3>
                <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: '20px' }}>Academic Year 2024-25</p>

                <div style={{ marginTop: '20px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--text)' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--border)' }}>
                                <th style={{ textAlign: 'left', padding: '12px 8px' }}>Course / Department</th>
                                <th style={{ textAlign: 'right', padding: '12px 8px' }}>Annual Fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feesData.map((item, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid var(--border)' }}>
                                    <td style={{ padding: '15px 8px', fontWeight: '500' }}>{item.department}</td>
                                    <td style={{ padding: '15px 8px', textAlign: 'right', fontWeight: '700', color: 'var(--primary)' }}>
                                        {item.fee}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: '30px', padding: '15px', background: 'rgba(99, 102, 241, 0.05)', borderRadius: '12px', fontSize: '14px', color: 'var(--muted)' }}>
                    <p><strong>Note:</strong> Fees are subject to change as per university regulations. Hostal and transport fees are not included in the above amounts.</p>
                </div>

                <button
                    className="btn-primary full-width"
                    style={{ marginTop: '25px' }}
                    onClick={onClose}
                >
                    Close Window
                </button>
            </div>
        </div>
    );
};

export default FeeStructureModal;
