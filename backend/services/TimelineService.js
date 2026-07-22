import MemoryTimeline from '../models/MemoryTimeline.js';

export const TimelineService = {
  getTimeline: async (memoryId) => {
    let timeline = await MemoryTimeline.findOne({ memory: memoryId });
    if (!timeline) {
      timeline = await MemoryTimeline.create({
        memory: memoryId,
        events: [
          {
            type: 'landmark_scan',
            title: 'Golden Temple Precinct Scan',
            location: 'Heritage Walk, Amritsar',
            description: 'AI Vision scanned 16th-century gilded marble architecture.',
          },
          {
            type: 'food',
            title: 'Tandoori Kulcha & Chole Feast',
            location: 'Kesar Da Dhaba',
            description: 'Sampled authentic clay-baked bread with churned white butter.',
          },
        ],
      });
    }
    return timeline;
  },
};

export default TimelineService;
