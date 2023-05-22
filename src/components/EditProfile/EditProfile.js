import React, { useState, useEffect } from "react";
import { useAccount } from 'wagmi'

const EditProfile = () => {
  const { address, isConnecting, isDisconnected } = useAccount()
  const [formData, setFormData] = useState({
    username: "",
    bio: "",
    email: "",
    links: "",
    twitter: "",
    instagram: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  // Print form data to the console
  };

 

  return (
    <section className="tf-section create-item pd-top-0 ">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="form-create-item-content">
            <div className="form-create-item">
              <div className="sc-heading">
                <h3>Profile details</h3>
                <p className="desc">
                  Update your Profile details
                </p>
              </div>
              <form id="create-item-1" onSubmit={handleSubmit}>
              <div className="input-group">
                  <input
                    name="username"
                    value={formData.username}
                    type="text"
                    placeholder="Username"
                    required
                    onChange={handleChange}
                  />
                  </div>
                  <div className="input-group">
                  <textarea
                    name="bio"
                    value={formData.bio}
                    placeholder="Bio"
                    required
                    onChange={handleChange}
                  /></div>
                  <div className="input-group">
                  <input
                    name="email"
                    value={formData.email}
                    type="email"
                    placeholder="Email Address"
                    required
                    onChange={handleChange}
                  /></div>
                  <div className="input-group">
                  <input
                    name="links"
                    value={formData.links}
                    type="url"
                    placeholder="Website Link"
                    required
                    onChange={handleChange}
                  /></div>
                  <div className="input-group">
                  <input
                    name="twitter"
                    value={formData.twitter}
                    type="text"
                    placeholder="Twitter Handle"
                    required
                    onChange={handleChange}
                  />
                  <input
                    name="instagram"
                    value={formData.instagram}
                    type="text"
                    placeholder="Instagram Handle"
                    required
                    onChange={handleChange}
                  /></div>
                  <div className="input-group">
                  <input
                    name="address"
                    value={address}
                    type="text"
                    placeholder="user wallet address"
                    required
                    readOnly
                  />
                  </div>
                  <button
                    name="submit"
                    type="submit"
                    id="submit"
                    className="sc-button style letter style-2"
                  >
                    <span>Update Profile</span>
                  </button>
                </form>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default EditProfile;
