// C:\pr0\esthetic\ethestic-optic\src\components\EditProfile\EditProfile.js
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
  const [activeField, setActiveField] = useState(null); // Added
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

  const handleFocus = (name) => {  // Added
    setActiveField(name);
  };

  const handleBlur = () => {  // Added
    setActiveField(null);
  };

  const validateFacebookUsername = (username) => {
    const re = /^[a-z\d.]{5,}$/i; //Facebook usernames must be at least 5 characters long and can only contain alphanumeric characters (A-Z, 0-9) or a period (".")
    return re.test(String(username));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFacebookUsername(formData.facebook)) {
      toast.error("Invalid Facebook username");
      return;
    }

    console.log(formData); // Print form data to the console
  
    setIsUploading(true);

    try {
      const response = await axios.post("/api/updateProfile", formData);
      
      if (response.data.success) {
        setUser(response.data.user); // Update the user context
        toast.success("Profile updated successfully!");
      } else {
        toast.error(response.data.message || "An error occurred!");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred!");
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
                      onFocus={() => handleFocus('username')}
                      onBlur={handleBlur}
                      required
                      onChange={handleChange}
                    />
                    {activeField === 'username' && <p className="example">E.g. johndoe123</p>}
                    
                  </div>
                  <div className="input-group">
                    <textarea
                      name="desc"
                      value={formData.desc}
                      placeholder="Desc"
                      onFocus={() => handleFocus('desc')}
                      onBlur={handleBlur}
                      required
                      onChange={handleChange}
                    />
                    {activeField === 'desc' && <p className="example">E.g. Professional Software Developer</p>}
                  </div>
                  <div className="input-group">
                    <input
                      name="email"
                      value={formData.email}
                      type="email"
                      placeholder="Email Address"
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                      onChange={handleChange}
                    />
                    {activeField === 'email' && <p className="example">E.g. johndoe123@example.com</p>}
                  </div>
                  <div className="input-group">
                    <input
                      name="url"
                      value={formData.url}
                      type="url"
                      placeholder="Website Link"
                      onFocus={() => handleFocus('url')}
                      onBlur={handleBlur}
                      required
                      onChange={handleChange}
                    />
                    {activeField === 'url' && <p className="example">E.g. https://www.mywebsite.com</p>}
                  </div>
                  <div className="input-group">
                    <input
                      name="twitter"
                      value={formData.twitter}
                      type="text"
                      placeholder="Twitter Handle"
                      onFocus={() => handleFocus('twitter')}
                      onBlur={handleBlur}
                      required
                      onChange={handleChange}
                    />
                    {activeField === 'twitter' && <p className="example">E.g. @johndoe</p>}
                    <input
                      name="facebook"
                      value={formData.facebook}
                      type="text"
                      placeholder="Instagram URL"
                      onFocus={() => handleFocus('facebook')}
                      onBlur={handleBlur}
                      required
                      onChange={handleChange}
                    />
                    {activeField === 'facebook' && <p className="example">johndoe</p>}
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
