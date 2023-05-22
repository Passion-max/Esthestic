import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const collectionsData = [
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
const CollectionCard = () => {
  const myStyle = {
    width: "270px",
    marginRight: "30px",
    visibility: "visible",
    animationName: "fadeInUp",
  };
  return (
    <Swiper
      pagination={{ clickable: true }}
      className="popular-coll"
      spaceBetween={10}
      slidesPerView={4}
    >
      {collectionsData.map((collection, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-slide " style={myStyle}>
            <div className="slider-item">
              <div className="sc-author-card">
                <div className="card-media">
                  <img src={collection.collectionImg} width={"50px"} alt="" />
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
  );
};

const MyCollections = () => {
  return (
    <div className="tf-section top-seller mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sc-heading style-3">
              <h3>My Collections</h3>
              <p className="desc">List of collections created by you </p>
            </div>
          </div>
          {collectionsData.length == 0 ? (
            <div className="sc-heading style-3 col-md-12">
              {" "}
              <a href="/collections" className="sc-button style letter style-2">
                Create Collection
              </a>{" "}
            </div>
          ) : (
            <CollectionCard collections={collectionsData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCollections;

// {sellersData.map((seller, index) => (
//     <div key={index} className="col-lg-3 col-md-6">
//       <div className="sc-author-card style-2 active">
//         <div className="card-media">
//           <img src={seller.media} alt="" />
//         </div>
//         <div className="card-avatar">
//           <img src={seller.avatar} alt="" />
//         </div>
//         <div className="card-content">
//           <h5><a href="author.html">{seller.name}</a></h5>
//           <div className="details">{seller.collectionType}</div>
//           <div className="card-bottom">
//             <div className="widget-social">
//               <ul>
//                 <li><a href="#" className="active"><i className="fab fa-facebook-f"></i></a></li>
//                 <li><a href="#"><i className="fab fa-twitter"></i></a></li>
//                 <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
//                 <li><a href="#"><i className="fab fa-youtube"></i></a></li>
//               </ul>
//             </div>
//             <a href="#" className="sc-button style-2"><span>Follow</span></a>
//           </div>
//         </div>
//       </div>
//     </div>
//   ))}
