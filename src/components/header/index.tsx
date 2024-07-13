import React from 'react';
import './index.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="title">Roomie</h1>
      </div>
      <div className="divider"></div>
    </header>
  );
};

export default Header;
