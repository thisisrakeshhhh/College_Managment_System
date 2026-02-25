// PlacementsSection.jsx
import React from 'react';

const recruiters = ["Google", "Microsoft", "Amazon", "Walt Disney", "IBM", "TCS", "Cognizant", "Deloitte"];
const placementStats = [
    { value: "₹1.7 CR", label: "International Highest Package" },
    { value: "₹54.75 LPA", label: "National Highest Package" },
    { value: "9500+", label: "Placement Offers" },
    { value: "900+", label: "Top MNCs Visited" },
];

const PlacementsSection = () => (
    <section className="placements-section reveal" style={{ background: 'var(--secondary)', color: 'white', padding: '100px 0' }}>
        <div className="container">
            <div className="section-header">
                <span className="badge-naac" style={{ background: 'var(--primary)', marginBottom: '15px' }}>PLACEMENTS 2026</span>
                <h2 style={{ color: 'white' }}>Most Sought After <span className="gradient-text">Destination</span> of Tech Giants</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>St. Xavier's has become a favorite recruitment hub for top global technology brands.</p>
            </div>

            <div className="recruiters-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', margin: '40px 0' }}>
                {recruiters.map((company, index) => (
                    <div className="recruiter-logo hover-scale" key={index} style={{
                        background: 'rgba(255,255,255,0.1)',
                        padding: '15px 30px',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: '700',
                        fontSize: '18px',
                        border: '1px solid rgba(255,255,255,0.2)'
                    }}>{company}</div>
                ))}
            </div>

            <div className="placement-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                {placementStats.map((stat, index) => (
                    <div className="placement-stat reveal hover-lift" key={index} style={{
                        textAlign: 'center',
                        padding: '40px',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <strong style={{ fontSize: '36px', display: 'block', color: 'var(--accent)', marginBottom: '10px' }}>{stat.value}</strong>
                        <span style={{ fontSize: '14px', fontWeight: '600', opacity: 0.8 }}>{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default PlacementsSection;