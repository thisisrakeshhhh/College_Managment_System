import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import LoginModal from '../components/LoginModal';
import AdmissionsModal from '../components/AdmissionsModal';
import './LandingPage.css';

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
    { value: '32,000+', label: 'Students' },
    { value: '1,800+', label: 'Faculty Members' },
    { value: '109+', label: 'Programs' },
    { value: '900+', label: 'Companies Visited' },
    { value: '68+', label: 'Countries' },
];

const programs = [
    { icon: 'fa-microchip', title: 'Engineering & Technology', courses: 'B.Tech, M.Tech, Ph.D', color: '#1a3c8f' },
    { icon: 'fa-briefcase', title: 'Management', courses: 'BBA, MBA, Executive MBA', color: '#0066cc' },
    { icon: 'fa-laptop-code', title: 'Computing & AI', courses: 'BCA, MCA, B.Sc CS', color: '#0a2d7a' },
    { icon: 'fa-flask', title: 'Sciences & Research', courses: 'B.Sc, M.Sc, Ph.D', color: '#1557b0' },
    { icon: 'fa-balance-scale', title: 'Law & Legal Studies', courses: 'LLB, LLM, Integrated', color: '#1a3c8f' },
    { icon: 'fa-heartbeat', title: 'Allied Health Sciences', courses: 'B.Pharm, Pharmacy, Nursing', color: '#0066cc' },
    { icon: 'fa-palette', title: 'Design & Architecture', courses: 'B.Arch, B.Des, M.Des', color: '#0a2d7a' },
    { icon: 'fa-chart-line', title: 'Commerce & Finance', courses: 'B.Com, CA Integrated, M.Com', color: '#1557b0' },
];

const researchStats = [
    { value: '21,000+', label: 'Research Publications' },
    { value: '5,300+', label: 'Patents Filed' },
    { value: '30+', label: 'Centers of Research' },
    { value: '200+', label: 'Visiting Scholars' },
];

