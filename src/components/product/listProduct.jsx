import ProductItem from './productItem';

const ListProduct = ({ produks }) => {
  const classList = ['img-1', 'img-2', 'img-3', 'img-4', 'img-5'];

  return (
    <div className='produk-item'>
      {produks.map((item, index) => (
        <ProductItem key={index} image={item.image} className={classList[index] || 'img-default'} />
      ))}
    </div>
  );
};

export default ListProduct;
