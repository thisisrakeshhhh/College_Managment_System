import React from 'react';

const TrackDropOff = () => {
    return (
        <div className="track-dropoff-page">
            <h2 className="section-title">Live Tracking - Afternoon Drop Off</h2>

            <div style={{ background: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Tracking Not Active</h3>
                        <p style={{ margin: '4px 0', color: '#64748b' }}>
                            <i className="fas fa-clock" style={{ marginRight: '8px' }}></i>
                            Scheduled for 02:45 PM
                        </p>
                    </div>
                </div>

                <div style={{ padding: '20px', background: '#fffbeb', borderRadius: '12px', border: '1px solid #fef3c7' }}>
                    <p style={{ margin: 0, color: '#92400e', fontSize: '14px' }}>
                        <i className="fas fa-info-circle" style={{ marginRight: '8px' }}></i>
                        Live tracking for drop-off will be enabled once the bus departs from the school premises.
                    </p>
                </div>
            </div>

            <div style={{
                height: '400px',
                background: '#f1f5f9',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                border: '1px solid #e2e8f0',
                position: 'relative'
            }}>
                <i className="fas fa-map" style={{ fontSize: '64px', color: '#cbd5e1', marginBottom: '15px' }}></i>
                <p style={{ color: '#94a3b8', margin: 0 }}>Map preview will be available on departure</p>
            </div>
        </div>
    );
};

export default TrackDropOff;
