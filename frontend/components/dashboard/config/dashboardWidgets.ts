export interface WidgetConfig {
  id: string;
  title: string;
  size: 'small' | 'medium' | 'large';
  rowSpan?: number;
  colSpan?: number;
}

export const dashboardWidgetsConfig: WidgetConfig[] = [
  { id: 'upcoming-trips', title: 'Upcoming Trips', size: 'large', rowSpan: 2, colSpan: 2 },
  { id: 'ai-recommendations', title: 'AI Travel Insights', size: 'medium', colSpan: 1 },
  { id: 'saved-places', title: 'Saved Places', size: 'small', colSpan: 1 },
  { id: 'recent-memories', title: 'Recent Memories', size: 'medium', colSpan: 2 },
];
