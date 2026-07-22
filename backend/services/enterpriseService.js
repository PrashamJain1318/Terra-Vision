import Partner from '../models/Partner.js';
import Campaign from '../models/Campaign.js';

export const enterpriseService = {
  // Get all registered partners for user
  getPartners: async (userId) => {
    let partners = await Partner.find({ userId }).sort({ createdAt: -1 });

    if (partners.length === 0) {
      const defaultPartners = [
        {
          userId,
          businessName: 'Tea County Luxury Resort Munnar',
          partnerType: 'Hotel',
          city: 'Munnar',
          isVerified: true,
          trustScore: 99,
          subscriptionTier: 'Enterprise',
          contactEmail: 'partner@teacounty.com',
          listingsCount: 4,
          totalImpressions: 68400,
          totalClicks: 5120,
        },
        {
          userId,
          businessName: 'Rapsy Malabar Gourmet House',
          partnerType: 'Restaurant',
          city: 'Munnar',
          isVerified: true,
          trustScore: 97,
          subscriptionTier: 'Pro',
          contactEmail: 'contact@rapsyfood.in',
          listingsCount: 2,
          totalImpressions: 42100,
          totalClicks: 3200,
        },
        {
          userId,
          businessName: 'Kerala Department of Tourism',
          partnerType: 'Tourism Board',
          city: 'Kerala State',
          isVerified: true,
          trustScore: 100,
          subscriptionTier: 'Enterprise',
          contactEmail: 'official@keralatourism.org',
          listingsCount: 15,
          totalImpressions: 198000,
          totalClicks: 16400,
        },
        {
          userId,
          businessName: 'Highland Spice Guided Expeditions',
          partnerType: 'Local Guide',
          city: 'Munnar',
          isVerified: true,
          trustScore: 96,
          subscriptionTier: 'Starter',
          contactEmail: 'guide@highlandspice.com',
          listingsCount: 3,
          totalImpressions: 14500,
          totalClicks: 980,
        },
      ];

      partners = await Partner.insertMany(defaultPartners);
    }

    return partners;
  },

  registerPartner: async (userId, partnerData) => {
    const partner = new Partner({
      userId,
      ...partnerData,
    });
    return await partner.save();
  },

  // Get active campaigns
  getCampaigns: async (partnerId) => {
    let campaigns = await Campaign.find({ partnerId }).sort({ createdAt: -1 });

    if (campaigns.length === 0) {
      const defaultCampaigns = [
        {
          partnerId: partnerId || '6a5fef395c72ccbcfd4405d1',
          campaignName: 'Munnar Monsoon Escape 2026',
          type: 'Featured Destination',
          cityName: 'Munnar',
          status: 'active',
          budgetUSD: 850,
          impressions: 24500,
          clicks: 1840,
          conversions: 210,
        },
        {
          partnerId: partnerId || '6a5fef395c72ccbcfd4405d1',
          campaignName: 'Authentic Kerala Sadya Food Festival',
          type: 'Restaurant Promo',
          cityName: 'Munnar',
          status: 'active',
          budgetUSD: 400,
          impressions: 14200,
          clicks: 1120,
          conversions: 165,
        },
        {
          partnerId: partnerId || '6a5fef395c72ccbcfd4405d1',
          campaignName: 'Tea Estate Luxury Villa Early Bird 20%',
          type: 'Hotel Package',
          cityName: 'Munnar',
          status: 'active',
          budgetUSD: 600,
          impressions: 18900,
          clicks: 1410,
          conversions: 188,
        },
      ];

      campaigns = await Campaign.insertMany(defaultCampaigns);
    }

    return campaigns;
  },

  createCampaign: async (campaignData) => {
    const campaign = new Campaign(campaignData);
    return await campaign.save();
  },

  // Get business analytics stats
  getAnalytics: async () => {
    return {
      monthlyImpressions: 248900,
      clickThroughRate: '7.8%',
      totalBookings: 1420,
      searchPopularityRank: '#1 in Kerala',
      aiRecommendationShare: '84%',
      topSearchKeywords: ['Munnar Pine Forest', 'Kerala Food', 'Tea Estates', 'Hidden Gems', 'Luxury Resort'],
      recentImpressionTrend: [
        { date: 'Mon', impressions: 24000 },
        { date: 'Tue', impressions: 28500 },
        { date: 'Wed', impressions: 31000 },
        { date: 'Thu', impressions: 34500 },
        { date: 'Fri', impressions: 42000 },
        { date: 'Sat', impressions: 56000 },
        { date: 'Sun', impressions: 52000 },
      ],
    };
  },

  // Get Hotel Partner Listings
  getHotelListings: async () => {
    return [
      {
        id: 'h1',
        name: 'Tea County Luxury Resort',
        category: '5-Star Heritage Resort',
        rating: 4.9,
        reviewsCount: 1420,
        pricePerNight: '₹8,500',
        availableRooms: 12,
        address: 'Tea County Rd, Munnar, Kerala',
        photos: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'],
        amenities: ['Free Wi-Fi', 'Infinity Pool', 'Tea Garden Safari', 'Spa'],
        specialOffer: 'Complimentary High Tea & Plantation Walk',
      },
      {
        id: 'h2',
        name: 'Kolukkumalai Cloud Villa',
        category: 'Eco-Luxury Hilltop Resort',
        rating: 4.8,
        reviewsCount: 890,
        pricePerNight: '₹11,200',
        availableRooms: 5,
        address: 'Suryanelli Heights, Munnar',
        photos: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'],
        amenities: ['Sunrise View Deck', '4x4 Offroad Safari', 'Organic Restaurant'],
        specialOffer: '20% Early Bird Discount for Sep 2026',
      },
    ];
  },

  // Get Restaurant Partner Listings
  getRestaurantListings: async () => {
    return [
      {
        id: 'r1',
        name: 'Rapsy Gourmet House',
        cuisine: 'Kerala Street Food & European',
        rating: 4.5,
        reviewsCount: 892,
        popularDishes: ['Malabar Parotta', 'Spicy Kerala Duck Fry', 'Spanish Omelette'],
        promotions: ['15% off High Tea Scones on Weekdays'],
        imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'r2',
        name: 'Tea Tales Artisan Bistro',
        cuisine: 'Bakery & Woodfired Pizza',
        rating: 4.6,
        reviewsCount: 642,
        popularDishes: ['Cardamom Tea Scones', 'Truffle Mushroom Woodfired Pizza'],
        promotions: ['Free Cardamom Tea Sampler with any Pizza'],
        imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
      },
    ];
  },
};

export default enterpriseService;
