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
  const [currentArticle, setCurrentArticle] = useState({});

  useEffect(() => {
    if (learn && learn.length > 0) {
      setCurrentArticle(learn[0]);
    }
  }, []);
  
  return (
    <>
      <PageTitle
        title="FAQs"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "FAQs" }]}
      />
      <div className="tf-section post-details" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row">
          <div className="col-lg-4 col-md-12">
              <aside className="side-bar">
                <div className="widget item wg-category">
                  <div className="wg-title">Learn</div>
                  <ul>
                    {learn.map((title,index) => (
                      <li key={index} onClick={() => setCurrentArticle(title)}>
                      <a href="#">
                        <span>{title.title}</span>
                      </a>
                    </li>
                    )) }
                    
                  </ul>
                </div>
              </aside>
            </div>
            <div className="col-lg-8 col-md-12">
            <article className="blog-details" dangerouslySetInnerHTML={{ __html: currentArticle.content }}></article>
              <CommentForm />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
