import React, { useEffect, useRef } from 'react';

const stats = [
    { target: 5247, label: "Students Enrolled" },
    { target: 187, label: "Expert Faculty" },
    { target: 48, label: "Courses Offered" },
    { target: 87, label: "Placement Rate (%)" },
];

const StatsSection = ({ dynamicStats }) => {
    const sectionRef = useRef(null);

    const displayStats = dynamicStats || [
        { target: 1200, label: "Students Enrolled" },
        { target: 150, label: "Expert Faculty" },
        { target: 25, label: "Courses Offered" },
        { target: 45, label: "Awards Won" },
    ];

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
                if (isNaN(target)) return;

                let current = 0;
                const increment = target / 100;

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
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [displayStats]);

    return (
        <section className="stats-section reveal" ref={sectionRef}>
            <div className="container stats-grid">
                {displayStats.map((stat, index) => (
                    <div className="stat-box hover-lift" key={index}>
                        <div className="stat-icon" style={{ fontSize: '30px', color: 'var(--primary)', marginBottom: '15px' }}><i className="fas fa-chart-line"></i></div>
                        <h2 className="count" data-target={stat.target}>0</h2>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;