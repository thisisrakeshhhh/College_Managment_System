import React from 'react';

const Subjects = () => {
    const subjects = [
        { name: 'Mathematics', teacher: 'Dr. Amit Shah', progress: 75, color: 'blue' },
        { name: 'Physics', teacher: 'Prof. S.K. Verma', progress: 60, color: 'orange' },
        { name: 'Chemistry', teacher: 'Dr. Neha Kapoor', progress: 85, color: 'green' },
        { name: 'English', teacher: 'Ms. Alice George', progress: 90, color: 'purple' },
        { name: 'Physical Education', teacher: 'Mr. Rajesh Kumar', progress: 40, color: 'red' }
    ];

    return (
        <div className="subjects-page">
            <h2 className="section-title">My Subjects & Teachers</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {subjects.map((sub, index) => (
                    <div key={index} style={{
                        background: 'white',
                        padding: '24px',
                        borderRadius: '20px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.03)',
                        border: '1px solid #f1f5f9'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                            <div>
                                <h3 style={{ margin: 0, color: '#1e293b', fontSize: '18px' }}>{sub.name}</h3>
                                <p style={{ margin: '5px 0', color: '#64748b', fontSize: '14px' }}>
                                    <i className="fas fa-user-tie" style={{ marginRight: '8px' }}></i>
                                    {sub.teacher}
                                </p>
                            </div>
                            <div className={`dash-card-icon icon-${sub.color}`} style={{ width: '40px', height: '40px', fontSize: '18px' }}>
                                <i className="fas fa-book"></i>
                            </div>
                        </div>

                        <div style={{ marginTop: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px', color: '#64748b' }}>
                                <span>Course Completion</span>
                                <span style={{ fontWeight: 'bold' }}>{sub.progress}%</span>
                            </div>
                            <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{
                                    width: `${sub.progress}%`,
                                    height: '100%',
                                    background: `var(--${sub.color}, #2563eb)`,
                                    borderRadius: '4px',
                                    transition: 'width 1s ease-in-out'
                                }}></div>
                            </div>
                        </div>

                        <button style={{
                            marginTop: '20px',
                            width: '100%',
                            padding: '10px',
                            borderRadius: '10px',
                            border: '1px solid #e2e8f0',
                            background: 'transparent',
                            color: '#2563eb',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}>
                            View Syllabus
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Subjects;
