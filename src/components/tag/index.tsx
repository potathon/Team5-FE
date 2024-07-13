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
        onClick={() => setSelectedTag('세탁')}
        className={selectedTag === '세탁' ? 'selectedBlue' : ''}
      >
        #세탁
      </button>
      <button
        onClick={() => setSelectedTag('공구')}
        className={selectedTag === '공구' ? 'selectedPink' : ''}
      >
        #공구
      </button>
    </div>
  );
};

export default Tag;
