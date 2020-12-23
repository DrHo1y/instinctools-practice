import axios from 'axios';

export async function createFacilitiesFetched(body, token) {
  try {
    const response = await axios.post('/api/facility/add', body, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
