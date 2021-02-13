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
  passwordHash: {
    type: String,
    required: true,
    max: 1024
  }
}, {
  timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
})

interface IUser extends mongoose.Document {
  firstName: string,
  lastName: string,
  email: string,
  passwordHash: string
}

export = mongoose.model<IUser>('User', UserSchema);