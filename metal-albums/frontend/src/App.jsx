import { useState, useEffect } from 'react';
import './App.css';
import AlbumList from './components/AlbumList';
import FilterPanel from './components/FilterPanel';
import Header from './components/Header';
import { fetchNewReleases } from './api/musicApi';

function App() {
  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('metal');
  const [selectedSubgenre, setSelectedSubgenre] = useState('all');
  const [timeframe, setTimeframe] = useState('week');

  useEffect(() => {
    loadAlbums();
  }, [selectedGenre]);

  useEffect(() => {
    filterAlbums();
  }, [albums, selectedSubgenre, timeframe]);

  const loadAlbums = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchNewReleases(selectedGenre);
      setAlbums(data);
    } catch (err) {
      setError(err.message);
      console.error('Error loading albums:', err);
    } finally {
      setLoading(false);
    }
  };

  const filterAlbums = () => {
    let filtered = [...albums];

    // Filter by timeframe
    const now = new Date();
    const cutoffDate = new Date();

    if (timeframe === 'week') {
      cutoffDate.setDate(now.getDate() - 7);
    } else if (timeframe === 'month') {
      cutoffDate.setMonth(now.getMonth() - 1);
    } else if (timeframe === 'today') {
      cutoffDate.setDate(now.getDate() - 1);
    }

    filtered = filtered.filter(album => {
      const releaseDate = new Date(album.releaseDate);
      return releaseDate >= cutoffDate;
    });

    setFilteredAlbums(filtered);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSubgenreChange = (subgenre) => {
    setSelectedSubgenre(subgenre);
  };

  const handleTimeframeChange = (tf) => {
    setTimeframe(tf);
  };

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <FilterPanel
          selectedGenre={selectedGenre}
          selectedSubgenre={selectedSubgenre}
          timeframe={timeframe}
          onGenreChange={handleGenreChange}
          onSubgenreChange={handleSubgenreChange}
          onTimeframeChange={handleTimeframeChange}
        />

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Načítám nová alba...</p>
          </div>
        )}

        {error && (
          <div className="error">
            <p>⚠️ Chyba při načítání: {error}</p>
            <button onClick={loadAlbums}>Zkusit znovu</button>
          </div>
        )}

        {!loading && !error && (
          <AlbumList
            albums={filteredAlbums}
            selectedGenre={selectedGenre}
          />
        )}
      </main>
    </div>
  );
}

export default App;
