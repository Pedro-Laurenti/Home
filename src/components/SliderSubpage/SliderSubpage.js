import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './SliderSubpage.module.scss';

const SliderSubpage = ({ slidesSubpage }) => {
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true,
            dots: false
          }
        }
      ]
};

return (
    <Slider {...settings} className={styles.slider1} style={{height:'100%'}}>
        {slidesSubpage.map((slide, index) => (
            <div key={index}>
                <div>{slide}</div>
            </div>
        ))}
    </Slider>
);
};

export default SliderSubpage;