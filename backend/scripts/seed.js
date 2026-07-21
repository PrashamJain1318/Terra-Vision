import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Import Models
import User from '../models/User.js';
import Trip from '../models/Trip.js';
import Planner from '../models/Planner.js';
import Memory from '../models/Memory.js';
import SavedPlace from '../models/SavedPlace.js';
import AIHistory from '../models/AIHistory.js';
import LandingContent from '../models/LandingContent.js';
import Feature from '../models/Feature.js';
import Statistic from '../models/Statistic.js';
import Testimonial from '../models/Testimonial.js';

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
    await LandingContent.deleteMany({});
    await Feature.deleteMany({});
    await Statistic.deleteMany({});
    await Testimonial.deleteMany({});

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

    // 7. Seed Landing Hero Content
    await LandingContent.create({
      section: 'hero',
      data: {
        title: 'See Beyond the Destination.',
        subtitle: 'Unveil hidden local treasures, auto-generate itinerary plans, and analyze travel visuals.',
        ctaText: 'Start Free Trial',
        ctaLink: '/signup',
        backgroundConfig: {
          auroraColors: ['rgba(99, 102, 241, 0.1)', 'rgba(79, 70, 229, 0.15)'],
          blurValue: '120px',
        },
      },
    });
    console.log('✔ Seeded Landing Hero configurations');

    // 8. Seed Landing Feature Elements
    await Feature.create([
      {
        title: 'Hidden Local Spots',
        description: 'Explore verified offbeat destinations shared by local travel guides.',
        icon: 'Compass',
        highlight: true,
        displayOrder: 1,
      },
      {
        title: 'AI Smart Itinerary',
        description: 'Create customized multi-day travel plans matching your style preferences.',
        icon: 'Sparkles',
        displayOrder: 2,
      },
      {
        title: 'Interactive Maps',
        description: 'Navigate seamlessly with built-in location visualizers and custom flags.',
        icon: 'Map',
        displayOrder: 3,
      },
    ]);
    console.log('✔ Seeded Landing Feature items');

    // 9. Seed Landing Statistic Trackers
    await Statistic.create([
      { key: 'countries', value: '50+', label: 'Countries Covered', displayOrder: 1 },
      { key: 'users', value: '10,000+', label: 'Happy Users', displayOrder: 2 },
      { key: 'trips', value: '25,000+', label: 'Itineraries Created', displayOrder: 3 },
    ]);
    console.log('✔ Seeded Landing Statistic items');

    // 10. Seed Landing Testimonials
    await Testimonial.create([
      {
        name: 'Sarah Jenkins',
        country: 'United Kingdom',
        review: 'LocalLens AI helped me explore Himachal like a native. Found spot-on cafes and silent valleys!',
        rating: 5,
      },
      {
        name: 'David Miller',
        country: 'United States',
        review: 'The custom itinerary fits my hiking habits perfectly. The integration is seamless.',
        rating: 4.8,
      },
    ]);
    console.log('✔ Seeded Landing Testimonial items');

    // 11. Seed Landing Footer Config
    await LandingContent.create({
      section: 'footer',
      data: {
        contactEmail: 'support@locallens.ai',
        copyright: 'LocalLens AI. All rights reserved.',
        socialLinks: [
          { name: 'Twitter', url: 'https://twitter.com/locallens' },
          { name: 'Instagram', url: 'https://instagram.com/locallens' },
        ],
        footerLinks: [
          { name: 'Features', url: '#' },
          { name: 'Pricing', url: '#' },
        ],
      },
    });
    console.log('✔ Seeded Landing Footer configurations');

    console.log('🎉 Seeding successfully completed!');
    process.exit(0);
  } catch (error) {
    console.error(`❌ Seeding failed: ${error.message}`);
    process.exit(1);
  }
};

seedData();
