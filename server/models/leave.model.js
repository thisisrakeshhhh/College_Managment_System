import mongoose from 'mongoose';

const leaveRequestSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    student: { type: String, required: true },
    roll: { type: String, required: true },
    reason: { type: String, required: true },
    time: { type: String, required: true },
    status: { type: String, default: 'Pending' }
}, { timestamps: true });

const LeaveRequest = mongoose.model('LeaveRequest', leaveRequestSchema);
export default LeaveRequest;
