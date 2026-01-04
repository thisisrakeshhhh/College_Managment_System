import React from 'react';

const ReportCard = () => {
    const grades = [
        { subject: 'Mathematics', marks: 92, grade: 'A1', remarks: 'Excellent' },
        { subject: 'Physics', marks: 88, grade: 'A2', remarks: 'Very Good' },
        { subject: 'Chemistry', marks: 85, grade: 'A2', remarks: 'Good' },
        { subject: 'English', marks: 95, grade: 'A1', remarks: 'Outstanding' },
        { subject: 'Physical Education', marks: 98, grade: 'A1', remarks: 'Exceptional' }
    ];

    return (
        <div className="report-card-page">
            <h2 className="section-title">Examination | Report Card</h2>

            <div className="dashboard-grid" style={{ marginBottom: '30px' }}>
                <div className="dash-icon-card icon-blue">
                    <div className="dash-card-icon"><i className="fas fa-percentage"></i></div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b' }}>91.6%</div>
                        <span className="dash-card-text">Total Percentage</span>
                    </div>
                </div>
                <div className="dash-icon-card icon-green">
                    <div className="dash-card-icon"><i className="fas fa-medal"></i></div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b' }}>A1</div>
                        <span className="dash-card-text">Overall Grade</span>
                    </div>
                </div>
                <div className="dash-icon-card icon-purple">
                    <div className="dash-card-icon"><i className="fas fa-trophy"></i></div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b' }}>3rd</div>
                        <span className="dash-card-text">Class Rank</span>
                    </div>
                </div>
            </div>

            <div style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                <div style={{ padding: '20px 24px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, color: '#1e293b' }}>Half-Yearly Examination Results</h3>
                    <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
                        <i className="fas fa-download" style={{ marginRight: '8px' }}></i> Download PDF
                    </button>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>SUBJECT</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>MARKS (100)</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>GRADE</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>REMARKS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grades.map((item, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '18px 24px', color: '#1e293b', fontWeight: '600' }}>{item.subject}</td>
                                <td style={{ padding: '18px 24px', color: '#1e293b' }}>{item.marks}</td>
                                <td style={{ padding: '18px 24px' }}>
                                    <span style={{ color: '#2563eb', fontWeight: 'bold' }}>{item.grade}</span>
                                </td>
                                <td style={{ padding: '18px 24px', color: '#64748b' }}>{item.remarks}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportCard;
