'use client';

import { useContext } from 'react';
import { CommunityContext } from '@/context/CommunityContext';

const defaultFallbackState = {
  activeTab: 'feed',
  setActiveTab: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
  posts: [],
  addPost: () => {},
  toggleLike: () => {},
  toggleBookmark: () => {},
  followingIds: [],
  toggleFollow: () => {},
};

export const useCommunity = () => {
  const context = useContext(CommunityContext);
  return context || defaultFallbackState;
};

export default useCommunity;
