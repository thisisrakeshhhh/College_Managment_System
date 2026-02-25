import React, { useState } from 'react';

const ExtraSupport = () => {
    const [activeTab, setActiveTab] = useState('ticket');
    const [faqOpen, setFaqOpen] = useState(null);

    const faqs = [
        { q: "How do I reset my portal password?", a: "Go to the Settings section in the sidebar and click on 'Reset Password'. You will receive an OTP on your registered mobile number." },
        { q: "Where can I find my previous semester results?", a: "All previous results are available in the 'Examination' -> 'Report Card' section. Select the academic year and semester to view." },
        { q: "How to apply for an ID card replacement?", a: "Raise a support ticket under the 'Administration' category or visit the IT Helpdesk in Block A, Ground Floor." },
        { q: "What is the procedure for fee refund?", a: "Fee refunds are processed as per the university policy. Please visit the Finance Office with your original fee receipts." }
    ];

    const contacts = [
        { role: "Head of Department (CSE)", name: "Dr. Sandeep Singh", email: "hod.cse@sxit.edu", phone: "+91 98XXX XXXXX" },
        { role: "Student Counselor", name: "Ms. Priya Sharma", email: "counselor@sxit.edu", phone: "+91 97XXX XXXXX" },
        { role: "IT Support Helpdesk", name: "Tech Team", email: "it.support@sxit.edu", phone: "Ext: 404" },
        { role: "Library In-charge", name: "Mr. Ramesh Kumar", email: "library@sxit.edu", phone: "Ext: 101" }
    ];

    return (
        <div className="extra-support-view">
            <div className="support-tabs-premium">
                <button className={`support-tab ${activeTab === 'ticket' ? 'active' : ''}`} onClick={() => setActiveTab('ticket')}>
                    <i className="fas fa-ticket-alt"></i> Raise a Ticket
                </button>
                <button className={`support-tab ${activeTab === 'faq' ? 'active' : ''}`} onClick={() => setActiveTab('faq')}>
                    <i className="fas fa-question-circle"></i> FAQs
                </button>
                <button className={`support-tab ${activeTab === 'directory' ? 'active' : ''}`} onClick={() => setActiveTab('directory')}>
                    <i className="fas fa-address-book"></i> Directory
                </button>
            </div>

            <div className="support-content-area">
                {activeTab === 'ticket' && (
                    <div className="glass-card reveal" style={{ padding: '30px' }}>
                        <h3 style={{ marginBottom: '20px' }}>Create Support Ticket</h3>
                        <form onSubmit={(e) => { e.preventDefault(); alert('Ticket raised successfully! Track ID: #SXIT-8821'); }}>
                            <div className="form-grid-modern">
                                <div className="form-group-modern">
                                    <label>Subject</label>
                                    <input type="text" className="form-input-modern" placeholder="E.g., Portal Login Issue" required />
                                </div>
                                <div className="form-group-modern">
                                    <label>Category</label>
                                    <select className="form-input-modern" required>
                                        <option value="">Select Category</option>
                                        <option value="academic">Academic</option>
                                        <option value="it">IT / Portal</option>
                                        <option value="finance">Finance / Fees</option>
                                        <option value="hostel">Hostel / Campus</option>
                                    </select>
                                </div>
                                <div className="form-group-modern full-width">
                                    <label>Detailed Description</label>
                                    <textarea className="form-input-modern" rows="5" placeholder="Explain your issue in detail..." required></textarea>
                                </div>
                                <div className="form-group-modern full-width">
                                    <label>Attachments (Optional)</label>
                                    <input type="file" className="form-input-modern" />
                                </div>
                            </div>
                            <div style={{ marginTop: '24px', textAlign: 'right' }}>
                                <button type="submit" className="btn-primary" style={{ padding: '12px 40px' }}>
                                    Submit Ticket <i className="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {activeTab === 'faq' && (
                    <div className="faq-list reveal">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`faq-item glass-card ${faqOpen === i ? 'open' : ''}`} onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                                <div className="faq-question">
                                    <span>{faq.q}</span>
                                    <i className={`fas ${faqOpen === i ? 'fa-minus' : 'fa-plus'}`}></i>
                                </div>
                                {faqOpen === i && <div className="faq-answer">{faq.a}</div>}
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'directory' && (
                    <div className="directory-grid reveal">
                        {contacts.map((c, i) => (
                            <div key={i} className="glass-card contact-card">
                                <div className="contact-icon"><i className="fas fa-user-tie"></i></div>
                                <h4>{c.role}</h4>
                                <p className="contact-name">{c.name}</p>
                                <div className="contact-links">
                                    <a href={`mailto:${c.email}`}><i className="fas fa-envelope"></i> {c.email}</a>
                                    <a href={`tel:${c.phone}`}><i className="fas fa-phone"></i> {c.phone}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <style>{`
                .extra-support-view { padding: 10px; }
                .support-tabs-premium { display: flex; gap: 15px; margin-bottom: 30px; }
                .support-tab { 
                    flex: 1; padding: 15px; border: none; background: rgba(255,255,255,0.6); 
                    border-radius: 12px; font-weight: 700; color: #555; cursor: pointer;
                    transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 10px;
                    border: 1px solid rgba(255,255,255,0.3);
                }
                .support-tab.active { background: #1a73e8; color: white; box-shadow: 0 4px 15px rgba(26,115,232,0.3); }
                .faq-item { margin-bottom: 12px; cursor: pointer; transition: all 0.3s; overflow: hidden; padding: 20px; }
                .faq-question { display: flex; justify-content: space-between; align-items: center; font-weight: 700; font-size: 16px; }
                .faq-answer { margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(0,0,0,0.05); color: #555; line-height: 1.6; }
                .directory-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
                .contact-card { padding: 25px; text-align: center; }
                .contact-icon { width: 60px; height: 60px; background: #e8f0fe; color: #1a73e8; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-size: 24px; }
                .contact-name { font-weight: 700; color: #1a73e8; margin: 5px 0 15px; }
                .contact-links { display: flex; flex-direction: column; gap: 8px; font-size: 14px; }
                .contact-links a { color: #555; text-decoration: none; transition: color 0.2s; }
                .contact-links a:hover { color: #1a73e8; }
                .contact-links i { width: 20px; }
            `}</style>
        </div>
    );
};

export default ExtraSupport;
