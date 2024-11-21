
import carousel1 from '../assets/carousel1.jpeg'
import carousel2 from '../assets/carousel2.jpeg'
import carousel3 from '../assets/carousel3.jpeg'
import carousel4 from '../assets/carousel4.jpeg'

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
          <img className='w-full h-96 mx-auto' src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-96 mx-auto' src={carousel2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-96 mx-auto' src={carousel3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-96 mx-auto' src={carousel4} alt="" />
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Banner;