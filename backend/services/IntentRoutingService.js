class IntentRoutingService {
  static classifyIntent(utterance) {
    const text = utterance.toLowerCase();
    if (text.includes('plan')) return { intent: 'PLANNER_CREATE', targetModule: 'Planner' };
    if (text.includes('food')) return { intent: 'FOOD_DISCOVER', targetModule: 'Local Food' };
    if (text.includes('safe')) return { intent: 'SAFETY_CHECK', targetModule: 'Safety' };
    if (text.includes('translate')) return { intent: 'VISION_TRANSLATE', targetModule: 'Vision' };
    if (text.includes('navigate')) return { intent: 'MAPS_NAVIGATE', targetModule: 'Maps' };
    if (text.includes('remember')) return { intent: 'MEMORY_SAVE', targetModule: 'Memory' };
    return { intent: 'GENERAL_ASSISTANT', targetModule: 'Companion' };
  }
}

export default IntentRoutingService;
