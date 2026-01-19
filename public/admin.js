document.addEventListener('DOMContentLoaded', () => {
    const appView = document.getElementById('app-view');
    const pageTitle = document.getElementById('pageTitle');
    const navItems = document.querySelectorAll('.nav-item[data-page]');
    const logoutBtn = document.getElementById('logoutBtn');
    const notificationBell = document.getElementById('notificationBell');
    const notificationDropdown = document.getElementById('notificationDropdown');

    // Link "View All Notifications" to render notifications page
    const viewAllLink = document.querySelector('.view-all-link');
    if (viewAllLink) {
        viewAllLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Find the notification nav item (if it exists) or just render the page
            pageTitle.textContent = 'Notifications';
            renderPage('notifications');
            notificationDropdown.classList.remove('active');
            notificationBell.classList.remove('active');

            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
        });
    }

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

    // --- Notification Logic Fix ---
    function updateNotificationBadge() {
        const badge = document.getElementById('notificationBadge');
        if (!badge) return;

        const unreadItems = document.querySelectorAll('.notification-item.unread');
        const unreadCount = unreadItems.length;

        if (unreadCount > 0) {
            badge.textContent = unreadCount;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    }

    // Mark all as read click handler
    const markAllReadBtn = document.querySelector('.mark-all-read');
    if (markAllReadBtn) {
        markAllReadBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const unreadItems = document.querySelectorAll('.notification-item.unread');
            unreadItems.forEach(item => {
                item.classList.remove('unread');
            });
            updateNotificationBadge();
        });
    }

    // Individual notification click handler (using delegation for efficiency)
    const notificationList = document.querySelector('.notification-list');
    if (notificationList) {
        notificationList.addEventListener('click', (e) => {
            const item = e.target.closest('.notification-item');
            if (item && item.classList.contains('unread')) {
                e.stopPropagation();
                item.classList.remove('unread');
                updateNotificationBadge();
            }
        });
    }

    // Initialize badge count on load
    updateNotificationBadge();
    // --- End Notification Logic Fix ---

    // --- Centralized Data Fetching ---
    let allStudents = [];
    let allFaculty = [];
    let allDepartments = [];
    let allLeaves = [];
    let smsHistory = [];

    async function fetchData() {
        try {
            const [studentRes, facultyRes, deptRes, leaveRes, smsRes] = await Promise.all([
                fetch('http://localhost:5000/api/students'),
                fetch('http://localhost:5000/api/faculty'),
                fetch('http://localhost:5000/api/departments'),
                fetch('http://localhost:5000/api/leaves'),
                fetch('http://localhost:5000/api/sms/history')
            ]);

            allStudents = await studentRes.json();
            allFaculty = await facultyRes.json();
            allDepartments = await deptRes.json();
            allLeaves = await leaveRes.json();
            smsHistory = await smsRes.json();

            console.log('Admin data synchronized:', {
                students: allStudents.length,
                faculty: allFaculty.length,
                departments: allDepartments.length,
                leaves: allLeaves.length
            });

            // Refresh current view if it's dynamic
            const activeNav = document.querySelector('.nav-item.active');
            if (activeNav) {
                const page = activeNav.getAttribute('data-page');
                if (['dashboard', 'students', 'parent-sms', 'faculty', 'departments'].includes(page)) {
                    renderPage(page);
                }
            }
        } catch (err) {
            console.error('Data Fetch Sync Error:', err);
        }
    }

    // Initial load
    fetchData();

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

        if (!rollInput) return;

        // Search in fetched students
        const student = allStudents.find(s => s.id === rollInput || s.id.includes(rollInput));

        if (student) {
            document.getElementById('studentName').textContent = student.name;
            document.getElementById('studentClass').textContent = `${student.grade} - ${student.course}`;
            document.getElementById('studentRoll').textContent = student.id;
            // Using placeholder logic if photo not in data
            document.getElementById('studentPhoto').src = '/assets/images/images.jpeg';
            document.getElementById('parentName').textContent = 'Guardian of ' + student.name;
            document.getElementById('parentPhone').textContent = student.parentPhone;
            document.getElementById('parentAddress').textContent = 'Registered Address on file';
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
                        <div class="section-header" style="margin-bottom: 24px;">
                            <div style="display: flex; align-items: center; gap: 15px;">
                                <button class="btn btn-secondary back-to-dashboard" style="padding: 8px 12px;">
                                    <i class="fas fa-arrow-left"></i>
                                </button>
                                <h3>Dashboard Overview</h3>
                            </div>
                        </div>
                        <div class="stats-grid">
                            <div class="stat-card">
                                <div class="stat-icon blue"><i class="fas fa-user-graduate"></i></div>
                                <div class="stat-details">
                                    <h3 id="statTotalStudents">${allStudents.length || '...'}</h3>
                                    <p>Total Students</p>
                                </div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-icon green"><i class="fas fa-chalkboard-teacher"></i></div>
                                <div class="stat-details">
                                    <h3>${allFaculty.length || '...'}</h3>
                                    <p>Total Faculty</p>
                                </div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-icon orange"><i class="fas fa-building"></i></div>
                                <div class="stat-details">
                                    <h3>${allDepartments.length || '...'}</h3>
                                    <p>Departments</p>
                                </div>
                            </div>
                             <div class="stat-card">
                                <div class="stat-icon purple"><i class="fas fa-door-open"></i></div>
                                <div class="stat-details">
                                    <h3>${allLeaves.length || '...'}</h3>
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
                            <div style="display: flex; align-items: center; gap: 15px;">
                                <button class="btn btn-secondary back-to-dashboard" style="padding: 8px 12px;">
                                    <i class="fas fa-arrow-left"></i>
                                </button>
                                <h3>Student Management</h3>
                            </div>
                            <button class="btn btn-primary"><i class="fas fa-plus"></i> Add Student</button>
                        </div>
                        <div class="table-container">
                            <table class="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Course</th>
                                        <th>Grade</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${allStudents.length === 0 ? `<tr><td colspan="6" style="text-align: center; padding: 20px;">Loading students...</td></tr>` : allStudents.map(s => `
                                        <tr>
                                            <td>#${s.id}</td>
                                            <td>${s.name}</td>
                                            <td>${s.course}</td>
                                            <td>${s.grade}</td>
                                            <td><span class="status-badge ${s.status === 'Active' ? 'status-approved' : 'status-pending'}">${s.status}</span></td>
                                            <td>
                                                <button class="btn-sms" onclick="notifyParent('${s.id}')" title="Notify Parent" style="background: #eef2ff; color: #4318FF; border: none; padding: 5px 8px; border-radius: 4px; cursor: pointer; margin-right: 5px;">
                                                    <i class="fas fa-sms"></i>
                                                </button>
                                                <button class="btn-edit"><i class="fas fa-edit"></i></button>
                                                <button class="btn-delete"><i class="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    `).join('')}
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
                            <div style="display: flex; align-items: center; gap: 15px;">
                                <button class="btn btn-secondary back-to-dashboard" style="padding: 8px 12px;">
                                    <i class="fas fa-arrow-left"></i>
                                </button>
                                <h3>Faculty Directory</h3>
                            </div>
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
                                    ${allFaculty.length === 0 ? `<tr><td colspan="6" style="text-align: center; padding: 20px;">Fetching faculty data...</td></tr>` : allFaculty.map(f => `
                                        <tr>
                                            <td>#${f.id}</td>
                                            <td>${f.name}</td>
                                            <td><span class="dept-badge">${f.subject}</span></td>
                                            <td>${f.experience} Experience</td>
                                            <td>${f.contact}</td>
                                            <td>
                                                <button class="btn-edit"><i class="fas fa-edit"></i></button>
                                                <button class="btn-delete"><i class="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    `).join('')}
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
                            <div style="display: flex; align-items: center; gap: 15px;">
                                <button class="btn btn-secondary back-to-dashboard" style="padding: 8px 12px;">
                                    <i class="fas fa-arrow-left"></i>
                                </button>
                                <h3>Departments</h3>
                            </div>
                            <button class="btn btn-primary"><i class="fas fa-plus"></i> Add Department</button>
                        </div>
                        <div class="departments-grid">
                            ${allDepartments.length === 0 ? `<p style="text-align: center; width: 100%;">Loading departments...</p>` : allDepartments.map(d => `
                                <div class="dept-card">
                                    <h4>${d.name}</h4>
                                    <p><strong>HOD:</strong> ${d.head}</p>
                                    <p><strong>Students:</strong> ${d.students}+</p>
                                    <p><strong>Status:</strong> ${d.status}</p>
                                    <button class="btn btn-secondary" style="margin-top: 10px; width: 100%;">View Details</button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                break;

            case 'early-leave':
                appView.innerHTML = `
                    <div class="view early-leave-view" id="early-leave">
                        <div class="section-header" style="margin-bottom: 24px;">
                            <div style="display: flex; align-items: center; gap: 15px;">
                                <button class="btn btn-secondary back-to-dashboard" style="padding: 8px 12px;">
                                    <i class="fas fa-arrow-left"></i>
                                </button>
                                <h3>Early Leave Management</h3>
                            </div>
                        </div>
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

            case 'notifications':
                appView.innerHTML = `
                    <div class="notifications-view">
                        <div class="section-header">
                            <div style="display: flex; align-items: center; gap: 15px;">
                                <button class="btn btn-secondary back-to-dashboard" style="padding: 8px 12px;">
                                    <i class="fas fa-arrow-left"></i>
                                </button>
                                <h3>All Notifications</h3>
                            </div>
                            <button class="btn btn-secondary mark-all-read-full">Mark All as Read</button>
                        </div>
                        <div class="notification-full-list" style="background: white; border-radius: 16px; border: 2px solid var(--border); overflow: hidden;">
                            <div class="notification-item unread" style="padding: 20px; border-bottom: 1px solid var(--border); display: flex; gap: 20px; transition: 0.3s; cursor: pointer;">
                                <div class="notification-icon-wrapper blue" style="width: 45px; height: 45px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: rgba(74, 108, 247, 0.1); color: #4a6cf7;"><i class="fas fa-user-plus"></i></div>
                                <div class="notification-content">
                                    <h4 style="margin-bottom: 5px;">New Student Registered</h4>
                                    <p style="color: grey; margin-bottom: 5px;">Rahul Sharma joined BCA Department</p>
                                    <span class="notification-time" style="font-size: 12px; color: #95a5a6;">5 minutes ago</span>
                                </div>
                            </div>
                            <div class="notification-item unread" style="padding: 20px; border-bottom: 1px solid var(--border); display: flex; gap: 20px; transition: 0.3s; cursor: pointer;">
                                <div class="notification-icon-wrapper green" style="width: 45px; height: 45px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: rgba(38, 222, 129, 0.1); color: #26de81;"><i class="fas fa-check-circle"></i></div>
                                <div class="notification-content">
                                    <h4 style="margin-bottom: 5px;">Leave Request Approved</h4>
                                    <p style="color: grey; margin-bottom: 5px;">Priya Singh's leave request approved</p>
                                    <span class="notification-time" style="font-size: 12px; color: #95a5a6;">1 hour ago</span>
                                </div>
                            </div>
                             <div class="notification-item unread" style="padding: 20px; border-bottom: 1px solid var(--border); display: flex; gap: 20px; transition: 0.3s; cursor: pointer;">
                                <div class="notification-icon-wrapper orange" style="width: 45px; height: 45px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: rgba(254, 211, 48, 0.1); color: #fed330;"><i class="fas fa-exclamation-triangle"></i></div>
                                <div class="notification-content">
                                    <h4 style="margin-bottom: 5px;">Pending Action</h4>
                                    <p style="color: grey; margin-bottom: 5px;">3 early leave requests need review</p>
                                    <span class="notification-time" style="font-size: 12px; color: #95a5a6;">2 hours ago</span>
                                </div>
                            </div>
                            <div class="notification-item" style="padding: 20px; border-bottom: 1px solid var(--border); display: flex; gap: 20px; transition: 0.3s; cursor: pointer;">
                                <div class="notification-icon-wrapper purple" style="width: 45px; height: 45px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: rgba(108, 92, 231, 0.1); color: #6c5ce7;"><i class="fas fa-calendar-alt"></i></div>
                                <div class="notification-content">
                                    <h4 style="margin-bottom: 5px;">Event Reminder</h4>
                                    <p style="color: grey; margin-bottom: 5px;">Faculty meeting scheduled for tomorrow</p>
                                    <span class="notification-time" style="font-size: 12px; color: #95a5a6;">5 hours ago</span>
                                </div>
                            </div>
                            <div class="notification-item" style="padding: 20px; border-bottom: 1px solid var(--border); display: flex; gap: 20px; transition: 0.3s; cursor: pointer;">
                                <div class="notification-icon-wrapper blue" style="width: 45px; height: 45px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: rgba(74, 108, 247, 0.1); color: #4a6cf7;"><i class="fas fa-file-alt"></i></div>
                                <div class="notification-content">
                                    <h4 style="margin-bottom: 5px;">Report Generated</h4>
                                    <p style="color: grey; margin-bottom: 5px;">Monthly attendance report is ready</p>
                                    <span class="notification-time" style="font-size: 12px; color: #95a5a6;">1 day ago</span>
                                </div>
                            </div>
                             <div class="notification-item" style="padding: 20px; border-bottom: 1px solid var(--border); display: flex; gap: 20px; transition: 0.3s; cursor: pointer;">
                                <div class="notification-icon-wrapper green" style="width: 45px; height: 45px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: rgba(38, 222, 129, 0.1); color: #26de81;"><i class="fas fa-user-check"></i></div>
                                <div class="notification-content">
                                    <h4 style="margin-bottom: 5px;">Faculty Joined</h4>
                                    <p style="color: grey; margin-bottom: 5px;">New professor joined the Physics dept</p>
                                    <span class="notification-time" style="font-size: 12px; color: #95a5a6;">2 days ago</span>
                                </div>
                            </div>
                            <div class="notification-item" style="padding: 20px; border-bottom: 1px solid var(--border); display: flex; gap: 20px; transition: 0.3s; cursor: pointer;">
                                <div class="notification-icon-wrapper orange" style="width: 45px; height: 45px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: rgba(254, 211, 48, 0.1); color: #fed330;"><i class="fas fa-wallet"></i></div>
                                <div class="notification-content">
                                    <h4 style="margin-bottom: 5px;">Fee Payment</h4>
                                    <p style="color: grey; margin-bottom: 5px;">System processed 50 student fee payments</p>
                                    <span class="notification-time" style="font-size: 12px; color: #95a5a6;">3 days ago</span>
                                </div>
                            </div>
                             <div class="notification-item" style="padding: 20px; border-bottom: 1px solid var(--border); display: flex; gap: 20px; transition: 0.3s; cursor: pointer;">
                                <div class="notification-icon-wrapper blue" style="width: 45px; height: 45px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: rgba(74, 108, 247, 0.1); color: #4a6cf7;"><i class="fas fa-envelope"></i></div>
                                <div class="notification-content">
                                    <h4 style="margin-bottom: 5px;">New Message from HOD</h4>
                                    <p style="color: grey; margin-bottom: 5px;">Please review the revised syllabus for next semester</p>
                                    <span class="notification-time" style="font-size: 12px; color: #95a5a6;">4 days ago</span>
                                </div>
                            </div>
                             <div class="notification-item" style="padding: 20px; border-bottom: 1px solid var(--border); display: flex; gap: 20px; transition: 0.3s; cursor: pointer;">
                                <div class="notification-icon-wrapper purple" style="width: 45px; height: 45px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: rgba(108, 92, 231, 0.1); color: #6c5ce7;"><i class="fas fa-bullhorn"></i></div>
                                <div class="notification-content">
                                    <h4 style="margin-bottom: 5px;">System Maintenance</h4>
                                    <p style="color: grey; margin-bottom: 5px;">Scheduled maintenance on Sunday midnight</p>
                                    <span class="notification-time" style="font-size: 12px; color: #95a5a6;">5 days ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Re-attach handlers for buttons in the new view
                const backBtn = appView.querySelector('.back-to-dashboard');
                if (backBtn) {
                    backBtn.addEventListener('click', () => {
                        // Update UI to Home/Dashboard
                        const dashboardNavItem = document.querySelector('.nav-item[data-page="dashboard"]');
                        if (dashboardNavItem) {
                            dashboardNavItem.click(); // Trigger the existing nav click logic
                        } else {
                            renderPage('dashboard');
                            pageTitle.textContent = 'Dashboard';
                        }
                    });
                }

                const fullMarkBtn = appView.querySelector('.mark-all-read-full');
                if (fullMarkBtn) {
                    fullMarkBtn.addEventListener('click', () => {
                        appView.querySelectorAll('.notification-item.unread').forEach(item => item.classList.remove('unread'));
                        updateNotificationBadge();
                    });
                }

                // Also add click handler for items in full list
                appView.querySelectorAll('.notification-item').forEach(item => {
                    item.addEventListener('click', () => {
                        item.classList.remove('unread');
                        updateNotificationBadge();
                    });
                });
                break;

            case 'parent-sms':
                const grades = [...new Set(allStudents.map(s => s.grade))];
                const smsTemplates = [
                    { id: 'attendance', name: 'Attendance Alert', text: 'Dear Parent, your child was absent today. Please provide a reason.' },
                    { id: 'fees', name: 'Fee Reminder', text: 'Dear Parent, this is a reminder regarding the pending fees for this quarter.' },
                    { id: 'exam', name: 'Exam Schedule', text: 'Dear Parent, the exam schedule for the upcoming unit test has been posted.' },
                    { id: 'general', name: 'General Notice', text: 'Dear Parent, please check the dashboard for a new important circular.' }
                ];

                appView.innerHTML = `
                    <div class="parent-sms-view animate-fade-in">
                        <div class="section-header" style="margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
                            <div style="display: flex; align-items: center; gap: 15px;">
                                <button class="btn btn-secondary back-to-dashboard" style="padding: 8px 12px;">
                                    <i class="fas fa-arrow-left"></i>
                                </button>
                                <h3>Parent Communication System</h3>
                            </div>
                        </div>

                        <div class="sms-tabs" style="display: flex; gap: 15px; margin-bottom: 24px; border-bottom: 2px solid #f4f7fe;">
                            <button id="composeTab" class="sms-tab-btn active" style="padding: 10px 20px; border: none; background: none; font-weight: 600; cursor: pointer; border-bottom: 2px solid #4318FF; color: #4318FF;">Compose Message</button>
                            <button id="historyTab" class="sms-tab-btn" style="padding: 10px 20px; border: none; background: none; font-weight: 600; cursor: pointer; color: #a3aed0;">Sent History</button>
                        </div>

                        <div id="composeView">
                            <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px;">
                                <div class="card" style="padding: 24px; background: white; border-radius: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                                    <h4 style="margin-top: 0; margin-bottom: 20px; color: #1B2559;"><i class="fas fa-edit" style="color: #4318FF; margin-right: 10px;"></i> Compose Message</h4>
                                    
                                    <div class="form-group" style="margin-bottom: 20px;">
                                        <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #2B3674;">Message Template</label>
                                        <select id="smsTemplate" class="form-input" style="width: 100%; padding: 12px; border: 1px solid #E0E5F2; border-radius: 12px;">
                                            <option value="">Custom Message</option>
                                            ${smsTemplates.map(t => `<option value="${t.id}">${t.name}</option>`).join('')}
                                        </select>
                                    </div>

                                    <div class="form-group" style="margin-bottom: 20px;">
                                        <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #2B3674;">Message Content</label>
                                        <textarea id="smsContent" class="form-input" style="width: 100%; padding: 12px; border: 1px solid #E0E5F2; border-radius: 12px; min-height: 150px; resize: vertical;" placeholder="Type your message here..."></textarea>
                                        <div style="text-align: right; font-size: 12px; color: #A3AED0; margin-top: 8px;">
                                            <span id="charCount">0</span> characters | <span id="unitCount">0</span> SMS units
                                        </div>
                                    </div>

                                    <button id="sendSmsBtn" class="btn btn-primary" style="width: 100%; padding: 14px; font-weight: 700; border-radius: 12px; background: #4318FF; color: white;">
                                        <i class="fas fa-paper-plane" style="margin-right: 8px;"></i> Send Notification
                                    </button>
                                </div>

                                <div class="card" style="padding: 24px; background: white; border-radius: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                                    <h4 style="margin-top: 0; margin-bottom: 20px; color: #1B2559;"><i class="fas fa-users" style="color: #4318FF; margin-right: 10px;"></i> Recipients</h4>
                                    
                                    <div class="recipient-type-selector" style="display: flex; gap: 8px; margin-bottom: 20px; background: #F4F7FE; padding: 5px; border-radius: 15px;">
                                        <button class="r-type-btn active" data-type="all" style="flex: 1; padding: 10px; border: none; border-radius: 12px; font-weight: 600; cursor: pointer; background: #4318FF; color: white;">All</button>
                                        <button class="r-type-btn" data-type="grade" style="flex: 1; padding: 10px; border: none; border-radius: 12px; font-weight: 600; cursor: pointer; background: transparent; color: #A3AED0;">Grade</button>
                                        <button class="r-type-btn" data-type="individual" style="flex: 1; padding: 10px; border: none; border-radius: 12px; font-weight: 600; cursor: pointer; background: transparent; color: #A3AED0;">Individual</button>
                                    </div>

                                    <div id="grade-selector" style="display: none; margin-bottom: 15px;">
                                        <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #2B3674;">Select Grade</label>
                                        <select id="smsGrade" style="width: 100%; padding: 12px; border: 1px solid #E0E5F2; border-radius: 12px;">
                                            <option value="">Choose Grade...</option>
                                            ${grades.map(g => `<option value="${g}">${g}</option>`).join('')}
                                        </select>
                                    </div>

                                    <div id="individual-selector" style="display: none; max-height: 350px; overflow-y: auto; border: 1px solid #E0E5F2; border-radius: 12px; background: #F4F7FE;">
                                        ${allStudents.map(s => `
                                            <div class="student-item" style="padding: 12px 16px; border-bottom: 1px solid #E0E5F2; display: flex; align-items: center; gap: 12px; cursor: pointer;">
                                                <input type="checkbox" class="student-checkbox" value="${s.parentPhone}" style="width: 18px; height: 18px; border-radius: 4px; border: 2px solid #4318FF;">
                                                <div style="flex: 1;">
                                                    <p style="margin: 0; font-weight: 700; color: #2B3674; font-size: 14px;">${s.name}</p>
                                                    <p style="margin: 0; font-size: 12px; color: #A3AED0;">${s.grade} • ${s.parentPhone}</p>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>

                                    <div id="selection-summary" style="margin-top: 20px; padding: 15px; background: #F4F7FE; border-radius: 15px; text-align: center;">
                                        <span style="font-size: 14px; color: #2B3674; font-weight: 500;">Targeting <strong id="recipientCount" style="color: #4318FF; font-size: 18px;">${allStudents.length}</strong> parents</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="historyView" style="display: none;">
                            <div class="card" style="padding: 24px; background: white; border-radius: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                                    <h4 style="margin: 0; color: #1B2559;"><i class="fas fa-history" style="color: #4318FF; margin-right: 10px;"></i> Communication Logs</h4>
                                    <button onclick="fetchData()" class="btn btn-secondary" style="font-size: 12px; padding: 8px 15px; border-radius: 10px;">
                                        <i class="fas fa-sync-alt" style="margin-right: 5px;"></i> Refresh
                                    </button>
                                </div>
                                <div id="smsHistoryList">
                                    ${smsHistory.length === 0 ? `
                                        <div style="text-align: center; padding: 60px 20px;">
                                            <i class="fas fa-comment-slash" style="font-size: 40px; color: #E0E5F2; margin-bottom: 15px;"></i>
                                            <p style="color: #A3AED0;">No communication history found.</p>
                                        </div>
                                    ` : [...smsHistory].reverse().map(sms => `
                                        <div class="history-item" style="padding: 16px; border: 1px solid #F4F7FE; border-radius: 15px; margin-bottom: 12px; background: #F8F9FF;">
                                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                                <span style="font-weight: 700; color: #4318FF; font-size: 14px;">
                                                    <i class="fas fa-paper-plane" style="margin-right: 8px; font-size: 12px;"></i>
                                                    Sent to ${sms.recipients.length} Parents
                                                </span>
                                                <span style="font-size: 11px; color: #A3AED0; background: white; padding: 2px 8px; border-radius: 8px;">
                                                    ${new Date(sms.timestamp).toLocaleString()} • ${sms.source}
                                                </span>
                                            </div>
                                            <p style="margin: 0; font-size: 14px; color: #2B3674; font-style: italic; background: white; padding: 12px; border-radius: 10px; border: 1px solid #F4F7FE;">
                                                "${sms.message}"
                                            </p>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Logic for Admin Parent SMS
                const cTab = document.getElementById('composeTab');
                const hTab = document.getElementById('historyTab');
                const cView = document.getElementById('composeView');
                const hView = document.getElementById('historyView');

                const templateSelect = document.getElementById('smsTemplate');
                const smsContent = document.getElementById('smsContent');
                const charCount = document.getElementById('charCount');
                const unitCount = document.getElementById('unitCount');
                const sendBtn = document.getElementById('sendSmsBtn');
                const typeBtns = document.querySelectorAll('.r-type-btn');
                const gradeSelector = document.getElementById('grade-selector');
                const indSelector = document.getElementById('individual-selector');
                const rCount = document.getElementById('recipientCount');
                const gradeSelect = document.getElementById('smsGrade');

                let recipientType = 'all';

                // Tab Switching
                cTab.addEventListener('click', () => {
                    cTab.style.color = '#4318FF'; cTab.style.borderBottom = '2px solid #4318FF';
                    hTab.style.color = '#A3AED0'; hTab.style.borderBottom = 'none';
                    cView.style.display = 'block'; hView.style.display = 'none';
                });

                hTab.addEventListener('click', () => {
                    hTab.style.color = '#4318FF'; hTab.style.borderBottom = '2px solid #4318FF';
                    cTab.style.color = '#A3AED0'; cTab.style.borderBottom = 'none';
                    hView.style.display = 'block'; cView.style.display = 'none';
                });

                // Template Logic
                templateSelect.addEventListener('change', () => {
                    const selected = smsTemplates.find(t => t.id === templateSelect.value);
                    smsContent.value = selected ? selected.text : '';
                    updateCounters();
                });

                function updateCounters() {
                    const len = smsContent.value.length;
                    charCount.textContent = len;
                    unitCount.textContent = Math.ceil(len / 160);
                }

                smsContent.addEventListener('input', updateCounters);

                // Recipient Logic
                typeBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        typeBtns.forEach(b => {
                            b.classList.remove('active');
                            b.style.background = 'transparent';
                            b.style.color = '#A3AED0';
                        });
                        btn.classList.add('active');
                        btn.style.background = '#4318FF';
                        btn.style.color = 'white';
                        recipientType = btn.getAttribute('data-type');

                        gradeSelector.style.display = recipientType === 'grade' ? 'block' : 'none';
                        indSelector.style.display = recipientType === 'individual' ? 'block' : 'none';
                        updateRecipientCount();
                    });
                });

                function updateRecipientCount() {
                    if (recipientType === 'all') {
                        rCount.textContent = allStudents.length;
                    } else if (recipientType === 'grade') {
                        const grade = gradeSelect.value;
                        const count = allStudents.filter(s => s.grade === grade).length;
                        rCount.textContent = count;
                    } else {
                        const count = document.querySelectorAll('.student-checkbox:checked').length;
                        rCount.textContent = count;
                    }
                }

                gradeSelect.addEventListener('change', updateRecipientCount);
                document.querySelectorAll('.student-checkbox').forEach(cb => {
                    cb.addEventListener('change', updateRecipientCount);
                });

                // Pre-select student if pending
                if (window.pendingSmsId) {
                    const student = allStudents.find(s => s.id === window.pendingSmsId);
                    if (student) {
                        typeBtns[2].click(); // Select individual
                        const cb = document.querySelector(`.student-checkbox[value="${student.parentPhone}"]`);
                        if (cb) {
                            cb.checked = true;
                            updateRecipientCount();
                        }
                    }
                    window.pendingSmsId = null;
                }

                // Send Logic
                sendBtn.addEventListener('click', async () => {
                    let recipients = [];
                    if (recipientType === 'all') {
                        recipients = allStudents.map(s => s.parentPhone);
                    } else if (recipientType === 'grade') {
                        const grade = gradeSelect.value;
                        if (!grade) return alert('Please select a grade');
                        recipients = allStudents.filter(s => s.grade === grade).map(s => s.parentPhone);
                    } else {
                        const checked = document.querySelectorAll('.student-checkbox:checked');
                        recipients = Array.from(checked).map(cb => cb.value);
                    }

                    if (recipients.length === 0) return alert('Please select recipients');
                    if (!smsContent.value.trim()) return alert('Please enter message content');

                    sendBtn.disabled = true;
                    sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

                    try {
                        const response = await fetch('http://localhost:5000/api/sms/send', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                recipients,
                                message: smsContent.value,
                                source: 'Admin Dashboard'
                            })
                        });
                        const data = await response.json();
                        if (data.success) {
                            alert(`Success: ${data.message}`);
                            smsContent.value = '';
                            templateSelect.value = '';
                            updateCounters();
                            fetchData(); // Refresh history data
                        }
                    } catch (err) {
                        alert('Error connecting to server');
                    } finally {
                        sendBtn.disabled = false;
                        sendBtn.innerHTML = '<i class="fas fa-paper-plane" style="margin-right: 8px;"></i> Send Notification';
                    }
                });
                break;

            case 'settings':
                appView.innerHTML = `
                     <div class="settings-view">
                        <div class="section-header" style="margin-bottom: 24px;">
                            <div style="display: flex; align-items: center; gap: 15px;">
                                <button class="btn btn-secondary back-to-dashboard" style="padding: 8px 12px;">
                                    <i class="fas fa-arrow-left"></i>
                                </button>
                                <h3>System Settings</h3>
                            </div>
                        </div>
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

        // --- Common Back Button Logic ---
        const allBackBtns = appView.querySelectorAll('.back-to-dashboard');
        allBackBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const dashboardNavItem = document.querySelector('.nav-item[data-page="dashboard"]');
                if (dashboardNavItem) {
                    dashboardNavItem.click();
                } else {
                    renderPage('dashboard');
                    pageTitle.textContent = 'Dashboard';
                }
            });
        });
        // --- End Common Back Button Logic ---
    }

    window.notifyParent = function (studentId) {
        window.pendingSmsId = studentId;
        const smsNavItem = document.querySelector('.nav-item[data-page="parent-sms"]');
        if (smsNavItem) {
            smsNavItem.click();
        } else {
            renderPage('parent-sms');
            pageTitle.textContent = 'Parent SMS';
        }
    };
});
