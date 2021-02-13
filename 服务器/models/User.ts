import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    max: 255
  },
  lastName: {
    type: String,
    required: true,
    max: 255
  },
  email: {
    type: String,
    required: true,
    max: 255
  },
  password: {
    type: String,
    required: true,
    max: 1024
  }
}, {
  timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
})

export = mongoose.model('User', UserSchema);