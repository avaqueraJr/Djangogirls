import React from 'react';

const Post = ({ post }) => (
  <div className="post">
    <h2>{post.title}</h2>
    <p>{post.text}</p>
    <p>Author: {post.author}</p>
    <p>Published: {post.published_date}</p>
  </div>
);

export default Post;

