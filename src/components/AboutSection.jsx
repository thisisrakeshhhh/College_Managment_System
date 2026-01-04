// AboutSection.jsx
import React from 'react';

// Data for highlights
const highlightsData = [
    { icon: "fas fa-award", strong: "NAAC A+ Accredited", text: "Recognized for academic excellence" },
    { icon: "fas fa-globe", strong: "Global Recognition", text: "International collaborations & exchanges" },
    { icon: "fas fa-handshake", strong: "Industry Partnerships", text: "Tie-ups with 100+ companies" },
];

// Data for glass cards
const cardData = [
    { icon: "fas fa-bullseye", title: "Our Vision", delay: 0, text: "To be a globally recognized institution of academic excellence, producing innovative leaders who contribute meaningfully to society and drive positive change in the world." },
    { icon: "fas fa-rocket", title: "Our Mission", delay: 0.2, text: "To provide holistic education combining theoretical knowledge with practical skills, fostering creativity, critical thinking, and ethical values in our students." },
    { icon: "fas fa-lightbulb", title: "Our Values", delay: 0.4, text: "Integrity, Excellence, Innovation, Inclusivity, and Social Responsibility form the foundation of everything we do." },
];

const AboutSection = () => (
    <section id="about" className="about-section">
        <div className="container">
            <div className="section-header">
                <h2>About St. Xavier's Institute of Technology</h2>
                <p>Established in 1987, we have been a pioneer in engineering education in Mumbai</p>
            </div>

            <div className="about-grid">
                {/* Left Content Area */}
                <div className="about-content reveal reveal-left">
                    <h3>Who We Are</h3>
                    <p>St. Xavier's Institute of Technology is a premier engineering college located in the heart of Mumbai, Maharashtra. Founded in 1987, we have been dedicated to nurturing young minds and shaping future leaders in technology and innovation.</p>
                    <p>With over 35 years of academic excellence, we have produced thousands of successful engineers who are now leading innovations in various industries across India and globally.</p>
                    
                    <div className="about-highlights">
                        {highlightsData.map((highlight, index) => (
                            <div className="highlight-item" key={index}>
                                <div className="icon-box"><i className={highlight.icon}></i></div>
                                <div>
                                    <strong>{highlight.strong}</strong>
                                    <p>{highlight.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Right Cards Area */}
                <div className="about-cards">
                    {cardData.map(card => (
                        <div 
                            className="glass-card reveal reveal-right" 
                            style={{ transitionDelay: `${card.delay}s` }}
                            key={card.title}
                        >
                            <i className={`${card.icon} card-icon`}></i>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default AboutSection;