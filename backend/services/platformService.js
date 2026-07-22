import Plugin from '../models/Plugin.js';

export const platformService = {
  // Get Travel Marketplace Items
  getMarketplaceItems: async () => {
    return [
      {
        id: 'mk_1',
        title: 'Munnar Tea Estate Sunrise 4x4 Offroad Expedition',
        type: 'Verified Local Experience',
        author: 'Highland Expeditions (Verified Partner)',
        rating: 4.9,
        reviewsCount: 310,
        priceUSD: 25,
        imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        badge: 'Top Choice',
      },
      {
        id: 'mk_2',
        title: 'Kerala 7-Day Luxury Backwater & Hill AI Template',
        type: 'Premium AI Travel Template',
        author: 'LocalLens Master Curator',
        rating: 5.0,
        reviewsCount: 540,
        priceUSD: 12,
        imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
        badge: 'Official Template',
      },
      {
        id: 'mk_3',
        title: 'Munnar Hidden Spice Trails & Culinary Walk',
        type: 'Guided Experience',
        author: 'Chef Ramesh V. (Certified Guide)',
        rating: 4.8,
        reviewsCount: 184,
        priceUSD: 18,
        imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
        badge: 'Culinary Pick',
      },
      {
        id: 'mk_4',
        title: 'Offline Kerala Survival & Emergency Audio Guide',
        type: 'Digital Travel Guide',
        author: 'Safety First Global',
        rating: 4.9,
        reviewsCount: 420,
        priceUSD: 0,
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        badge: 'Free Download',
      },
    ];
  },

  // Get Developer Plugins
  getDeveloperPlugins: async (developerId) => {
    let plugins = await Plugin.find({ developerId }).sort({ createdAt: -1 });

    if (plugins.length === 0) {
      const defaultPlugins = [
        {
          developerId: developerId || '6a5fef395c72ccbcfd4405d1',
          pluginName: 'Uber & Grab Rides Connector',
          category: 'Navigation',
          version: '2.1.0',
          status: 'active',
          webhookUrl: 'https://api.uber.com/locallens/webhook',
          installCount: 14200,
          rating: 4.9,
          description: '1-tap ride hailing directly inside LocalLens OS travel workspace.',
        },
        {
          developerId: developerId || '6a5fef395c72ccbcfd4405d1',
          pluginName: 'Live Currency & Crypto FX Swap',
          category: 'Finance',
          version: '1.4.0',
          status: 'active',
          webhookUrl: 'https://api.fxswap.io/webhook',
          installCount: 8900,
          rating: 4.8,
          description: 'Real-time multi-currency budget conversion and expense logging.',
        },
        {
          developerId: developerId || '6a5fef395c72ccbcfd4405d1',
          pluginName: 'AccuWeather Live Storm Alerts',
          category: 'Weather',
          version: '1.0.2',
          status: 'active',
          webhookUrl: 'https://api.accuweather.com/locallens',
          installCount: 22100,
          rating: 4.9,
          description: 'Severe weather and monsoon warning push notifications.',
        },
      ];

      plugins = await Plugin.insertMany(defaultPlugins);
    }

    return plugins;
  },

  registerPlugin: async (developerId, pluginData) => {
    const plugin = new Plugin({
      developerId,
      ...pluginData,
    });
    return await plugin.save();
  },

  // Get Global Platform Analytics
  getGlobalAnalytics: async () => {
    return {
      activeUsersWorldwide: 482900,
      totalQueriesProcessed: 3840000,
      systemUptime: '99.99%',
      avgResponseTimeMs: 380,
      agentUtilizationShare: [
        { name: 'Discovery Agent (Google Maps)', share: '32%' },
        { name: 'Planner Agent (AI Itinerary)', share: '24%' },
        { name: 'Food Agent (Culinary)', share: '18%' },
        { name: 'Safety Agent (Risk & SOS)', share: '12%' },
        { name: 'Others (Memory, Enterprise, Personalization)', share: '14%' },
      ],
      globalDestinationPopularity: [
        { city: 'Munnar, Kerala', growth: '+42%' },
        { city: 'Tokyo, Japan', growth: '+38%' },
        { city: 'Jaipur, Rajasthan', growth: '+31%' },
        { city: 'Paris, France', growth: '+28%' },
        { city: 'Jawad, MP', growth: '+64%' },
      ],
    };
  },
};

export default platformService;
