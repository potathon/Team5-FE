import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/modal';
import './index.css';

const editImage = '/assets/edit.png';

const WriteButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (user_name: string, phone: string) => {
    // async 추가
    setIsModalOpen(false);
    navigate('/make-post');

    try {
      const response = await axios.post(
        'http://localhost:8080/posts',
        JSON.stringify({ user_name, phone }),
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
  };

  return (
    <>
      <button className="write-button" onClick={handleClick}>
        <img src={editImage} alt="Edit" className="icon" />
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        title="정보 입력"
        buttons={false}
        contents={true}
        firstText="확인"
        firstPress={handleSubmit}
        secondText="취소"
      />
    </>
  );
};

export default WriteButton;
