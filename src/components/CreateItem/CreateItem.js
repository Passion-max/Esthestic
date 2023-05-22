import React, { useState } from "react";

const CreateItem = () => {
  const [formData, setFormData] = useState({
    file: "",
    itemName: "",
    itemPrice: "",
    royalty: "",
    size: "",
    balance: "",
    copies: "",
    description: "",
    saleOption: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setSelectedImage("");
    }
  };

  return (
    <section className="tf-section create-item pd-top-0 mg-t-40">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form-create-item-content">
              <div className="form-create-item">
                <div className="sc-heading">
                  <h3>Create Item</h3>
                  <p className="desc">
                    Most popular gaming digital NFT market place
                  </p>
                </div>
                <form id="create-item-1" onSubmit={handleSubmit}>
                  <label className="uploadFile">
                    <span className="filename">Choose Item</span>
                    <input
                      type="file"
                      className="inputfile form-control"
                      name="file"
                      onChange={handleImageChange}
                    />
                    <span className="icon">
                      <i className="far fa-cloud-upload"></i>
                    </span>
                  </label>
                  <div className="input-group">
                    <input
                      name="itemName"
                      value={formData.itemName}
                      type="text"
                      placeholder="Item Name"
                      required
                      onChange={handleChange}
                    />
                    <input
                      name="itemPrice"
                      value={formData.itemPrice}
                      type="text"
                      placeholder="Item Price"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      name="royalty"
                      value={formData.royalty}
                      type="text"
                      placeholder="Royalty"
                      required
                      onChange={handleChange}
                    />
                    <input
                      name="size"
                      value={formData.size}
                      type="text"
                      placeholder="Size"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      name="balance"
                      value={formData.balance}
                      type="text"
                      placeholder="Blance"
                      required
                      onChange={handleChange}
                    />
                    <input
                      name="copies"
                      value={formData.copies}
                      type="text"
                      placeholder="No Of Copies"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <textarea
                    id="comment-message"
                    name="description"
                    value={formData.description}
                    tabIndex="4"
                    placeholder="Description"
                    aria-required="true"
                    onChange={handleChange}
                  />
                  <div className="input-group style-2">
                    <div className="btn-check">
                      <input
                        type="radio"
                        id="sale"
                        name="saleOption"
                        value="sale"
                        onChange={handleChange}
                      />
                      <label htmlFor="sale">Put On Sale</label>
                    </div>
                    <div className="btn-check">
                      <input
                        type="radio"
                        id="price"
                        name="saleOption"
                        value="price"
                        onChange={handleChange}
                      />
                      <label htmlFor="price">Instant Sale Price</label>
                    </div>
                    <div className="btn-check">
                      <input
                        type="radio"
                        id="purchase"
                        name="saleOption"
                        value="purchase"
                        onChange={handleChange}
                      />
                      <label htmlFor="purchase">Unlock Purchased</label>
                    </div>
                  </div>
                  <button
                    name="submit"
                    type="submit"
                    id="submit"
                    className="sc-button style letter style-2"
                  >
                    <span>Create Item</span>
                  </button>
                </form>
              </div>
              <div className="form-background "
              style={{ margin:"auto" }}
              >
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Item Preview"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                ) : (
                    <div className="sc-heading style-3 ml-5"  > <h3 className="">Art Preview</h3> </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateItem;
