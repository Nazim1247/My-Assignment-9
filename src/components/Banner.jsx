
// import carousel1 from '../assets/carousel1.jpeg'
// import carousel2 from '../assets/carousel2.jpeg'
// import carousel3 from '../assets/carousel3.jpeg'
// import carousel4 from '../assets/carousel4.jpeg'

import slider1 from '../assets/slider1.jpeg';
import slider2 from '../assets/slider2.jpeg';
import slider3 from '../assets/slider3.jpeg';
import slider4 from '../assets/slider4.jpeg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center">
        <SwiperSlide>
          <img className='w-full h-96 mx-auto' src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-96 mx-auto' src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-96 mx-auto' src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-96 mx-auto' src={slider4} alt="" />
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Banner;