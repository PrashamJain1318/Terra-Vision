import CommunityGroup from '../models/CommunityGroup.js';

export const TravelGroupService = {
  async getActiveGroups() {
    const groups = await CommunityGroup.find().lean();
    return groups.length > 0
      ? groups
      : [
          { _id: 'g1', name: 'Backpackers India', category: 'Backpackers & Solo', membersCount: 1420, description: 'Budget travel tips, train routes, and hostel meetups.' },
          { _id: 'g2', name: 'Europe 2027 Expeditions', category: 'Culture', membersCount: 890, description: 'Collaborative itinerary planning for European summer trips.' },
          { _id: 'g3', name: 'Food Explorers Kyoto', category: 'Culinary', membersCount: 650, description: 'Authentic ramen shops, matcha masters, and street markets.' },
        ];
  },
};

export default TravelGroupService;
