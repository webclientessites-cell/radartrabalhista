import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import CategoryNav from '../components/CategoryNav';
import CuriosityGrid from '../components/CuriosityGrid';
import InteractiveChecklist from '../components/InteractiveChecklist';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <HeroSection />
      <CategoryNav />
      <CuriosityGrid />
      <InteractiveChecklist />
    </main>
  );
};

export default Home;
