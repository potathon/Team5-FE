import React, { useState } from 'react';
import './index.css';

const laundryDefault = '/assets/laundry.png';
const laundryBlue = '/assets/laundry_blue.png';
const shoppingDefault = '/assets/shopping.png';
const shoppingPink = '/assets/shopping_pink.png';

const Category: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      // API 요청: 선택 해제 시
      // fetch('API_URL_TO_DESELECT', { method: 'POST', body: JSON.stringify({ category: null }) });
    } else {
      setSelectedCategory(category);
      // API 요청: 선택 시
      // fetch('API_URL_TO_SELECT', { method: 'POST', body: JSON.stringify({ category }) });
    }
  };

  return (
    <>
      <div className="buttons-container">
        <div className="tag-label-laundry">#세탁</div>
        <div className="tag-label-shopping">#공구</div>
      </div>
      <div className="icon-buttons-container">
        <button
          className="icon-button-left"
          onClick={() => handleCategoryClick('laundry')}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E8F1FA';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFF';
          }}
        >
          <img
            src={selectedCategory === 'laundry' ? laundryBlue : laundryDefault}
            alt="Laundry"
            className="icon"
          />
        </button>
        <button
          className="icon-button-right"
          onClick={() => handleCategoryClick('shopping')}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FEF5FB';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFF';
          }}
        >
          <img
            src={
              selectedCategory === 'shopping' ? shoppingPink : shoppingDefault
            }
            alt="Shopping"
            className="icon"
          />
        </button>
      </div>
    </>
  );
};

export default Category;
