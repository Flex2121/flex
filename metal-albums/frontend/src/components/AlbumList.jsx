import { useState } from 'react';
import AlbumCard from './AlbumCard';
import './AlbumList.css';

const AlbumList = ({ albums, selectedGenre }) => {
  const [sortBy, setSortBy] = useState('date');

  const sortedAlbums = [...albums].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.releaseDate) - new Date(a.releaseDate);
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'artist') {
      return a.artist.localeCompare(b.artist);
    }
    return 0;
  });

  return (
    <div className="album-list-container">
      <div className="list-header">
        <h2 className="results-count">
          {albums.length} {albums.length === 1 ? 'album' : 'alb'}
        </h2>
        <div className="sort-controls">
          <label>Řadit podle:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="date">Datum vydání</option>
            <option value="name">Název alba</option>
            <option value="artist">Interpret</option>
          </select>
        </div>
      </div>

      {albums.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">🎸</span>
          <h3>Žádná alba nenalezena</h3>
          <p>Zkus změnit filtry nebo časové období</p>
        </div>
      ) : (
        <div className="album-grid">
          {sortedAlbums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AlbumList;
