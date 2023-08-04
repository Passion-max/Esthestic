import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

import sliderImage3 from '../../assets/images/nfts/1.jpg';
import sliderImage4 from '../../assets/images/nfts/2.png';
import sliderImage5 from '../../assets/images/nfts/4.png';
import sliderImage1 from '../../assets/images/nfts/5.png';
import avatarImage8 from '../../assets/images/avatar/avt-8.jpg';
import avatarImage9 from '../../assets/images/avatar/avt-9.jpg';
import avatarImage10 from '../../assets/images/avatar/avt-10.jpg';
import avatarImage11 from '../../assets/images/avatar/avt-11.jpg';
import SigninModal from "../Modals/SigninModal/SigninModal";
import { useAPI } from '@/contexts/ApiProvider';



import SliderItem from './SliderItem';


function HeroSection() {
 const { state, setState, user, setUser } = useAPI(); 
 const [isModalVisible, setIsModalVisible] = useState(false);
 
 const handleClick = (event) => {
    event.preventDefault();
    if (!state.address) {
        setIsModalVisible(true);
    } else {
        // redirect to upload page if user is logged in
        window.location.href = "/upload";
    }
}

const closeModal = () => {
    setIsModalVisible(false);
}



 return (
            <section className="tf-slider">
         {isModalVisible && <SigninModal onshow = {closeModal}  />}
                <div className="swiper-container slider">
                    <Swiper className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="slider-item">
                                <div className="container">
                                    <div className="slider-inner style-2 home-2 flex">
                                        <div className="slider-content">
                                        <h1 className="heading">Unearth and Own Exclusive Digital NFTs</h1>
<p className="sub-heading">
   Embark on a journey of discovery through our vast digital landscape. Seize the opportunity to claim exclusive digital assets as your own, enriching your portfolio with unique pieces of digital art, music, and more.
</p>

                                            <div className="button-slider">
                                                <a href="/explore" className="sc-button btn-bordered-white style letter">
                                                    <span>Explore More</span>
                                                </a>
                                                <a href="/upload" className="sc-button btn-bordered-white style file" onClick={handleClick}>
                                                    <span>Create Now</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="slider-img flex">
                                            <div className="img-left">
                                                <div className="img-1">
                                                    <img src={sliderImage3.src} width='300' alt="Image" />
                                                </div>
                                                <div className="img-2">
                                                    <img src={sliderImage4.src} width='300' alt="Image" />
                                                </div>
                                            </div>
                                            <div className="img-right">
                                                <img src={sliderImage5.src} width='300' alt="Image" />
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
                                    <h1 className="heading">Unearth and Own Exclusive Digital NFTs</h1>
<p className="sub-heading">
   Embark on a journey of discovery through our vast digital landscape. Seize the opportunity to claim exclusive digital assets as your own, enriching your portfolio with unique pieces of digital art, music, and more.
</p>

                                    <div className="button-slider">
                                        <a href="/explore" className="sc-button btn-bordered-white style letter">
                                            <span>Explore More</span>
                                        </a>
                                        <a href="/upload" className="sc-button btn-bordered-white style file" onClick={handleClick}>
                                            <span>Create Now</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="slider-img">
                                    <div className="img-home-1">
                                        <img src={sliderImage1.src} width='500' alt="Image" />
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
