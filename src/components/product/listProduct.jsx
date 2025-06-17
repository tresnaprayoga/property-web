import ProductItem from './productItem';
import { ProdukList } from '../../data/data';

const ListProduct = () => {
  const produk = ProdukList(); // ambil data
  const classList = ['img-1', 'img-2', 'img-3', 'img-4', 'img-5'];

  return (
    <div className='produk-item'>
      {produk.map((item, index) => (
        <ProductItem key={index} image={item.image} className={classList[index] || 'img-default'} />
      ))}
    </div>
  );
};

export default ListProduct;
