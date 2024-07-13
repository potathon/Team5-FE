import React, { useState } from 'react';
import './index.css';
import Modal from '../modal';

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
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [showAgreeModal, setShowAgreeModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleCapacityClick = () => {
    setModalContent('참여자 목록');
    setShowMemberModal(true);
  };

  const handleJoinClick = () => {
    setModalContent('참여하시겠습니까?');
    setShowAgreeModal(true);
  };

  const pressModalItem = (name: string, phone: string) => {
    console.log(`참여자 정보: 이름 - ${name}, 전화번호 - ${phone}`);
    setShowAgreeModal(false);
    setShowCancelModal(false);
  };

  const handleCancelClick = () => {
    setModalContent('정말 참여를 취소하시겠습니까?');
    setShowCancelModal(true);
  };

  const closeModal = () => {
    setShowMemberModal(false);
    setShowAgreeModal(false);
    setShowCancelModal(false);
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

      {showMemberModal && (
        <Modal
          isOpen={showMemberModal}
          onClose={closeModal}
          title={modalContent}
          buttons={true}
        >
          <p>미아</p>
          <p>릴리</p>
        </Modal>
      )}

      {showAgreeModal && (
        <Modal
          isOpen={showAgreeModal}
          onClose={closeModal}
          title={modalContent}
          contents={true}
          firstText={'참여하기'}
          secondText={'참여취소'}
          firstPress={pressModalItem}
        ></Modal>
      )}

      {showCancelModal && (
        <Modal
          isOpen={showCancelModal}
          onClose={closeModal}
          title={modalContent}
          contents={true}
          firstText={'예'}
          secondText={'아니오'}
          firstPress={pressModalItem}
        ></Modal>
      )}
    </div>
  );
};

export default Card;
