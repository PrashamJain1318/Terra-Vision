import mongoose from 'mongoose';
import User from '../models/User.js';
import Trip from '../models/Trip.js';
import Planner from '../models/Planner.js';
import Memory from '../models/Memory.js';
import SavedPlace from '../models/SavedPlace.js';
import AIHistory from '../models/AIHistory.js';

const validateSchemas = async () => {
  try {
    console.log('Testing Mongoose schemas validation rules locally...');
    
    // Mock user model instantiation
    const testUser = new User({
      name: 'Prasham Jain',
      email: 'prasham@example.com',
      password: 'securepassword123',
    });
    await testUser.validate();
    console.log('✔ User validation passed.');

    // Mock trip instantiation
    const testTrip = new Trip({
      user: new mongoose.Types.ObjectId(),
      title: 'Himalayan Escape',
      destination: {
        name: 'Manali, HP',
        coordinates: { lat: 32.2396, lng: 77.1887 },
      },
      startDate: new Date(),
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    await testTrip.validate();
    console.log('✔ Trip validation passed.');

    // Mock Planner instantiation
    const testPlanner = new Planner({
      trip: new mongoose.Types.ObjectId(),
      user: new mongoose.Types.ObjectId(),
      itinerary: [
        {
          dayNumber: 1,
          date: new Date(),
          activities: [
            {
              name: 'Solang Valley Trek',
              description: 'Hiking and paragliding activities',
              time: '10:00 AM',
              cost: 1500,
            },
          ],
        },
      ],
    });
    await testPlanner.validate();
    console.log('✔ Planner validation passed.');

    // Mock Memory instantiation
    const testMemory = new Memory({
      user: new mongoose.Types.ObjectId(),
      trip: new mongoose.Types.ObjectId(),
      title: 'Sunrise at Ridge',
      media: [{ url: 'https://cloudinary.com/xyz', publicId: 'asset123' }],
    });
    await testMemory.validate();
    console.log('✔ Memory validation passed.');

    // Mock SavedPlace instantiation
    const testPlace = new SavedPlace({
      user: new mongoose.Types.ObjectId(),
      placeId: 'google_place_xyz',
      name: 'Cafe Johnson',
      coordinates: { lat: 32.2, lng: 77.1 },
    });
    await testPlace.validate();
    console.log('✔ SavedPlace validation passed.');

    // Mock AIHistory instantiation
    const testHistory = new AIHistory({
      user: new mongoose.Types.ObjectId(),
      interactionType: 'vision',
      prompt: 'Identify this landmark',
      response: 'It is Hadimba Temple',
    });
    await testHistory.validate();
    console.log('✔ AIHistory validation passed.');

    console.log('🎉 All mongoose schemas compiled and validated successfully!');
  } catch (error) {
    console.error('❌ Schema Validation Error:', error.message);
    process.exit(1);
  }
};

validateSchemas();
