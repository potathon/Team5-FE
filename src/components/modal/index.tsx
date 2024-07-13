import React, { useState } from 'react';
import './index.css';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  title: string;
  buttons?: boolean;
  contents?: boolean;
  firstText?: string;
  firstPress?: (name: string, phone: string) => void;
  secondText?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  buttons,
  contents,
  firstText,
  firstPress,
  secondText,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstPress) {
      firstPress(name, phone);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // 숫자가 아닌 모든 문자 제거
    setPhone(value);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">{title}</h2>
        {buttons && (
          <>
            <div className="modal-content">{children}</div>
            <div className="modal-buttons">
              <button onClick={onClose}>닫기</button>
            </div>
          </>
        )}

        {contents && (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">성함을 입력해주세요.</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">전화번호를 입력해주세요.</label>
              <div className="phone-input">
                <span>010-</span>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  pattern="[0-9]*"
                  required
                />
              </div>
            </div>
            <div className="button-group">
              <button type="submit" className="submit-btn">
                {firstText}
              </button>
              <button type="button" className="cancel-btn" onClick={onClose}>
                {secondText}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;
