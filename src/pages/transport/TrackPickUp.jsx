import React from 'react';

const TrackPickUp = () => {
    return (
        <div className="track-pickup-page">
            <h2 className="section-title">Live Tracking - Morning Pick Up</h2>

            <div style={{ background: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div>
                        <h3 style={{ margin: 0, color: '#1e293b' }}>Bus is en route</h3>
                        <p style={{ margin: '4px 0', color: '#22c55e', fontWeight: 'bold' }}>
                            <i className="fas fa-circle-notch fa-spin" style={{ marginRight: '8px' }}></i>
                            Active Tracking
                        </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb' }}>07:32 AM</div>
                        <span style={{ fontSize: '13px', color: '#64748b' }}>Estimated Arrival</span>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px', background: '#f8fafc', borderRadius: '12px' }}>
                    <div>
                        <span style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase' }}>Current Location</span>
                        <p style={{ margin: '4px 0', fontWeight: 'bold', color: '#1e293b' }}>Near Sector 50 Market</p>
                    </div>
                    <div>
                        <span style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase' }}>Next Stop</span>
                        <p style={{ margin: '4px 0', fontWeight: 'bold', color: '#1e293b' }}>South City Main Gate</p>
                    </div>
                </div>
            </div>

            <div style={{
                height: '400px',
                background: '#e2e8f0',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                border: '2px dashed #cbd5e1',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Dummy Map Visual */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.1, background: 'radial-gradient(circle, #2563eb 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <i className="fas fa-map-marked-alt" style={{ fontSize: '64px', color: '#94a3b8', marginBottom: '15px' }}></i>
                <p style={{ color: '#64748b', margin: 0 }}>Google Maps integration would appear here</p>
                <div className="btn-primary" style={{ marginTop: '20px', padding: '10px 20px' }}>Open in Maps</div>

                {/* Dummy Bus Marker */}
                <div style={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: '#2563eb',
                    color: 'white',
                    padding: '8px',
                    borderRadius: '50%',
                    boxShadow: '0 0 20px rgba(37, 99, 235, 0.5)',
                    animation: 'pulse 2s infinite'
                }}>
                    <i className="fas fa-bus"></i>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes pulse {
                    0% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7); }
                    70% { transform: translate(-50%, -50%) scale(1.1); box-shadow: 0 0 0 15px rgba(37, 99, 235, 0); }
                    100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
                }
            `}} />
        </div>
    );
};

export default TrackPickUp;
