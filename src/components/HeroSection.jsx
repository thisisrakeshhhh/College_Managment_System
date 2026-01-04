// HeroSection.jsx
import React from 'react';

const HeroSection = () => (
    <section id="home" className="hero">
        <div className="container">
            <div className="hero-content">
                <h1 className="hero-title">
                    Shaping the Future of <span className="gradient-text">Technology</span>
                </h1>
                <p className="hero-sub">Premier engineering college in Mumbai offering B.Tech programs with an industry-focused curriculum and 87% placement rate.</p>
                <div className="hero-buttons">
                    <a href="#courses" className="btn-primary">Explore Courses</a>
                    <a href="#contact" className="btn-secondary">Admissions Open</a>
                </div>
            </div>
            {/* Note: The image path should be relative to the public folder or imported */}
            <img
                src="/assets/images/college.png"
                alt="College Campus"
                className="hero-image reveal"
            />
        </div>
    </section>
);

export default HeroSection;