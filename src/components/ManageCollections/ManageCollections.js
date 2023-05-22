import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";


const collectionsData = [
  {
    name: "John S. Outenewes",
    collectionImg: "assets/images/img-collection/collection-7.jpg",
    avatar: "assets/images/avatar/avt-15.jpg",
    erc: "ERC - 83",
    nft: [
        {
          collectname: {
            media: "assets/images/img-collection/collection-1.jpg",
            avatar: "assets/images/avatar/avt-1.jpg",
            name: "John Doe",
            price: "20 ETH",
            status: "Listed",
            actions: ["List", "Aution", "Hide"],
          },
        },
        {
          collectname: {
            media: "assets/images/img-collection/collection-1.jpg",
            avatar: "assets/images/avatar/avt-1.jpg",
            name: "John Doe",
            price: "20 ETH",
            status: "Listed",
            actions: ["List", "Aution", "Hide"],
          },
        },
        {
          collectname: {
            media: "assets/images/img-collection/collection-1.jpg",
            avatar: "assets/images/avatar/avt-1.jpg",
            name: "John Doe",
            price: "20 ETH",
            status: "Listed",
            actions: ["List", "Aution", "Hide"],
          },
        },
        {
          collectname: {
            media: "assets/images/img-collection/collection-1.jpg",
            avatar: "assets/images/avatar/avt-1.jpg",
            name: "John Doe",
            price: "20 ETH",
            status: "Listed",
            actions: ["List", "Aution", "Hide"],
          },
        },
    ]
  },
  {
    name: "Michel Doknia Kalia",
    collectionImg: "assets/images/img-collection/collection-8.jpg",
    avatar: "assets/images/avatar/avt-16.jpg",
    erc: "ERC - 83",
    nft: [
        {
          collectname: {
            media: "assets/images/img-collection/collection-1.jpg",
            avatar: "assets/images/avatar/avt-1.jpg",
            name: "John Doe",
            price: "20 ETH",
            status: "Listed",
            actions: ["List", "Aution", "Hide"],
          },
        },
    ]
  },
  {
    name: "John S. Outenewes",
    collectionImg: "assets/images/img-collection/collection-7.jpg",
    avatar: "assets/images/avatar/avt-15.jpg",
    erc: "ERC - 83",
    nft:[
        {
          collectname: {
            media: "assets/images/img-collection/collection-1.jpg",
            avatar: "assets/images/avatar/avt-1.jpg",
            name: "John Doe",
            price: "20 ETH",
            status: "Listed",
            actions: ["List", "Aution", "Hide"],
          },
        },
        {
          collectname: {
            media: "assets/images/img-collection/collection-1.jpg",
            avatar: "assets/images/avatar/avt-1.jpg",
            name: "John Doe",
            price: "20 ETH",
            status: "Listed",
            actions: ["List", "Aution", "Hide"],
          },
        },
        {
          collectname: {
            media: "assets/images/img-collection/collection-1.jpg",
            avatar: "assets/images/avatar/avt-1.jpg",
            name: "John Doe",
            price: "20 ETH",
            status: "Listed",
            actions: ["List", "Aution", "Hide"],
          },
        },
    ]
  },
  {
    name: "Michel Doknia Kalia",
    collectionImg: "assets/images/img-collection/collection-8.jpg",
    avatar: "assets/images/avatar/avt-16.jpg",
    erc: "ERC - 83",
    nft:[]
  },
  {
    name: "John S. Outenewes",
    collectionImg: "assets/images/img-collection/collection-7.jpg",
    avatar: "assets/images/avatar/avt-15.jpg",
    erc: "ERC - 83",
    nft:[
        {
          collectname: {
            media: "assets/images/img-collection/collection-1.jpg",
            avatar: "assets/images/avatar/avt-1.jpg",
            name: "John Doe",
            price: "20 ETH",
            status: "Listed",
            actions: ["List", "Aution", "Hide"],
          },
        },
    ],
  },
  {
    name: "Michel Doknia Kalia",
    collectionImg: "assets/images/img-collection/collection-8.jpg",
    avatar: "assets/images/avatar/avt-16.jpg",
    erc: "ERC - 83",
    nft: [
        {
          collectname: {
            media: "assets/images/img-collection/collection-1.jpg",
            avatar: "assets/images/avatar/avt-1.jpg",
            name: "John Doe",
            price: "20 ETH",
            status: "Listed",
            actions: ["List", "Aution", "Hide"],
          },
        },
        {
          collectname: {
            media: "assets/images/img-collection/collection-1.jpg",
            avatar: "assets/images/avatar/avt-1.jpg",
            name: "John Doe",
            price: "20 ETH",
            status: "Listed",
            actions: ["List", "Aution", "Hide"],
          },
        },
    ]
  },
  // repeat for all other collections
];



export default function ManageCollections() {
    const myStyle = {
        width: "275px",
        marginRight: "30px",
        visibility: "visible",
        animationName: "fadeInUp",
      };
  return (
    <div className="tf-section top-seller">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sc-heading style-3 -">
              <h3>Manage Collections and Arts</h3>
              <p className="desc">
                List, auction and manage collections you owned.
              </p>
            </div>
          </div>
          {collectionsData.map((collection, index) => (
            <>
              <div className="col-md-12">
                <div className="sc-heading style-2">
                  <div className="content-left">
                    <div className="inner ">
                      <h3>{collection.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <Swiper
                  pagination={{ clickable: true }}
                  spaceBetween={10}
                  slidesPerView={4}
                >
                  {collection.nft.map((nft, index) => (
                    <SwiperSlide key={index}>
                      <div key={index} className="col-lg-3 col-md-6 mb-5" >
                        <div className="sc-author-card style-2 active" style={myStyle}>
                          <div className="card-media">
                            <img src={nft.collectname.media} alt="" />
                          </div>
                          
                          <div className="card-content">
                            <h5>
                              <a href="author.html">
                                {nft.collectname.name}
                              </a>
                            </h5>
                            <div className="details">
                              Price: {nft.collectname.price}
                            </div>
                            <div className="details">
                              Status: {nft.collectname.status}
                            </div>
                            <div className="card-bottom">
                              
                              {nft.collectname.actions.map(
                                (action, i) => (
                                  <a
                                    key={i}
                                    href="#"
                                    className="sc-button style-4 mr-2"
                                  >
                                    <span>{action}</span>
                                  </a>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}


