import React from 'react'

export default function EditPicture() {
  const userData = {
    media: "assets/images/img-collection/collection-7.jpg",
    avatar: "assets/images/avatar/avt-15.jpg",
    name: "John S. Outenewes",
    collectionType: "ERC - 83",
  };
  const myStyle = {
    width: "50rem",
    paddingBottom: "109px",
    marginRight: "50%",
    marginleft: "50%",
    visibility: "visible",
    animationName: "fadeInUp",
    textAlign: "center",
  };
  return (
    <section className="tf-section create-item pd-top-0 mg-t-40">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="">
            <div className="form-create-item">
              <div className="sc-heading">
                <h3>Profile Picture</h3>
                <p className="desc">
                  Update your Profile Picture and Background image
                </p>
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
                  change Profile images
                </h5>
                
                <div className="card-bottom  ">
                  
                  <button className="sc-button style-2">
                    <span>Change Profile</span>
                  </button>
                  <button href="/edit-profile" className="sc-button ml-5 style-2">
                    <span>Change Background</span>
                  </button>
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
};
