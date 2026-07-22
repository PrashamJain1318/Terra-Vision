'use client';

import React from 'react';
import CommunityPostCard from '@/components/community/CommunityPostCard';
import { useCommunity } from '@/hooks/useCommunity';

export const CommunityFeedPage = () => {
  const { posts, searchQuery } = useCommunity();

  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {filteredPosts.map((post) => (
        <CommunityPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default CommunityFeedPage;
