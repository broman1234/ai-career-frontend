import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const careerService = {
  getCareerInfo: async (careerPath) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/careers/info/${careerPath}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching career info:', error);
      throw error;
    }
  }
}; 