const NavigationMenu = ({ lokasi, harga, Tipe }) => {
  return (
    <div className='navigation-menu'>
      <div>
        <ul className='menu-satu'>
          <li>
            <a href='#'>LOKASI</a>{' '}
          </li>
          <li>
            <a href='#'>TYPE PROPERTY</a>
          </li>
          <li>
            <a href='#'>HARGA</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavigationMenu;
