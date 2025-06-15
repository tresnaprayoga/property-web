import { useState } from 'react';
import HeroSection from '../components/HeroItem';
import NavigationMenu from '../components/navigation';
import { dataHeroSection } from '../data/data';

const HeroImage = () => {
  const [dataHero, setDataHero] = useState(() => dataHeroSection());
  return (
    <div>
      <HeroSection slides={dataHero} />
      <NavigationMenu />
    </div>
  );
};

export default HeroImage;
