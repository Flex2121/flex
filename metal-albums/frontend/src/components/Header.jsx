import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🤘</span>
          <h1>Metal Albums Monitor</h1>
        </div>
        <p className="tagline">Sleduj nová metalová a rocková alba z celého světa</p>
      </div>
    </header>
  );
};

export default Header;
