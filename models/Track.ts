import mongoose, { Schema, Document, models, Model } from 'mongoose';

export interface ITrack extends Document {
  title: string;
  audioUrl: string;
  duration?: number;
  releaseId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const TrackSchema = new Schema<ITrack>(
  {
    title: { type: String, required: true },
    audioUrl: { type: String, required: true },
    duration: { type: Number },
    releaseId: { type: Schema.Types.ObjectId, ref: 'Release', required: true },
  },
  { timestamps: true }
);

const Track: Model<ITrack> = models.Track || mongoose.model<ITrack>('Track', TrackSchema);

export default Track;
