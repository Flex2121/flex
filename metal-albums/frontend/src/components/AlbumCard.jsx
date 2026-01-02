import { useState, useEffect } from 'react';
import { formatDistance } from 'date-fns';
import { cs } from 'date-fns/locale';
import { fetchLastFmAlbum, searchMetalArchives } from '../api/musicApi';
import './AlbumCard.css';

const AlbumCard = ({ album }) => {
  const [expanded, setExpanded] = useState(false);
  const [lastFmData, setLastFmData] = useState(null);
  const [maData, setMaData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (expanded && !lastFmData && !loading) {
      loadAdditionalData();
    }
  }, [expanded]);

  const loadAdditionalData = async () => {
    setLoading(true);
    try {
      const [lfm, ma] = await Promise.all([
        fetchLastFmAlbum(album.artist, album.name),
        searchMetalArchives(album.artist, album.name)
      ]);
      setLastFmData(lfm);
      setMaData(ma);
    } catch (error) {
      console.error('Error loading additional data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatReleaseDate = (dateString) => {
    try {
      const date = new Date(dateString);
      const now = new Date();
      const daysDiff = Math.floor((now - date) / (1000 * 60 * 60 * 24));

      if (daysDiff === 0) return 'Dnes';
      if (daysDiff === 1) return 'Včera';
      if (daysDiff < 7) return `Před ${daysDiff} dny`;

      return formatDistance(date, now, { addSuffix: true, locale: cs });
    } catch {
      return dateString;
    }
  };

  return (
    <div className={`album-card ${expanded ? 'expanded' : ''}`}>
      <div className="album-card-header" onClick={() => setExpanded(!expanded)}>
        <div className="album-image-container">
          {album.image ? (
            <img src={album.image} alt={album.name} className="album-image" />
          ) : (
            <div className="album-image-placeholder">🎵</div>
          )}
          <div className="album-overlay">
            <span className="expand-icon">{expanded ? '−' : '+'}</span>
          </div>
        </div>

        <div className="album-info">
          <h3 className="album-title">{album.name}</h3>
          <p className="album-artist">{album.artist}</p>
          <div className="album-meta">
            <span className="release-date">{formatReleaseDate(album.releaseDate)}</span>
            <span className="track-count">{album.totalTracks} skladeb</span>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="album-card-body">
          {loading && <div className="loading-small">Načítám další informace...</div>}

          {lastFmData && (
            <div className="additional-info">
              <div className="info-section">
                <h4>Last.fm statistiky</h4>
                <div className="stats-grid">
                  <div className="stat">
                    <span className="stat-label">Posluchačů</span>
                    <span className="stat-value">{lastFmData.listeners?.toLocaleString()}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Přehrání</span>
                    <span className="stat-value">{lastFmData.playcount?.toLocaleString()}</span>
                  </div>
                </div>
                {lastFmData.tags && lastFmData.tags.length > 0 && (
                  <div className="tags">
                    {lastFmData.tags.slice(0, 5).map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {maData && maData.length > 0 && (
            <div className="additional-info">
              <div className="info-section">
                <h4>Metal Archives</h4>
                <p className="ma-genre">{maData[0].genre}</p>
              </div>
            </div>
          )}

          <div className="album-actions">
            <a
              href={album.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn spotify"
            >
              Otevřít ve Spotify
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlbumCard;
