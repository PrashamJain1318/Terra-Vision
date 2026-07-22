'use client';

import React from 'react';
import { Heart, MessageSquare, Bookmark, MapPin, Share2 } from 'lucide-react';
import { CommunityPost } from '@/context/CommunityContext';
import { useCommunity } from '@/hooks/useCommunity';

export const CommunityPostCard = ({ post }: { post: CommunityPost }) => {
  const { toggleLike, toggleBookmark } = useCommunity();

  return (
    <div className="p-6 rounded-3xl atlas-card border-border/40 space-y-4 shadow-lg hover:border-primary/40 transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold flex items-center justify-center border border-emerald-500/30">
            {post.authorName.charAt(0)}
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-foreground">{post.authorName}</h4>
            <span className="text-[10px] font-mono text-muted-foreground">{post.authorHandle} • {post.createdAt}</span>
          </div>
        </div>

        <span className="passport-stamp text-emerald-400 border-emerald-400/40">
          {post.type.toUpperCase()}
        </span>
      </div>

      <div className="space-y-2">
        <h3 className="font-editorial text-xl font-extrabold text-foreground">{post.title}</h3>
        <p className="text-xs text-muted-foreground font-sans leading-relaxed">{post.content}</p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border/30 text-xs font-mono">
        <span className="text-muted-foreground flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-primary" /> {post.location}
        </span>

        <div className="flex items-center gap-4 text-muted-foreground">
          <button
            onClick={() => toggleLike(post.id)}
            className={`flex items-center gap-1 hover:text-red-400 transition-colors ${
              post.isLiked ? 'text-red-500 font-bold' : ''
            }`}
          >
            <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-current' : ''}`} />
            <span>{post.likesCount}</span>
          </button>

          <div className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            <span>{post.commentsCount}</span>
          </div>

          <button
            onClick={() => toggleBookmark(post.id)}
            className={`hover:text-primary transition-colors ${
              post.isBookmarked ? 'text-primary font-bold' : ''
            }`}
          >
            <Bookmark className={`w-4 h-4 ${post.isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityPostCard;
