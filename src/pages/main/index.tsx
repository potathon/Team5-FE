import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

interface CardProps {
    date: string;
    title: string;
    time: string;
    participants: string;
    location: string;
    tag: string;
    imageSrc?: string;
}

const Card: React.FC<CardProps> = ({ date, title, time, participants, location, tag, imageSrc }) => {
    return (
      <div className="card">
        <div className="date">{date}</div>
        <div className="content">
          <h2>{title}</h2>
          <p>{time} | {participants}</p>
          <p>{location}</p>
          <span className="tag">{tag}</span>
          {imageSrc && <img src={imageSrc} alt={title} className="card-image" />}
          <div className="actions">
            <button className="join-button">참여하기</button>
            <button className="cancel-button">참여 취소</button>
          </div>
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
          <header className="header">
            <div className="logo-container">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo">
                <rect y="0.904785" width="52" height="50.7619" fill="currentColor"/>
              </svg>
              <h1 className="title">Roo <span className="title-highlight">mie</span></h1>
            </div>
            <div className="divider"></div>
          </header>
          <div className="buttons-container">
            <button className="button">#세탁</button>
            <button className="button">#공구</button>
          </div>
          <div className="posts-container">
            {posts.map((post, index) => (
              <Card key={index} {...post} />
            ))}
          </div>
        </div>
      );
    };
    
  
  export default MainPage;
