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
    <section className="placements-section reveal">
        <div className="container">
            <div className="section-header">
                <h2>Our Recruiters</h2>
                <p>Top companies that recruit from our campus</p>
            </div>

            <div className="recruiters-list">
                {recruiters.map((company, index) => (
                    <div className="recruiter-logo hover-scale" key={index}>{company}</div>
                ))}
            </div>

            <div className="placement-stats">
                {placementStats.map((stat, index) => (
                    <div className="placement-stat reveal hover-lift" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default PlacementsSection;