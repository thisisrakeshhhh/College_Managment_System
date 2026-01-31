import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    head: { type: String, required: true },
    students: { type: Number, default: 0 },
    status: { type: String, default: 'Active' }
}, { timestamps: true });

const Department = mongoose.model('Department', departmentSchema);
export default Department;
