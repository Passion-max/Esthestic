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
  const data = [
    {
      id: 1,
      imgSrc: "assets/images/nft/_3c564eb0-8b85-4eee-9148-6135945c21ff.jpg",
      bidButtonHref: "#",
      bidButtonDataTarget: "#popup_bid",
      label: "BSC",
      titleHref: "item-details.html",
      titleText: "‘’3D Space Rocket With Smoke Premium’’",
      avatarSrc: "assets/images/avatar/avt-7.jpg",
      authorHref: "author.html",
      authorName: "Daniel M. Bivens",
      currentBid: "5.23 ETH",
      currentBidInDollar: "$32.420",
    },
    {
      id: 2,
      imgSrc: "assets/images/nft/_68bba10d-edfb-4b64-92ee-fa8744d7601b.jpg",
      bidButtonHref: "#",
      bidButtonDataTarget: "#popup_bid",
      label: "BSC",
      titleHref: "item-details.html",
      titleText: "‘’Another Artwork’’",
      avatarSrc: "assets/images/avatar/avt-2.jpg",
      authorHref: "author.html",
      authorName: "Jane Doe",
      currentBid: "10.45 ETH",
      currentBidInDollar: "$52.300",
    },
    {
      id: 3,
      imgSrc: "assets/images/nft/_0907754c-f852-430d-bef4-5c392fef7a2c.jpg",
      bidButtonHref: "#",
      bidButtonDataTarget: "#popup_bid",
      label: "BSC",
      titleHref: "item-details.html",
      titleText: "‘’Another Artwork’’",
      avatarSrc: "assets/images/avatar/avt-2.jpg",
      authorHref: "author.html",
      authorName: "Jane Doe",
      currentBid: "10.45 ETH",
      currentBidInDollar: "$52.300",
    },
    {
      id: 4,
      imgSrc: "assets/images/nft/_bd5bbd3a-fdbc-43f7-b387-a481e94d83eb.jpg",
      bidButtonHref: "#",
      bidButtonDataTarget: "#popup_bid",
      label: "BSC",
      titleHref: "item-details.html",
      titleText: "‘’Another Artwork’’",
      avatarSrc: "assets/images/avatar/avt-2.jpg",
      authorHref: "author.html",
      authorName: "Jane Doe",
      currentBid: "10.45 ETH",
      currentBidInDollar: "$52.300",
    },
    // add more items as needed
  ];
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
                  {data.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div
                        className="swiper-slide wow fadeInUp wow fadeInUp"
                        style={myStyle}
                      >
                        <div className="slider-item">
                          <div className="sc-product-item">
                            <div className="product-img active">
                              <img src={item.imgSrc} alt="Image" />

                              <a
                                href={item.bidButtonHref}
                                data-toggle="modal"
                                data-target={item.bidButtonDataTarget}
                                className="sc-button style letter"
                              >
                                <span>Place Bid</span>
                              </a>
                              <label>{item.label}</label>
                            </div>
                            <div className="product-content">
                              <h5 className="title">
                                <a href={item.titleHref}>{item.titleText}</a>
                              </h5>
                              <div className="product-author flex">
                                <div className="avatar">
                                  <img src={item.avatarSrc} alt="Image" />
                                </div>
                                <div className="infor">
                                  <div className="author-name">
                                    <a href={item.authorHref}>
                                      {item.authorName}
                                    </a>
                                  </div>
                                  <span>Creator</span>
                                </div>
                              </div>
                              <div className="product-price">
                                <div className="title">Current Bid</div>
                                <div className="price">
                                  <span>{item.currentBid}</span>
                                  <span>= {item.currentBidInDollar}</span>
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
