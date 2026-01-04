import React from 'react';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <div className="footer-brand">
                            <div className="logo-circle" style={{ background: 'white', color: '#4a6cf7', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                                <i className="fas fa-graduation-cap" style={{ fontSize: '30px' }}></i>
                            </div>
                            <div>
                                <strong>St. Xavier's Institute of Technology</strong>
                                <p>Excellence in Engineering Education</p>
                            </div>
                        </div>
                        <p className="footer-desc">Premier engineering college in Mumbai offering B.Tech programs with industry-focused
                            curriculum, state-of-the-art facilities, and excellent placement opportunities.</p>
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#courses">Courses</a></li>
                            <li><a href="#facilities">Facilities</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Student Handbook</a></li>
                            <li><a href="#">Academic Calendar</a></li>
                            <li><a href="#">Examination Schedule</a></li>
                            <li><a href="#">Downloads</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Connect With Us</h4>
                        <div className="social-links">
                            <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                            <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" target="_blank"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <small>&copy; <span id="year">{new Date().getFullYear()}</span> St. Xavier's Institute of Technology — All rights reserved</small>
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
