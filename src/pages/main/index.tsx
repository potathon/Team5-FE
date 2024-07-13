import React, { useState } from 'react';
import './index.css';
// import Modal from './Modal';

const laundryDefault = '/assets/laundry.png';
const laundryBlue = '/assets/laundry_blue.png';
const shoppingDefault = '/assets/shopping.png';
const shoppingPink = '/assets/shopping_pink.png';
const editImage = '/assets/edit.png';
const defaultImage = '/assets/defaultImage.png';
const timeIcon = '/assets/time.png';
const participantsIcon = '/assets/participants.png';
const locationIcon = '/assets/location.png';

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
      <div className="card-row">
        <div className="date">
          <span>{date.split(' ')[0]}</span>
          <span>{date.split(' ')[1]}</span>
        </div>
        <div className="post-info">
          <h2>{title}</h2>
          <div className="info-row">
            <img src={timeIcon} alt="time" className="icon-small" />
            <p>{time}</p>
          </div>
          <div className="info-row">
            <img
              src={participantsIcon}
              alt="participants"
              className="icon-small"
            />
            <p>{participants}</p>
          </div>
          <div className="info-row">
            <img src={locationIcon} alt="location" className="icon-small" />
            <p>{location}</p>
          </div>
          <div className="tag">{tag}</div>
        </div>
        <img
          src={imageSrc || defaultImage}
          alt={title}
          className="card-image"
        />
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
        <img src={editImage} alt="Shopping" className="icon" />
      </button>
    </div>
  );
};

export default MainPage;
