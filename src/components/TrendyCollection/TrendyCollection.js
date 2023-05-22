import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.css";


const TrendyCollection = () => {
  
  const myStyle = {
    width: "350px",
    marginRight: "40px",
    visibility: "visible",
    animationName: "fadeInUp",
  };
  const data = [1, 2, 3, 4, 5]; // Replace this with your own data

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
                <div  className="swiper-slide wow fadeInUp" style={myStyle}>
                  <div className="slider-item">
                    <div className="sc-product-item style-2">
                      <div className="product-img">
                        <img
                          src="assets/images/product-item/item-12.jpg"
                          alt="Image"
                        />
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#popup_bid"
                          className="sc-button style letter"
                        >
                          <span>Place Bid</span>
                        </a>
                        <label>PANDA</label>
                      </div>
                      <div className="product-content">
                        <h5 className="title">
                          <a href="item-details.html">
                            ‘’3D Space Rocket With Smoke’’
                          </a>{" "}
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
                        <div className="product-price flex">
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
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendyCollection;
