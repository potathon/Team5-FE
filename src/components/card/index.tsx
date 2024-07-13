import React, { useState } from 'react';
import './index.css';

interface CardProps {
  date: string;
  month: string;
  title: string;
  time: string;
  capacity: string;
  location: string;
}

const Card: React.FC<CardProps> = ({
  date,
  month,
  title,
  time,
  capacity,
  location,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleCapacityClick = () => {
    setModalContent('인원 선택');
    setShowModal(true);
  };

  const handleJoinClick = () => {
    setModalContent('참여하기');
    setShowModal(true);
  };

  const handleCancelClick = () => {
    setModalContent('참여 취소');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="card">
      <div className="card-date">
        <div className="card-month">{month}월</div>
        <div className="card-day">{date}</div>
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{time}</p>
        <p className="capacity" onClick={handleCapacityClick}>
          {capacity}
        </p>
        <p>{location}</p>
      </div>
      <div className="card-actions">
        <button className="join-button" onClick={handleJoinClick}>
          참여하기
        </button>
        <button className="cancel-button" onClick={handleCancelClick}>
          참여 취소
        </button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{modalContent}</h2>
            <p>여기에 모달 내용을 추가하세요.</p>
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
