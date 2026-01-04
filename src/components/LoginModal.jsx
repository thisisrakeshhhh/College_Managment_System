import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('studentLogin');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleLogin = (e, route) => {
    e.preventDefault();
    // In a real app, you would validate credentials here
    onClose();
    navigate(route);
  }

  return (
    <div className="login-overlay active" id="loginOverlay" style={{ display: 'flex' }}>
      <div className="login-box">
        <button className="modal-close" id="closeLogin" onClick={onClose}>&times;</button>
        <h3>Welcome Back</h3>

        <div className="login-tabs">
          <button
            className={`tab-btn ${activeTab === 'studentLogin' ? 'active' : ''}`}
            onClick={() => handleTabClick('studentLogin')}
          >
            Student
          </button>
          <button
            className={`tab-btn ${activeTab === 'facultyLogin' ? 'active' : ''}`}
            onClick={() => handleTabClick('facultyLogin')}
          >
            Faculty
          </button>
        </div>

        <div id="studentLogin" className="login-section" style={{ display: activeTab === 'studentLogin' ? 'block' : 'none' }}>
          <form id="studentLoginForm" className="login-form" onSubmit={(e) => handleLogin(e, '/student-dashboard')}>
            <div className="input-group">
              <input type="text" id="studentId" placeholder="Student ID" required />
            </div>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                id="studentPass"
                placeholder="Password"
                required
              />
              <button type="button" className="toggle-password" onClick={togglePassword}>
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
            <button type="submit" className="btn-primary full-width">Login as Student</button>
            <p className="demo-hint">Demo: student / 123</p>
          </form>
        </div>

        <div id="facultyLogin" className="login-section" style={{ display: activeTab === 'facultyLogin' ? 'block' : 'none' }}>
          <form id="facultyLoginForm" className="login-form" onSubmit={(e) => handleLogin(e, '/faculty-dashboard')}>
            <div className="input-group">
              <input type="text" id="facultyId" placeholder="Faculty ID" required />
            </div>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                id="facultyPass"
                placeholder="Password"
                required
              />
              <button type="button" className="toggle-password" onClick={togglePassword}>
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
            <button type="submit" className="btn-primary full-width">Login as Faculty</button>
            <p className="demo-hint">Demo: faculty / 123</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
