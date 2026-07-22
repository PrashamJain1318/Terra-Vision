export const VOICE_INTENTS = [
  { intent: 'PLANNER_CREATE', sampleUtterance: 'Plan a 5-day trip to Japan', targetModule: 'Planner' },
  { intent: 'FOOD_DISCOVER', sampleUtterance: 'Find the nearest vegetarian restaurant', targetModule: 'Local Food' },
  { intent: 'VISION_TRANSLATE', sampleUtterance: 'Translate this menu', targetModule: 'Vision' },
  { intent: 'SAFETY_CHECK', sampleUtterance: 'Is this place safe?', targetModule: 'Safety' },
  { intent: 'MAPS_NAVIGATE', sampleUtterance: 'Navigate me to my hotel', targetModule: 'Maps' },
  { intent: 'MEMORY_SAVE', sampleUtterance: 'Remember this place', targetModule: 'Memory' },
  { intent: 'PLANNER_READ', sampleUtterance: 'Read today\'s itinerary', targetModule: 'Planner' },
];

export default VOICE_INTENTS;
