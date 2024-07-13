import React, { useState } from 'react';
import './index.css';

const laundryDefault = '/assets/laundry.png';
const laundryBlue = '/assets/laundry_blue.png';
const shoppingDefault = '/assets/shopping.png';
const shoppingPink = '/assets/shopping_pink.png';

const Category: React.FC = () => {
  const [laundryImage, setLaundryImage] = useState(laundryDefault);
  const [shoppingImage, setShoppingImage] = useState(shoppingDefault);

  const handleLaundryClick = () => {
    setLaundryImage(laundryBlue);
  };

  const handleShoppingClick = () => {
    setShoppingImage(shoppingPink);
  };

  return (
    <>
      <div className="buttons-container">
        <div className="tag-label">#세탁</div>
        <div className="tag-label">#공구</div>
      </div>
      <div className="icon-buttons-container">
        <button
          className="icon-button"
          onClick={handleLaundryClick}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E8F1FA';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFF';
          }}
        >
          <img src={laundryImage} alt="Laundry" className="icon" />
        </button>
        <button
          className="icon-button"
          onClick={handleShoppingClick}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FEF5FB';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFF';
          }}
        >
          <img src={shoppingImage} alt="Shopping" className="icon" />
        </button>
      </div>
    </>
  );
};

export default Category;
