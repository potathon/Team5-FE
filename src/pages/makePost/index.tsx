import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import Tag from '../../components/tag';
import './index.css';

const MakePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [peopleCount, setPeopleCount] = useState(1);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // 모든 필수 필드가 채워졌는지 확인
    const isValid =
      title !== '' &&
      content !== '' &&
      location !== '' &&
      selectedDate !== null &&
      selectedTag !== null;
    setIsFormValid(isValid);
  }, [title, content, location, selectedDate, selectedTag]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!isFormValid) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('location', location);
    formData.append('meetTime', selectedDate!.toISOString());
    formData.append('maxCount', peopleCount.toString());
    formData.append('tag', selectedTag!);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.post('/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/main');
    } catch (error) {
      console.error('Error creating post:', error);
      // 에러 처리 로직 추가 (예: 사용자에게 에러 메시지 표시)
    }
  };

  return (
    <div className="container">
      <div className="form-group">
        <label>포스트 제목</label>
        <input
          type="text"
          placeholder="제목을 작성해 주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>포스트 내용</label>
        <textarea
          placeholder="들어가면 좋을 내용!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>사진 (선택)</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <div className="form-group">
        <label>모임 장소</label>
        <input
          type="text"
          placeholder="제목을 작성해 주세요."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>모임 일정</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          showTimeSelect
          dateFormat="Pp"
        />
      </div>
      <div className="form-group">
        <label>모집 인원</label>
        <div className="people-counter">
          <button
            onClick={() => setPeopleCount(peopleCount - 1)}
            disabled={peopleCount <= 1}
          >
            -
          </button>
          <span>{peopleCount}</span>
          <button onClick={() => setPeopleCount(peopleCount + 1)}>+</button>
        </div>
      </div>
      <div className="form-group">
        <label>태그 선택</label>
        <Tag selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      </div>
      <div className="button-container">
        <button
          //onClick={handleSubmit}
          onClick={() => navigate('/main')}
          className={`submit-button ${isFormValid ? '' : 'disabled'}`}
          disabled={!isFormValid}
        >
          작성 완료
        </button>
        <button className="cancel-button" onClick={() => navigate('/main')}>
          작성 취소
        </button>
      </div>
    </div>
  );
};

export default MakePost;
