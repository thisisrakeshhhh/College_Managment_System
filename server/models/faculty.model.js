import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    subject: { type: String, required: true },
    experience: { type: String, required: true },
    contact: { type: String, required: true },
    department: { type: String },
    joiningDate: { type: Date, default: Date.now }
}, { timestamps: true });

const Faculty = mongoose.model('Faculty', facultySchema);
export default Faculty;
