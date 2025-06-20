import { useState } from 'react';
import { DataReason } from '../data/data';

const WhyChooseUs = () => {
  const [reasonData, setReasonData] = useState(() => DataReason());
  return (
    <section className='why-choose-us' data-aos-duration='1000' data-aos-delay='100'>
      <h2>Kenapa Memilih Kami?</h2>
      <p>Kami hadir sebagai solusi terpercaya untuk setiap kebutuhan properti Anda.</p>

      <div className='why-grid' data-aos='fade-up'>
        {reasonData.map((reason, index) => (
          <div className='why-card' key={index}>
            <div className='why-icon'>
              <img src={reason.icon} alt={reason.title} />
            </div>
            <div className='sub-title'>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
