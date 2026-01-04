import React, { useEffect, useRef } from 'react';

const stats = [
    { target: 5247, label: "Students Enrolled" },
    { target: 187, label: "Expert Faculty" },
    { target: 48, label: "Courses Offered" },
    { target: 87, label: "Placement Rate (%)" },
];

const StatsSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (sectionTop < windowHeight * 0.75) {
                    animateCounters();
                    window.removeEventListener('scroll', handleScroll);
                }
            }
        };

        const animateCounters = () => {
            const counters = sectionRef.current.querySelectorAll('.count');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                let current = 0;
                // const duration = 2000; 
                const increment = target / 200;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.ceil(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString();
                    }
                };

                updateCounter();
            });
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger check in case already in view
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="stats-section" ref={sectionRef}>
            <div className="container stats-grid">
                {stats.map((stat, index) => (
                    <div className="stat-box" key={index}>
                        <h2 className="count" data-target={stat.target}>0</h2>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;