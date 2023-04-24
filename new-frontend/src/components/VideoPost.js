// src/components/VideoPost.js

import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const VideoPost = ({ videoSrc, title, description }) => {
  return (
    <Card>
      <CardMedia component="video" src={videoSrc} title={title} autoPlay loop />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default VideoPost;