const newsItems = [
    { category: "Achievement", date: "Feb 2026", title: "ST. XAVIER'S Bags AI- First Organisation Award at the Republic AI Summit & Awards 2026", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80" },
    { category: "Sports", date: "Jan 2026", title: "ST. XAVIER'S wins Inter- University North Zone Youth Championship — Five consecutive times!", img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&q=80" },
    { category: "Placements", date: "Jan 2026", title: "ST. XAVIER'S sets national record: 70 EPAM placement offers at 8 LPA in a single campus drive", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80" },
    { category: "Innovation", date: "Dec 2025", title: "India First AI Fest 2026 launched at ST. XAVIER'S to empower young innovators for a better tomorrow", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80" },
];

const admissionSteps = [
    { step: '01', icon: 'fa-file-alt', title: 'Apply Online', desc: 'Fill the application form and upload required documents on the admissions portal.' },
    { step: "02", icon: "fa-tasks", title: "Entrance Test", desc: "Attempt ST. XAVIER'S Admission Test(SAT) or submit your JEE / CAT / GATE scorecard." },
    { step: '03', icon: 'fa-user-check', title: 'Merit & Counselling', desc: 'Check your name in the merit list and attend counselling for seat allocation.' },
    { step: '04', icon: 'fa-graduation-cap', title: 'Enrol & Begin', desc: 'Pay your fees, collect your ID, and start your journey at St. Xavier s!' },
];

const globalCountries = [
    { flag: 'US', name: 'USA' }, { flag: 'GB', name: 'UK' }, { flag: 'CA', name: 'Canada' },
    { flag: 'AU', name: 'Australia' }, { flag: 'DE', name: 'Germany' }, { flag: 'SG', name: 'Singapore' },
    { flag: 'JP', name: 'Japan' }, { flag: 'FR', name: 'France' }, { flag: 'AE', name: 'UAE' },
    { flag: 'NZ', name: 'NZ' }, { flag: 'IT', name: 'Italy' }, { flag: 'ZA', name: 'S.Africa' },
];

const placementCompanies = [
    'Google', 'Microsoft', 'Amazon', 'Infosys', 'TCS', 'Wipro', 'Accenture', 'IBM',
    'Deloitte', 'Cognizant', 'HCL', 'Tech Mahindra', 'Oracle', 'Samsung', 'Flipkart'
];

const placementStats = [
    { value: '₹2.09Cr', label: 'Highest Package' },
    { value: '900+', label: 'Recruiting Companies' },
    { value: '25,000+', label: 'Placed Students' },
    { value: '₹6.5 LPA', label: 'Average Package' },
];

const achievements = [
    { icon: 'fa-trophy', title: 'NAAC A+ Grade', desc: 'Accredited with the highest grade by NAAC' },
    { icon: 'fa-medal', title: 'QS World Rank 651-700', desc: 'Ranked among top global universities' },
    { icon: 'fa-star', title: 'NIRF Ranking 26', desc: 'Top 30 universities in India by NIRF' },
    { icon: 'fa-globe', title: '68+ Countries', desc: 'Global student community from across the world' },
];

const testimonials = [
    {
        name: "Rahul Patel", role: "B.Tech CSE 2022 | Software Engineer, Google",
        quote: "St. Xavier's gave me the foundation to crack top-tier interviews. The personalized mentoring and industry exposure at ST. XAVIER'S was second to none.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
    },
    {
        name: "Ananya Reddy", role: "BBA Hons 2021 | Product Manager, Microsoft",
        quote: "The curriculum here bridges academia and industry brilliantly. I walked out with skills that corporate India actually needs. Forever grateful.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
    },
    {
        name: "Vikram Singh", role: "MBA 2022 | Co-Founder, FinTech Startup",
        quote: "The entrepreneurship ecosystem at ST. XAVIER'S pushed me to launch my own venture. The incubation support and mentor network is truly world-class.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
    },
];

const navLinks = [
    {
        label: 'Programs', sub: [
            'Engineering & Technology', 'Management (BBA/MBA)', 'Computing & AI (BCA/MCA)',
            'Sciences & Research', 'Law & Legal Studies', 'Architecture & Design',
            'Commerce & Finance', 'Allied Health Sciences',
        ]
    },
    {
        label: 'Admissions', sub: [
            'After 12th', 'After Graduation', 'International Admissions',
            'Admission Criteria', 'Scholarship', 'Education Loan',
        ]
    },
    { label: 'Campus Life', sub: ['Campus Tour', 'Clubs & Societies', 'Sports', 'Hostel', 'Alumni'] },
    {
        label: 'Placements', sub: [
            'Placement Overview', 'Top Recruiters', 'Placement Tracker',
            'Career Development', 'Internships',
        ]
    },
    { label: 'Research', sub: ['Research Labs', 'Patents & Publications', 'Innovation Hub', 'KCC Lab'] },
    {
        label: "About", sub: ["About ST. XAVIER'S", "Leadership", "Rankings & Accreditations", "Contact Us"]
    },
];

// ─── COUNTER HOOK ─────────────────────────────────────────────────────────────
function useCounter(target, duration = 2000, inView = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!inView) return;
        const numericTarget = parseInt(target.replace(/[^0-9]/g, ''));
        if (!numericTarget) return;
        let start = 0;
        const increment = numericTarget / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= numericTarget) { setCount(numericTarget); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target, duration]);
    return count;
}

// ─── STAT CARD ────────────────────────────────────────────────────────────────
const StatCard = ({ value, label, inView }) => {
    const prefix = value.match(/^[^0-9]*/)?.[0] || '';
    const suffix = value.match(/[^0-9]+$/)?.[0] || '';
    const count = useCounter(value, 2000, inView);
    return (
        <div className="cu-stat-card">
            <div className="cu-stat-value">{prefix}{count}{suffix}</div>
            <div className="cu-stat-label">{label}</div>
        </div>
    );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const LandingPage = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isApplyOpen, setIsApplyOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [statsInView, setStatsInView] = useState(false);
    const [heroSlide, setHeroSlide] = useState(0);
    const statsRef = useRef(null);
    const navigate = useNavigate();

    const heroSlides = [
        {
            image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1400&q=80',
            badge: 'ADMISSIONS 2026 OPEN',
            title: 'Engineering Excellence &',
            highlight: 'Technological Innovation',
            sub: "ST. XAVIER'S INSTITUTE OF TECHNOLOGY — Shaping the Leaders of Tomorrow",
        },
        {
            image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=1400&q=80',
            badge: '🏆 NAAC A+ Accredited',
            title: 'World-Class Research &',
            highlight: 'Global Opportunities',
            sub: 'Join 32,000+ students from 68 countries in a transformative educational journey',
        },
        {
            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80',
            badge: '💼 900+ Recruiting Companies',
            title: 'Guaranteed Placements at',
            highlight: 'Top MNCs & Startups',
            sub: 'Our graduates are sought by Google, Microsoft, Amazon, Infosys and 900+ leading companies',
        },
    ];

    // Auto-advance hero slides
    useEffect(() => {
        const timer = setInterval(() => setHeroSlide(p => (p + 1) % heroSlides.length), 5000);
        return () => clearInterval(timer);
    }, []);

    // Sticky navbar on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Intersection observer for stats counter
    useEffect(() => {
        const el = statsRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setStatsInView(true); }, { threshold: 0.3 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    // Scroll reveal
    useEffect(() => {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('cu-visible'); });
        }, { threshold: 0.1 });
        document.querySelectorAll('.cu-reveal').forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <div className="cu-landing">
            {/* ── TOP STRIP ── */}
            <div className="cu-top-strip">
                <div className="cu-strip-inner">
                    <div className="cu-marquee">
                        <span>
                            📢 Admissions 2026 Open — Apply Now! &nbsp;&nbsp;|&nbsp;&nbsp;
                            🏆 NAAC A+ Accredited &nbsp;&nbsp;|&nbsp;&nbsp;
                            🌍 Ranked #26 by NIRF &nbsp;&nbsp;|&nbsp;&nbsp;
                            💼 Highest Package ₹2.09 Cr &nbsp;&nbsp;|&nbsp;&nbsp;
                            📚 109+ Programs across 27 Departments &nbsp;&nbsp;|&nbsp;&nbsp;
                            🎓 32,000+ Students from 68 Countries &nbsp;&nbsp;|&nbsp;&nbsp;
                            📢 Admissions 2026 Open — Apply Now! &nbsp;&nbsp;|&nbsp;&nbsp;
                        </span>
                    </div>
                    <div className="cu-strip-right">
                        <a href="tel:+911800000999"><i className="fas fa-phone-alt"></i> 1800 000 9999</a>
                        <a href="mailto:contact@sxit-pune.edu"><i className="fas fa-envelope"></i> contact@sxit-pune.edu</a>
                    </div>
                </div>
            </div>

            {/* ── NAVBAR ── */}
            <header className={`cu-navbar ${scrolled ? 'cu-navbar-scrolled' : ''}`}>
                <div className="cu-nav-inner">
                    {/* Brand */}
                    <div className="cu-brand" onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }}>
                        <img src={reactLogo} alt="ST. XAVIER'S Logo" className="cu-logo" />
                        <div className="cu-brand-text">
                            <span className="cu-brand-name">ST. XAVIER'S</span>
                            <span className="cu-brand-sub">INSTITUTE OF TECHNOLOGY</span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="cu-nav-links">
                        {navLinks.map((item) => (
                            <div
                                key={item.label}
                                className={`cu-nav-item ${activeDropdown === item.label ? 'cu-active' : ''}`}
                                onMouseEnter={() => setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <span>{item.label} <i className="fas fa-chevron-down"></i></span>
                                {item.sub && (
                                    <div className="cu-dropdown">
                                        {item.sub.map(s => (
                                            <a key={s} href="#" onClick={e => e.preventDefault()}>{s}</a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="cu-nav-cta">
                        <button className="cu-btn-login" onClick={() => setIsLoginOpen(true)}>
                            <i className="fas fa-lock"></i> Login
                        </button>
                        <button className="cu-btn-apply" onClick={() => setIsApplyOpen(true)}>
                            Apply Now
                        </button>
                        <button className="cu-hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="cu-mobile-menu">
                        {navLinks.map(item => (
                            <div key={item.label} className="cu-mobile-section">
                                <div className="cu-mobile-heading">{item.label}</div>
                                {item.sub.map(s => <a key={s} href="#" onClick={() => setMobileMenuOpen(false)}>{s}</a>)}
                            </div>
                        ))}
                        <div className="cu-mobile-btns">
                            <button onClick={() => { setIsLoginOpen(true); setMobileMenuOpen(false); }}>Login</button>
                            <button onClick={() => { setIsApplyOpen(true); setMobileMenuOpen(false); }}>Apply Now</button>
                        </div>
                    </div>
                )}
            </header>

            {/* ── HERO SLIDER ── */}
            <section className="cu-hero">
                {heroSlides.map((slide, i) => (
                    <div key={i} className={`cu-hero-slide ${i === heroSlide ? 'cu-hero-active' : ''}`}>
                        <img src={slide.image} alt="" className="cu-hero-bg" />
                        <div className="cu-hero-overlay"></div>
                        <div className="cu-hero-content">
                            <span className="cu-hero-badge">{slide.badge}</span>
                            <h1>{slide.title} <span className="cu-hero-highlight">{slide.highlight}</span></h1>
                            <p>{slide.sub}</p>
                            <div className="cu-hero-btns">
                                <button className="cu-btn-primary" onClick={() => setIsApplyOpen(true)}>
                                    Apply for 2026 <i className="fas fa-arrow-right"></i>
                                </button>
                                <a href="#programs" className="cu-btn-ghost">Explore Programs</a>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Slide dots */}
                <div className="cu-hero-dots">
                    {heroSlides.map((_, i) => (
                        <button key={i} className={`cu-hero-dot ${i === heroSlide ? 'active' : ''}`} onClick={() => setHeroSlide(i)} />
                    ))}
                </div>
                {/* Scroll indicator */}
                <div className="cu-scroll-hint">
                    <i className="fas fa-chevron-down"></i>
                </div>
            </section>

            {/* ── STATS BAR ── */}
            <section className="cu-stats-bar" ref={statsRef}>
                {stats.map((s, i) => <StatCard key={i} value={s.value} label={s.label} inView={statsInView} />)}
            </section>

            {/* ── ACHIEVEMENT BADGES ── */}
            <section className="cu-achievements cu-reveal">
                <div className="cu-container">
                    <div className="cu-achievements-grid">
                        {achievements.map((a, i) => (
                            <div key={i} className="cu-achievement-card cu-reveal">
                                <i className={`fas ${a.icon}`}></i>
                                <div>
                                    <strong>{a.title}</strong>
                                    <span>{a.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROGRAMS ── */}
            <section className="cu-programs" id="programs">
                <div className="cu-container">
                    <div className="cu-section-head cu-reveal">
                        <span className="cu-tag">109+ Programs</span>
                        <h2>Choose Your <span>Career Path</span></h2>
                        <p>World-class education across a wide spectrum of disciplines, designed for the careers of tomorrow.</p>
                    </div>
                    <div className="cu-programs-grid">
                        {programs.map((p, i) => (
                            <div key={i} className="cu-program-card cu-reveal" style={{ '--card-color': p.color }}>
                                <div className="cu-program-icon">
                                    <i className={`fas ${p.icon}`}></i>
                                </div>
                                <h3>{p.title}</h3>
                                <p>{p.courses}</p>
                                <a href="#" className="cu-program-link">
                                    Know More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── RESEARCH & INNOVATION ── */}
            <section className="cu-research">
                <div className="cu-container">
                    <div className="cu-research-inner">
                        <div className="cu-research-text cu-reveal">
                            <span className="cu-tag">Research Intensive University</span>
                            <h2>Our Intellectual <span>Pursuits</span></h2>
                            <p>ST. XAVIER'S is a research powerhouse — driving innovation through state-of-the-art laboratories, collaborative research centers, and a thriving entrepreneurship ecosystem producing thousands of patents and publications.</p>
                            <div className="cu-research-stats">
                                {researchStats.map((s, i) => (
                                    <div key={i} className="cu-research-stat">
                                        <strong>{s.value}</strong>
                                        <span>{s.label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="cu-research-links">
                                {['Research Labs', 'Patents & Publications', 'Innovation Hub (TBI)', 'Centers of Excellence', 'SDG Initiatives'].map((l, i) => (
                                    <a key={i} href="#" className="cu-research-link">
                                        <i className="fas fa-arrow-right"></i> {l}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="cu-research-visual cu-reveal">
                            <div className="cu-research-card-grid">
                                {[
                                    { icon: 'fa-flask', title: 'Research Labs', count: '30+ Centers', color: '#1a3c8f' },
                                    { icon: 'fa-lightbulb', title: 'Innovation & TBI', count: '500+ Startups', color: '#0066cc' },
                                    { icon: 'fa-leaf', title: 'SDG Goals', count: '17 Initiatives', color: '#0a7abf' },
                                    { icon: 'fa-robot', title: 'AI & ML Lab', count: 'KCC Lab', color: '#0d2260' },
                                ].map((r, i) => (
                                    <div key={i} className="cu-research-mini-card" style={{ '--rc': r.color }}>
                                        <i className={`fas ${r.icon}`}></i>
                                        <strong>{r.title}</strong>
                                        <span>{r.count}</span>
                                    </div>
                                ))}
                            </div>
                            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80" alt="Research" className="cu-research-bg-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE US ── */}
            <section className="cu-why">
                <div className="cu-container">
                    <div className="cu-why-inner">
                        <div className="cu-why-images cu-reveal">
                            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80" alt="Campus" className="cu-why-img1" />
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80" alt="Students Collaborating" className="cu-why-img2" />
                            <div className="cu-why-badge">
                                <strong>32,000+</strong>
                                <span>Happy Students</span>
                            </div>
                        </div>
                        <div className="cu-why-text cu-reveal">
                            <span className="cu-tag">Why St. Xavier's?</span>
                            <h2>The Destination for <span>Future Leaders</span></h2>
                            <p>At ST. XAVIER'S, we believe that education is more than just academics. We provide a holistic environment that nurtures innovation, leadership, and global citizenship.</p>
                            <div className="cu-why-points">
                                {[
                                    { icon: 'fa-chalkboard-teacher', text: 'Learn from 1,800+ industry-expert faculty' },
                                    { icon: 'fa-building', text: 'State-of-the-art labs & research centers' },
                                    { icon: 'fa-globe', text: 'Global exposure through 68+ country partnerships' },
                                    { icon: 'fa-briefcase', text: '100% placement assistance with top MNCs' },
                                    { icon: 'fa-microscope', text: '5,000+ patents filed — a research powerhouse' },
                                ].map((pt, i) => (
                                    <div key={i} className="cu-why-point">
                                        <i className={`fas ${pt.icon}`}></i>
                                        <span>{pt.text}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="cu-btn-primary" onClick={() => setIsApplyOpen(true)}>
                                Start Your Journey <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ADMISSIONS FLOWCHART ── */}
            <section className="cu-admissions" id="admissions">
                <div className="cu-container">
                    <div className="cu-section-head cu-reveal">
                        <span className="cu-tag">Simple & Transparent</span>
                        <h2>Your Path to <span>ST. XAVIER'S</span></h2>
                        <p>Joining St. Xavier's is easy. Follow these four steps to secure your seat in our prestigious programs.</p>
                    </div>

                    {/* Flowchart */}
                    <div className="cu-flowchart cu-reveal">
                        {/* Connecting line */}
                        <div className="cu-flowchart-line"></div>

                        {admissionSteps.map((s, i) => (
                            <div key={i} className="cu-flow-step">
                                {/* Circle node */}
                                <div className="cu-flow-node">
                                    <div className="cu-flow-circle">
                                        <i className={`fas ${s.icon}`}></i>
                                    </div>
                                    <div className="cu-flow-num">{s.step}</div>
                                </div>
                                {/* Card below */}
                                <div className="cu-flow-card">
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                </div>
                                {/* Arrow connector (except last) */}
                                {i < admissionSteps.length - 1 && (
                                    <div className="cu-flow-connector">
                                        <i className="fas fa-chevron-right"></i>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="cu-admission-bottom cu-reveal">
                        <div className="cu-admission-info">
                            <i className="fas fa-calendar-check"></i>
                            <div>
                                <strong>Admissions 2026 — Now Open</strong>
                                <span>Last date to apply: 31st March 2026</span>
                            </div>
                        </div>
                        <button className="cu-btn-primary" onClick={() => setIsApplyOpen(true)}>
                            Apply Now <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* ── CAMPUS LIFE ── */}
            <section className="cu-campus" id="campus">
                <div className="cu-container">
                    <div className="cu-section-head cu-reveal">
                        <span className="cu-tag">A Home Away from Home</span>
                        <h2>Experience <span>Campus Life</span></h2>
                        <p>300+ acres of lush campus with world-class facilities for sports, arts, research, and more.</p>
                    </div>
                    <div className="cu-campus-mosaic cu-reveal">
                        {/* Big hero image */}
                        <div className="cu-campus-hero">
                            <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80" alt="Campus Main" />
                            <div className="cu-campus-overlay">
                                <span className="cu-campus-badge"><i className="fas fa-map-marker-alt"></i> 300-Acre Residential Campus</span>
                            </div>
                        </div>
                        {/* 4-cell grid */}
                        <div className="cu-campus-tiles">
                            {[
                                { img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80', label: 'Sports Complex', icon: 'fa-dumbbell' },
                                { img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80', label: 'Innovation Hub', icon: 'fa-lightbulb' },
                                { img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&q=80', label: 'Research Labs', icon: 'fa-flask' },
                                { img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&q=80', label: 'Library & Learning Center', icon: 'fa-book-open' },
                            ].map((c, i) => (
                                <div key={i} className="cu-campus-tile">
                                    <img src={c.img} alt={c.label} />
                                    <div className="cu-tile-label">
                                        <i className={`fas ${c.icon}`}></i>
                                        <span>{c.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="cu-campus-features cu-reveal">
                        {['50+ Sports Facilities', '200+ Student Clubs', '20,000-Seat Hostel', 'Multi-cuisine Food Court', 'Medical Centre', '24/7 Wi-Fi Campus'].map((f, i) => (
                            <div key={i} className="cu-campus-feature">
                                <i className="fas fa-check-circle"></i> {f}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── GLOBAL EXPERIENCE ── */}
            <section className="cu-global">
                <div className="cu-container">
                    <div className="cu-global-inner">
                        <div className="cu-global-text cu-reveal">
                            <span className="cu-tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>International Exposure</span>
                            <h2 style={{ color: 'white' }}>Immerse in a <span style={{ color: '#60c0ff' }}>Global Educational Experience</span></h2>
                            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Learn alongside peers from 68 countries. Through semester exchanges, international internships, and global research collaborations — ST. XAVIER'S is your launchpad to the world.</p>
                            <div className="cu-global-highlights">
                                {[
                                    { icon: 'fa-university', text: '150+ International University Partners' },
                                    { icon: 'fa-plane', text: 'Semester Exchange Programs worldwide' },
                                    { icon: 'fa-globe-americas', text: 'Multicultural campus: 68 nationalities' },
                                    { icon: 'fa-handshake', text: 'Global MoU with top foreign universities' },
                                ].map((h, i) => (
                                    <div key={i} className="cu-global-h">
                                        <i className={`fas ${h.icon}`}></i>
                                        <span>{h.text}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="cu-btn-primary" style={{ marginTop: '8px' }} onClick={() => setIsApplyOpen(true)}>
                                Explore Global Programs <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                        <div className="cu-global-flags cu-reveal">
                            <p className="cu-global-flag-title">Students from 68+ Countries</p>
                            <div className="cu-flags-grid">
                                {globalCountries.map((c, i) => (
                                    <div key={i} className="cu-flag-item">
                                        <img
                                            src={`https://flagcdn.com/w40/${c.flag.toLowerCase()}.png`}
                                            alt={c.name}
                                            className="cu-flag-img"
                                        />
                                        <span>{c.name}</span>
                                    </div>
                                ))}
                                <div className="cu-flag-item cu-flag-more">
                                    <span className="cu-flag-more-icon">+56</span>
                                    <span>More</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PLACEMENTS ── */}
            <section className="cu-placements" id="placements">
                <div className="cu-container">
                    <div className="cu-section-head cu-reveal">
                        <span className="cu-tag" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>Career Success</span>
                        <h2 style={{ color: '#fff' }}>Most Sought-After Destination of <span style={{ color: '#60c0ff' }}>Blue-Chip Companies</span></h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)' }}>Our placement record speaks louder than words — where dreams meet opportunity.</p>
                    </div>
                    <div className="cu-placement-stats cu-reveal">
                        {placementStats.map((s, i) => (
                            <div key={i} className="cu-placement-stat">
                                <strong>{s.value}</strong>
                                <span>{s.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="cu-companies cu-reveal">
                        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px', textAlign: 'center', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px' }}>Our Recruiters</p>
                        <div className="cu-companies-track">
                            {[...placementCompanies, ...placementCompanies].map((c, i) => (
                                <div key={i} className="cu-company-badge">{c}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section className="cu-testimonials">
                <div className="cu-container">
                    <div className="cu-section-head cu-reveal">
                        <span className="cu-tag">Alumni Speak</span>
                        <h2>Stories of <span>Transformation</span></h2>
                        <p>Hear from our graduates who are now making their mark across the globe.</p>
                    </div>
                    <div className="cu-testimonials-grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className="cu-testimonial-card cu-reveal">
                                <div className="cu-quote-icon"><i className="fas fa-quote-left"></i></div>
                                <p>"{t.quote}"</p>
                                <div className="cu-testimonial-author">
                                    <img src={t.avatar} alt={t.name} />
                                    <div>
                                        <strong>{t.name}</strong>
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── NEWS & EVENTS ── */}
            <section className="cu-news">
                <div className="cu-container">
                    <div className="cu-news-head cu-reveal">
                        <div>
                            <span className="cu-tag">Latest Updates</span>
                            <h2>News &amp; <span>Events</span></h2>
                        </div>
                        <a href="#" className="cu-news-all">View All <i className="fas fa-arrow-right"></i></a>
                    </div>
                    <div className="cu-news-grid">
                        {newsItems.map((n, i) => (
                            <div key={i} className="cu-news-card cu-reveal">
                                <div className="cu-news-img">
                                    <img src={n.img} alt={n.title} />
                                    <span className="cu-news-cat">{n.category}</span>
                                </div>
                                <div className="cu-news-body">
                                    <span className="cu-news-date"><i className="fas fa-calendar-alt"></i> {n.date}</span>
                                    <h3>{n.title}</h3>
                                    <a href="#" className="cu-news-read">Read More <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section className="cu-cta-banner cu-reveal">
                <div className="cu-container">
                    <h2>Ready to Begin Your Journey at <span>ST. XAVIER'S?</span></h2>
                    <p>Join thousands of students who have transformed their lives at St. Xavier's. Admissions for 2026 are now open.</p>
                    <div className="cu-cta-btns">
                        <button className="cu-btn-primary" onClick={() => setIsApplyOpen(true)}>Apply Now for 2026</button>
                        <a href="tel:+911800000999" className="cu-btn-ghost-dark">
                            <i className="fas fa-phone"></i> Talk to Admissions
                        </a>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="cu-footer">
                <div className="cu-container">
                    <div className="cu-footer-grid">
                        <div className="cu-footer-brand">
                            <div className="cu-footer-logo">
                                <img src={reactLogo} alt="ST. XAVIER'S" className="cu-logo" style={{ width: '36px' }} />
                                <div>
                                    <strong>ST. XAVIER'S</strong>
                                    <small>INSTITUTE OF TECHNOLOGY</small>
                                </div>
                            </div>
                            <p>Shaping global leaders through innovation-driven education, research excellence, and industry partnerships since 2005.</p>
                            <div className="cu-social">
                                {['facebook-f', 'twitter', 'instagram', 'linkedin-in', 'youtube'].map(s => (
                                    <a key={s} href="#"><i className={`fab fa-${s}`}></i></a>
                                ))}
                            </div>
                        </div>
                        <div className="cu-footer-col">
                            <h4>Programs</h4>
                            {['Engineering & Technology', 'Management (BBA/MBA)', 'Computing & AI', 'Sciences & Research', 'Law & Legal Studies', 'Architecture & Design'].map(l => <a key={l} href="#">{l}</a>)}
                        </div>
                        <div className="cu-footer-col">
                            <h4>Admissions</h4>
                            {['Undergraduate Programs', 'Postgraduate Programs', 'Doctoral Programs', 'International Students', 'Scholarships', 'Education Loan'].map(l => <a key={l} href="#">{l}</a>)}
                        </div>
                        <div className="cu-footer-col">
                            <h4>Campus Life</h4>
                            {['Sports & Recreation', 'Clubs & Societies', 'Hostel Facilities', 'Innovation Hub', 'Student Services', 'Alumni Network'].map(l => <a key={l} href="#">{l}</a>)}
                        </div>
                        <div className="cu-footer-col">
                            <h4>Contact Us</h4>
                            <p><i className="fas fa-map-marker-alt"></i> 42, Innovation Park, Hinjewadi Phase 1, Pune, Maharashtra – 411057</p>
                            <p><i className="fas fa-phone"></i> 1800 000 9999 (Toll Free)</p>
                            <p><i className="fas fa-envelope"></i> contact@sxit-pune.edu</p>
                            <button className="cu-btn-primary" style={{ marginTop: '16px', width: '100%' }} onClick={() => setIsLoginOpen(true)}>
                                Student Login
                            </button>
                        </div>
                    </div>
                    <div className="cu-footer-bottom">
                        <span>© 2026 St. Xavier's Institute of Technology. All Rights Reserved.</span>
                        <div className="cu-footer-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Use</a>
                            <a href="#">Sitemap</a>
                        </div>
                    </div>
                </div>
            </footer>

            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
            <AdmissionsModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
        </div>
    );
};

export default LandingPage;
