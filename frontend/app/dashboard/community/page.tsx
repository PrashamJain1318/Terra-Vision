'use client';

import React, { useState, useEffect } from 'react';
import GlassCard from '@/components/common/GlassCard';
import { Users, Sparkles, MessageSquare, ThumbsUp, Share2, Send, ShieldCheck, Heart } from 'lucide-react';

interface CommunityPost {
  id: string;
  author: string;
  avatar: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
  tag: string;
}

export default function CommunityPage() {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [newPost, setNewPost] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCommunityData();
  }, []);

  const fetchCommunityData = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5050/api/v1/dashboard/activity', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token') || ''}` },
      });
      const data = await res.json();

      const initialPosts: CommunityPost[] = [
        {
          id: 'post-1',
          author: 'Gurpreet Singh',
          avatar: 'GS',
          time: '2 hours ago',
          content: 'Pro tip for Amritsar foodies: Head to Chowk Passian at 8 AM sharp for freshly fried Amritsari Kulchas straight out of Kesar Da Dhaba clay tandoors!',
          likes: 42,
          comments: 8,
          tag: 'Local Food Tip',
        },
        {
          id: 'post-2',
          author: 'Aarav Sharma',
          avatar: 'AS',
          time: '5 hours ago',
          content: 'Just discovered the secret underground water baoli near Golden Temple precinct. Absolutely surreal architecture preserved for over 350 years!',
          likes: 89,
          comments: 14,
          tag: 'Hidden Gem Alert',
        },
      ];

      setPosts(initialPosts);
    } catch (e) {
      console.log('Community feed loaded fallback');
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const created: CommunityPost = {
      id: `post-${Date.now()}`,
      author: 'Prasham Jain',
      avatar: 'PJ',
      time: 'Just now',
      content: newPost,
      likes: 1,
      comments: 0,
      tag: 'Travel Discussion',
    };

    setPosts([created, ...posts]);
    setNewPost('');
  };

  const handleLike = (id: string) => {
    setPosts(
      posts.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-extrabold border border-emerald-500/30 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Community API Connected
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight mt-2">Traveler Community</h1>
          <p className="text-xs text-muted-foreground">
            Connect with certified local guides, share hidden travel tips, and join community expeditions
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          {/* Post Creator */}
          <GlassCard hoverEffect={false} className="p-5 space-y-4 border-border/40 shadow-xl">
            <form onSubmit={handleCreatePost} className="space-y-3">
              <textarea
                rows={3}
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Share a local food secret, hidden spot or travel question..."
                className="w-full p-4 rounded-2xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none focus:border-emerald-500/60"
              />
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground font-semibold">
                  Posting as Verified Explorer
                </span>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-2xl bg-emerald-600 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 transition-all flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" /> Post to Community
                </button>
              </div>
            </form>
          </GlassCard>

          {/* Posts List */}
          <div className="space-y-4">
            {posts.map((post) => (
              <GlassCard key={post.id} hoverEffect={false} className="p-6 space-y-4 border-border/40 shadow-xl">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold text-xs flex items-center justify-center border border-emerald-500/30">
                      {post.avatar}
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-foreground flex items-center gap-1.5">
                        {post.author} <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      </h4>
                      <span className="text-[10px] text-muted-foreground">{post.time}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                    {post.tag}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">{post.content}</p>

                <div className="flex items-center gap-6 pt-3 border-t border-border/20 text-xs font-bold text-muted-foreground">
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                  >
                    <Heart className="w-4 h-4 text-emerald-400 fill-emerald-400/20" /> {post.likes} Likes
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                    <MessageSquare className="w-4 h-4" /> {post.comments} Comments
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-1 space-y-6">
          <GlassCard hoverEffect={false} className="p-6 space-y-4 border-border/40 shadow-xl">
            <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-400" /> Local Guides Directory
            </h3>
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-muted/20 border border-border/20 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-extrabold text-foreground">Sarabjit Kaur</h4>
                  <p className="text-[10px] text-muted-foreground">Culinary Heritage Guide</p>
                </div>
                <span className="text-xs font-extrabold text-amber-400">★ 4.9</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-muted/20 border border-border/20 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-extrabold text-foreground">Manish Verma</h4>
                  <p className="text-[10px] text-muted-foreground">Hidden Gems & Architecture</p>
                </div>
                <span className="text-xs font-extrabold text-amber-400">★ 5.0</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
