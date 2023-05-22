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
        title="Privacy Policy"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Privacy Policy" }]}
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
                        <span>Privacy Policy</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="col-lg-8 col-md-12">
              <article className="blog-details">
              <h1>Privacy Policy</h1>

<h5>1. Introduction</h5>
<p>At EstheticOptic Marketplace, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our platform.</p>

<h5>2. Collection of Information</h5>
<p>We may collect personal identification information and non-personal identification information, like:</p>
<ul>
<li>Name and Contact Data</li>
<li>Cookies and similar technologies</li>
<li>Usage data and browsing history</li>
</ul>

<h5>3. Use of Information</h5>
<p>We may use the information collected to:</p>
<ul>
<li>Improve and personalize our services</li>
<li>Understand and analyze usage trends</li>
<li>Send you updates and communications about our services</li>
</ul>

<h5>4. Disclosure of Information</h5>
<p>We will not share your personal information with third parties without your consent, except in the necessary case to provide our services or if required by law.</p>

<h5>5. Security of Information</h5>
<p>We take the security of your personal information seriously. We use administrative, technical, and physical security measures to protect your personal information. While we strive to protect your information, no method of transmission over the internet is 100% secure.</p>

<h5>6. User Rights</h5>
<p>You have the right to access, update or to delete the personal information we have on you.</p>

<h5>7. Changes to This Policy</h5>
<p>We reserve the right to modify this privacy policy at any time. We encourage users to frequently check this page for any changes.</p>

<h5>8. Contact Us</h5>
<p>If you have any questions about this privacy policy, please contact us at [Your Contact Information].</p>
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
