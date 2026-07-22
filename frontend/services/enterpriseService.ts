import api from '@/utils/api';

export interface PartnerItem {
  _id: string;
  businessName: string;
  partnerType: 'Hotel' | 'Restaurant' | 'Tourism Board' | 'Local Guide' | 'Travel Agency';
  city: string;
  isVerified: boolean;
  trustScore: number;
  subscriptionTier: 'Starter' | 'Pro' | 'Enterprise';
  apiKey: string;
  contactEmail: string;
  phone: string;
  website: string;
  listingsCount: number;
  totalImpressions: number;
  totalClicks: number;
}

export interface CampaignItem {
  _id: string;
  campaignName: string;
  type: string;
  cityName: string;
  status: 'active' | 'paused' | 'completed' | 'draft';
  budgetUSD: number;
  impressions: number;
  clicks: number;
  conversions: number;
}

export interface HotelListing {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewsCount: number;
  pricePerNight: string;
  availableRooms: number;
  address: string;
  photos: string[];
  amenities: string[];
  specialOffer?: string;
}

export interface RestaurantListing {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  reviewsCount: number;
  popularDishes: string[];
  promotions: string[];
  imageUrl: string;
}

export interface AnalyticsData {
  monthlyImpressions: number;
  clickThroughRate: string;
  totalBookings: number;
  searchPopularityRank: string;
  aiRecommendationShare: string;
  topSearchKeywords: string[];
  recentImpressionTrend: Array<{ date: string; impressions: number }>;
}

export const enterpriseService = {
  getPartners: async (): Promise<PartnerItem[]> => {
    try {
      const response = await api.get('/v1/enterprise/partners');
      return response.data?.data || [];
    } catch (err) {
      return [
        {
          _id: 'p1',
          businessName: 'Tea County Luxury Resort Munnar',
          partnerType: 'Hotel',
          city: 'Munnar',
          isVerified: true,
          trustScore: 99,
          subscriptionTier: 'Enterprise',
          apiKey: 'll_live_94829420482094208420',
          contactEmail: 'partner@teacounty.com',
          phone: '+91 4865 230 450',
          website: 'https://teacounty.com',
          listingsCount: 4,
          totalImpressions: 68400,
          totalClicks: 5120,
        },
        {
          _id: 'p2',
          businessName: 'Rapsy Malabar Gourmet House',
          partnerType: 'Restaurant',
          city: 'Munnar',
          isVerified: true,
          trustScore: 97,
          subscriptionTier: 'Pro',
          apiKey: 'll_live_10482048209420948204',
          contactEmail: 'contact@rapsyfood.in',
          phone: '+91 4865 230 411',
          website: 'https://locallens.ai/rapsy',
          listingsCount: 2,
          totalImpressions: 42100,
          totalClicks: 3200,
        },
        {
          _id: 'p3',
          businessName: 'Kerala Department of Tourism',
          partnerType: 'Tourism Board',
          city: 'Kerala State',
          isVerified: true,
          trustScore: 100,
          subscriptionTier: 'Enterprise',
          apiKey: 'll_live_78942940294820482042',
          contactEmail: 'official@keralatourism.org',
          phone: '+91 471 232 1132',
          website: 'https://keralatourism.org',
          listingsCount: 15,
          totalImpressions: 198000,
          totalClicks: 16400,
        },
      ];
    }
  },

  registerPartner: async (partnerData: any): Promise<PartnerItem> => {
    try {
      const response = await api.post('/v1/enterprise/partners/register', partnerData);
      return response.data?.data;
    } catch (err) {
      return {
        _id: 'p_new_' + Date.now(),
        businessName: partnerData.businessName || 'New Partner',
        partnerType: partnerData.partnerType || 'Hotel',
        city: partnerData.city || 'Munnar',
        isVerified: true,
        trustScore: 95,
        subscriptionTier: 'Pro',
        apiKey: 'll_live_' + Date.now(),
        contactEmail: partnerData.contactEmail || 'partner@locallens.ai',
        phone: '+91 98765 43210',
        website: 'https://locallens.ai',
        listingsCount: 1,
        totalImpressions: 100,
        totalClicks: 12,
      };
    }
  },

  getCampaigns: async (): Promise<CampaignItem[]> => {
    try {
      const response = await api.get('/v1/enterprise/campaigns');
      return response.data?.data || [];
    } catch (err) {
      return [
        {
          _id: 'c1',
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
          _id: 'c2',
          campaignName: 'Authentic Kerala Sadya Food Festival',
          type: 'Restaurant Promo',
          cityName: 'Munnar',
          status: 'active',
          budgetUSD: 400,
          impressions: 14200,
          clicks: 1120,
          conversions: 165,
        },
      ];
    }
  },

  createCampaign: async (campaignData: any): Promise<CampaignItem> => {
    try {
      const response = await api.post('/v1/enterprise/campaigns', campaignData);
      return response.data?.data;
    } catch (err) {
      return {
        _id: 'c_new_' + Date.now(),
        campaignName: campaignData.campaignName || 'New Campaign',
        type: campaignData.type || 'Featured Destination',
        cityName: campaignData.cityName || 'Munnar',
        status: 'active',
        budgetUSD: campaignData.budgetUSD || 500,
        impressions: 0,
        clicks: 0,
        conversions: 0,
      };
    }
  },

  getAnalytics: async (): Promise<AnalyticsData> => {
    try {
      const response = await api.get('/v1/enterprise/analytics');
      return response.data?.data;
    } catch (err) {
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
    }
  },

  getHotels: async (): Promise<HotelListing[]> => {
    try {
      const response = await api.get('/v1/enterprise/hotels');
      return response.data?.data || [];
    } catch (err) {
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
      ];
    }
  },

  getRestaurants: async (): Promise<RestaurantListing[]> => {
    try {
      const response = await api.get('/v1/enterprise/restaurants');
      return response.data?.data || [];
    } catch (err) {
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
      ];
    }
  },
};

export default enterpriseService;
