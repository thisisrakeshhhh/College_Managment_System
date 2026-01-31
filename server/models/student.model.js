import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    course: { type: String, required: true },
    grade: { type: String, required: true },
    parentPhone: { type: String, required: true },
    status: { type: String, default: 'Active' },
    email: { type: String },
    enrollmentDate: { type: Date, default: Date.now }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);
export default Student;
