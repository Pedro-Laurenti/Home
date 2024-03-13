import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = ({ slides }) => {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 7000
};

return (
    <Slider {...settings}>
    {slides.map((slide, index) => (
        <div key={index}>
        <div>{slide}</div>
        </div>
    ))}
    </Slider>
);
};

export default SimpleSlider;