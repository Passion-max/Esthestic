// components/HeroSection/SliderItem.js

import React from 'react';
import ImageSlider1 from '../../assets/images/slider/img-slider-1.png';
import ImageSlider3 from '../../assets/images/slider/img-slider-3.jpg';
import ImageSlider4 from '../../assets/images/slider/img-slider-4.jpg';
import ImageSlider5 from '../../assets/images/slider/img-slider-5.jpg';
import Avatar8 from '../../assets/images/avatar/avt-8.jpg';
import Avatar9 from '../../assets/images/avatar/avt-9.jpg';
import Avatar10 from '../../assets/images/avatar/avt-10.jpg';
import Avatar11 from '../../assets/images/avatar/avt-11.jpg';

function SliderItem() {
    return (
        
    <div className="slider-item">
        {/* ... */}
        <div className="slider-img flex">
            <div className="img-left">
                <div className="img-1">
                    <img src={ImageSlider3.src} alt="Image"/>
                </div>
                <div className="img-2">
                    <img src={ImageSlider4.src} alt="Image"/>
                </div>
            </div>
            <div className="img-right">
                <img src={ImageSlider5.src} alt="Image"/>
                <div className="box-avatar flex">
                    <div className="list-avatar flex">
                        <img src={Avatar8.src} alt="Image"/>
                        <img src={Avatar9.src} alt="Image"/>
                        <img src={Avatar10.src} alt="Image"/>
                        <img src={Avatar11.src} alt="Image"/>
                    </div>
                    {/* ... */}
                </div>
            </div>
        </div>
    </div>


    );
}

export default SliderItem;
