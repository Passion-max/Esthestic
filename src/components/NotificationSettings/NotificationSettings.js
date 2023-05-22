import React, { useState } from "react";

const NotificationSettings = () => {
  const [formData, setFormData] = useState({
    itemSold: false,
    bidActivity: false,
    priceChange: false,
    auctionExpiration: false,
    outbid: false,
    ownedItemUpdates: false,
    successfulPurchase: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Print form data to the console
  };

  return (
    <section className="tf-section create-item pd-top-0 mg-t-40">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form-create-item-content">
              <div className="form-create-item">
                <div className="sc-heading">
                  <h3>Notification Settings</h3>
                  <p className="desc">Manage your notification preferences</p>
                </div>
                <form id="create-item-1" onSubmit={handleSubmit}>
                  <div className="input-group">
                    <div className="btn-check">
                      <input
                        type="checkbox"
                        id="item-sold"
                        name="itemSold"
                        checked={formData.itemSold}
                        onChange={handleChange}
                      />
                      <label htmlFor="item-sold">
                        Item Sold - When someone purchased one of your items
                      </label>
                    </div>
                  </div>

                  <div className="input-group">
                    <div className="btn-check">
                      <input
                        type="checkbox"
                        id="bid-activity"
                        name="bidActivity"
                        checked={formData.bidActivity}
                        onChange={handleChange}
                      />
                      <label htmlFor="bid-activity">
                        Bid Activity - When someone bids on one of your items
                      </label>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="btn-check">
                      <input
                        type="checkbox"
                        id="price-change"
                        name="priceChange"
                        checked={formData.priceChange}
                        onChange={handleChange}
                      />
                      <label htmlFor="price-change">
                        Price Change - When an item you made an offer on changes
                        in price
                      </label>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="btn-check">
                      <input
                        type="checkbox"
                        id="auction-expiration"
                        name="auctionExpiration"
                        checked={formData.auctionExpiration}
                        onChange={handleChange}
                      />
                      <label htmlFor="auction-expiration">
                        Auction Expiration - When a timed auction you created
                        ends
                      </label>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="btn-check">
                      <input
                        type="checkbox"
                        id="outbid"
                        name="outbid"
                        checked={formData.outbid}
                        onChange={handleChange}
                      />
                      <label htmlFor="outbid">
                        Outbid - When an offer you placed is exceeded by another
                        user
                      </label>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="btn-check">
                      <input
                        type="checkbox"
                        id="owned-item-updates"
                        name="ownedItemUpdates"
                        checked={formData.ownedItemUpdates}
                        onChange={handleChange}
                      />
                      <label htmlFor="owned-item-updates">
                        Owned Item Updates - When a significant update occurs
                        for one of the items you have purchased on OpenSea
                      </label>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="btn-check">
                      <input
                        type="checkbox"
                        id="successful-purchase"
                        name="successfulPurchase"
                        checked={formData.successfulPurchase}
                        onChange={handleChange}
                      />
                      <label htmlFor="successful-purchase">
                        Successful Purchase - When you successfully buy an item
                      </label>
                    </div>
                  </div>

                  <button
                    name="submit"
                    type="submit"
                    id="submit"
                    className="sc-button style letter style-2"
                  >
                    <span>Update Notifications</span>
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

export default NotificationSettings;
