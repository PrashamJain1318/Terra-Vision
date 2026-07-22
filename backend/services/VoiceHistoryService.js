let memoryHistory = [
  {
    id: 'msg-1',
    question: 'Plan 3 days in Tokyo',
    answer: 'Here is your 3-day Tokyo itinerary: Day 1 Asakusa & Senso-ji, Day 2 Shibuya & Harajuku, Day 3 Shinjuku Gyoen & Omoide Yokocho.',
    timestamp: new Date().toISOString(),
    duration: '4.2s',
    language: 'en-US',
  },
];

export const getHistory = async () => {
  return memoryHistory;
};

export const addHistory = async (question, answer, language = 'en-US', duration = '3.5s') => {
  const item = {
    id: `msg-${Date.now()}`,
    question,
    answer,
    timestamp: new Date().toISOString(),
    duration,
    language,
  };
  memoryHistory.unshift(item);
  if (memoryHistory.length > 50) {
    memoryHistory = memoryHistory.slice(0, 50);
  }
  return item;
};

export const clearHistory = async () => {
  memoryHistory = [];
  return true;
};

export default {
  getHistory,
  addHistory,
  clearHistory,
};
