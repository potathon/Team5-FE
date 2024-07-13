import axios from 'axios';
import React, { useState } from 'react';
import './index.css';
import { useParams } from 'react-router-dom';
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
  const [members, setMembers] = useState<string[]>([]);

  const handleCapacityClick = () => {
    setModalContent('참여자 목록');
    setShowMemberModal(true);
  };

  const handleJoinClick = () => {
    setModalContent('참여하시겠습니까?');
    setShowAgreeModal(true);
  };

  const { post_id } = useParams();
  const pressModalItem = async (name: string, phone: string) => {
    try {
      await axios.post(
        `http://localhost:8080/posts/${post_id}/join`,
        JSON.stringify({ name, phone }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    } catch (error) {
      console.error('Error creating post:', error);
      // 에러 처리 로직 추가 (예: 사용자에게 에러 메시지 표시)
    }
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
    <div className="card-page">
      <div className="card">
        <div className="card-header">
          <div className="date">
            <span>{month}월</span>
            <span>{date}</span>
          </div>
          <h2 className="cardTitle">{title}</h2>
        </div>
        <div className="cardBigContent">
          <div className="card-content">
            <div className="info-row">
              <img src="/assets/time.png" alt="time" className="icon-small" />
              <p>{time}</p>
            </div>
            <div className="info-row" onClick={handleCapacityClick}>
              <img
                src="/assets/participants.png"
                alt="participants"
                className="icon-small"
              />
              <p>{capacity}</p>
            </div>
            <div className="info-row">
              <img
                src="/assets/location.png"
                alt="location"
                className="icon-small"
              />
              <p>{location}</p>
            </div>
          </div>
          <div className="img-container">
            <img src="/assets/defaultImage.png" />
          </div>
        </div>
        <div className="card-actions">
          <button className="join-button" onClick={handleJoinClick}>
            참여하기
          </button>
          <button className="cancel-part-button" onClick={handleCancelClick}>
            참여 취소
          </button>
        </div>
      </div>

      {showMemberModal && (
        <Modal
          isOpen={showMemberModal}
          onClose={closeModal}
          title={modalContent}
          buttons={true}
        >
          {members.map((member, index) => (
            <p key={index}>{member}</p>
          ))}
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
