import { useState } from 'react';
import HeroSection from '../components/HeroItem';
import NavigationMenu from '../components/navigation';
import ProdukList from '../components/product/listProduct';
import { dataHeroSection } from '../data/data';

const HomePage = () => {
  const [dataHero, setDataHero] = useState(() => dataHeroSection());
  const [dataProduk, setDataProduk] = useState(() => ProdukList());
  return (
    <div>
      <HeroSection slides={dataHero} />
      <NavigationMenu />
      <div className='produk'>
        <h2>Tipe Properti</h2>
        <p>Temukan Tempat Idaman Anda Segera Sebelum Kehabisan</p>
        <ProdukList />
      </div>
    </div>
  );
};

export default HomePage;
