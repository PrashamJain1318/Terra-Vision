'use client';

import { createContext } from 'react';

export interface CommunityPost {
  id: string;
  authorName: string;
  authorHandle: string;
  authorAvatar?: string;
  type: 'photo' | 'story' | 'journal' | 'trip_plan' | 'question' | 'checkin' | 'review';
  title: string;
  content: string;
  location: string;
  likesCount: number;
  commentsCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  createdAt: string;
}

export interface CommunityState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  posts: CommunityPost[];
  addPost: (post: Omit<CommunityPost, 'id' | 'likesCount' | 'commentsCount' | 'isLiked' | 'isBookmarked' | 'createdAt'>) => void;
  toggleLike: (id: string) => void;
  toggleBookmark: (id: string) => void;
  followingIds: string[];
  toggleFollow: (userId: string) => void;
}

export const CommunityContext = createContext<CommunityState | null>(null);

export default CommunityContext;
