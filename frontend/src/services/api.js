import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const fetchHybridNewsFeed = async () => {
  try {
    const response = await axios.get(`${API_URL}/hybrid-news-feed/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching hybrid news feed:', error);
    return null;
  }
};

export const createPost = async (postData) => {
  try {
    const response = await axios.post(`${API_URL}/posts/`, postData);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    return null;
  }
};

export const createStepCounter = async (stepCounterData) => {
  try {
    const response = await axios.post(`${API_URL}/stepcounter/`, stepCounterData);
    return response.data;
  } catch (error) {
    console.error('Error creating step counter:', error);
    return null;
  }
};

export const createCalorieIntake = async (calorieIntakeData) => {
  try {
    const response = await axios.post(`${API_URL}/calorieintake/`, calorieIntakeData);
    return response.data;
  } catch (error) {
    console.error('Error creating calorie intake:', error);
    return null;
  }
};