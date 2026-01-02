import './FilterPanel.css';

const FilterPanel = ({
  selectedGenre,
  selectedSubgenre,
  timeframe,
  onGenreChange,
  onSubgenreChange,
  onTimeframeChange
}) => {
  const genres = [
    { value: 'metal', label: 'Metal' },
    { value: 'rock', label: 'Rock' },
    { value: 'death metal', label: 'Death Metal' },
    { value: 'black metal', label: 'Black Metal' },
    { value: 'thrash metal', label: 'Thrash Metal' },
    { value: 'doom metal', label: 'Doom Metal' },
    { value: 'progressive metal', label: 'Progressive Metal' },
    { value: 'power metal', label: 'Power Metal' },
    { value: 'metalcore', label: 'Metalcore' },
    { value: 'deathcore', label: 'Deathcore' },
  ];

  const timeframes = [
    { value: 'today', label: 'Dnes' },
    { value: 'week', label: 'Tento týden' },
    { value: 'month', label: 'Tento měsíc' },
    { value: 'all', label: 'Vše' },
  ];

  return (
    <div className="filter-panel">
      <div className="filter-section">
        <label className="filter-label">Žánr:</label>
        <div className="genre-buttons">
          {genres.map(genre => (
            <button
              key={genre.value}
              className={`genre-btn ${selectedGenre === genre.value ? 'active' : ''}`}
              onClick={() => onGenreChange(genre.value)}
            >
              {genre.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <label className="filter-label">Časové období:</label>
        <div className="timeframe-buttons">
          {timeframes.map(tf => (
            <button
              key={tf.value}
              className={`timeframe-btn ${timeframe === tf.value ? 'active' : ''}`}
              onClick={() => onTimeframeChange(tf.value)}
            >
              {tf.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
