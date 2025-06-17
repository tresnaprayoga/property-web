// const ProductItem = () => {
//   return (
//     <div className='produk-item'>
//       <div className='img-1'>
//         <img src='./7.jpg' />
//       </div>
//       <div className='img-2'>
//         <img src='./4.jpg' />
//       </div>
//       <div className='img-3'>
//         <img src='./1.jpg' />
//       </div>
//       <div className='img-4'>
//         <img src='./3.jpg' />
//       </div>
//       <div className='img-5'>
//         <img src='./4.jpg' />
//       </div>
//     </div>
//   );
// };

// export default ProductItem;

const ProductItem = ({ image, className }) => {
  return (
    <div className={className}>
      <img src={image} alt='produk' />
    </div>
  );
};

export default ProductItem;
