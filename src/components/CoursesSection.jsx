// CoursesSection.jsx
import React from 'react';

// Example Data structure for courses
const coursesData = [
    {
        id: 1, icon: "fas fa-laptop-code", title: "B.Tech Computer Science & Engineering",
        details: "4 Years | 180 Seats", fee: "₹125000 / Year",
        highlights: ["Data Structures & Algorithms", "Artificial Intelligence & Machine Learning", "Full Stack Web Development", "Cloud Computing & DevOps", "Cybersecurity & Ethical Hacking"]
    },
    {
        id: 2, icon: "fas fa-microchip", title: "B.Tech Electronics & Communication",
        details: "4 Years | 120 Seats", fee: "₹115000 / Year",
        highlights: ["Digital Signal Processing", "Embedded Systems & IoT", "VLSI Design & Technology", "Wireless Communication", "Control Systems"]
    },
    {
        id: 3, icon: "fas fa-cogs", title: "B.Tech Mechanical Engineering",
        details: "4 Years | 90 Seats", fee: "₹105000 / Year",
        highlights: ["Advanced Manufacturing", "Automotive Engineering", "Robotics & Automation", "Thermal Engineering", "Industrial Engineering"]
    },
    {
        id: 4, icon: "fas fa-building", title: "B.Tech Civil Engineering",
        details: "4 Years | 90 Seats", fee: "₹98000 / Year",
        highlights: ["Structural Analysis & Design", "Environmental Engineering", "Transportation Engineering", "Construction Technology", "Geotechnical Engineering"]
    },
    {
        id: 5, icon: "fas fa-chart-line", title: "BBA (Business Administration)",
        details: "3 Years | 150 Seats", fee: "₹85000 / Year",
        highlights: ["Financial Management", "Marketing & Digital Business", "Human Resource Management", "Operations & Supply Chain", "Business Analytics"]
    },
    {
        id: 6, icon: "fas fa-code", title: "B.Sc Computer Science",
        details: "3 Years | 80 Seats", fee: "₹65000 / Year",
        highlights: ["Advanced Programming", "Data Science & Analytics", "Software Testing & Quality", "Mobile App Development", "Database Administration"]
    },
];

const CoursesSection = ({ onFeeClick }) => (
    <section id="courses" className="courses-section">
        <div className="container">
            <div className="section-header">
                <h2>Courses Offered</h2>
                <p>Choose from our wide range of undergraduate and postgraduate programs</p>
            </div>

            <div className="courses-grid">
                {coursesData.map((course, index) => (
                    <div className="course-card reveal hover-lift" key={course.id} style={{ transitionDelay: `${index * 0.1}s` }}>
                        <div className="course-icon"><i className={course.icon}></i></div>
                        <h3>{course.title}</h3>
                        <p>{course.details}</p>
                        <ul>
                            {course.highlights.map((highlight, hIndex) => (
                                <li key={hIndex}>{highlight}</li>
                            ))}
                        </ul>
                        <div style={{ marginTop: 'auto' }}>
                            <button
                                onClick={() => onFeeClick(course)}
                                className="course-fee hover-scale"
                                style={{ width: '100%', border: 'none', textAlign: 'center' }}
                            >
                                {course.fee}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default CoursesSection;