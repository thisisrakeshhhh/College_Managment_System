// AccreditationsSection.jsx
import React from 'react';

const accreditations = [
    { id: 1, badgeClass: "naac", badgeText: "NAAC A+", description: "National Assessment and Accreditation Council - Grade A+ accreditation for outstanding academic performance and infrastructure." },
    { id: 2, badgeClass: "ugc", badgeText: "UGC", description: "University Grants Commission - Recognized under Section 2(f) and 12(B) for grant eligibility." },
    { id: 3, badgeClass: "iso", badgeText: "ISO 9001:2015", description: "ISO Certified - Quality Management System certification for consistent excellence in education." },
    { id: 4, badgeClass: "aicte", badgeText: "AICTE", description: "All India Council for Technical Education - Approved technical education programs meeting national standards." },
];

const AccreditationsSection = () => (
    <section className="accreditations-section">
        <div className="container">
            <div className="section-header">
                <h2>Accreditations & Recognitions</h2>
                <p>Internationally recognized for academic excellence and quality education</p>
            </div>

            <div className="accreditation-grid">
                {accreditations.map(accred => (
                    <div className="accred-card" key={accred.id}>
                        <div className={`badge ${accred.badgeClass}`}>{accred.badgeText}</div>
                        <p>{accred.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default AccreditationsSection;