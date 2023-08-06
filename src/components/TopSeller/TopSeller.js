import React, { useState, useEffect } from "react";
import { useAPI } from "@/contexts/ApiProvider";

const TopSeller = () => {

  const { state, setState, user, setUser, allUsers } = useAPI();
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const namedUsers = allUsers
      .filter((user) => user.username !== "unnamed")
      .slice(0, 6);

      setSellers(namedUsers);
  }, [allUsers]);
  // const sellers = [
  //   {
  //     avatar: "assets/images/avatar/avt-1.jpg",
  //     name: "Jason M. Stalls",
  //     eth: "523.7",
  //     rating: 4,
  //   },
  //   {
  //     avatar: "assets/images/avatar/avt-1.jpg",
  //     name: "Jason M. Stalls",
  //     eth: "523.7",
  //     rating: 2,
  //   },
  //   {
  //     avatar: "assets/images/avatar/avt-1.jpg",
  //     name: "Jason M. Stalls",
  //     eth: "523.7",
  //     rating: 4,
  //   },
  //   {
  //     avatar: "assets/images/avatar/avt-2.jpg",
  //     name: "Frank F. Chan",
  //     eth: "523.7",
  //     rating: 5,
  //   },
  //   {
  //     avatar: "assets/images/avatar/avt-2.jpg",
  //     name: "Frank F. Chan",
  //     eth: "523.7",
  //     rating: 4,
  //   },
  //   {
  //     avatar: "assets/images/avatar/avt-2.jpg",
  //     name: "Frank F. Chan",
  //     eth: "523.7",
  //     rating: 1,
  //   },
  //   // add more as needed
  // ];

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(i < rating ? <i key={i} className="fas fa-star"></i> : <li className="un-rate"><i key={i} className="fas fa-star"></i></li>);
    }
    return stars;
};


  return (
    <section className="top-seller tf-section tf-section-reset">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sc-heading style-2">
              <div className="content-left">
                <div className="inner">
                  <h3>Top Sellers</h3>
                  <p className="desc">
                    Most popular gaming digital nft market place
                  </p>
                </div>
              </div>
            </div>
          </div>
          {sellers.map((seller, index) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
              <div className="sc-author style-2">
                <div className="card-avatar">
                  <img src={seller.profile_image} width='70%' alt="" />
                </div>
                <div className="infor">
                  <h5>
                    <a href="author.html">{seller.username}</a>
                  </h5>
                  <div className="details">526.00 ETH</div>
                  <ul className="rating">{renderStars(5)}</ul>
                </div>
                <div className="button-follow">
                <a href={`/author?user=${seller.wallet}`} className="sc-button style-2">

                    <span>View Profile</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSeller;
