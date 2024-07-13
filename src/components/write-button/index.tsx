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

  const handleSubmit = (name: string, phone: string) => {
    setIsModalOpen(false);
    console.log('Name:', name, 'Phone:', phone);
    navigate('/make-post');
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
