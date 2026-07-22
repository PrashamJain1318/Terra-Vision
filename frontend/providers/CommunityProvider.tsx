'use client';

import React, { useState } from 'react';
import { CommunityContext, CommunityPost } from '@/context/CommunityContext';

const mockPosts: CommunityPost[] = [
  {
    id: 'post-1',
    authorName: 'Elena Rostova',
    authorHandle: '@elena_explores',
    type: 'journal',
    title: '5 Days in Kyoto: Off-the-Beaten-Path Temples & Culinary Discoveries',
    content: 'Just wrapped up an incredible journey through Arashiyama and Gion. Terra Vision guided me to a 300-year-old tea master shop hidden in a bamboo grove!',
    location: 'Kyoto, Japan',
    likesCount: 142,
    commentsCount: 28,
    isLiked: false,
    isBookmarked: false,
    createdAt: '2 hours ago',
  },
  {
    id: 'post-2',
    authorName: 'Marcus Vance',
    authorHandle: '@marcus_v',
    type: 'review',
    title: 'Authentic Amritsari Kulcha at Kesar Da Dhaba',
    content: 'Crispy layers of baked bread stuffed with spiced potatoes, served with slow-cooked dal makhani. Absolute must-visit culinary spot!',
    location: 'Amritsar, India',
    likesCount: 98,
    commentsCount: 14,
    isLiked: true,
    isBookmarked: true,
    createdAt: '5 hours ago',
  },
  {
    id: 'post-3',
    authorName: 'Aria Thorne',
    authorHandle: '@aria_aurora',
    type: 'photo',
    title: 'Northern Lights dancing over Geysir Thermal Field',
    content: 'Captured at 11:45 PM using long exposure. The green curtain illuminated the geothermal steam columns.',
    location: 'Reykjavik, Iceland',
    likesCount: 310,
    commentsCount: 45,
    isLiked: false,
    isBookmarked: false,
    createdAt: '1 day ago',
  },
];

export const CommunityProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState('feed');
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState<CommunityPost[]>(mockPosts);
  const [followingIds, setFollowingIds] = useState<string[]>(['user-2']);

  const addPost = (postData: Omit<CommunityPost, 'id' | 'likesCount' | 'commentsCount' | 'isLiked' | 'isBookmarked' | 'createdAt'>) => {
    const newPost: CommunityPost = {
      ...postData,
      id: `post-${Date.now()}`,
      likesCount: 0,
      commentsCount: 0,
      isLiked: false,
      isBookmarked: false,
      createdAt: 'Just now',
    };
    setPosts([newPost, ...posts]);
  };

  const toggleLike = (id: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, isLiked: !p.isLiked, likesCount: p.isLiked ? p.likesCount - 1 : p.likesCount + 1 }
          : p
      )
    );
  };

  const toggleBookmark = (id: string) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isBookmarked: !p.isBookmarked } : p))
    );
  };

  const toggleFollow = (userId: string) => {
    setFollowingIds((prev) =>
      prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
    );
  };

  return (
    <CommunityContext.Provider
      value={{
        activeTab,
        setActiveTab,
        searchQuery,
        setSearchQuery,
        posts,
        addPost,
        toggleLike,
        toggleBookmark,
        followingIds,
        toggleFollow,
      }}
    >
      {children}
    </CommunityContext.Provider>
  );
};

export default CommunityProvider;
