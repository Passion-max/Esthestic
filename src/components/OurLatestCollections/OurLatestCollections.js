import React from "react";

const OurLatestCollections = () => {
  const collections = [
    {
      style: 3,
      image: "assets/images/product-item/item-5.jpg",
      title: "‘’3D Space Rocket With Smoke Premium’’",
      authorAvatar: "assets/images/avatar/avt-7.jpg",
      author: "Daniel M. Bivens",
    },
    {
      style: 4,
      image: "assets/images/product-item/item-6.jpg",
      title:
        "‘’Multi-purpose 3D Space Rocket With Animate Real Special Smoke Premium Quality Gaming’’",
      authorAvatar: "assets/images/avatar/avt-7.jpg",
      author: "Daniel M. Bivens",
    },
    {
      style: 4,
      image: "assets/images/product-item/item-6.jpg",
      title:
        "‘’Multi-purpose 3D Space Rocket With Animate Real Special Smoke Premium Quality Gaming’’",
      authorAvatar: "assets/images/avatar/avt-7.jpg",
      author: "Daniel M. Bivens",
    },
    {
      style: 4,
      image: "assets/images/product-item/item-6.jpg",
      title:
        "‘’Multi-purpose 3D Space Rocket With Animate Real Special Smoke Premium Quality Gaming’’",
      authorAvatar: "assets/images/avatar/avt-7.jpg",
      author: "Daniel M. Bivens",
    },
    {
      style: 4,
      image: "assets/images/product-item/item-6.jpg",
      title:
        "‘’Multi-purpose 3D Space Rocket With Animate Real Special Smoke Premium Quality Gaming’’",
      authorAvatar: "assets/images/avatar/avt-7.jpg",
      author: "Daniel M. Bivens",
    },
    {
      style: 3,
      image: "assets/images/product-item/item-10.jpg",
      title: "‘’3D Space Rocket With Smoke Premium’’",
      authorAvatar: "assets/images/avatar/avt-7.jpg",
      author: "Daniel M. Bivens",
    },
  ];
  return (
    <section className="tf-section our-latest-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sc-heading">
              <h3>Our Latest Collections</h3>
              <p className="desc">
                Most popular gaming digital nft market place{" "}
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className={`sc-product-item style-3`}>
              <div className="product-img">
                <img src="assets/images/product-item/item-5.jpg" alt="Image" />
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
                    3D Space Rocket With Smoke Premium
                  </a>{" "}
                </h5>
                <div className="product-author flex mg-bt-0">
                  <div className="avatar">
                    <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                  </div>
                  <div className="infor">
                    <div className="author-name">
                      <a href="author.html">Daniel M. Bivens</a>
                    </div>
                    <span>Owner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`sc-product-item style-4`}>
              <div className="product-img flex">
                <div className="img-left">
                  <img
                    src="assets/images/product-item/item-6.jpg"
                    alt="Image"
                  />
                  <label>BSC</label>
                </div>
                <div className="img-right">
                  <div className="top-img flex">
                    <img
                      src="assets/images/product-item/item-7.jpg"
                      alt="Image"
                    />
                    <img
                      src="assets/images/product-item/item-8.jpg"
                      alt="Image"
                    />
                  </div>
                  <div className="bottom-img">
                    <img
                      src="assets/images/product-item/item-9.jpg"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
              <div className="product-content">
                <h5 className="title">
                  <a href="item-details.html">
                    3D Space Rocket With Smoke Premium
                  </a>{" "}
                </h5>
                <div className="product-author flex mg-bt-0">
                  <div className="avatar">
                    <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                  </div>
                  <div className="infor">
                    <div className="author-name">
                      <a href="author.html">Daniel M. Bivens</a>
                    </div>
                    <span>Creator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`sc-product-item style-4`}>
              <div className="product-img">
                <img src="assets/images/product-item/item-5.jpg" alt="Image" />
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
                  <a href="item-details.html">3D Space Rocket With Smoke Premium</a>{" "}
                </h5>
                <div className="product-author flex mg-bt-0">
                  <div className="avatar">
                    <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                  </div>
                  <div className="infor">
                    <div className="author-name">
                      <a href="author.html">Daniel M. Bivens</a>
                    </div>
                    <span>Owner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLatestCollections;
