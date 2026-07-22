import CommunityPost from '../models/CommunityPost.js';

export const CommunityFeedService = {
  async getFeedPosts({ page = 1, limit = 10, type = 'all' }) {
    const query = type === 'all' ? {} : { type };
    const posts = await CommunityPost.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    return posts.length > 0
      ? posts
      : [
          {
            _id: 'mock-1',
            authorName: 'Elena Rostova',
            authorHandle: '@elena_explores',
            type: 'journal',
            title: '5 Days in Kyoto: Off-the-Beaten-Path Temples',
            content: 'Terra Vision guided me through hidden alleyways in Gion!',
            location: 'Kyoto, Japan',
            likesCount: 142,
            commentsCount: 28,
            createdAt: new Date().toISOString(),
          },
        ];
  },

  async createPost(postData) {
    const newPost = new CommunityPost(postData);
    return await newPost.save();
  },
};

export default CommunityFeedService;
