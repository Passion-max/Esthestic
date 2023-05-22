import React, { useState } from "react";
import NFTCardTwo from "@/components/NFTCardTwo/NFTCardTwo";

let collectedNFTs = [
  {
    imgSrc: "assets/images/product-item/item-13.jpg",
    collection: "Image",
    catergory: "Art",
    title: "‘’3D Space Rocket With Smoke’’",
    avatarSrc: "assets/images/avatar/avt-7.jpg",
    avatarAlt: "Image",
    authorName: "Daniel M. Bivens",
    bid: "5.23",
    status: "Listed",
  },
  {
    imgSrc: "assets/images/product-item/item-13.jpg",
    collection: "Image",
    catergory: "PANDA",
    title: "‘’3D Space Rocket With Smoke’’",
    avatarSrc: "assets/images/avatar/avt-7.jpg",
    avatarAlt: "Image",
    authorName: "Daniel M. Bivens",
    bid: "5.23",
    status: "Listed",
  },
  {
    imgSrc: "assets/images/product-item/item-13.jpg",
    collection: "Image",
    catergory: "PANDA",
    title: "‘’3D Space Rocket With Smoke’’",
    avatarSrc: "assets/images/avatar/avt-7.jpg",
    avatarAlt: "Image",
    authorName: "Daniel M. Bivens",
    bid: "5.23",
    status: "Listed",
  },
  {
    imgSrc: "assets/images/product-item/item-13.jpg",
    collection: "Image",
    catergory: "PANDA",
    title: "‘’3D Space Rocket With Smoke’’",
    avatarSrc: "assets/images/avatar/avt-7.jpg",
    avatarAlt: "Image",
    authorName: "Daniel M. Bivens",
    bid: "5.23",
    status: "Listed",
  },
  {
    imgSrc: "assets/images/product-item/item-13.jpg",
    collection: "Image",
    catergory: "PANDA",
    title: "‘’3D Space Rocket With Smoke’’",
    avatarSrc: "assets/images/avatar/avt-7.jpg",
    avatarAlt: "Image",
    authorName: "Daniel M. Bivens",
    bid: "5.23",
    status: "Listed",
  },
  {
    imgSrc: "assets/images/product-item/item-13.jpg",
    collection: "Image",
    catergory: "PANDA",
    title: "‘’3D Space Rocket With Smoke’’",
    avatarSrc: "assets/images/avatar/avt-7.jpg",
    avatarAlt: "Image",
    authorName: "Daniel M. Bivens",
    bid: "5.23",
    status: "Listed",
  },
  {
    imgSrc: "assets/images/product-item/item-13.jpg",
    collection: "Image",
    catergory: "PANDA",
    title: "‘’3D Space Rocket With Smoke’’",
    avatarSrc: "assets/images/avatar/avt-7.jpg",
    avatarAlt: "Image",
    authorName: "Daniel M. Bivens",
    bid: "5.23",
    status: "Listed",
  },
  // Add more items as needed
];
const createdNFTs = [];
const nftActicity = [];
var collectedContent = "";
var createdNFTsContent = "";
var nftActicityContent = "";
{
  collectedNFTs.length == 0
    ? (collectedContent = "No Artwork collected")
    : (collectedContent = <NFTCardTwo NFTData={collectedNFTs} />);
}
{
  createdNFTs.length == 0
    ? (createdNFTsContent = "No Artwork collected")
    : (createdNFTsContent = <NFTCardTwo />);
}
{
  nftActicity.length == 0
    ? (nftActicityContent = "No Artwork collected")
    : (nftActicityContent = <NFTCardTwo />);
}
const TabData = [
  {
    title: "Collected",
    content: collectedContent,
  },
  {
    title: "Created",
    content: createdNFTsContent,
  },
  {
    title: "Activity",
    content: nftActicityContent,
  },
  {
    title: "Offers made",
    content: collectedContent,
  },
  {
    title: "Active Listing",
    content: collectedContent,
  },
  {
    title: "Inactive Listing",
    content: collectedContent,
  },
  {
    title: "Hidden",
    content: collectedContent,
  },
];

const User = () => {
  const userData = {
    media: "assets/images/img-collection/collection-7.jpg",
    avatar: "assets/images/avatar/avt-15.jpg",
    name: "John S. Outenewes",
    collectionType: "ERC - 83",
  };
  const myStyle = {
    width: "275px",
    paddingBottom: "109px",
    marginRight: "30px",
    visibility: "visible",
    animationName: "fadeInUp",
  };
  return (
    <div className="tf-section top-seller">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sc-heading style-3">
              <h3>Profile</h3>
              <p className="desc">{" "}</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="sc-author-card style-2 active" style={myStyle}>
              <div className="card-media">
                <img src={userData.media} alt="" />
              </div>
              <div className="card-avatar">
                <img src={userData.avatar} alt="" />
              </div>
              <div className="card-content">
                <h5>
                  <a href="author.html">{userData.name}</a>
                </h5>
                <div className="details">{"seller.collectionType"}</div>
                <div className="card-bottom  ">
                  <div className="widget-social">
                    <ul>
                      <li>
                        <a href="#" className="active">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="/edit-profile" className="sc-button style-2">
                    <span>Edit Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function profile() {
  const [activeTab, setActiveTab] = useState(TabData[0]);
  return (
    <section className="tf-section item-details-page">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-12 col-md-12">
            <div className="item-media">
              <User />
            </div>
          </div>
          <div className="col-xl-9 col-lg-12 col-md-12">
            <div className="item-media">
              <div className="tf-section top-seller">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="sc-heading style-3">
                        <h3>My Assets</h3>
                        <p className="desc mb-1">
                          View your assets and transactions.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="sc-heading style-3">
                        <div className="content-item">
                          <div className="flat-tabs themesflat-tabs">
                            <ul className="menu-tab tab-title text-center">
                              {TabData.map((tab, index) => (
                                <li
                                  key={index}
                                  className={`item-title ${
                                    tab.title === activeTab.title
                                      ? "active"
                                      : ""
                                  }`}
                                  onClick={() => setActiveTab(tab)}
                                >
                                  <span className="inner">{tab.title}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="content-tab">
                              <div className="content-inner tab-content">
                                <div className="content">
                                  {activeTab.content}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
