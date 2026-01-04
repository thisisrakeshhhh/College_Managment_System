import React from 'react';

const BusDetail = () => {
    const busInfo = {
        busNo: 'UP16-BT-4502',
        route: 'Route 12 - South City',
        driver: 'Mr. Gurbaksh Singh',
        contact: '+91 98765 43210',
        attendant: 'Ms. Maya Devi',
        capacity: '42 Seater'
    };

    const routeStops = [
        { stop: 'Sector 50 Market', time: '07:15 AM', status: 'Reached' },
        { stop: 'South City Main Gate', time: '07:25 AM', status: 'Reached' },
        { stop: 'St. Xavier\'s (School)', time: '07:50 AM', status: 'Upcoming' }
    ];

    return (
        <div className="bus-detail-page">
            <h2 className="section-title">Bus Information & Route</h2>

            <div className="dashboard-grid" style={{ marginBottom: '30px' }}>
                <div className="dash-icon-card icon-orange">
                    <div className="dash-card-icon"><i className="fas fa-bus"></i></div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b' }}>{busInfo.busNo}</div>
                        <span className="dash-card-text">Bus Number</span>
                    </div>
                </div>
                <div className="dash-icon-card icon-blue">
                    <div className="dash-card-icon"><i className="fas fa-user-circle"></i></div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b' }}>{busInfo.driver}</div>
                        <span className="dash-card-text">Driver Name</span>
                    </div>
                </div>
                <div className="dash-icon-card icon-green">
                    <div className="dash-card-icon"><i className="fas fa-phone-alt"></i></div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b' }}>{busInfo.contact}</div>
                        <span className="dash-card-text">Contact No</span>
                    </div>
                </div>
            </div>

            <div style={{ background: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <h3 style={{ marginBottom: '20px', color: '#1e293b', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>Route Timeline</h3>
                <div style={{ padding: '10px 0' }}>
                    {routeStops.map((stop, index) => (
                        <div key={index} style={{ display: 'flex', gap: '20px', position: 'relative', paddingBottom: '30px' }}>
                            {index !== routeStops.length - 1 && (
                                <div style={{
                                    position: 'absolute',
                                    left: '9px',
                                    top: '20px',
                                    bottom: 0,
                                    width: '2px',
                                    background: stop.status === 'Reached' ? '#22c55e' : '#e2e8f0'
                                }}></div>
                            )}
                            <div style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                background: stop.status === 'Reached' ? '#22c55e' : 'white',
                                border: `2px solid ${stop.status === 'Reached' ? '#22c55e' : '#e2e8f0'}`,
                                zIndex: 1
                            }}></div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h4 style={{ margin: 0, color: '#1e293b' }}>{stop.stop}</h4>
                                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#2563eb' }}>{stop.time}</span>
                                </div>
                                <p style={{ margin: '4px 0', fontSize: '13px', color: '#94a3b8' }}>Status: {stop.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BusDetail;
