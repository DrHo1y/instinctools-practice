import axios from 'axios';

export async function getCityFetch(countryId) {
  try {
    const response = await axios.post('/api/location/city', { countryId });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
