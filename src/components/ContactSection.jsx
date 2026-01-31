// ContactSection.jsx
import React from 'react';

// Contact Info Data
const contactInfo = [
    { icon: "fas fa-map-marker-alt", title: "Address", content: <>St. Xavier's Institute of Technology<br />Mahim Causeway, Mahim (West)<br />Mumbai - 400016, Maharashtra, India</> },
    { icon: "fas fa-phone", title: "Phone", content: < >+91-11-2345-6789<br />+91-98765-43210</> },
    { icon: "fas fa-envelope", title: "Email", content: <>info@stxavier.edu.in<br />admissions@stxavier.edu.in</> },
    { icon: "fas fa-clock", title: "Office Hours", content: <>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM</> },
];

const ContactSection = () => {
    // Placeholder function for form submission in React
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted! (In a real app, this would send data to a backend)');
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-wrapper">
                    {/* Contact Information */}
                    <div className="contact-info reveal reveal-left">
                        <h2>Get in Touch</h2>
                        <p>Have questions? We are here to help.</p>

                        {contactInfo.map((item, index) => (
                            <div className="info-item hover-lift" key={index}>
                                <i className={item.icon}></i>
                                <div>
                                    <strong>{item.title}</strong>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <form id="contactForm" className="contact-form reveal reveal-right" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required className="hover-lift" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email Address" required className="hover-lift" />
                        </div>
                        <div className="form-group">
                            <input type="tel" placeholder="Phone Number" className="hover-lift" />
                        </div>
                        <div className="form-group">
                            <select required defaultValue="" className="hover-lift">
                                <option value="" disabled>Select Subject</option>
                                <option value="admission">Admission Inquiry</option>
                                <option value="fees">Fee Structure</option>
                                <option value="courses">Course Information</option>
                                <option value="placement">Placement Details</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea rows="4" placeholder="Your Message" required className="hover-lift"></textarea>
                        </div>
                        <button type="submit" className="btn-primary full-width hover-scale">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;