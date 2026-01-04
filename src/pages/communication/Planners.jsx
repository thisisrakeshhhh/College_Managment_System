import React from 'react';

const Planners = () => {
    const planners = [
        { month: 'January 2026', events: ['Republic Day Celebration', 'Pre-Board Exams', 'Inter-School Debate'] },
        { month: 'February 2026', events: ['Annual Function', 'Practical Examinations', 'Farewell Ceremony'] }
    ];

    return (
        <div className="planners-page">
            <h2 className="section-title">Academic & Event Planners</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
                {planners.map((plan, index) => (
                    <div key={index} style={{ background: 'white', padding: '24px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h3 style={{ margin: 0, color: '#2563eb' }}>{plan.month}</h3>
                            <i className="fas fa-calendar-alt" style={{ color: '#94a3b8' }}></i>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {plan.events.map((event, eIdx) => (
                                <div key={eIdx} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#f8fafc', borderRadius: '12px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb' }}></div>
                                    <span style={{ color: '#1e293b', fontWeight: '500' }}>{event}</span>
                                </div>
                            ))}
                        </div>
                        <button className="btn-primary" style={{ width: '100%', marginTop: '20px', padding: '10px' }}>
                            Download Full PDF
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Planners;
