import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import axios from "axios";
import { useAPI } from "@/contexts/ApiProvider";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProfile = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();
  const { user, setUser, setState } = useAPI();
  const [formData, setFormData] = useState({
    username: "",
    desc: "",
    email: "",
    url: "",
    twitter: "",
    facebook: "",
  });

 // Populate formData with user data when component mounts
 useEffect(() => {
  if (user) {
    setFormData({
      username: user.username || "",
      desc: user.desc || "",
      email: user.email || "",
      url: user.url || "",
      twitter: user.twitter || "",
      facebook: user.facebook || "",
    });
  } else {
    router.push("/");
  }
}, [user]);

  const myStyle = {
    width: "50rem",
    paddingBottom: "109px",
    marginRight: "50%",
    marginleft: "50%",
    visibility: "visible",
    animationName: "fadeInUp",
    textAlign: "center",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Print form data to the console
  
    setIsUploading(true);
  
    try {
      const res = await axios.post("/api/updateProfile", formData);
      console.log(res)
      if (res.data.success) {
        setUser(res.data.user);
        toast.success("Profile updated successfully!");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error(err);
      if (err.response) {
        
        toast.error(err.response.data.message);
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error("An error occurred while updating the profile");
      }
    } finally {
      setIsUploading(false);
    }
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
                  <p className="desc">Update your Profile details</p>
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
                      name="desc"
                      value={formData.desc}
                      placeholder="Desc"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      name="email"
                      value={formData.email}
                      type="email"
                      placeholder="Email Address"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      name="url"
                      value={formData.url}
                      type="url"
                      placeholder="Website Link"
                      required
                      onChange={handleChange}
                    />
                  </div>
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
                      name="facebook"
                      value={formData.facebook}
                      type="text"
                      placeholder="Instagram Handle"
                      required
                      onChange={handleChange}
                    />
                  </div>
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
                    disabled={isUploading}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span>Update Profile</span>
                      {isUploading && <div className="spinloader" />}
                    </div>
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
