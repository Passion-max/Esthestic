import React from "react";

function ContactInfo() {
  return (
    <>
      <section className="tf-contact tf-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="sc-contact-infor">
                <h4>Need Help? Contact With Our Hotline</h4>
                <div className="icon">
                  <i className="fal fa-phone-volume"></i>
                </div>
                <div className="infor">
                  <a href="tel:012345678">+012 (345) 678 88</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sc-contact-infor">
                <h4>Need Help? Contact With Our Hotline</h4>
                <div className="icon">
                  <i className="fal fa-map-marker-alt"></i>
                </div>
                <div className="infor">
                  55 Main Street, 2nd Block,3rd Floor, New York
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sc-contact-infor">
                <h4>Need Help? Contact With Our Hotline</h4>
                <div className="icon">
                  <i className="fal fa-envelope-open"></i>
                </div>
                <div className="infor">
                  <a href="mailto:abc@gmail.com">
                    hotlineinfo@gmail.com www.bidzen.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row">
            <iframe
              className="map-contact"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1640857108284!5m2!1svi!2s"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactInfo;
