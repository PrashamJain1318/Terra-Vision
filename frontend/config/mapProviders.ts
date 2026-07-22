export interface MapProviderOption {
  id: string;
  name: string;
  type: 'google' | 'mapbox' | 'osm';
  defaultZoom: number;
}

export const mapProvidersConfig: MapProviderOption[] = [
  { id: 'google_maps', name: 'Google Maps Vector Engine', type: 'google', defaultZoom: 13 },
  { id: 'mapbox_dark', name: 'Mapbox Dark GL', type: 'mapbox', defaultZoom: 14 },
  { id: 'open_street_map', name: 'OpenStreetMap Carto', type: 'osm', defaultZoom: 12 },
];

export default mapProvidersConfig;
