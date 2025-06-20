const heroSectiondata = [
  {
    image: '/11.png',
  },
  {
    image: '/10.jpg',
  },
];

const ProductProperty = [
  {
    image: '/7.jpg',
  },
  {
    image: '/1.jpg',
  },

  {
    image: '/3.jpg',
  },
  {
    image: '/4.jpg',
  },
  {
    image: '/8.jpg',
  },
];

const ProductUtama = [
  {
    title: 'Hot Listing',
    image: '/1.jpg',
  },

  {
    title: 'Promo',
    image: '/3.jpg',
  },
  {
    title: 'Baru',
    image: '/4.jpg',
  },
];

const DataHerosection = [
  {
    title: 'FIND YOUR',
    subtitle: '"DREAM HOME."',
    buttonText: 'Hubungi Kami',
    trustText: 'Jangkau Pelanggan Baru Melalui Website',
    ImgHero: '/13.png',
  },
];

const reasons = [
  {
    title: 'Agen Berpengalaman',
    description: 'Kami memiliki tim agen profesional dengan pengalaman bertahun-tahun.',
    icon: '/11.jpg',
  },
  {
    title: 'Data Properti Akurat',
    description: 'Semua data properti terverifikasi dan selalu diperbarui.',
    icon: '/12.jpg',
  },
  {
    title: 'Proses Aman & Transparan',
    description: 'Transaksi aman, semua prosedur dijelaskan dengan jelas.',
    icon: '/14.jpg',
  },
  {
    title: 'Dukungan Customer Service',
    description: 'Tim kami siap membantu Anda kapan saja.',
    icon: '/13.jpg',
  },
];

const konsul = {
  TagLine: 'Temukan Impianmu Dengan Mudah',
  Tagbutton: 'Gratis Konsultasi',
};

function dataHeroSection() {
  return heroSectiondata;
}

function DataProdukList() {
  return ProductProperty;
}

function HeroSectionNew() {
  return DataHerosection;
}

function ProdukUnggulan() {
  return ProductUtama;
}

function DataReason() {
  return reasons;
}

function Konsul() {
  return konsul;
}

export { dataHeroSection, DataProdukList, HeroSectionNew, ProdukUnggulan, DataReason, Konsul };
