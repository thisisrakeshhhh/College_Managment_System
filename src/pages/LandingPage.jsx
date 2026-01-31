import React, { useState, useEffect } from 'react';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import CoursesSection from '../components/CoursesSection';
import FacilitiesSection from '../components/FacilitiesSection';
import AccreditationsSection from '../components/AccreditationsSection';
import PlacementsSection from '../components/PlacementsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import LoginModal from '../components/LoginModal';
import FeeStructureModal from '../components/FeeStructureModal';

const LandingPage = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isFeeModalOpen, setIsFeeModalOpen] = useState(false);
    const [stats, setStats] = useState([
        { target: 1200, label: "Students Enrolled" },
        { target: 150, label: "Expert Faculty" },
        { target: 25, label: "Courses Offered" },
        { target: 45, label: "Awards Won" },
    ]);

    const handleFeeClick = (course) => {
        setSelectedCourse(course);
        setIsFeeModalOpen(true);
    };

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [stuRes, facRes] = await Promise.all([
                    fetch('http://localhost:5000/api/students'),
                    fetch('http://localhost:5000/api/faculty')
                ]);
                if (!stuRes.ok || !facRes.ok) return;

                const students = await stuRes.json();
                const faculty = await facRes.json();

                setStats([
                    { target: students.length > 0 ? students.length + 1188 : 1200, label: "Students Enrolled" },
                    { target: faculty.length > 0 ? faculty.length + 145 : 150, label: "Expert Faculty" },
                    { target: 25, label: "Courses Offered" },
                    { target: 45, label: "Awards Won" },
                ]);
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };
        fetchStats();

        // Global reveal animation logic
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="landing-page">
            <nav className="site-header">
                <div className="container header-inner">
                    <div className="brand">
                        <div className="logo-wrapper">
                            <i className="fas fa-graduation-cap" style={{ fontSize: '32px', color: 'var(--primary)' }}></i>
                        </div>
                        <div className="brand-text">
                            <span className="brand-title">ST. XAVIER'S</span>
                            <span className="brand-sub">INSTITUTE OF TECHNOLOGY</span>
                        </div>
                    </div>
                    <div className="nav-right">
                        <ul className="nav-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#courses">Courses</a></li>
                            <li><a href="#facilities">Facilities</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <button className="btn-login" onClick={() => setIsLoginModalOpen(true)} style={{ marginLeft: '20px' }}>
                            Portal Login
                        </button>
                    </div>
                </div>
            </nav>

            <main>
                <section className="hero">
                    <div className="container">
                        <div className="hero-content reveal">
                            <h1 className="hero-title">Empowering Careers Through <span className="gradient-text">Excellence</span></h1>
                            <p className="hero-sub">Join one of the most prestigious engineering institutes and build your future with world-class faculty and state-of-the-art infrastructure.</p>
                            <div className="hero-buttons">
                                <button className="btn-primary" onClick={() => setIsLoginModalOpen(true)}>Get Started</button>
                                <a href="#courses" className="btn-secondary">Explore Courses</a>
                            </div>
                        </div>
                        <div className="hero-image-wrapper reveal">
                            <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80" alt="College Campus" className="hero-image" />
                        </div>
                    </div>
                </section>

                <StatsSection dynamicStats={stats} />
                <div id="about"><AboutSection /></div>
                <div id="courses"><CoursesSection onFeeClick={handleFeeClick} /></div>
                <div id="facilities"><FacilitiesSection /></div>
                <AccreditationsSection />
                <PlacementsSection />
                <TestimonialsSection />
                <div id="contact"><ContactSection /></div>
            </main>

            <footer style={{ background: 'var(--dark)', color: 'white', padding: '60px 0 20px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{ marginBottom: '10px' }}>St. Xavier's Institute of Technology</h2>
                        <p style={{ opacity: 0.7 }}>Building Tomorrow's Engineers Since 1995</p>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', fontSize: '14px', opacity: 0.6 }}>
                        &copy; 2026 St. Xavier's Institute of Technology. All rights reserved.
                    </div>
                </div>
            </footer>

            <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
            <FeeStructureModal
                isOpen={isFeeModalOpen}
                onClose={() => setIsFeeModalOpen(false)}
                courseName={selectedCourse?.title}
            />
        </div>
    );
};

export default LandingPage;
