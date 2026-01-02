import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const fetchNewReleases = async (genre = 'metal', limit = 50) => {
  try {
    const response = await api.get('/api/spotify/new-releases', {
      params: { genre, limit }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching new releases:', error);
    throw new Error('Nepodařilo se načíst nová alba');
  }
};

export const fetchArtistDetails = async (artistId) => {
  try {
    const response = await api.get(`/api/spotify/artist/${artistId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching artist details:', error);
    throw new Error('Nepodařilo se načíst informace o interpretovi');
  }
};

export const searchMetalArchives = async (band, album) => {
  try {
    const response = await api.get('/api/metal-archives/search', {
      params: { band, album }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching Metal Archives:', error);
    return [];
  }
};

export const fetchLastFmAlbum = async (artist, album) => {
  try {
    const response = await api.get('/api/lastfm/album', {
      params: { artist, album }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Last.fm data:', error);
    return null;
  }
};

export default api;
