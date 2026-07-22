import mongoose from 'mongoose';

const savedHiddenGemSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    hiddenGem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HiddenGem',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const SavedHiddenGem = mongoose.model('SavedHiddenGem', savedHiddenGemSchema);

export default SavedHiddenGem;
