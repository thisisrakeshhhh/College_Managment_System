import React from 'react';

const AchievementBoard = ({ title, icon, color, participants }) => (
    <div className="achievement-board">
        <h2 className="section-title">{title} Section</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {participants.map((p, idx) => (
                <div key={idx} style={{
                    background: 'white',
                    padding: '24px',
                    borderRadius: '24px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                    borderLeft: `5px solid ${color}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <div style={{ width: '60px', height: '60px', background: `${color}15`, borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className={`fas ${icon}`} style={{ color: color, fontSize: '24px' }}></i>
                    </div>
                    <div>
                        <h4 style={{ margin: 0, color: '#1e293b' }}>{p.name}</h4>
                        <p style={{ margin: '5px 0', fontSize: '12px', color: '#64748b' }}>{p.event}</p>
                        <div style={{ fontSize: '12px', fontWeight: 'bold', color: color }}>Rank: {p.rank}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export const Exuberant = () => (
    <AchievementBoard
        title="Exuberant"
        icon="fa-bolt"
        color="#f59e0b"
        participants={[
            { name: 'Kabir Verma', event: 'Tech Quiz 2025', rank: '1st' },
            { name: 'Deepak Kumar', event: 'Robotics Challenge', rank: 'Finalist' }
        ]}
    />
);

export const Victorious = () => (
    <AchievementBoard
        title="Victorious"
        icon="fa-trophy"
        color="#10b981"
        participants={[
            { name: 'Megha Gupta', event: 'Interschool Debate', rank: 'Best Speaker' },
            { name: 'Rahul Das', event: 'Chess Grand Prix', rank: '2nd' }
        ]}
    />
);

export const Performer = () => (
    <AchievementBoard
        title="Performer"
        icon="fa-star"
        color="#3b82f6"
        participants={[
            { name: 'Ishita Sharma', event: 'Annual Play Lead', rank: 'Outstanding' },
            { name: 'Priya Reddy', event: 'Classical Dance', rank: '1st Runner up' }
        ]}
    />
);
