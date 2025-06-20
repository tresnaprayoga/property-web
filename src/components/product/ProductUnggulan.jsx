const ProductItemUtama = ({ image, title }) => {
  return (
    <div className='produk-utama' data-aos-duration='1000' data-aos-delay='100'>
      <div className='image-wrapper'>
        <span className='label' data-aos='slide-right'>
          {title}
        </span>
        <img src={image} alt='produk-utama' data-aos='slide-left' />
      </div>
    </div>
  );
};

export default ProductItemUtama;
