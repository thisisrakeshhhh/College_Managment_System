import React, { useState } from 'react';
import './EarlyLeave.css'; // Assuming you'll create this CSS file

const EarlyLeave = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [studentData, setStudentData] = useState(null);
  const [formData, setFormData] = useState({
    leaveDate: '',
    guardianRelation: '',
    leaveTime: '',
    contactNumber: '',
    reasonType: '',
    adminRemarks: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [showRemarks, setShowRemarks] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const searchStudent = () => {
    // Mock search - replace with actual API call
    if (rollNumber === '1011') {
      setStudentData({
        name: 'John Doe',
        class: 'Grade XI',
        roll: '1011',
        photo: '/assets/images/images.jpeg',
        parentName: 'Jane Doe',
        parentPhone: '1234567890',
        parentAddress: '123 Main St, City',
        parentPhoto: '/assets/images/image3.jpg'
      });
      setErrorMessage('');
    } else {
      setStudentData(null);
      setErrorMessage('Student not found! Please check the roll number.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'reasonType') {
      setShowRemarks(value !== '');
    }
  };

  const submitLeaveRequest = () => {
    // Mock submit - replace with actual API call
    if (window.confirm('Are you sure you want to submit this early leave request?')) {
      // Prepare print data
      const printData = {
        studentName: studentData.name,
        studentClass: studentData.class,
        studentRoll: studentData.roll,
        studentPhoto: studentData.photo,
        parentPhoto: studentData.parentPhoto,
        leaveDate: formData.leaveDate,
        leaveTime: formData.leaveTime,
        reason: formData.reasonType,
        guardian: formData.guardianRelation,
        contact: formData.contactNumber,
        remarks: formData.adminRemarks,
        date: new Date().toLocaleDateString()
      };

      // Store in localStorage for print
      localStorage.setItem('earlyLeavePrintData', JSON.stringify(printData));

      // Trigger print
      window.print();
    }
  };

  return (
    <div className="view early-leave-view" id="early-leave">
      {/* Add + Icon Button */}
      <div className="add-button-container">
        <button className="btn-add" onClick={() => setShowForm(!showForm)}>
          <i className="fas fa-plus"></i> Add Early Leave Request
        </button>
      </div>

      {showForm && (
        <>
          <div className="search-card" id="searchCard">
            <div className="search-section">
              <div className="form-group">
                <h3 className="section-title">
                  <i className="fas fa-search"></i> Find Student
                </h3>
                <label htmlFor="rollInput">Student Roll Number</label>
                <input
                  type="text"
                  id="rollInput"
                  className="form-input"
                  placeholder="Enter Roll Number (e.g., 1011)"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" onClick={searchStudent}>
                <i className="fas fa-search"></i> Search
              </button>
            </div>
            {errorMessage && (
              <div id="errorMsg" className="error-message">
                <i className="fas fa-exclamation-circle"></i> {errorMessage}
              </div>
            )}
          </div>

          {studentData && (
            <div id="leaveSection" className="leave-section">
              <div className="leave-header">
                <h3>Request Early Leave</h3>
              </div>

              <div className="profiles-container-modern">
                <div className="profile-card-modern">
                  <img id="studentPhoto" src={studentData.photo} alt="Student" className="profile-photo-modern" />
                  <div className="profile-info-modern">
                    <h4 id="studentName">{studentData.name}</h4>
                    <p id="studentClass" className="profile-subtitle">{studentData.class}</p>
                    <p className="profile-detail">Roll No: <strong id="studentRoll">{studentData.roll}</strong></p>
                  </div>
                </div>

                <div className="profile-card-modern">
                  <img id="parentPhoto" src={studentData.parentPhoto} alt="Parent" className="profile-photo-modern" />
                  <div className="profile-info-modern">
                    <h4 id="parentName">{studentData.parentName}</h4>
                    <p className="profile-subtitle">Parent / Guardian</p>
                    <p className="profile-detail">
                      <i className="fas fa-phone"></i> <span id="parentPhone">{studentData.parentPhone}</span>
                    </p>
                    <p className="profile-detail">
                      <i className="fas fa-map-marker-alt"></i> <span id="parentAddress">{studentData.parentAddress}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="leave-form-card">
                <h4 className="form-section-title">Request Early Leave</h4>

                <div className="form-grid-modern">
                  <div className="form-group-modern">
                    <label htmlFor="leaveDate">Date</label>
                    <input
                      type="date"
                      id="leaveDate"
                      name="leaveDate"
                      className="form-input-modern"
                      value={formData.leaveDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group-modern">
                    <label>Parent / Guardian</label>
                    <div className="radio-group-modern">
                      <label className="radio-label-modern">
                        <input
                          type="radio"
                          name="guardianRelation"
                          value="Father"
                          checked={formData.guardianRelation === 'Father'}
                          onChange={handleInputChange}
                        />
                        <span>Father</span>
                      </label>
                      <label className="radio-label-modern">
                        <input
                          type="radio"
                          name="guardianRelation"
                          value="Mother"
                          checked={formData.guardianRelation === 'Mother'}
                          onChange={handleInputChange}
                        />
                        <span>Mother</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group-modern">
                    <label htmlFor="leaveTime">Time</label>
                    <input
                      type="time"
                      id="leaveTime"
                      name="leaveTime"
                      className="form-input-modern"
                      placeholder="Select time"
                      value={formData.leaveTime}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group-modern">
                    <label htmlFor="contactNumber">Phone Number</label>
                    <div style={{ position: 'relative' }}>
                      <i className="fas fa-phone" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#666' }}></i>
                      <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        className="form-input-modern"
                        style={{ paddingLeft: '40px' }}
                        placeholder="Phone no."
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group-modern full-width">
                    <label htmlFor="reasonType">Type of Reason</label>
                    <select
                      id="reasonType"
                      name="reasonType"
                      className="form-input-modern"
                      value={formData.reasonType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Reason</option>
                      <option value="Medical">Medical</option>
                      <option value="Family Emergency">Family Emergency</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {showRemarks && (
                    <div className="form-group-modern full-width" id="remarksSection">
                      <label htmlFor="adminRemarks">Remarks (for Admin)</label>
                      <textarea
                        id="adminRemarks"
                        name="adminRemarks"
                        className="form-input-modern"
                        rows="3"
                        placeholder="Enter any additional notes or remarks..."
                        value={formData.adminRemarks}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  )}
                </div>

                <div className="action-buttons-modern">
                  <button className="btn btn-primary-modern" onClick={submitLeaveRequest}>
                    Print
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Print Section - Hidden in normal view */}
      <div id="printSection" className="print-only">
        <div className="print-header">
          <h1>ST. XAVIER'S COLLEGE</h1>
          <h2>Early Leave Request Form</h2>
          <p className="print-date">Date: <span id="printDate">{new Date().toLocaleDateString()}</span></p>
        </div>

        <div className="print-content">
          <div className="print-profiles">
            <div className="print-profile-card">
              <img id="printStudentPhoto" src={studentData?.photo || ''} alt="Student Photo" className="print-profile-photo" />
              <div className="print-profile-label">Student</div>
            </div>
            <div className="print-profile-card">
              <img id="printParentPhoto" src={studentData?.parentPhoto || ''} alt="Parent Photo" className="print-profile-photo" />
              <div className="print-profile-label">Parent/Guardian</div>
            </div>
          </div>

          <div className="print-section">
            <h3>Student Information</h3>
            <table className="print-table">
              <tr>
                <td><strong>Name:</strong></td>
                <td id="printStudentName">{studentData?.name || ''}</td>
                <td><strong>Roll No:</strong></td>
                <td id="printStudentRoll">{studentData?.roll || ''}</td>
              </tr>
              <tr>
                <td><strong>Class:</strong></td>
                <td id="printStudentClass" colSpan="3">{studentData?.class || ''}</td>
              </tr>
            </table>
          </div>

          <div className="print-section">
            <h3>Leave Details</h3>
            <table className="print-table">
              <tr>
                <td><strong>Leave Date:</strong></td>
                <td id="printLeaveDate">{formData.leaveDate}</td>
                <td><strong>Leave Time:</strong></td>
                <td id="printLeaveTime">{formData.leaveTime}</td>
              </tr>
              <tr>
                <td><strong>Reason:</strong></td>
                <td id="printReason" colSpan="3">{formData.reasonType}</td>
              </tr>
            </table>
          </div>

          <div className="print-section">
            <h3>Guardian Information</h3>
            <table className="print-table">
              <tr>
                <td><strong>Guardian Type:</strong></td>
                <td id="printGuardian">{formData.guardianRelation}</td>
                <td><strong>Contact Number:</strong></td>
                <td id="printContact">{formData.contactNumber}</td>
              </tr>
            </table>
          </div>

          {formData.adminRemarks && (
            <div className="print-section" id="printRemarksSection">
              <h3>Remarks</h3>
              <p id="printRemarks" className="print-remarks">{formData.adminRemarks}</p>
            </div>
          )}

          <div className="print-signatures">
            <div className="signature-box">
              <div className="signature-line"></div>
              <p>Student Signature</p>
            </div>
            <div className="signature-box">
              <div className="signature-line"></div>
              <p>Guardian Signature</p>
            </div>
            <div className="signature-box">
              <div className="signature-line"></div>
              <p>Admin Signature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyLeave;
