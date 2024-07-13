import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/card';
import './index.css';
import Category from '../../components/category';
import Header from '../../components/header';
import WriteButton from '../../components/write-button';

// 목업 데이터
const mockData = [
  {
    id: 7,
    title: '미팅',
    content: '저기여',
    meet_place: '여기서',
    meet_time: '2024-07-14 10:00:00',
    max_count: 10,
    user_count: 5,
  },
  {
    id: 8,
    title: 'Meeting 2',
    content: 'Content for meeting 2',
    meet_place: 'Place 2',
    meet_time: '2024-07-15 14:00:00',
    max_count: 20,
    user_count: 15,
  },
];

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [meetings, setMeetings] = useState(mockData);

  useEffect(() => {
    // 여기에 실제 API 호출 로직을 추가할 수 있습니다.
    // 예: axios.get('/api/meetings').then(response => setMeetings(response.data));
  }, []);

  return (
    <div className="main-page">
      <Header />
      <div className="logo">{/* 로고 이미지를 여기에 삽입하세요 */}</div>
      <Category />
      <main>
        <div className="card-grid">
          {meetings.map((meeting) => {
            const meetDate = new Date(meeting.meet_time);
            return (
              <Card
                key={meeting.id}
                date={meetDate.getDate().toString()}
                month={(meetDate.getMonth() + 1).toString()}
                title={meeting.title}
                time={meetDate.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
                capacity={`${meeting.user_count}/${meeting.max_count}명`}
                location={meeting.meet_place}
              />
            );
          })}
        </div>
      </main>
      <button
        className="floating-button"
        onClick={() => navigate('/make-post')}
      >
        <span className="pencil-icon">✏️</span>
      </button>
    </div>
  );
};

export default MainPage;
