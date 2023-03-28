import React from 'react';
import { Grid, Container } from '@mui/material';
import Navbar from './Navbar';
import StepCounterForm from './StepCounterForm';
import CalorieIntakeForm from './CalorieIntakeForm';
import PostForm from './PostForm';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <StepCounterForm />
            <CalorieIntakeForm />
            <PostForm />
            {children}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MainLayout;



