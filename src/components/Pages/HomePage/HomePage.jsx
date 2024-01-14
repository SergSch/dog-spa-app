import React from 'react';
import HeadScreen from './HeadScreen/HeadScreen';
import TrendingPage from './TrendingPage/TrendingPage';
import DogCollarsPage from './DogCollarsPage/DogCollarsPage';
import CarryPage from './CarryPage/CarryPage';

const HomePage = () => {
  return (
    <div>
      <HeadScreen />
      <TrendingPage />
      <DogCollarsPage />
      <CarryPage />
    </div>
  );
};

export default HomePage;
