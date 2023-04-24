import React, { useEffect, useState } from 'react';
import { fetchHybridNewsFeed } from '../api/posts';
import Post from './Post';
import StepCounter from './StepCounter';
import CalorieIntake from './CalorieIntake';

const HybridNewsFeed = () => {
  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    const fetchAndSetFeedItems = async () => {
      const fetchedFeedItems = await fetchHybridNewsFeed();
      setFeedItems(fetchedFeedItems);
    };

    fetchAndSetFeedItems();
  }, []);

  return (
    <div style={{ overflowY: 'scroll', height: '100vh' }}>
      {feedItems.map((item, index) => {
        if (item.hasOwnProperty('steps')) {
          return <StepCounter key={index} stepCounter={item} />;
        } else if (item.hasOwnProperty('calories')) {
          return <CalorieIntake key={index} calorieIntake={item} />;
        } else {
          return <Post key={index} post={item} />;
        }
      })}
    </div>
  );
};

export default HybridNewsFeed;
