import axios from 'axios';

export async function searchCatalogFetched(location) {
  try {
    const response = await axios.post('/api/facility/get/location', { location });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
