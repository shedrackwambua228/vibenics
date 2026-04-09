import mongoose, { Schema, Document, models, Model } from 'mongoose';

export enum Role {
  ARTIST = 'ARTIST',
  LABEL = 'LABEL',
  MANAGER = 'MANAGER',
  ADMIN = 'ADMIN',
}

export interface IUser extends Document {
  name: string;
  email: string;
  image?: string;
  hashedPassword?: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    hashedPassword: { type: String }, // optional if using OAuth
    role: { type: String, enum: Object.values(Role), default: Role.ARTIST },
  },
  { timestamps: true }
);

const User: Model<IUser> = models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
