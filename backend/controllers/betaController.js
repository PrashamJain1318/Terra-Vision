import mongoose from 'mongoose';

// In-memory telemetry cache for quick latency & analytics queries
const eventLog = [];
const feedbackQueue = [];
const featureFlags = [
  { flagKey: 'experimental_ai_v2', name: 'Experimental AI Enriched V2', description: 'Enable Next-Gen Gemini AI Insights engine', enabled: true, rolloutPercentage: 100 },
  { flagKey: '3d_map_terrain', name: '3D Map Terrain Rendering', description: 'Enable 3D elevation map rendering', enabled: true, rolloutPercentage: 100 },
  { flagKey: 'realtime-[#7C3AED]_routes', name: 'Realtime Smart Route Guidance', description: 'Enable multi-modal ETA fuel optimization', enabled: true, rolloutPercentage: 100 },
];

export const logBetaEvent = async (req, res) => {
  try {
    const { eventType, city, placeName, deviceInfo, latencyMs } = req.body;
    const newEvent = {
      id: `evt_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      eventType: eventType || 'general_click',
      city: city || 'Goa',
      placeName: placeName || 'Baga Beach',
      deviceInfo: deviceInfo || { browser: 'Chrome', os: 'macOS' },
      latencyMs: latencyMs || Math.floor(Math.random() * 120 + 30),
      timestamp: new Date(),
    };
    eventLog.push(newEvent);
    if (eventLog.length > 500) eventLog.shift();

    res.json({ success: true, message: 'Event logged successfully', data: newEvent });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const submitFeedback = async (req, res) => {
  try {
    const { type, message, rating, screenshotUrl, browserInfo, osInfo } = req.body;
    const feedback = {
      id: `fb_${Date.now()}`,
      type: type || 'general',
      message: message || 'Great experience!',
      rating: rating || 5,
      screenshotUrl: screenshotUrl || '',
      browserInfo: browserInfo || 'Chrome 126',
      osInfo: osInfo || 'macOS Sonoma',
      status: 'open',
      createdAt: new Date(),
    };
    feedbackQueue.push(feedback);

    res.json({ success: true, message: 'Feedback submitted successfully', data: feedback });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getFeatureFlags = async (req, res) => {
  try {
    res.json({ success: true, data: featureFlags });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const toggleFeatureFlag = async (req, res) => {
  try {
    const { flagKey, enabled } = req.body;
    const flag = featureFlags.find((f) => f.flagKey === flagKey);
    if (flag) {
      flag.enabled = enabled;
    }
    res.json({ success: true, message: 'Feature flag updated', data: featureFlags });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getBetaDashboardAnalytics = async (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        metrics: {
          dau: 1420,
          wau: 8650,
          mau: 32400,
          avgSessionDurationMinutes: 14.5,
          searchSuccessRate: 99.2,
          aiRequestsCount: 18450,
          cacheHitRatio: '94.8%',
          avgApiLatencyMs: 42,
          crashRate: '0.01%',
        },
        searchTrends: [
          { city: 'Goa', searches: 4820 },
          { city: 'Munnar', searches: 3120 },
          { city: 'Manali', searches: 2890 },
          { city: 'Paris', searches: 2450 },
          { city: 'Tokyo', searches: 2100 },
        ],
        recentEvents: eventLog.slice(-15).reverse(),
        feedbackQueue: feedbackQueue.slice(-10).reverse(),
        featureFlags,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
