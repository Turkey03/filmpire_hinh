import axios from 'axios';

export const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
  },
});
export const fetchToken = async () => {
  try {
    const { data } = await moviesApi.get('/authentication/token/new');
    const token = data.request_token;
    if (data.success) {
      localStorage.setItem('request_token', token);
      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (error) {
    console.log('Không lấy được token rồi dcu.');
  }
};
export const createSessionId = async () => {
  const token = localStorage.getItem('request_token');
  if (token) {
    try {
      const response = await moviesApi.get('/authentication/session/new', {
        params: {
          request_token: token,
        },
      });
      const { session_id } = response.data;
      localStorage.setItem('session_id', session_id);
      return session_id;
    } catch (error) {
      console.error('Error creating session:', error);
    }
  }
};
