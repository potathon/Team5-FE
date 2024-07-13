import React from 'react';
import Card from '../../components/card';
import './index.css';
import Category from '../../components/category';
import Header from '../../components/header';
import WriteButton from '../../components/write-button';

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <Header />
      <div className="logo">{/* 로고 이미지를 여기에 삽입하세요 */}</div>
      <div className="tags">
        <span className="tag tag-light">#세탁</span>
        <span className="tag tag-dark">#공구</span>
      </div>
      <div className="icons">
        <span className="icon icon-washer">🧺</span>
        <span className="icon icon-bag">🛍️</span>
      </div>
      <main>
        <div className="card-grid">
          <Card
            date="10"
            month="7"
            title="빨래 파티원 모집합니다"
            time="오후 09:00"
            capacity="3/4명"
            location="크린토피아 앞 호떡집"
          />
          <Card
            date="10"
            month="7"
            title="빨래 파티원 모집합니다"
            time="오후 09:00"
            capacity="4/4명"
            location="크린토피아 앞 호떡집"
          />
          <Card
            date="28"
            month="7"
            title="클렌징폼 공구 모집"
            time="오후 09:00"
            capacity="3/4명"
            location="여자방1"
          />
          <Card
            date="28"
            month="7"
            title="클렌징폼 공구 모집"
            time="오후 09:00"
            capacity="3/4명"
            location="여자방1"
          />
        </div>
      </main>
      <button className="floating-button">
        <span className="pencil-icon">✏️</span>
      </button>
    </div>
  );
};

export default MainPage;
