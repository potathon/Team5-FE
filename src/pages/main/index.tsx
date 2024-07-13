import React, { useState } from 'react';
import './index.css';
// import Modal from './Modal';

const laundryDefault = '/assets/laundry.png';
const laundryBlue = '/assets/laundry_blue.png';
const shoppingDefault = '/assets/shopping.png';
const shoppingPink = '/assets/shopping_pink.png';

interface CardProps {
  date: string;
  title: string;
  time: string;
  participants: string;
  location: string;
  tag: string;
  imageSrc?: string;
}

const Card: React.FC<CardProps> = ({
  date,
  title,
  time,
  participants,
  location,
  tag,
  imageSrc,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="date">
          <span>{date.split(' ')[0]}</span>
          <span>{date.split(' ')[1]}</span>
        </div>
        <div className="tag">{tag}</div>
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>
          {time} | {participants}
        </p>
        <p>{location}</p>
        {imageSrc && <img src={imageSrc} alt={title} className="card-image" />}
      </div>
      <div className="actions">
        <button className="join-button">참여하기</button>
        <button className="cancel-button">참여 취소</button>
      </div>
    </div>
  );
};

const MainPage: React.FC = () => {
  const [laundryImage, setLaundryImage] = useState(laundryDefault);
  const [shoppingImage, setShoppingImage] = useState(shoppingDefault);
  const handleLaundryClick = () => {
    setLaundryImage(laundryBlue);
  };
  const handleShoppingClick = () => {
    setShoppingImage(shoppingPink);
  };
  const posts = [
    {
      date: '7월 10',
      title: '빨래 파티원 모집합니다',
      time: '오후 09:00',
      participants: '최대 3/4명',
      location: '코튼타워 앞 빨래방',
      tag: '#세탁',
      imageSrc: '', // 이미지 URL
    },
    {
      date: '7월 28',
      title: '클렌징폼 공구 모집',
      time: '오후 09:00',
      participants: '최대 3/4명',
      location: '여자화장실',
      tag: '#공구',
      imageSrc: '', // 이미지 URL
    },
  ];

  // const history = useHistory();

  // const handleWritePost = () => {
  //   history.push('/makePost');
  // };

  return (
    <div className="main-page">
      <header className="header">
        <div className="logo-container">
          <h1 className="title">Roomie</h1>
        </div>
        <div className="divider"></div>
      </header>
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
      <div className="posts-container">
        {posts.map((post, index) => (
          <Card key={index} {...post} />
        ))}
      </div>
      <button className="write-button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.59 7.58L12.75 11.42L11.38 9.96L15.21 6.12L16.59 7.58ZM11.41 10.33L8.59 13.15L8 16H10.83L13.65 13.17L11.41 10.33Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default MainPage;
