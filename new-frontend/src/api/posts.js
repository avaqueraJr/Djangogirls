import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/';

const instance = axios.create({
  baseURL: API_URL,
});

export const fetchPosts = async () => {
  const response = await instance.get('posts/');
  return response.data;
};

export const fetchStepCounter = async () => {
  const response = await instance.get('stepcounter/');
  return response.data;
};

export const fetchCalorieIntake = async () => {
  const response = await instance.get('calorieintake/');
  return response.data;
};

export const fetchHybridNewsFeed = async () => {
  const response = await instance.get('hybridnewsfeed/');
  return response.data;
};
