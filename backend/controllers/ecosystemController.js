import ecosystemService from '../services/ecosystemService.js';

export const ecosystemController = {
  getDevices: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const devices = await ecosystemService.getUserDevices(userId);
      return res.status(200).json({
        success: true,
        count: devices.length,
        data: devices,
      });
    } catch (err) {
      next(err);
    }
  },

  registerDevice: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const device = await ecosystemService.registerDevice(userId, req.body);
      return res.status(201).json({
        success: true,
        message: 'Device registered to Smart Travel Ecosystem',
        data: device,
      });
    } catch (err) {
      next(err);
    }
  },

  triggerSync: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { deviceId } = req.body;
      const result = await ecosystemService.triggerSync(userId, deviceId);
      return res.status(200).json({
        success: true,
        message: 'Smart sync completed across connected ecosystem devices',
        data: result,
      });
    } catch (err) {
      next(err);
    }
  },

  getOfflinePackages: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const packages = await ecosystemService.getOfflinePackages(userId);
      return res.status(200).json({
        success: true,
        count: packages.length,
        data: packages,
      });
    } catch (err) {
      next(err);
    }
  },

  downloadPackage: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { id } = req.params;
      const updated = await ecosystemService.downloadPackage(userId, id);
      return res.status(200).json({
        success: true,
        message: 'Offline package downloaded',
        data: updated,
      });
    } catch (err) {
      next(err);
    }
  },

  getWidgetConfig: async (req, res, next) => {
    try {
      const config = await ecosystemService.getWidgetConfiguration();
      return res.status(200).json({
        success: true,
        data: config,
      });
    } catch (err) {
      next(err);
    }
  },

  getCarModeData: async (req, res, next) => {
    try {
      const carData = await ecosystemService.getCarModeData();
      return res.status(200).json({
        success: true,
        data: carData,
      });
    } catch (err) {
      next(err);
    }
  },

  getSmartwatchData: async (req, res, next) => {
    try {
      const watchData = await ecosystemService.getSmartwatchData();
      return res.status(200).json({
        success: true,
        data: watchData,
      });
    } catch (err) {
      next(err);
    }
  },
};

export default ecosystemController;
