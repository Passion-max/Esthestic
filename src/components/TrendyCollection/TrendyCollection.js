import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const TrendyCollection = () => {
  const myStyle = {
    width: "350px",
    marginRight: "40px",
    visibility: "visible",
    animationName: "fadeInUp",
  };
  const data = [
    {
      imgSrc: "assets/images/nft/_5de2c99a-0b5a-4359-b46e-567d9f176107.jpg",
      bidButtonHref: "#",
      bidButtonDataTarget: "#popup_bid",
      label: "PANDA",
      titleHref: "item-details.html",
      titleText: "‘’3D Space Rocket With Smoke Premium’’",
      avatarSrc: "assets/images/avatar/avt-1.jpg",
      authorHref: "author.html",
      authorName: "Daniel M. Bivens",
      currentBid: "5.23 ETH",
      currentBidInDollar: "$32.420",
    },
    {
      imgSrc:
        "assets/images/nft/_df736ab1-e3fb-41b1-8370-29ad64f3738a.jpg",
      bidButtonHref: "#",
      bidButtonDataTarget: "#popup_bid",
      label: "PANDA",
      titleHref: "item-details.html",
      titleText: "‘’3D Space Rocket With Smoke Premium’’",
      avatarSrc: "assets/images/avatar/avt-1.jpg",
      authorHref: "author.html",
      authorName: "Daniel M. Bivens",
      currentBid: "5.23 ETH",
      currentBidInDollar: "$32.420",
    },
    {
      imgSrc:
        "assets/images/nft/_ecac06cc-2f29-46c5-b490-1db94e96dd47.jpg",
      bidButtonHref: "#",
      bidButtonDataTarget: "#popup_bid",
      label: "PANDA",
      titleHref: "item-details.html",
      titleText: "‘’3D Space Rocket With Smoke Premium’’",
      avatarSrc: "assets/images/avatar/avt-1.jpg",
      authorHref: "author.html",
      authorName: "Daniel M. Bivens",
      currentBid: "5.23 ETH",
      currentBidInDollar: "$32.420",
    },
    {
      imgSrc:
        "assets/images/nft/_fd313e32-6b52-4013-bc26-f15b12b27a08.jpg",
      bidButtonHref: "#",
      bidButtonDataTarget: "#popup_bid",
      label: "PANDA",
      titleHref: "item-details.html",
      titleText: "‘’3D Space Rocket With Smoke Premium’’",
      avatarSrc: "assets/images/avatar/avt-1.jpg",
      authorHref: "author.html",
      authorName: "Daniel M. Bivens",
      currentBid: "5.23 ETH",
      currentBidInDollar: "$32.420",
    },
  ];

  return (
    <section className="tf-trendy-collections tf-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sc-heading style-2 wow fadeInUp">
              <div className="content-left">
                <div className="inner">
                  <h3>Trendy Collection</h3>
                  <p className="desc">
                    Most popular gaming digital nft market place{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-slide wow fadeInUp" style={myStyle}>
                    <div className="slider-item">
                      <div className="sc-product-item style-2">
                        <div className="product-img">
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
                                <a href={item.authorHref}>{item.authorName}</a>
                              </div>
                              <span>Creator</span>
                            </div>
                          </div>
                          <div className="product-price flex">
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
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendyCollection;
