export interface RecognitionCategoryOption {
  id: string;
  label: string;
  icon: string;
}

export const recognitionTypesConfig: RecognitionCategoryOption[] = [
  { id: 'landmark', label: 'Historical Landmark', icon: 'Landmark' },
  { id: 'nature', label: 'Nature & Viewpoint', icon: 'Mountain' },
  { id: 'artifact', label: 'Museum Artifact', icon: 'ShieldAlert' },
  { id: 'architecture', label: 'Architectural Style', icon: 'Building' },
];

export default recognitionTypesConfig;
