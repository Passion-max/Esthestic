import React, { useState } from "react";

export default function NFTCardTwo({ NFTData }) {
  const [itemsToShow, setItemsToShow] = useState(6); // State to control number of items to show

  const loadMore = () => {
    setItemsToShow((prev) => prev + 6); // Load 5 more items each time
  };
  return (
    <div class="container mb-5">
      <div class="row">
        {NFTData.slice(0, itemsToShow).map((item, i) => (
          <div className="col-lg-4 col-md-6 mb-4" key={i}>
            <div className="sc-product-item style-2">
              <div className="product-img">
                <img src={item.imgSrc} alt={item.collection} />
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#popup_bid"
                  className="sc-button style letter"
                >
                  <span>Place Bid</span>
                </a>
                <label>{item.catergory}</label>
              </div>
              <div className="product-content">
                <h5 className="title">
                  <a href="item-details.html">{item.title}</a>
                </h5>
                <div className="product-author flex">
                  <div className="avatar">
                    <img src={item.avatarSrc} alt={item.avatarAlt} />
                  </div>
                  <div className="infor">
                    <div className="author-name">
                      <a href="author.html">{item.authorName}</a>
                    </div>
                    <span>Creator</span>
                  </div>
                </div>
                <div className="product-price flex">
                  <div className="title">Current Bid</div>
                  <div className="price">
                    <span>{item.bid} ETH</span>
                    <span>= $32.420</span>{" "}
                    {/* You might want to calculate this value dynamically */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row text-center">
        <div className="col-md-12">
          <button
            id="loadmore"
            className=" sc-button style letter style-2"
            onClick={loadMore} // Add onClick handler to load more items
          >
            <span>Explore More</span>
          </button>
        </div>
      </div>
    </div>
  );
}
