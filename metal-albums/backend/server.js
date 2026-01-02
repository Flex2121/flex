const express = require('express');
const cors = require('cors');
const axios = require('axios');
const NodeCache = require('node-cache');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Cache for 1 hour
const cache = new NodeCache({ stdTTL: 3600 });

app.use(cors());
app.use(express.json());

// Spotify API credentials
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || '';
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || '';

// Get Spotify access token
async function getSpotifyToken() {
  const cached = cache.get('spotify_token');
  if (cached) return cached;

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      'grant_type=client_credentials',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64')
        }
      }
    );

    const token = response.data.access_token;
    cache.set('spotify_token', token, response.data.expires_in - 60);
    return token;
  } catch (error) {
    console.error('Error getting Spotify token:', error.message);
    throw error;
  }
}

// Get new metal/rock releases from Spotify
app.get('/api/spotify/new-releases', async (req, res) => {
  try {
    const { genre = 'metal', limit = 50 } = req.query;
    const cacheKey = `spotify_releases_${genre}_${limit}`;

    const cached = cache.get(cacheKey);
    if (cached) {
      return res.json(cached);
    }

    const token = await getSpotifyToken();

    // Search for new albums in the genre
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const dateStr = oneWeekAgo.toISOString().split('T')[0];

    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: { 'Authorization': `Bearer ${token}` },
      params: {
        q: `genre:${genre} year:${new Date().getFullYear()}`,
        type: 'album',
        limit: limit,
        market: 'US'
      }
    });

    const albums = response.data.albums.items.map(album => ({
      id: album.id,
      name: album.name,
      artist: album.artists[0].name,
      artistId: album.artists[0].id,
      releaseDate: album.release_date,
      image: album.images[0]?.url || '',
      spotifyUrl: album.external_urls.spotify,
      totalTracks: album.total_tracks
    }));

    cache.set(cacheKey, albums, 3600);
    res.json(albums);
  } catch (error) {
    console.error('Error fetching Spotify releases:', error.message);
    res.status(500).json({ error: 'Failed to fetch releases from Spotify' });
  }
});

// Get artist details from Spotify
app.get('/api/spotify/artist/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cacheKey = `spotify_artist_${id}`;

    const cached = cache.get(cacheKey);
    if (cached) {
      return res.json(cached);
    }

    const token = await getSpotifyToken();

    const response = await axios.get(`https://api.spotify.com/v1/artists/${id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    const artist = {
      id: response.data.id,
      name: response.data.name,
      genres: response.data.genres,
      popularity: response.data.popularity,
      image: response.data.images[0]?.url || '',
      followers: response.data.followers.total
    };

    cache.set(cacheKey, artist, 7200);
    res.json(artist);
  } catch (error) {
    console.error('Error fetching artist:', error.message);
    res.status(500).json({ error: 'Failed to fetch artist details' });
  }
});

// Search Metal Archives
app.get('/api/metal-archives/search', async (req, res) => {
  try {
    const { band, album } = req.query;
    const cacheKey = `ma_search_${band}_${album}`;

    const cached = cache.get(cacheKey);
    if (cached) {
      return res.json(cached);
    }

    // Metal Archives API endpoint
    const searchQuery = album || band;
    const searchType = album ? 'album_name' : 'band_name';

    const response = await axios.get('https://www.metal-archives.com/search/ajax-advanced/searching/albums', {
      params: {
        [searchType]: searchQuery,
        exactMatch: 0
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    const results = response.data.aaData || [];
    const albums = results.slice(0, 10).map(item => {
      // Parse the HTML response from Metal Archives
      const bandMatch = item[0]?.match(/>([^<]+)</);
      const albumMatch = item[1]?.match(/>([^<]+)</);
      const typeMatch = item[2];
      const genreMatch = item[3];
      const yearMatch = item[4];

      return {
        band: bandMatch ? bandMatch[1] : '',
        album: albumMatch ? albumMatch[1] : '',
        type: typeMatch || '',
        genre: genreMatch || '',
        year: yearMatch || ''
      };
    });

    cache.set(cacheKey, albums, 7200);
    res.json(albums);
  } catch (error) {
    console.error('Error searching Metal Archives:', error.message);
    res.status(500).json({ error: 'Failed to search Metal Archives' });
  }
});

// Get album info from Last.fm (for ratings and additional metadata)
app.get('/api/lastfm/album', async (req, res) => {
  try {
    const { artist, album } = req.query;
    const LASTFM_API_KEY = process.env.LASTFM_API_KEY || 'demo_key';

    const cacheKey = `lastfm_${artist}_${album}`;
    const cached = cache.get(cacheKey);
    if (cached) {
      return res.json(cached);
    }

    const response = await axios.get('http://ws.audioscrobbler.com/2.0/', {
      params: {
        method: 'album.getinfo',
        api_key: LASTFM_API_KEY,
        artist: artist,
        album: album,
        format: 'json'
      }
    });

    const albumData = response.data.album;
    if (!albumData) {
      return res.status(404).json({ error: 'Album not found' });
    }

    const result = {
      name: albumData.name,
      artist: albumData.artist,
      listeners: parseInt(albumData.listeners) || 0,
      playcount: parseInt(albumData.playcount) || 0,
      userplaycount: parseInt(albumData.userplaycount) || 0,
      tags: albumData.tags?.tag?.map(t => t.name) || [],
      image: albumData.image?.find(img => img.size === 'extralarge')?.['#text'] || '',
      wiki: albumData.wiki?.summary || ''
    };

    cache.set(cacheKey, result, 7200);
    res.json(result);
  } catch (error) {
    console.error('Error fetching Last.fm data:', error.message);
    res.status(500).json({ error: 'Failed to fetch Last.fm data' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', cache_keys: cache.keys().length });
});

app.listen(PORT, () => {
  console.log(`🤘 Metal Albums API server running on port ${PORT}`);
  console.log(`📊 Cache TTL: 1 hour`);
});
