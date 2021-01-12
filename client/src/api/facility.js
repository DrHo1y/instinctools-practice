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

export async function updateFacilityFetched(body, token) {
  try {
    const response = await axios.put('/api/facility/edit', body, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function getAllFacilitiesForUserFetched(token) {
  try {
    const response = await axios.get('/api/facility/all', { headers: { Authorization: token } });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function addRoomsToFacility(body, token) {
  try {
    const response = await axios.post('/api/facility/add/rooms', body, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
