import axios from 'axios';

// Base URL for the Django backend API
const API_URL = 'http://127.0.0.1:8000/api/blog/';

// Function to fetch data from the backend
export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Add more API call functions as needed
