import React, { useEffect, useState } from 'react';
import { fetchPosts } from './api/api';
import VideoPost from './VideoPost';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAndSetPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    };

    fetchAndSetPosts();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {posts.map((post) => (
        <VideoPost
          key={post.id}
          videoSrc={post.videoSrc}
          title={post.title}
          description={post.text}
        />
      ))}
    </div>
  );
};

export default PostList;

