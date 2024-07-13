import React from 'react';
import './index.css';

const editImage = '/assets/edit.png';

const WriteButton: React.FC = () => {
  const handleClick = () => {
    // handle write post click
  };

  return (
    <button className="write-button" onClick={handleClick}>
      <img src={editImage} alt="Edit" className="icon" />
    </button>
  );
};

export default WriteButton;
