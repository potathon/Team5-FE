import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MainPage: React.FC = () => {
    return (
        <div className="main-page">
        <header className="header">
          <div className="logo-container">
            <img src="/path/to/logo.png" alt="Logo" className="logo" />
            <h1 className="title">Roo <span className="title-highlight">mie</span></h1>
          </div>
          <div className="divider"></div>
        </header>
        <div className="buttons-container">
          <button className="button">#세탁</button>
          <button className="button">#공구</button>
        </div>
        <div className="posts-container">
          {/* 포스트 내용 */}
        </div>
      </div>
    );
  };
  
  export default MainPage;