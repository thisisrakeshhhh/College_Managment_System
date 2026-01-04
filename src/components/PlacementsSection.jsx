// PlacementsSection.jsx
import React from 'react';

const recruiters = ["Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "Accenture", "IBM"];
const placementStats = [
    { value: "₹22 LPA", label: "Highest Package" },
    { value: "₹5.8 LPA", label: "Average Package" },
    { value: "487", label: "Students Placed" },
    { value: "85+", label: "Recruiting Companies" },
];

const PlacementsSection = () => (
    <section className="placements-section">
        <div className="container">
            <div className="section-header">
                <h2>Our Recruiters</h2>
                <p>Top companies that recruit from our campus</p>
            </div>
            
            <div className="recruiters-list">
                {recruiters.map((company, index) => (
                    <div className="recruiter-logo" key={index}>{company}</div>
                ))}
            </div>
            
            <div className="placement-stats">
                {placementStats.map((stat, index) => (
                    <div className="placement-stat" key={index}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default PlacementsSection;