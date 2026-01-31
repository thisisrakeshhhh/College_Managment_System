import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import admin from 'firebase-admin';

import Student from './models/student.model.js';
import Faculty from './models/faculty.model.js';
import Department from './models/department.model.js';
import LeaveRequest from './models/leave.model.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy Data Fallback (for testing without DB)
const dummyStudents = [
    { id: 'STU001', name: 'Amit Sharma', course: 'B.Tech CS', grade: 'X-B', parentPhone: '+91 9876543210', status: 'Active' },
    { id: 'STU002', name: 'Priya Patel', course: 'BBA', grade: 'XII-A', parentPhone: '+91 8765432109', status: 'Pending' }
];

// Routes
app.get('/', (req, res) => {
    res.send('College Management API is running...');
});

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is healthy', db: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected' });
});

// APIs with DB Fallback
app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students.length > 0 ? students : dummyStudents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/faculty', async (req, res) => {
    try {
        const faculty = await Faculty.find();
        res.status(200).json(faculty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/departments', async (req, res) => {
    try {
        const departments = await Department.find();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/leaves', async (req, res) => {
    try {
        const leaves = await LeaveRequest.find();
        res.status(200).json(leaves);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

let smsHistory = []; // Keeping as local history or can move to model

app.get('/api/sms/history', (req, res) => res.status(200).json(smsHistory));

// Mock SMS API Route
app.post('/api/sms/send', (req, res) => {
    const { recipients, message, source } = req.body;
    if (!recipients || !message) return res.status(400).json({ success: false, message: 'Recipients and message are required' });

    const newSms = { id: `SMS${Date.now()}`, recipients, message, timestamp: new Date().toISOString(), source: source || 'Unknown' };
    smsHistory.unshift(newSms);
    res.status(200).json({ success: true, message: 'SMS notifications sent successfully (Mocked)', data: newSms });
});

// Seed Initial Data (Helper)
app.post('/api/seed', async (req, res) => {
    try {
        await Student.deleteMany({});
        await Student.insertMany(dummyStudents);
        res.status(200).json({ message: 'Database seeded successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// MongoDB Connection
const connectDB = async () => {
    try {
        if (process.env.MONGODB_URI) {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('MongoDB Connected successfully');
        } else {
            console.warn('MONGODB_URI not found. Running with dummy data fallback.');
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
