import React, { useState } from 'react';

const AdmissionsModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: 'Rakesh Kumar',
        email: 'rakesh.kumar@example.com',
        phone: '+91 8567890273',
        department: 'Engineering & Technology'
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your mentor call has been scheduled! Our counselor will reach out to you shortly.");
        onClose();
    };

    const handleWhatsApp = () => {
        const text = "Hi, I'm interested in admissions at ST. XAVIER'S Institute of Technology. I'd like to schedule a mentor call.";
        window.open(`https://wa.me/8567890273?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="login-overlay active" style={{ display: 'flex' }}>
            <div className="login-box admissions-modal">
                <button className="modal-close" onClick={onClose}>&times;</button>
                <div className="admissions-head">
                    <i className="fas fa-user-tie"></i>
                    <h3>Mentor Call & Admissions</h3>
                    <p>Get personalized career guidance from our expert mentors.</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label><i className="fas fa-user"></i> Full Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label><i className="fas fa-envelope"></i> Email Address</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label><i className="fas fa-phone"></i> Phone Number</label>
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 XXXXX XXXXX"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label><i className="fas fa-graduation-cap"></i> Preferred Program</label>
                        <select
                            value={formData.department}
                            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                            className="admissions-select"
                        >
                            <option>Engineering & Technology</option>
                            <option>Management (BBA/MBA)</option>
                            <option>Computing & AI (BCA/MCA)</option>
                            <option>Sciences & Research</option>
                            <option>Law & Legal Studies</option>
                            <option>Architecture & Design</option>
                        </select>
                    </div>

                    <button type="submit" className="btn-primary full-width admissions-submit">
                        <i className="fas fa-headset"></i> Schedule Mentor Call
                    </button>

                    <div className="admissions-divider">
                        <span>Direct Support</span>
                    </div>

                    <button type="button" onClick={handleWhatsApp} className="btn-whatsapp full-width">
                        <i className="fab fa-whatsapp"></i> Chat with a Counselor
                    </button>

                    <div className="demo-hint" style={{ marginTop: '20px', fontSize: '11px', textAlign: 'center' }}>
                        <i className="fas fa-shield-alt"></i> Your data is 100% secure and confidential.
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdmissionsModal;
