import React from "react";
import $ from "jquery";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";

const LiveAuctions = () => {
  const myStyle = {
    width: "270px",
    marginRight: "30px",
    visibility: "visible",
    animationName: "fadeInUp",
  };
  const data = [1, 2, 3, 5,4];
  return (
    <section className="tf-live-auctions tf-section bg-color-1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sc-heading style-2 has-icon ">
              <div className="content-left">
                <div className="inner">
                  <div className="group">
                    <div className="icon">
                      <i className="ripple"></i>
                    </div>
                    <h3>Live Auctions</h3>
                  </div>
                  <p className="desc">
                    Most popular gaming digital nft market place{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="swiper-container live-auc">
              <div className="swiper-wrapper">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={20}
                  slidesPerView={4}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  {/* Repeat this block as necessary for each item */}
                  {data.map((item, index) => (
                  <SwiperSlide key={index}>
                  <div
                    className="swiper-slide wow fadeInUp wow fadeInUp"
                    style={myStyle}
                  >
                    <div className="slider-item">
                      <div className="sc-product-item">
                        <div className="product-img active">
                          <img
                            src="assets/images/product-item/item-1.jpg"
                            alt="Image"
                          />
                      {/* <div className="countdown">
                        <span
                          className="js-countdown"
                          data-timer="516400"
                          data-labels=" :  ,  : , : , "
                        ></span>
                      </div> */}
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            className="sc-button style letter"
                          >
                            <span>Place Bid</span>
                          </a>
                          <label>BSC</label>
                        </div>
                        <div className="product-content">
                          <h5 className="title">
                            <a href="item-details.html">
                              ‘’3D Space Rocket With Smoke Premium’’
                            </a>
                          </h5>
                          <div className="product-author flex">
                            <div className="avatar">
                              <img
                                src="assets/images/avatar/avt-7.jpg"
                                alt="Image"
                              />
                            </div>
                            <div className="infor">
                              <div className="author-name">
                                <a href="author.html">Daniel M. Bivens</a>
                              </div>
                              <span>Creator</span>
                            </div>
                          </div>
                          <div className="product-price">
                            <div className="title">Current Bid</div>
                            <div className="price">
                              <span>5.23 ETH</span>
                              <span>= $32.420</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                    ))}
                  {/* End of the repeated block */}
                </Swiper>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveAuctions;
