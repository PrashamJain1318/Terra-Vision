export interface StoryTemplate {
  id: string;
  name: string;
  tone: string;
}

export const STORY_TEMPLATES: StoryTemplate[] = [
  { id: 'poetic', name: 'Poetic & Reflective Journey', tone: 'Emotional' },
  { id: 'culinary', name: 'Culinary & Heritage Quest', tone: 'Gourmet' },
  { id: 'adventurous', name: 'Hidden Trail Expedition', tone: 'Thrilling' },
];

export default STORY_TEMPLATES;
