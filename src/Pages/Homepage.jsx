import { useState } from 'react';
import HeroSection from '../components/HeroItem';
import NavigationMenu from '../components/navigation';
import ProductItem from '../components/product/productItem';
import { dataHeroSection, ProdukList } from '../data/data';

const HeroImage = () => {
  const [dataHero, setDataHero] = useState(() => dataHeroSection());
  const [dataProduk, setDataProduk] = useState(() => ProdukList());
  return (
    <div>
      <HeroSection slides={dataHero} />
      <NavigationMenu />
      <div className='produk'>
        <h2>Tipe Properti</h2>
        <p>Temukan Tempat Idaman Anda Segera Sebelum Kehabisan</p>
        <ProductItem />
      </div>
    </div>
  );
};

export default HeroImage;
