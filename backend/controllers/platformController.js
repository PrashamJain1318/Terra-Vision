import agentOrchestratorService from '../services/agentOrchestratorService.js';
import platformService from '../services/platformService.js';

export const platformController = {
  orchestratePrompt: async (req, res, next) => {
    try {
      const { prompt, city } = req.body;
      const response = await agentOrchestratorService.orchestratePrompt(prompt, city);
      return res.status(200).json({
        success: true,
        data: response,
      });
    } catch (err) {
      next(err);
    }
  },

  getAgentStatus: async (req, res, next) => {
    try {
      const agents = await agentOrchestratorService.getAgentSystemStatus();
      return res.status(200).json({
        success: true,
        count: agents.length,
        data: agents,
      });
    } catch (err) {
      next(err);
    }
  },

  getMarketplace: async (req, res, next) => {
    try {
      const items = await platformService.getMarketplaceItems();
      return res.status(200).json({
        success: true,
        count: items.length,
        data: items,
      });
    } catch (err) {
      next(err);
    }
  },

  getPlugins: async (req, res, next) => {
    try {
      const developerId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const plugins = await platformService.getDeveloperPlugins(developerId);
      return res.status(200).json({
        success: true,
        count: plugins.length,
        data: plugins,
      });
    } catch (err) {
      next(err);
    }
  },

  registerPlugin: async (req, res, next) => {
    try {
      const developerId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const plugin = await platformService.registerPlugin(developerId, req.body);
      return res.status(201).json({
        success: true,
        message: 'Developer plugin registered on LocalLens OS',
        data: plugin,
      });
    } catch (err) {
      next(err);
    }
  },

  getGlobalAnalytics: async (req, res, next) => {
    try {
      const analytics = await platformService.getGlobalAnalytics();
      return res.status(200).json({
        success: true,
        data: analytics,
      });
    } catch (err) {
      next(err);
    }
  },
};

export default platformController;
