export interface RouteModeOption {
  id: string;
  label: string;
  icon: string;
}

export const routeModesConfig: RouteModeOption[] = [
  { id: 'driving', label: 'Driving / Private Cab', icon: 'Car' },
  { id: 'walking', label: 'Scenic Walking Trail', icon: 'Footprints' },
  { id: 'transit', label: 'Public Transit / Bus', icon: 'Bus' },
  { id: 'bicycling', label: 'Bicycle Trail', icon: 'Bike' },
];

export default routeModesConfig;
