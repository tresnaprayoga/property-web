import ProductItemUtama from './ProductUnggulan';

const ListProductUtama = ({ ProdukctUtama }) => {
  return (
    <div className='produk-item-unggulan'>
      {ProdukctUtama.map((item, index) => (
        <ProductItemUtama key={index} image={item.image} title={item.title} />
      ))}
    </div>
  );
};

export default ListProductUtama;
