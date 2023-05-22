import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import PageTitle from "../components/PageTitle/PageTitle";
import Loader from "../components/Loader/Loader";
import learn from "../assets/data/learn.json";

const inter = Inter({ subsets: ["latin"] });

const CommentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // your logic to handle the form submission goes here
    // for example, making a POST request to contact/contact-process.php
  };

  return (
    <div className="wg-post-comments">
      <div className="wg-title">Leave a Reply</div>
      <div className="desc">We’re Ready to Help Your Buisness</div>
      <form
        onSubmit={handleSubmit}
        id="contactform"
        className="comment-form form-submit"
        noValidate
      >
        <div className="text-wrap clearfix">
          <fieldset className="name-wrap">
            <input
              type="text"
              id="name"
              className="tb-my-input"
              name="name"
              tabIndex="1"
              placeholder="Full Name"
              value={name}
              size="32"
              aria-required="true"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset className="email-wrap">
            <input
              type="email"
              id="email"
              className="tb-my-input"
              name="email"
              tabIndex="2"
              placeholder="Email Address"
              value={email}
              size="32"
              aria-required="true"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
        </div>
        <fieldset className="message-wrap">
          <textarea
            id="comment-message"
            name="message"
            tabIndex="4"
            placeholder="Write Message"
            aria-required="true"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </fieldset>
        <button
          name="submit"
          type="submit"
          id="comment-reply"
          className="sc-button style letter style-2"
        >
          <span>Send Reply</span>{" "}
        </button>
      </form>
    </div>
  );
};

const Faqs = () => {
  return (
    <>
      <PageTitle
        title="Term of Service"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Term of Service" }]}
      />
      <div className="tf-section post-details" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <aside className="side-bar">
                <div className="widget item wg-category">
                  <div className="wg-title">Learn</div>
                  <ul>
                    <li>
                      <a href="#">
                        <span>Term of Service</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="col-lg-8 col-md-12">
              <article className="blog-details">
                <h1>Terms of Service</h1>

                <h5>1. Introduction</h5>
                <p>
                  Welcome to EstheticOptic Marketplace, a digital marketplace
                  for trading non-fungible tokens (NFTs).
                </p>
                <p>
                  By accessing our services, you agree to abide by these Terms
                  of Service. Please read them carefully before using our
                  platform.
                </p>

                <h5>2. Definitions</h5>
                <p>
                  "NFT" refers to non-fungible tokens, a type of digital asset
                  stored on a blockchain.
                </p>
                <p>"User" or "Users" refers to anyone using our services.</p>

                <h5>3. User Responsibilities</h5>
                <p>
                  Users are responsible for their own actions while using our
                  services. This includes ensuring the legality of any trade,
                  respecting the rights of other users, and acting in a manner
                  that is not harmful to our service or its users.
                </p>

                <h5>4. Intellectual Property</h5>
                <p>
                  By listing an NFT on EstheticOptic Marketplace, you represent
                  that you have all necessary rights to the content associated
                  with that NFT. You retain all rights to the content you list,
                  subject to the rights granted to the buyer of your NFT.
                </p>

                <h5>5. Privacy</h5>
                <p>
                  Our privacy policy, which outlines how we collect and use your
                  personal information, is incorporated into these Terms of
                  Service.
                </p>

                <h5>6. Dispute Resolution</h5>
                <p>
                  Any disputes arising from these terms or your use of our
                  service will be governed by the laws of [Your Location].
                </p>

                <h5>7. Limitation of Liability</h5>
                <p>
                  EstheticOptic Marketplace is provided "as is", without
                  warranty of any kind. We are not liable for any direct or
                  indirect losses or damages arising from the use of our
                  service.
                </p>

                <h5>8. Changes to These Terms</h5>
                <p>
                  We reserve the right to modify these terms at any time. It is
                  the user's responsibility to review these terms periodically.
                </p>

                <h5>9. Contact Us</h5>
                <p>
                  If you have any questions about these terms, please contact us
                  at [Your Contact Information].
                </p>
              </article>
              <CommentForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
