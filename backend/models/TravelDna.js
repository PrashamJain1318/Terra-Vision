import mongoose from 'mongoose';

const travelDnaSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, index: true },
    explorer: { type: Number, default: 89 },
    foodie: { type: Number, default: 92 },
    nature: { type: Number, default: 76 },
    luxury: { type: Number, default: 34 },
    adventure: { type: Number, default: 95 },
    history: { type: Number, default: 81 },
  },
  { timestamps: true }
);

export const TravelDna = mongoose.models.TravelDna || mongoose.model('TravelDna', travelDnaSchema);
export default TravelDna;
