export interface TimelineEvent {
  id: string;
  type: 'photo' | 'landmark_scan' | 'food' | 'hidden_gem' | 'route_checkpoint';
  timestamp: string;
  title: string;
  location: string;
  description: string;
}

export default TimelineEvent;
