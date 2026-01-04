import React from 'react';

const MyCalendar = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const currentMonth = 'January 2026';

    // Dummy calendar days (6 rows x 7 days)
    const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <div className="calendar-page">
            <h2 className="section-title">My Event Calendar</h2>

            <div style={{ background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <h3 style={{ margin: 0, color: '#1e293b' }}>{currentMonth}</h3>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'white' }}><i className="fas fa-chevron-left"></i></button>
                        <button style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'white' }}><i className="fas fa-chevron-right"></i></button>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1px', background: '#f1f5f9' }}>
                    {days.map(day => (
                        <div key={day} style={{ background: '#f8fafc', padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#64748b', fontSize: '13px' }}>
                            {day}
                        </div>
                    ))}
                    {/* Empty slots for spacing (assuming Jan 1st is Thu) */}
                    {[1, 2, 3].map(i => <div key={`empty-${i}`} style={{ background: 'white', minHeight: '100px' }}></div>)}

                    {calendarDays.map(day => (
                        <div key={day} style={{
                            background: 'white',
                            minHeight: '100px',
                            padding: '10px',
                            border: '1px solid #f8fafc',
                            position: 'relative'
                        }}>
                            <span style={{ fontSize: '14px', color: '#1e293b', fontWeight: '500' }}>{day}</span>
                            {day === 26 && (
                                <div style={{
                                    marginTop: '10px',
                                    background: '#eff6ff',
                                    color: '#2563eb',
                                    padding: '5px 8px',
                                    borderRadius: '6px',
                                    fontSize: '11px',
                                    fontWeight: 'bold',
                                    borderLeft: '3px solid #2563eb'
                                }}>Republic Day</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyCalendar;
