import React from 'react';

const LessonPlanner = () => {
    const plan = [
        { subject: 'Mathematics', topic: 'Calculus - Integration', homework: 'Ex 5.4 Questions 1-10', date: 'Jan 05' },
        { subject: 'Physics', topic: 'Electromagnetic Induction', homework: 'Read Page 142-150', date: 'Jan 05' },
        { subject: 'English', topic: 'Modern Poetry', homework: 'Summarize Poem 3', date: 'Jan 06' }
    ];

    return (
        <div className="lesson-planner-page">
            <h2 className="section-title">Weekly Lesson Planner</h2>

            <div style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ background: '#f8fafc' }}>
                        <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>DATE / SUB</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>TOPIC COVERED</th>
                            <th style={{ padding: '16px 24px', color: '#64748b', fontSize: '13px' }}>HOMEWORK / ASGN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plan.map((item, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '20px 24px' }}>
                                    <div style={{ fontWeight: 'bold', color: '#2563eb' }}>{item.date}</div>
                                    <div style={{ color: '#1e293b', fontSize: '14px' }}>{item.subject}</div>
                                </td>
                                <td style={{ padding: '20px 24px', color: '#1e293b', fontWeight: '500' }}>{item.topic}</td>
                                <td style={{ padding: '20px 24px' }}>
                                    <div style={{ padding: '8px 12px', background: '#fffbeb', border: '1px solid #fef3c7', borderRadius: '8px', color: '#92400e', fontSize: '13px' }}>
                                        {item.homework}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LessonPlanner;
