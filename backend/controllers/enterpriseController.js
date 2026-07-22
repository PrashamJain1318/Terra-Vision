import enterpriseService from '../services/enterpriseService.js';

export const enterpriseController = {
  getPartners: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const partners = await enterpriseService.getPartners(userId);
      return res.status(200).json({
        success: true,
        count: partners.length,
        data: partners,
      });
    } catch (err) {
      next(err);
    }
  },

  registerPartner: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const partner = await enterpriseService.registerPartner(userId, req.body);
      return res.status(201).json({
        success: true,
        message: 'Partner onboarded successfully',
        data: partner,
      });
    } catch (err) {
      next(err);
    }
  },

  getCampaigns: async (req, res, next) => {
    try {
      const { partnerId } = req.query;
      const campaigns = await enterpriseService.getCampaigns(partnerId);
      return res.status(200).json({
        success: true,
        count: campaigns.length,
        data: campaigns,
      });
    } catch (err) {
      next(err);
    }
  },

  createCampaign: async (req, res, next) => {
    try {
      const campaign = await enterpriseService.createCampaign(req.body);
      return res.status(201).json({
        success: true,
        message: 'Enterprise campaign created',
        data: campaign,
      });
    } catch (err) {
      next(err);
    }
  },

  getAnalytics: async (req, res, next) => {
    try {
      const analytics = await enterpriseService.getAnalytics();
      return res.status(200).json({
        success: true,
        data: analytics,
      });
    } catch (err) {
      next(err);
    }
  },

  getHotelListings: async (req, res, next) => {
    try {
      const hotels = await enterpriseService.getHotelListings();
      return res.status(200).json({
        success: true,
        data: hotels,
      });
    } catch (err) {
      next(err);
    }
  },

  getRestaurantListings: async (req, res, next) => {
    try {
      const restaurants = await enterpriseService.getRestaurantListings();
      return res.status(200).json({
        success: true,
        data: restaurants,
      });
    } catch (err) {
      next(err);
    }
  },
};

export default enterpriseController;
