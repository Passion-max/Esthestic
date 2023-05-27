// components/HeroSection/index.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

import sliderImage3 from '../../assets/images/slider/img-slider-3.jpg';
import sliderImage4 from '../../assets/images/slider/img-slider-4.jpg';
import sliderImage5 from '../../assets/images/slider/img-slider-5.jpg';
import sliderImage1 from '../../assets/images/slider/img-slider-1.png';
import avatarImage8 from '../../assets/images/avatar/avt-8.jpg';
import avatarImage9 from '../../assets/images/avatar/avt-9.jpg';
import avatarImage10 from '../../assets/images/avatar/avt-10.jpg';
import avatarImage11 from '../../assets/images/avatar/avt-11.jpg';

import SliderItem from './SliderItem';

function HeroSection() {
        return (
            <section className="tf-slider">
                <div className="swiper-container slider">
                    <Swiper className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="slider-item">
                                <div className="container">
                                    <div className="slider-inner style-2 home-2 flex">
                                        <div className="slider-content">
                                            <h1 className="heading">Discover and collect your favorite digital NTFs</h1>
                                            <p className="sub-heading">
                                                Quis autem vel eum iure reprehenderit qui in ea voluptates esse quam nihil
                                                molestiae consequatur veillum
                                            </p>
                                            <div className="button-slider">
                                                <a href="explore-1.html" className="sc-button btn-bordered-white style letter">
                                                    <span>Explore More</span>
                                                </a>
                                                <a href="create-item.html" className="sc-button btn-bordered-white style file">
                                                    <span>Create Now</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="slider-img flex">
                                            <div className="img-left">
                                                <div className="img-1">
                                                    <img src={sliderImage3.src} alt="Image" />
                                                </div>
                                                <div className="img-2">
                                                    <img src={sliderImage4.src} alt="Image" />
                                                </div>
                                            </div>
                                            <div className="img-right">
                                                <img src={sliderImage5.src} alt="Image" />
                                                <div className="box-avatar flex">
                                                    <div className="list-avatar flex">
                                                        <img src={avatarImage8.src} alt="Image" />
                                                        <img src={avatarImage9.src} alt="Image" />
                                                        <img src={avatarImage10.src} alt="Image" />
                                                        <img src={avatarImage11.src} alt="Image" />
                                                    </div>
                                                    <div className="icon-plus">
                                                        <a href="#"><i className="fas fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item">
                                <div className="slider-inner home-2 flex">
                                    <div className="slider-content">
                                        <h1 className="heading">Discover and collect your favorite digital NTFs</h1>
                                        <p className="sub-heading">
                                            Quis autem vel eum iure reprehenderit qui in ea                                         voluptates esse quam nihil
                                        molestiae consequatur veillum
                                    </p>
                                    <div className="button-slider">
                                        <a href="explore-1.html" className="sc-button btn-bordered-white style letter">
                                            <span>Explore More</span>
                                        </a>
                                        <a href="create-item.html" className="sc-button btn-bordered-white style file">
                                            <span>Create Now</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="slider-img">
                                    <div className="img-home-1">
                                        <img src={sliderImage1.src} alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next btn-slide-next "></div>
                <div className="swiper-button-prev btn-slide-prev"></div>
            </div>
        </section>
    );
}


export default HeroSection;