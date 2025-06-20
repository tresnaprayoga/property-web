const ProductItem = ({ image, className }) => {
  return (
    <div className={className}>
      <img src={image} alt='produk' />
    </div>
  );
};

export default ProductItem;
