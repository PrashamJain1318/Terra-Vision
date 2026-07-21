import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Import Models
import User from '../models/User.js';
import Trip from '../models/Trip.js';
import Planner from '../models/Planner.js';
import Memory from '../models/Memory.js';
import SavedPlace from '../models/SavedPlace.js';
import AIHistory from '../models/AIHistory.js';

dotenv.config();

const seedData = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/locallens-ai';
    console.log(`Connecting to database for seeding: ${mongoUri}`);
    await mongoose.connect(mongoUri);

    // Clear existing collections
    console.log('Clearing existing collections...');
    await User.deleteMany({});
    await Trip.deleteMany({});
    await Planner.deleteMany({});
    await Memory.deleteMany({});
    await SavedPlace.deleteMany({});
    await AIHistory.deleteMany({});

    console.log('Inserting seed records...');

    // 1. Seed User
    const seededUser = await User.create({
      name: 'Jane Doe',
      email: 'jane.doe@locallens.ai',
      password: 'securepassphrase123',
      preferences: {
        travelStyle: 'adventure',
        interests: ['hiking', 'photography', 'food'],
      },
    });
    console.log(`✔ Seeded User: ${seededUser.email}`);

    // 2. Seed Trip
    const seededTrip = await Trip.create({
      user: seededUser._id,
      title: 'Himalayan Adventure',
      destination: {
        name: 'Shimla, India',
        coordinates: { lat: 31.1048, lng: 77.1734 },
      },
      startDate: new Date(),
      endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      status: 'upcoming',
    });
    console.log(`✔ Seeded Trip: ${seededTrip.title}`);

    // 3. Seed Planner
    const seededPlanner = await Planner.create({
      trip: seededTrip._id,
      user: seededUser._id,
      itinerary: [
        {
          dayNumber: 1,
          date: new Date(),
          activities: [
            {
              name: 'Ridge Walk & Mall Road',
              description: 'Local exploration and architectural sights',
              time: '04:00 PM',
              cost: 0,
            },
          ],
        },
      ],
      totalEstimatedCost: 0,
    });
    console.log('✔ Seeded Trip Planner Itinerary');

    // 4. Seed Memory
    const seededMemory = await Memory.create({
      user: seededUser._id,
      trip: seededTrip._id,
      title: 'Sunset over Shimla Valleys',
      description: 'Captured beautiful golden hour highlights.',
      media: [{ url: 'https://cloudinary.com/simla-sunset', publicId: 'shimla_01' }],
    });
    console.log(`✔ Seeded Memory: ${seededMemory.title}`);

    // 5. Seed SavedPlace
    const seededSavedPlace = await SavedPlace.create({
      user: seededUser._id,
      placeId: 'google_place_shimla_mall',
      name: 'Cafe Simla Times',
      address: 'Mall Road, Shimla, HP, India',
      coordinates: { lat: 31.104, lng: 77.173 },
      category: 'restaurant',
      rating: 4.5,
    });
    console.log(`✔ Seeded SavedPlace: ${seededSavedPlace.name}`);

    // 6. Seed AIHistory
    const seededAIHistory = await AIHistory.create({
      user: seededUser._id,
      interactionType: 'chat',
      prompt: 'Suggest places to visit in Shimla',
      response: 'Top recommendations include Ridge Mall, Jakhoo Temple, and Kufri.',
    });
    console.log('✔ Seeded AIHistory interaction record');

    console.log('🎉 Seeding successfully completed!');
    process.exit(0);
  } catch (error) {
    console.error(`❌ Seeding failed: ${error.message}`);
    process.exit(1);
  }
};

seedData();
