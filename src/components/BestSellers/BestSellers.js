import React from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "swiper/css/bundle";

SwiperCore.use([Pagination]);

const BestSellers = () => {
  const bestSellersData = [
    {
      name: "Jason M. Stalls",
      avatar: "assets/images/avatar/avt-1.jpg",
      eth: 523.7,
      active: true,
    },
    {
      name: "Frank F. Chan",
      avatar: "assets/images/avatar/avt-2.jpg",
      eth: 523.7,
    },
    // repeat for all other users
  ];

  return (
    <section className="tf-section best-seller-page tf-best-reset">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sc-heading style-2">
              <div className="content-left">
                <div className="inner">
                  <h3>Best Sellers</h3>
                  <p className="desc">
                    Most popular gaming digital nft market place{" "}
                  </p>
                </div>
              </div>
              <div className="content-right">
                <button className="sc-button style letter style-2">
                  <span>Explore More</span>{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <Swiper
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={6}
              className="author-best pd-bt-50"
            >
              {bestSellersData.map((seller, index) => (
                <SwiperSlide key={index}>
                  <div className="slider-item">
                    <div
                      className={`sc-author ${seller.active ? "active" : ""}`}
                    >
                      <div className="card-avatar">
                        <img src={seller.avatar} alt="" />
                      </div>
                      <div className="infor">
                        <h6>
                          {" "}
                          <a href="#">{seller.name}</a>{" "}
                        </h6>
                        <div className="details">{seller.eth} ETH</div>
                      </div>
                      <a href="#" className="sc-button btn-bordered-white">
                        <span>View Profile</span>
                      </a>
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

export default BestSellers;
