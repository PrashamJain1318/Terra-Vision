import mongoose from 'mongoose';

const routeHistorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    origin: {
      name: { type: String },
      lat: { type: Number },
      lng: { type: Number },
    },
    destination: {
      name: { type: String },
      lat: { type: Number },
      lng: { type: Number },
    },
    waypoints: [
      {
        name: { type: String },
        lat: { type: Number },
        lng: { type: Number },
      },
    ],
    travelMode: {
      type: String,
      default: 'driving',
    },
    distance: {
      type: String,
      default: '0 km',
    },
    duration: {
      type: String,
      default: '0 mins',
    },
    polyline: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const RouteHistory = mongoose.model('RouteHistory', routeHistorySchema);

export default RouteHistory;
