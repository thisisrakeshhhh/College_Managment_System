document.addEventListener('DOMContentLoaded', () => {
    const appView = document.getElementById('app-view');
    const pageTitle = document.getElementById('pageTitle');
    const navItems = document.querySelectorAll('.nav-item[data-page]');
    const logoutBtn = document.getElementById('logoutBtn');
    const notificationBell = document.getElementById('notificationBell');
    const notificationDropdown = document.getElementById('notificationDropdown');

    // Navigation Logic
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.getAttribute('data-page');

            // Update Active State
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Update Title
            pageTitle.textContent = item.querySelector('span').textContent;

            // Render Content
            renderPage(page);
        });
    });

    // Logout Logic
    logoutBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to logout?')) {
            sessionStorage.removeItem('adminLoggedIn');
            window.location.reload();
        }
    });

    // Notification Dropdown
    notificationBell.addEventListener('click', (e) => {
        e.stopPropagation();
        notificationDropdown.classList.toggle('active');
        notificationBell.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        notificationDropdown.classList.remove('active');
        notificationBell.classList.remove('active');
    });

    // Initial Render
    renderPage('dashboard');



    window.handleReasonChange = function () {
        const reasonType = document.getElementById('reasonType').value;
        const remarksSection = document.getElementById('remarksSection');
        if (reasonType === 'Other') {
            remarksSection.style.display = 'block';
        } else {
            remarksSection.style.display = 'none';
        }
    };

    window.searchStudent = function () {
        const rollInput = document.getElementById('rollInput').value;
        const errorMsg = document.getElementById('errorMsg');
        const leaveSection = document.getElementById('leaveSection');

        // Mock search - replace with actual API call
        if (rollInput === '1011') {
            document.getElementById('studentName').textContent = 'John Doe';
            document.getElementById('studentClass').textContent = 'Grade XI';
            document.getElementById('studentRoll').textContent = '1011';
            document.getElementById('studentPhoto').src = '/assets/images/images.jpeg';
            document.getElementById('parentName').textContent = 'Jane Doe';
            document.getElementById('parentPhone').textContent = '1234567890';
            document.getElementById('parentAddress').textContent = '123 Main St, City';
            document.getElementById('parentPhoto').src = '/assets/images/image3.jpg';

            errorMsg.style.display = 'none';
            leaveSection.style.display = 'block';
        } else {
            errorMsg.style.display = 'block';
            leaveSection.style.display = 'none';
        }
    };

    window.submitLeaveRequest = function () {
        const leaveDate = document.getElementById('earlyLeaveDate_ForceEmpty').value;
        const leaveTime = document.getElementById('earlyLeaveTime_ForceEmpty').value;
        const guardianRelation = document.querySelector('input[name="guardianRelation"]:checked')?.value;
        const contactNumber = document.getElementById('contactNumber').value;
        const reasonType = document.getElementById('reasonType').value;
        const adminRemarks = document.getElementById('adminRemarks').value;

        if (!leaveDate || !leaveTime || !guardianRelation || !contactNumber || !reasonType) {
            alert('Please fill in all required fields.');
            return;
        }

        const now = new Date();
        const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Populate print fields
        document.getElementById('printDate').textContent = dateStr;
        document.getElementById('printStudentName').textContent = document.getElementById('studentName').textContent;
        document.getElementById('printStudentRoll').textContent = document.getElementById('studentRoll').textContent;
        document.getElementById('printStudentClass').textContent = document.getElementById('studentClass').textContent;
        document.getElementById('printStudentPhoto').src = document.getElementById('studentPhoto').src;
        document.getElementById('printParentPhoto').src = document.getElementById('parentPhoto').src;

        // Format leave time to 12-hour clock
        const [h24, m24] = leaveTime.split(':');
        let h12 = parseInt(h24);
        const ampm = h12 >= 12 ? 'PM' : 'AM';
        h12 = h12 % 12 || 12;
        const formattedLeaveTime = `${String(h12).padStart(2, '0')}:${m24} ${ampm}`;

        document.getElementById('printLeaveDate').textContent = leaveDate;
        document.getElementById('printLeaveTime').textContent = formattedLeaveTime;
        document.getElementById('printReason').textContent = reasonType;
        document.getElementById('printGuardian').textContent = guardianRelation;
        document.getElementById('printContact').textContent = contactNumber;

        const printRemarks = document.getElementById('printRemarks');
        const printRemarksSection = document.getElementById('printRemarksSection');
        if (adminRemarks) {
            printRemarks.textContent = adminRemarks;
            printRemarksSection.style.display = 'block';
        } else {
            printRemarksSection.style.display = 'none';
        }

        // Hide browser headers/footers by changing title temporarily
        const originalTitle = document.title;
        document.title = ' ';

        // Trigger print
        window.print();

        // Restore title
        document.title = originalTitle;

    };

    function renderPage(page) {
        appView.innerHTML = ''; // Clear current content

        switch (page) {
            case 'dashboard':
                appView.innerHTML = `
                    <div class="dashboard-view">
                        <div class="stats-grid">
                            <div class="stat-card">
                                <div class="stat-icon blue"><i class="fas fa-user-graduate"></i></div>
                                <div class="stat-details">
                                    <h3>3,450</h3>
                                    <p>Total Students</p>
                                </div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-icon green"><i class="fas fa-chalkboard-teacher"></i></div>
                                <div class="stat-details">
                                    <h3>128</h3>
                                    <p>Total Faculty</p>
                                </div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-icon orange"><i class="fas fa-building"></i></div>
                                <div class="stat-details">
                                    <h3>12</h3>
                                    <p>Departments</p>
                                </div>
                            </div>
                             <div class="stat-card">
                                <div class="stat-icon purple"><i class="fas fa-door-open"></i></div>
                                <div class="stat-details">
                                    <h3>45</h3>
                                    <p>Leave Requests</p>
                                </div>
                            </div>
                        </div>

                        <div class="activity-section">
                            <h3>Recent Activity</h3>
                            <div class="activity-list">
                                <div class="activity-item">
                                    <div class="activity-icon blue"><i class="fas fa-user-plus"></i></div>
                                    <div class="activity-content">
                                        <p class="activity-text"><strong>New Student Admission</strong> - Rahul Kumar (B.Tech CS)</p>
                                        <span class="activity-time">2 hours ago</span>
                                    </div>
                                </div>
                                <div class="activity-item">
                                    <div class="activity-icon green"><i class="fas fa-check"></i></div>
                                    <div class="activity-content">
                                        <p class="activity-text"><strong>Fee Payment Verified</strong> - Sneha Gupta (Grade XII)</p>
                                        <span class="activity-time">5 hours ago</span>
                                    </div>
                                </div>
                                <div class="activity-item">
                                    <div class="activity-icon purple"><i class="fas fa-calendar"></i></div>
                                    <div class="activity-content">
                                        <p class="activity-text"><strong>Timetable Updated</strong> - Mechanical Dept</p>
                                        <span class="activity-time">1 day ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 'students':
                appView.innerHTML = `
                    <div class="students-view">
                        <div class="section-header">
                            <h3>Student Management</h3>
                            <button class="btn btn-primary"><i class="fas fa-plus"></i> Add Student</button>
                        </div>
                        <div class="table-container">
                            <table class="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Course</th>
                                        <th>Year</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#STU001</td>
                                        <td>Amit Sharma</td>
                                        <td>B.Tech CS</td>
                                        <td>2nd</td>
                                        <td><span class="status-badge status-approved">Active</span></td>
                                        <td>
                                            <button class="btn-edit"><i class="fas fa-edit"></i></button>
                                            <button class="btn-delete"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#STU002</td>
                                        <td>Priya Patel</td>
                                        <td>BBA</td>
                                        <td>1st</td>
                                        <td><span class="status-badge status-pending">Pending</span></td>
                                        <td>
                                            <button class="btn-edit"><i class="fas fa-edit"></i></button>
                                            <button class="btn-delete"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                     <tr>
                                        <td>#STU003</td>
                                        <td>Rohan Singh</td>
                                        <td>B.Sc Physics</td>
                                        <td>3rd</td>
                                        <td><span class="status-badge status-approved">Active</span></td>
                                        <td>
                                            <button class="btn-edit"><i class="fas fa-edit"></i></button>
                                            <button class="btn-delete"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                `;
                break;

            case 'faculty':
                appView.innerHTML = `
                     <div class="faculty-view">
                        <div class="section-header">
                            <h3>Faculty Directory</h3>
                            <button class="btn btn-primary"><i class="fas fa-plus"></i> Add Faculty</button>
                        </div>
                        <div class="table-container">
                            <table class="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Department</th>
                                        <th>Designation</th>
                                        <th>Contact</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#FAC001</td>
                                        <td>Dr. Sarah Wilson</td>
                                        <td><span class="dept-badge">Computer Science</span></td>
                                        <td>Professor</td>
                                        <td>sarah.w@college.edu</td>
                                        <td>
                                            <button class="btn-edit"><i class="fas fa-edit"></i></button>
                                            <button class="btn-delete"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#FAC002</td>
                                        <td>Prof. Rajesh Kumar</td>
                                        <td><span class="dept-badge">Mathematics</span></td>
                                        <td>Assistant Prof.</td>
                                        <td>rakesh.k@college.edu</td>
                                        <td>
                                            <button class="btn-edit"><i class="fas fa-edit"></i></button>
                                            <button class="btn-delete"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                `;
                break;

            case 'departments':
                appView.innerHTML = `
                    <div class="departments-view">
                        <div class="section-header">
                            <h3>Departments</h3>
                            <button class="btn btn-primary"><i class="fas fa-plus"></i> Add Department</button>
                        </div>
                        <div class="departments-grid">
                            <div class="dept-card">
                                <h4>Computer Science</h4>
                                <p><strong>HOD:</strong> Dr. A. P. J. Abdul</p>
                                <p><strong>Faculty:</strong> 24 Members</p>
                                <p><strong>Students:</strong> 450+</p>
                                <button class="btn btn-secondary" style="margin-top: 10px; width: 100%;">View Details</button>
                            </div>
                            <div class="dept-card">
                                <h4>Mechanical Engineering</h4>
                                <p><strong>HOD:</strong> Prof. S. K. Bose</p>
                                <p><strong>Faculty:</strong> 18 Members</p>
                                <p><strong>Students:</strong> 320+</p>
                                <button class="btn btn-secondary" style="margin-top: 10px; width: 100%;">View Details</button>
                            </div>
                            <div class="dept-card">
                                <h4>Business Administration</h4>
                                <p><strong>HOD:</strong> Dr. M. Gupta</p>
                                <p><strong>Faculty:</strong> 12 Members</p>
                                <p><strong>Students:</strong> 280+</p>
                                <button class="btn btn-secondary" style="margin-top: 10px; width: 100%;">View Details</button>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 'early-leave':
                appView.innerHTML = `
                    <div class="view early-leave-view" id="early-leave">
                        <div class="search-card" id="searchCard">
                            <div class="search-section">
                                <div class="form-group">
                                    <h3 class="section-title" style="color : blue;">
                                        <i class="fas fa-search"></i> Find Student
                                    </h3>
                                    <label for="rollInput">Student Roll Number</label>
                                    <input type="text" id="rollInput" class="form-input" placeholder="Enter Roll Number (e.g., 1011)">
                                </div>
                                <button class="btn btn-primary" onclick="searchStudent()">
                                    <i class="fas fa-search"></i> Search
                                </button>
                            </div>
                            <div id="errorMsg" class="error-message">
                                <i class="fas fa-exclamation-circle"></i> Student not found! Please check the roll number.
                            </div>
                        </div>

                        <div id="leaveSection" class="leave-section" style="display: none;">
                            <div class="leave-header">
                                <h3>Request Early Leave</h3>
                            </div>

                            <div class="profiles-container-modern">
                                <div class="profile-card-modern">
                                    <img id="studentPhoto" src="/assets/images/images.jpeg" alt="Student" class="profile-photo-modern">
                                    <div class="profile-info-modern">
                                        <h4 id="studentName">Student Name</h4>
                                        <p id="studentClass" class="profile-subtitle">Class - Year</p>
                                        <p class="profile-detail">Roll No: <strong id="studentRoll">-</strong></p>
                                    </div>
                                </div>

                                <div class="profile-card-modern">
                                    <img id="parentPhoto" src="/assets/images/image3.jpg" alt="Parent" class="profile-photo-modern">
                                    <div class="profile-info-modern">
                                        <h4 id="parentName">Parent Name</h4>
                                        <p class="profile-subtitle">Parent / Guardian</p>
                                        <p class="profile-detail">
                                            <i class="fas fa-phone"></i> <span id="parentPhone">1234567890</span>
                                        </p>
                                        <p class="profile-detail">
                                            <i class="fas fa-map-marker-alt"></i> <span id="parentAddress">123 Main St, City</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="leave-form-card">
                                <h4 class="form-section-title">Request Early Leave</h4>

                                <div class="form-grid-modern">
                                    <div class="form-group-modern">
                                        <label for="earlyLeaveDate_ForceEmpty">Date</label>
                                        <input type="date" id="earlyLeaveDate_ForceEmpty" name="date_reset_${Date.now()}" class="form-input-modern" value="" autocomplete="off" required>
                                    </div>

                                    <div class="form-group-modern">
                                        <label>Parent / Guardian</label>
                                        <div class="radio-group-modern">
                                            <label class="radio-label-modern">
                                                <input type="radio" name="guardianRelation" value="Father">
                                                <span>Father</span>
                                            </label>
                                            <label class="radio-label-modern">
                                                <input type="radio" name="guardianRelation" value="Mother">
                                                <span>Mother</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="form-group-modern">
                                        <label for="earlyLeaveTime_ForceEmpty">Time</label>
                                        <input type="time" id="earlyLeaveTime_ForceEmpty" name="time_reset_${Date.now()}" class="form-input-modern" placeholder="Select time" value="" autocomplete="off" required>
                                    </div>

                                    <div class="form-group-modern">
                                        <label for="contactNumber">Phone Number</label>
                                        <div style="position: relative;">
                                            <i class="fas fa-phone"
                                                style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #666;"></i>
                                            <input type="tel" id="contactNumber" class="form-input-modern" style="padding-left: 40px;"
                                                placeholder="Phone no." required>
                                        </div>
                                    </div>

                                    <div class="form-group-modern full-width">
                                        <label for="reasonType">Type of Reason</label>
                                        <select id="reasonType" class="form-input-modern" onchange="handleReasonChange()" required>
                                            <option value="">Select Reason</option>
                                            <option value="Medical">Medical</option>
                                            <option value="Family Emergency">Family Emergency</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div class="form-group-modern full-width" id="remarksSection" style="display: none;">
                                        <label for="adminRemarks">Remarks (for Admin)</label>
                                        <textarea id="adminRemarks" class="form-input-modern" rows="3"
                                            placeholder="Enter any additional notes or remarks..."></textarea>
                                    </div>
                                </div>

                                <div class="action-buttons-modern">
                                    <button class="btn btn-primary-modern" onclick="submitLeaveRequest()">
                                        Print
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div id="printSection" class="print-only">
                            <div class="print-header">
                                <h1>ST. XAVIER'S COLLEGE</h1>
                                <h2>Early Leave Request Form</h2>
                                <p class="print-date">Date: <span id="printDate"></span></p>
                            </div>

                            <div class="print-content">
                                <div class="print-profiles">
                                    <div class="print-profile-card">
                                        <img id="printStudentPhoto" src="" alt="Student Photo" class="print-profile-photo">
                                        <div class="print-profile-label">Student</div>
                                    </div>
                                    <div class="print-profile-card">
                                        <img id="printParentPhoto" src="" alt="Parent Photo" class="print-profile-photo">
                                        <div class="print-profile-label">Parent/Guardian</div>
                                    </div>
                                </div>

                                <div class="print-section">
                                    <h3>Student Information</h3>
                                    <table class="print-table">
                                        <tr>
                                            <td><strong>Name:</strong></td>
                                            <td id="printStudentName"></td>
                                            <td><strong>Roll No:</strong></td>
                                            <td id="printStudentRoll"></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Class:</strong></td>
                                            <td id="printStudentClass" colspan="3"></td>
                                        </tr>
                                    </table>
                                </div>

                                <div class="print-section">
                                    <h3>Leave Details</h3>
                                    <table class="print-table">
                                        <tr>
                                            <td><strong>Leave Date:</strong></td>
                                            <td id="printLeaveDate"></td>
                                            <td><strong>Leave Time:</strong></td>
                                            <td id="printLeaveTime"></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Reason:</strong></td>
                                            <td id="printReason" colspan="3"></td>
                                        </tr>
                                    </table>
                                </div>

                                <div class="print-section">
                                    <h3>Guardian Information</h3>
                                    <table class="print-table">
                                        <tr>
                                            <td><strong>Guardian Type:</strong></td>
                                            <td id="printGuardian"></td>
                                            <td><strong>Contact Number:</strong></td>
                                            <td id="printContact"></td>
                                        </tr>
                                    </table>
                                </div>

                                <div class="print-section" id="printRemarksSection" style="display: none;">
                                    <h3>Remarks</h3>
                                    <p id="printRemarks" class="print-remarks"></p>
                                </div>

                                <div class="print-signatures">
                                    <div class="signature-box">
                                        <div class="signature-line"></div>
                                        <p>Student Signature</p>
                                    </div>
                                    <div class="signature-box">
                                        <div class="signature-line"></div>
                                        <p>Guardian Signature</p>
                                    </div>
                                    <div class="signature-box">
                                        <div class="signature-line"></div>
                                        <p>Admin Signature</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                // Aggressively clear form fields to prevent browser auto-population
                setTimeout(() => {
                    const dateInput = document.getElementById('earlyLeaveDate_ForceEmpty');
                    const timeInput = document.getElementById('earlyLeaveTime_ForceEmpty');
                    if (dateInput) {
                        dateInput.value = '';
                        dateInput.defaultValue = '';
                    }
                    if (timeInput) {
                        timeInput.value = '';
                        timeInput.defaultValue = '';
                    }
                }, 100);
                break;

            case 'settings':
                appView.innerHTML = `
                     <div class="settings-view">
                        <h3>System Settings</h3>
                        <div class="settings-card">
                            <h4>General Configuration</h4>
                            <div class="setting-item">
                                <label>Institute Name</label>
                                <input type="text" class="form-input" value="St. Xavier's College">
                            </div>
                             <div class="setting-item">
                                <label>Academic Year</label>
                                <select class="form-input">
                                    <option>2023-2024</option>
                                    <option selected>2024-2025</option>
                                    <option>2025-2026</option>
                                </select>
                            </div>
                             <div class="setting-item">
                                <label>Admin Email</label>
                                <input type="email" class="form-input" value="admin@stxaviers.edu">
                            </div>
                            <button class="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                `;
                break;
        }
    }
});
