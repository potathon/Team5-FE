import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate('/main');
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="app-name">Roomie</h1>
        <div className="logo">
          <img
            src="../assets/logo.png"
            alt="Roomie Logo"
            width="50"
            height="50"
          />
        </div>
        <button className="open-button" onClick={handleOpen}>
          Open
        </button>
      </div>
    </div>
  );
};

export default HomePage;
