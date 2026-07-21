export type AIInteractionType = 'vision' | 'chat' | 'recommendation';

export interface AIMetaData {
  imageUrl?: string;
  modelUsed?: string;
}

export interface AIHistory {
  _id: string;
  user: string; // User reference ID
  interactionType: AIInteractionType;
  prompt: string;
  response: string;
  metaData?: AIMetaData;
  isDeleted: boolean;
  deletedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}
