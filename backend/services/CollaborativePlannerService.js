export const CollaborativePlannerService = {
  async getCollaborativePlan(planId) {
    return {
      planId,
      title: 'Group Expedition to Japan 2027',
      collaborators: ['Elena Rostova', 'Marcus Vance', 'Aria Thorne'],
      itineraryDays: [
        { day: 1, activity: 'Arrival in Tokyo, Shibuya Crossing & Memory Lane dinner' },
        { day: 2, activity: 'Shinkansen to Kyoto, Arashiyama Bamboo Grove Walk' },
      ],
      lastEdited: new Date().toISOString(),
    };
  },
};

export default CollaborativePlannerService;
