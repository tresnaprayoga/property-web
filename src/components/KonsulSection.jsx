import React from 'react';

function Konsulatsi({ TagLine, TagButton }) {
  return (
    <div className='Tag-button' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>
      <div className='tag'>
        <h3>{TagLine}</h3>
      </div>
      <div className='button-tag'>
        <button>
          <p>{TagButton}</p>
        </button>
      </div>
    </div>
  );
}

export default Konsulatsi;
