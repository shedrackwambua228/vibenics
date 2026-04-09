import mongoose, { Schema, Document, models, Model } from 'mongoose';

export enum ReleaseStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  LIVE = 'LIVE',
  REJECTED = 'REJECTED',
}

export interface IRelease extends Document {
  title: string;
  artistName: string;
  genre: string;
  releaseDate: Date;
  status: ReleaseStatus;
  coverArtUrl?: string;
  userId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const ReleaseSchema = new Schema<IRelease>(
  {
    title: { type: String, required: true },
    artistName: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    status: { type: String, enum: Object.values(ReleaseStatus), default: ReleaseStatus.PENDING },
    coverArtUrl: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

const Release: Model<IRelease> = models.Release || mongoose.model<IRelease>('Release', ReleaseSchema);

export default Release;
