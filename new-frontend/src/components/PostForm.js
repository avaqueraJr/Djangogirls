import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { createPost } from '../services/api';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createPost({ title, text });
    setTitle('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextField
        label="Text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        multiline
      />
      <Button type="submit" variant="contained" color="primary">
        Create Post
      </Button>
    </form>
  );
};

export default PostForm;
