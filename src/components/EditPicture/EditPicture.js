import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAPI } from "@/contexts/ApiProvider";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditPicture() {
  const router = useRouter();
  const { user, setUser, setState } = useAPI();
  const [selectedImage, setSelectedImage] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [imageType, setImageType] = useState("");

  // Redirect if user is not defined
  useEffect(() => {
    if (!user) {
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

  const onImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const uploadImage = async () => {
    if (isUploading || !selectedImage || !imageType) {
      return;
    }

    // File type validation
    const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png", "image/jpg", "image/jfif"];
    if (!acceptedImageTypes.includes(selectedImage.type)) {
      toast.error("Invalid file type. Accepted types include .jpg, .png, .gif");
      return;
    }

    // File size validation
    const maxSizeMB = 5;
    if (selectedImage.size > maxSizeMB * 1024 * 1024) {
      toast.error(
        `File too large. Please select a file smaller than ${maxSizeMB}MB.`
      );
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("type", imageType); // Add type to formData


    try {
      const res = await axios.post(`/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        setUser(res.data.user);
        setSelectedImage()
        toast.success("Image uploaded successfully.");
      } else {
        // Handle error
        toast.error(res.data.message  || "Image upload failed. Please try again.");
      }
    } catch (error) {
      // Network error or other issue with the request
           toast.error("Error uploading image. Please try again.");
          } finally {
            setIsUploading(false);
          }
        };
      
        const fileInput = React.createRef(); // Create ref for file input
      
        const handleButtonClick = (type) => {
          if (isUploading) {
            return;
          }
          setImageType(type);
          fileInput.current.click(); // Simulate click on file input
        };
      
        useEffect(() => {
          if (selectedImage && imageType) {
            uploadImage();
          }
        }, [selectedImage, imageType]);
      
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
                        <div
                          className="sc-author-card style-2 active"
                          style={myStyle}
                        >
                          <div className="card-media">
                            <img src={user.feature_image} alt="" />
                          </div>
                          <div className="card-avatar">
                            <img src={user.profile_image} alt="" />
                          </div>
                          <div className="card-content">
                            <h5>change Profile images</h5>
      
                            <div className="card-bottom  ">
                              <input
                                type="file"
                                onChange={onImageChange}
                                ref={fileInput}
                                style={{ display: "none" }}
                              />
      
                              <button
                                className="sc-button style-2"
                                onClick={() => handleButtonClick("profile")}
                                disabled={isUploading}
                              >
                                <div
                                  style={{ display: "flex", alignItems: "center" }}
                                >
                                  <span className="mr-2">Change Profile</span>
                                  {isUploading && <div className="spinloader" />}
                                </div>
                              </button>
                              <button
                                onClick={() => handleButtonClick("background")}
                                disabled={isUploading}
                                className="sc-button ml-5 style-2"
                              >
                                <div
                                  style={{ display: "flex", alignItems: "center" }}
                                >
                                  <span className="mr-2">Change Background</span>
                                  {isUploading && <div className="spinloader" />}
                                </div>
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
      }
      