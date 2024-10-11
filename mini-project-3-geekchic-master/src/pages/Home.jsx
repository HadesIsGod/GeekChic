import React from 'react'
import Discover from '../components/Discover'
import Section2 from '../components/Section2'
import Footer from '../components/Footer'
import Slider from 'react-slick'
import './styles/Home.css'

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <>
      <Discover />
      <div>
        <Slider {...settings}>
          <div className='card' style={{
            height: "200px",
            width: "200px"
          }}>
            <img src="/images/wallpaper.svg" alt="Wallpaper 1" /> {/* Updated src */}
          </div>
          <div className='card' style={{
            height: "200px",
            width: "200px"
          }}>
            <img src="/images/wallpaper2.jpg" alt="Wallpaper 2" /> {/* Updated src */}
          </div>
        </Slider>
      </div>
      <Section2 />
      <Footer />
    </>
  )
}

export default Home
