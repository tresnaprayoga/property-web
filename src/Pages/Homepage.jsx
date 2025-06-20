import { useState, useEffect } from 'react';
import NavigationMenu from '../components/navigation';
import ProdukList from '../components/product/listProduct';
import ListProductUtama from '../components/product/ProductListUnggulan';
import ListHeroSection from '../components/Herosection/HeroList';
import WhyChooseUs from '../components/WhyChooseUs';
import Konsulatsi from '../components/KonsulSection';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { dataHeroSection, DataProdukList, HeroSectionNew, ProdukUnggulan, Konsul } from '../data/data';

const HomePage = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [dataProduk, setDataProduk] = useState(() => DataProdukList());
  const [dataHeroImage, setDataHeroImage] = useState(() => HeroSectionNew());
  const [dataProdukUnggulan, setDataProdukUnggulan] = useState(() => ProdukUnggulan());
  const [dataKonsul, setDataKonsul] = useState(() => Konsul());
  return (
    <div>
      <ListHeroSection herosSection={dataHeroImage} />
      <NavigationMenu />
      <div className='produk'>
        <h2>Tipe Properti</h2>
        <p>Jelajahi berbagai tipe properti yang tersedia</p>
        <ProdukList produks={dataProduk} />
      </div>

      <div className='products-pilihan'>
        <h3>Properti Unggulan</h3>
        <p>Jelajahi berbagai tipe properti yang tersedia</p>
        <ListProductUtama ProdukctUtama={dataProdukUnggulan} />
      </div>
      <div>
        <WhyChooseUs />
      </div>

      <div className='booking-konsul'>
        <Konsulatsi TagLine={dataKonsul.TagLine} TagButton={dataKonsul.Tagbutton} />
      </div>
    </div>
  );
};

export default HomePage;
