import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/card';
import Category from '../../components/category';
import Header from '../../components/header';
import WriteButton from '../../components/write-button';
import './index.css';

const MainPage: React.FC = () => {
  const [meetings, setMeetings] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { postId } = useParams<{ postId: string }>();

  const fetchData = async (category: string | null) => {
    try {
      const url = category
        ? `http://localhost:8080/posts/${category.toLowerCase()}`
        : 'http://localhost:8080/posts';
      const response = await axios.get(url);
      setMeetings(response.data.data || response.data);
    } catch (error) {
      console.error('Error loading posts:', error);
    }
  };
  useEffect(() => {
    fetchData(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="main-page">
      <Header />
      <div className="content">
        <Category onCategoryChange={setSelectedCategory} />
        <main>
          <div className="card-grid">
            {meetings.map((meeting) => {
              const {
                id,
                meet_time,
                title,
                user_count,
                max_count,
                meet_place,
              } = meeting;
              const meetDate = meet_time ? new Date(meet_time) : new Date();

              return (
                <Card
                  postId={id}
                  key={id || Math.random()}
                  date={meet_time ? meetDate.getDate().toString() : 'N/A'}
                  month={
                    meet_time ? (meetDate.getMonth() + 1).toString() : 'N/A'
                  }
                  title={title || 'No Title'}
                  time={
                    meet_time
                      ? meetDate.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })
                      : 'N/A'
                  }
                  capacity={
                    user_count && max_count
                      ? `${user_count}/${max_count}명`
                      : 'N/A'
                  }
                  location={meet_place || 'Unknown Location'}
                />
              );
            })}
          </div>
        </main>
      </div>
      <WriteButton />
    </div>
  );
};

export default MainPage;
