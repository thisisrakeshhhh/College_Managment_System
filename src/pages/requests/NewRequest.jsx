import React from 'react';

const NewRequest = () => {
    return (
        <div className="new-request-page">
            <h2 className="section-title">Submit New Request</h2>

            <div style={{ maxWidth: '600px', background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>Request Category</label>
                        <select style={{ padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0', background: 'white' }}>
                            <option>Transfer Certificate (TC)</option>
                            <option>Character Certificate</option>
                            <option>Fee Concession Request</option>
                            <option>Subject Change Request</option>
                            <option>Other / General Inquiry</option>
                        </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>Detailed Description</label>
                        <textarea rows="5" placeholder="Please provide all relevant details for your request..." style={{ padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0', resize: 'none' }}></textarea>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>Supporting Documents (if any)</label>
                        <div style={{
                            padding: '20px',
                            border: '2px dashed #e2e8f0',
                            borderRadius: '12px',
                            textAlign: 'center',
                            cursor: 'pointer'
                        }}>
                            <i className="fas fa-cloud-upload-alt" style={{ fontSize: '24px', color: '#cbd5e1', marginBottom: '10px' }}></i>
                            <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>Click to upload file or drag & drop</p>
                        </div>
                    </div>

                    <button className="btn-primary" style={{ padding: '15px', marginTop: '10px' }}>Submit Request</button>
                </div>
            </div>
        </div>
    );
};

export default NewRequest;
