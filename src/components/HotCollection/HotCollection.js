import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";


const HotCollection = () => {
    const collections = [
        { media: 'assets/images/img-collection/col-1.png', avatar: 'assets/images/avatar/avt-3.jpg', name: 'Ethereal Echoes', details: 'ERC-75'},
        { media: 'assets/images/img-collection/col-4.png', avatar: 'assets/images/avatar/avt-4.jpg', name: 'Dragon Lore', details: 'ERC-75'},
        { media: 'assets/images/img-collection/col-3.png', avatar: 'assets/images/avatar/avt-6.jpg', name: 'Harmonic Pixels', details: 'ERC-75'},
        { media: 'assets/images/img-collection/col-5.png', avatar: 'assets/images/avatar/avt-6.jpg', name: 'Mars Estates', details: 'ERC-75'},
        { media: 'assets/images/img-collection/col-2.png', avatar: 'assets/images/avatar/avt-6.jpg', name: 'Galactic Faces', details: 'ERC-75'},
        { media: 'assets/images/img-collection/col-6.jpg', avatar: 'assets/images/avatar/avt-6.jpg', name: 'CryptoFauna', details: 'ERC-75'},
        
    
    ]

   

    return (
        <section className="hot-collections tf-section bg-color-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sc-heading style-2">
                            <div className="content-left">
                                <div className="inner">
                                    <h3>Hot Collection</h3>
                                    <p className="desc">Most popular gaming digital nft market place</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-5">
                    <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={6}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
                        
                            {collections.map((collection, index) => (
                                 <SwiperSlide key={index}>
                                <div>
                                    <div className="slider-item">
                                        <div className="sc-author-card style-3">
                                            <div className="card-media">
                                                <img src={collection.media} alt=""/>
                                            </div>
                                            <div className="card-avatar">
                                                <img src={collection.avatar} alt=""/>
                                            </div>
                                            <div className="card-content">
                                                <h5><a href="author.html">{collection.name}</a></h5>
                                                <div className="details">{collection.details}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HotCollection;
