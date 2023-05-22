import React from "react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

SwiperCore.use([Pagination, Navigation]);

const HotCollections = () => {
  const myStyle = {
    width: "270px",
    marginRight: "30px",
    visibility: "visible",
    animationName: "fadeInUp",
  };
  const hotCollectionsData = [
    {
      name: "John S. Outenewes",
      collectionImg: "assets/images/img-collection/collection-7.jpg",
      avatar: "assets/images/avatar/avt-15.jpg",
      erc: "ERC - 83",
    },
    {
      name: "Michel Doknia Kalia",
      collectionImg: "assets/images/img-collection/collection-8.jpg",
      avatar: "assets/images/avatar/avt-16.jpg",
      erc: "ERC - 83",
    },
    {
      name: "John S. Outenewes",
      collectionImg: "assets/images/img-collection/collection-7.jpg",
      avatar: "assets/images/avatar/avt-15.jpg",
      erc: "ERC - 83",
    },
    {
      name: "Michel Doknia Kalia",
      collectionImg: "assets/images/img-collection/collection-8.jpg",
      avatar: "assets/images/avatar/avt-16.jpg",
      erc: "ERC - 83",
    },
    {
      name: "John S. Outenewes",
      collectionImg: "assets/images/img-collection/collection-7.jpg",
      avatar: "assets/images/avatar/avt-15.jpg",
      erc: "ERC - 83",
    },
    {
      name: "Michel Doknia Kalia",
      collectionImg: "assets/images/img-collection/collection-8.jpg",
      avatar: "assets/images/avatar/avt-16.jpg",
      erc: "ERC - 83",
    },
    // repeat for all other collections
  ];


  return (
    <section className="hot-collections-page tf-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sc-heading style-2">
              <div className="content-left">
                <div className="inner">
                  <h3>Hot Collection</h3>
                  <p className="desc">
                    Most popular gaming digital nft market place{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <Swiper
              pagination={{ clickable: true }}
              navigation
              className="popular-coll"
              spaceBetween={10}
              slidesPerView={4}
            >
              {hotCollectionsData.map((collection, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-slide " style={myStyle}>
                    <div className="slider-item">
                      <div className="sc-author-card">
                        <div className="card-media">
                          <img
                            src={collection.collectionImg}
                            width={"50px"}
                            alt=""
                          />
                        </div>
                        <div className="card-avatar">
                          <img src={collection.avatar} alt="" />
                        </div>
                        <div className="card-content">
                          <h5>
                            {" "}
                            <a href="#">{collection.name}</a>{" "}
                          </h5>
                          <div className="details">{collection.erc}</div>
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

export default HotCollections;
