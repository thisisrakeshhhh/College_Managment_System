import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import admin from 'firebase-admin';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('College Management API is running...');
});

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is healthy' });
});

// Dummy Data
const students = [
    { id: 'STU001', name: 'Amit Sharma', course: 'B.Tech CS', grade: 'X-B', parentPhone: '+91 9876543210', status: 'Active' },
    { id: 'STU002', name: 'Priya Patel', course: 'BBA', grade: 'XII-A', parentPhone: '+91 8765432109', status: 'Pending' },
    { id: 'STU003', name: 'Rohan Singh', course: 'B.Sc Physics', grade: 'IX-C', parentPhone: '+91 7654321098', status: 'Active' },
    { id: 'STU004', name: 'Sneha Gupta', course: 'Grade XII', grade: 'XI-B', parentPhone: '+91 6543210987', status: 'Active' },
    { id: 'STU005', name: 'Rahul Kumar', course: 'B.Tech CS', grade: 'X-B', parentPhone: '+91 9988776655', status: 'Active' },
    { id: 'STU006', name: 'Anjali Verma', course: 'B.Com', grade: 'XII-A', parentPhone: '+91 8877665544', status: 'Active' },
    { id: 'STU007', name: 'Vikram Singh', course: 'B.Sc Chemistry', grade: 'IX-C', parentPhone: '+91 7766554433', status: 'Active' },
    { id: 'STU008', name: 'Kavita Reddy', course: 'B.Arch', grade: 'XI-B', parentPhone: '+91 9122334455', status: 'Active' },
    { id: 'STU009', name: 'Siddharth Jain', course: 'B.Tech IT', grade: 'X-A', parentPhone: '+91 9223344556', status: 'Active' },
    { id: 'STU010', name: 'Meera Nair', course: 'BA English', grade: 'XII-B', parentPhone: '+91 9334455667', status: 'Active' },
    { id: 'STU011', name: 'Arjun Mehra', course: 'B.Com Hons', grade: 'XI-A', parentPhone: '+91 9445566778', status: 'Active' },
    { id: 'STU012', name: 'Zoya Khan', course: 'B.Sc Bio', grade: 'X-C', parentPhone: '+91 9556677889', status: 'Active' }
];

const faculty = [
    { id: 'FAC001', name: 'Dr. Sarah Wilson', subject: 'Physics', experience: '8 Years', contact: 'sarah.w@college.edu' },
    { id: 'FAC002', name: 'Prof. Rajesh Kumar', subject: 'Mathematics', experience: '12 Years', contact: 'rajesh.k@college.edu' },
    { id: 'FAC003', name: 'Mrs. Emily Davis', subject: 'English', experience: '5 Years', contact: 'emily.d@college.edu' },
    { id: 'FAC004', name: 'Mr. John Smith', subject: 'Chemistry', experience: '9 Years', contact: 'john.s@college.edu' },
    { id: 'FAC005', name: 'Ms. Priya Patel', subject: 'Computer Science', experience: '4 Years', contact: 'priya.p@college.edu' }
];

const departments = [
    { id: 'DEPT01', name: 'Computer Science', head: 'Dr. A. Mehra', students: 450, status: 'Active' },
    { id: 'DEPT02', name: 'Mechanical Eng.', head: 'Dr. S. Khan', students: 380, status: 'Active' },
    { id: 'DEPT03', name: 'Business Admin.', head: 'Prof. V. Sharma', students: 520, status: 'Active' },
    { id: 'DEPT04', name: 'Physics Dept.', head: 'Dr. L. Roberts', students: 120, status: 'Active' }
];

const leaveRequests = [
    { id: 'LR1001', student: 'John Doe', roll: '1011', reason: 'Medical Emergency', time: '10:30 AM', status: 'Pending' },
    { id: 'LR1002', student: 'Jane Smith', roll: '1025', reason: 'Family Event', time: '11:45 AM', status: 'Approved' },
    { id: 'LR1003', student: 'Amit Singh', roll: '1088', reason: 'Other', time: '01:15 PM', status: 'Pending' }
];

let smsHistory = [
    {
        id: 'SMS_INIT_1',
        recipients: ['+91 9876543210', '+91 9988776655'],
        message: 'Dear Parent, this is a test notification for Grade X-B students regarding the upcoming workshop.',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        source: 'Admin Dashboard'
    },
    {
        id: 'SMS_INIT_2',
        recipients: ['+91 8765432109'],
        message: 'Reminder: Fee payment deadline for Quarter 3 is Jan 15th.',
        timestamp: new Date(Date.now() - 86400000).toISOString(),
        source: 'Faculty Dashboard'
    }
];

// APIs
app.get('/api/students', (req, res) => res.status(200).json(students));
app.get('/api/faculty', (req, res) => res.status(200).json(faculty));
app.get('/api/departments', (req, res) => res.status(200).json(departments));
app.get('/api/leaves', (req, res) => res.status(200).json(leaveRequests));
app.get('/api/sms/history', (req, res) => res.status(200).json(smsHistory));

// Mock SMS API Route
app.post('/api/sms/send', (req, res) => {
    const { recipients, message, source } = req.body;

    if (!recipients || !message) {
        return res.status(400).json({ success: false, message: 'Recipients and message are required' });
    }

    const newSms = {
        id: `SMS${Date.now()}`,
        recipients,
        message,
        timestamp: new Date().toISOString(),
        source: source || 'Unknown'
    };

    smsHistory.unshift(newSms); // Add to history

    console.log(`--- SMS NOTIFICATION (${newSms.source}) ---`);
    console.log(`To: ${recipients.join(', ')}`);
    console.log(`Message: ${message}`);
    console.log('------------------------');

    res.status(200).json({
        success: true,
        message: 'SMS notifications sent successfully (Mocked)',
        data: newSms
    });
});

// MongoDB Connection (To be configured in .env)
const connectDB = async () => {
    try {
        if (process.env.MONGODB_URI) {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('MongoDB Connected successfully');
        } else {
            console.log('MongoDB URI not found in environment. Please add it to server/.env');
        }
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
    }
};

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});
