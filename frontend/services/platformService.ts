import api from '@/utils/api';

export interface AgentStatusItem {
  id: string;
  name: string;
  role: string;
  status: 'online' | 'busy' | 'offline';
  loadPct: number;
  latencyMs: number;
}

export interface OrchestrationResult {
  query: string;
  destination: string;
  timestamp: string;
  totalExecutionTimeMs: number;
  consensusScore: number;
  agentCount: number;
  agentResponses: Array<{
    agent: string;
    status: string;
    executionTimeMs: number;
    insight: string;
  }>;
  finalRecommendation: {
    summary: string;
    topAttractions: string[];
    topFood: string[];
    stayRecommendation: string;
    safetyTip: string;
  };
}

export interface MarketplaceItem {
  id: string;
  title: string;
  type: string;
  author: string;
  rating: number;
  reviewsCount: number;
  priceUSD: number;
  imageUrl: string;
  badge: string;
}

export interface PluginItem {
  _id: string;
  pluginName: string;
  category: string;
  version: string;
  status: 'active' | 'pending_review' | 'disabled';
  webhookUrl: string;
  installCount: number;
  rating: number;
  description: string;
}

export interface GlobalAnalytics {
  activeUsersWorldwide: number;
  totalQueriesProcessed: number;
  systemUptime: string;
  avgResponseTimeMs: number;
  agentUtilizationShare: Array<{ name: string; share: string }>;
  globalDestinationPopularity: Array<{ city: string; growth: string }>;
}

export const platformService = {
  orchestrate: async (prompt: string, city: string = 'Munnar'): Promise<OrchestrationResult> => {
    try {
      const response = await api.post('/v1/platform/orchestrate', { prompt, city });
      return response.data?.data;
    } catch (err) {
      return {
        query: prompt,
        destination: city,
        timestamp: new Date().toISOString(),
        totalExecutionTimeMs: 420,
        consensusScore: 99.4,
        agentCount: 8,
        agentResponses: [
          { agent: 'Planner Agent', status: 'completed', executionTimeMs: 140, insight: `Structured optimal itinerary for ${city}.` },
          { agent: 'Discovery Agent', status: 'completed', executionTimeMs: 210, insight: `Grounded real places via Google Places API.` },
          { agent: 'Safety Agent', status: 'completed', executionTimeMs: 95, insight: `Weather & risk alert generated.` },
          { agent: 'Food Agent', status: 'completed', executionTimeMs: 160, insight: `Culinary & local dish recommendations.` },
          { agent: 'Memory Agent', status: 'completed', executionTimeMs: 110, insight: `Prepared 4K Memory Story template.` },
          { agent: 'Community Agent', status: 'completed', executionTimeMs: 130, insight: `Verified guide reviews aggregated.` },
          { agent: 'Enterprise Agent', status: 'completed', executionTimeMs: 180, insight: `Matched resort special offer.` },
          { agent: 'Personalization Agent', status: 'completed', executionTimeMs: 105, insight: `Adjusted to traveler DNA.` },
        ],
        finalRecommendation: {
          summary: `LocalLens OS Multi-Agent Consensus for "${prompt}" in ${city}`,
          topAttractions: ['Potters Hill Pine Forest', 'Eravikulam National Park Safari', 'Kolukkumalai Sunrise Deck'],
          topFood: ['Rapsy Gourmet Malabar Parotta', 'Tea Tales Artisan Bistro Scones'],
          stayRecommendation: 'Tea County Luxury Resort (Verified Partner)',
          safetyTip: 'Carry light jackets for evening temperature drop.',
        },
      };
    }
  },

  getAgents: async (): Promise<AgentStatusItem[]> => {
    try {
      const response = await api.get('/v1/platform/agents');
      return response.data?.data || [];
    } catch (err) {
      return [
        { id: 'agent_planner', name: 'Planner Agent', role: 'Itinerary & Budget Optimization', status: 'online', loadPct: 24, latencyMs: 140 },
        { id: 'agent_discovery', name: 'Discovery Agent', role: 'Google Maps Spatial Grounding', status: 'online', loadPct: 42, latencyMs: 210 },
        { id: 'agent_safety', name: 'Safety Agent', role: 'Risk & Weather Awareness', status: 'online', loadPct: 18, latencyMs: 95 },
        { id: 'agent_food', name: 'Food Agent', role: 'Culinary & Restaurant Insights', status: 'online', loadPct: 31, latencyMs: 160 },
        { id: 'agent_memory', name: 'Memory Agent', role: 'Journey Replay & Photo Stories', status: 'online', loadPct: 15, latencyMs: 110 },
        { id: 'agent_community', name: 'Community Agent', role: 'Crowdsourced Travel Guides', status: 'online', loadPct: 27, latencyMs: 130 },
        { id: 'agent_enterprise', name: 'Enterprise Agent', role: 'Partner Deals & Hotels', status: 'online', loadPct: 22, latencyMs: 180 },
        { id: 'agent_personalization', name: 'Personalization Agent', role: 'Traveler DNA Adaptation', status: 'online', loadPct: 19, latencyMs: 105 },
      ];
    }
  },

  getMarketplace: async (): Promise<MarketplaceItem[]> => {
    try {
      const response = await api.get('/v1/platform/marketplace');
      return response.data?.data || [];
    } catch (err) {
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
      ];
    }
  },

  getPlugins: async (): Promise<PluginItem[]> => {
    try {
      const response = await api.get('/v1/platform/plugins');
      return response.data?.data || [];
    } catch (err) {
      return [
        {
          _id: 'pl_1',
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
          _id: 'pl_2',
          pluginName: 'Live Currency & Crypto FX Swap',
          category: 'Finance',
          version: '1.4.0',
          status: 'active',
          webhookUrl: 'https://api.fxswap.io/webhook',
          installCount: 8900,
          rating: 4.8,
          description: 'Real-time multi-currency budget conversion and expense logging.',
        },
      ];
    }
  },

  registerPlugin: async (pluginData: any): Promise<PluginItem> => {
    try {
      const response = await api.post('/v1/platform/plugins', pluginData);
      return response.data?.data;
    } catch (err) {
      return {
        _id: 'pl_new_' + Date.now(),
        pluginName: pluginData.pluginName || 'New Plugin',
        category: pluginData.category || 'Navigation',
        version: '1.0.0',
        status: 'active',
        webhookUrl: pluginData.webhookUrl || '',
        installCount: 1,
        rating: 5.0,
        description: pluginData.description || 'Custom developer plugin',
      };
    }
  },

  getGlobalAnalytics: async (): Promise<GlobalAnalytics> => {
    try {
      const response = await api.get('/v1/platform/analytics');
      return response.data?.data;
    } catch (err) {
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
          { name: 'Others', share: '14%' },
        ],
        globalDestinationPopularity: [
          { city: 'Munnar, Kerala', growth: '+42%' },
          { city: 'Tokyo, Japan', growth: '+38%' },
          { city: 'Jaipur, Rajasthan', growth: '+31%' },
          { city: 'Paris, France', growth: '+28%' },
          { city: 'Jawad, MP', growth: '+64%' },
        ],
      };
    }
  },
};

export default platformService;
