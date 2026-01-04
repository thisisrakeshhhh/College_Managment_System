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
