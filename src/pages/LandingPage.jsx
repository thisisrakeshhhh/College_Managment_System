// LandingPage.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import FacilitiesSection from '../components/FacilitiesSection';
import CoursesSection from '../components/CoursesSection';
import AccreditationsSection from '../components/AccreditationsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PlacementsSection from '../components/PlacementsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';
import FeeStructureModal from '../components/FeeStructureModal';

const LandingPage = () => {
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isFeeModalOpen, setFeeModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const openFeeModal = (course) => {
        setSelectedCourse(course);
        setFeeModalOpen(true);
    };

    useEffect(() => {
        // Reveal animation logic
        const handleScroll = () => {
            const reveals = document.querySelectorAll('.reveal');
            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('active');
                } else {
                    reveals[i].classList.remove('active');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on load
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Header onLoginClick={() => setLoginOpen(true)} />
            <main id="main-content">
                <HeroSection />
                <StatsSection />
                <AboutSection />
                <FacilitiesSection />
                <CoursesSection onFeeClick={openFeeModal} />
                <AccreditationsSection />
                <TestimonialsSection />
                <PlacementsSection />
                <ContactSection />
            </main>
            <Footer />
            <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
            <FeeStructureModal
                isOpen={isFeeModalOpen}
                onClose={() => setFeeModalOpen(false)}
                courseName={selectedCourse?.title}
            />
        </>
    );
};

export default LandingPage;
