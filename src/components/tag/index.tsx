import React from 'react';
import './index.css';

interface TagProps {
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
}

const Tag: React.FC<TagProps> = ({ selectedTag, setSelectedTag }) => {
  return (
    <div className="tag-container">
      <button
        onClick={() => setSelectedTag('laundry')}
        className={selectedTag === 'laundry' ? 'selectedBlue' : ''}
      >
        #세탁
      </button>
      <button
        onClick={() => setSelectedTag('buy')}
        className={selectedTag === 'buy' ? 'selectedPink' : ''}
      >
        #공구
      </button>
    </div>
  );
};

export default Tag;
