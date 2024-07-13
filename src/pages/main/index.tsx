import React, { useState } from 'react';
import './index.css';
import Category from '../../components/category';
import Header from '../../components/header';
import WriteButton from '../../components/write-button';

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
  const tagStyle = {
    backgroundColor:
      tag === '#세탁' ? '#A9D4F1' : tag === '#공구' ? '#F4C6DA' : '#E8F1FA',
  };

  return (
    <div className="card">
      <div className="card-row">
        <div className="date">
          <span>{date.split(' ')[0]}</span>
          <span>{date.split(' ')[1]}</span>
        </div>
        <div className="post-info">
          <h2>{title}</h2>
          <div className="info-col">
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
          </div>
          <div className="info-row">
            <img src={locationIcon} alt="location" className="icon-small" />
            <p>{location}</p>
          </div>
          <div className="tag" style={tagStyle}>
            {tag}
          </div>
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

  return (
    <div className="main-page">
      <Header />
      <Category />
      <div className="posts-container">
        {posts.map((post, index) => (
          <Card key={index} {...post} />
        ))}
      </div>
      <WriteButton />
    </div>
  );
};

export default MainPage;
