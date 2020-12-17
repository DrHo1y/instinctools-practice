import axios from 'axios';

export async function signupFetched(body) {
  try {
    const response = await axios.post('/api/sign/register', body);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function signinFetched(body) {
  try {
    const response = await axios.post('/api/sign/login', body);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function authFetched(token) {
  try {
    const response = await axios.get('/api/sign/auth', {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
