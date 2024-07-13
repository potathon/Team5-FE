import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './index.css';

const laundryDefault = '/assets/laundry.png';
const laundryBlue = '/assets/laundry_blue.png';
const shoppingDefault = '/assets/shopping.png';
const shoppingPink = '/assets/shopping_pink.png';

interface Post {
  id: number;
  title: string;
  tag: string;
  meet_time: string;
  meet_place: string;
  max_recruit: number;
  image: string;
  created_at: string;
  group_is_max: boolean;
}

const Category: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleCategoryClick = async (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setPosts([]);
      try {
        const response = await axios.get('http://localhost:8080/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error loading posts:', error);
      }
    } else {
      setSelectedCategory(category);
      try {
        const response = await axios.get(
          `http://localhost:8080/posts/${category}`,
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error(`Error fetching ${category} posts:`, error);
      }
    }
  };

  return (
    <>
      <div className="buttons-container">
        <div className="tag-label-laundry">#세탁</div>
        <div className="tag-label-shopping">#공구</div>
      </div>
      <div className="icon-buttons-container">
        <button
          className="icon-button-left"
          onClick={() => handleCategoryClick('laundry')}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E8F1FA';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFF';
          }}
        >
          <img
            src={selectedCategory === 'laundry' ? laundryBlue : laundryDefault}
            alt="Laundry"
            className="icon"
          />
        </button>
        <button
          className="icon-button-right"
          onClick={() => handleCategoryClick('Buy')}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FEF5FB';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFF';
          }}
        >
          <img
            src={selectedCategory === 'Buy' ? shoppingPink : shoppingDefault}
            alt="Shopping"
            className="icon"
          />
        </button>
      </div>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-info">
              <h3>{post.title}</h3>
              <p>{post.meet_place}</p>
              <p>{new Date(post.meet_time).toLocaleString()}</p>
              <p>모집 인원: {post.max_recruit}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
