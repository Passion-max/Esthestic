import React, { useState } from 'react';

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send form data to server or process it here
    };

    return (
        <section className="tf-section login-page contact-page pd-top-0">
            <div className="container">
                <div className="row jtf-content-center">
                    <div className="col-md-8">
                        <div className="form-create-item-content">
                            <div className="form-create-item">
                                <div className="sc-heading">
                                    <h3>Send Us Message</h3>
                                    <p className="desc">Most popular gaming digital nft market place </p>
                                </div>
                                <form id="create-item-1" onSubmit={handleSubmit} noValidate>
                                    <input
                                        type="text"
                                        id="name"
                                        className="tb-my-input"
                                        name="name"
                                        tabIndex="1"
                                        placeholder="Your Full Name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="email"
                                        id="email"
                                        className="tb-my-input"
                                        name="email"
                                        tabIndex="2"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                    <select className="valid" value={subject} onChange={e => setSubject(e.target.value)}>
                                        <option value="1">Subject</option>
                                        <option value="2">Subject</option>
                                        <option value="3">Subject</option>
                                    </select>
                                    <textarea
                                        id="comment-message"
                                        name="message"
                                        tabIndex="4"
                                        placeholder="Write Message"
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        required
                                    />
                                    <button name="submit" type="submit" id="comment-reply" className="sc-button style letter style-2">
                                        <span>Send Message</span>
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

export default ContactUs;
