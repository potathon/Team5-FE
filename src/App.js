import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import MainPage from './pages/main';
import MakePost from './pages/makePost/index';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/make-post" element={<MakePost />} />
      </Routes>
    </Router>
  );
};

export default App;
