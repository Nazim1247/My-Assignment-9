
import  carousel1 from '../assets/carousel1.jpeg'
import  carousel2 from '../assets/carousel2.jpeg'
import  carousel3 from '../assets/carousel3.jpeg'
import  carousel4 from '../assets/carousel4.jpeg'

const Banner = () => {
    return (
        <div>
        {/* <div className="hero min-h-screen">
            <img className='w-full h-[700px]' src={banner} alt="" />
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Career Counseling Portal</h1>
                    <p className="mb-5">
                    A comprehensive platform designed to guide individuals in making informed career choices. The website offers personalized career advice, expert consultations, detailed service information, and a user-friendly interface for managing profiles and exploring various career options.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div> */}

        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={carousel1}
      className="w-full h-[600px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={carousel2}
      className="w-full h-[600px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={carousel3}
      className="w-full h-[600px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={carousel4}
      className="w-full h-[600px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;