import React from 'react';

const Footer = () => {
  const [userEamil, setUserEmail] = React.useState('');
  return (
    <>
      <section className="new-letter">
        <div className="container">
          <div className="new-letter-inner style-2 flex wow fadeInUp">
            <div className="new-letter-content">
              <h3 className="heading">Newsletters</h3>
              <p className="sub-heading">Most popular gaming digital nft market place</p>
            </div>
            <div className="new-letter-img">
              <div className="form-subcribe">
                <form id="subscribe-form" action="#" method="GET" acceptCharset="utf-8" className="form-submit">
                  <input name="email" value="" className="email" type="email" onChange={e => setUserEmail(e.target.value)} placeholder="Enter Email Address" required="" />
                  
                  <button name="submit" type="submit" id="submit" className="sc-button style letter style-2">
                    <span>Browse More</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="clearfix bg-style ft-home-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="widget widget-logo">
                <div className="logo-footer" id="logo-footer">
                  <a href="index.html">
                    <img id="logo_footer" src="assets/images/logo/logo_dark.png" alt="nft-gaming" width="151" height="45" data-retina="assets/images/logo/logo_dark@2x.png" data-width="151" data-height="45" />
                  </a>
                </div>
                <p className="sub-widget-logo">Sed ut perspiciatis unde omnis iste natus error sit voluptate
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaes</p>
                <div className="widget-social">
                  <ul>
                    <li><a href="#" className="active"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-6">
              <div className="widget widget-menu menu-marketplace">
                <h5 className="title-widget">Marketplace</h5>
                <ul>
                  <li><a href="item.html">All NFTs</a></li>
                  <li><a href="item.html">Arts</a></li>
                  <li><a href="item.html">PFPS</a></li>
                  <li><a href="item.html">Photography</a></li>
                  <li><a href="item.html">Gaming</a></li>
                  <li><a href="item.html">Collectibles</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="widget widget-menu menu-supports">
              <h5 className="title-widget">Supports</h5>
                <ul>
                  <li><a href="/contact">Help & Support</a></li>
                  <li><a href="/faqs">FAQs</a></li>
                  <li><a href="/tos">Terms of Services</a></li>
                  <li><a href="/privacy">Privacy Policy</a></li>
                  <li><a href="/contact">Report Abuse</a></li>
                  <li><a href="/blog">Blog</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget widget-post">
                <h5 className="title-widget">News & Post</h5>
                <ul className="post-new">
                  <li>
                    <div className="post-img">
                      <img src="assets/images/post/post-recent-new-4.jpg" alt="Post New" />
                    </div>
                    <div className="post-content">
                      <h6 className="title"><a href="blog-details.html">Roll Out New Features Without
                          Hurting Loyal Users</a></h6>
                      <a href="blog-details.html" className="post-date"><i className="far fa-calendar-week"></i> 25 JAN 2022</a>
                    </div>
                  </li>
                  <li>
                    <div className="post-img">
                      <img src="assets/images/post/post-recent-new-5.jpg" alt="Post New" />
                    </div>
                    <div className="post-content">
                      <h6 className="title"><a href="blog-details.html">An Overview The Most Comon UX
                          Design Deliverables</a></h6>
                      <a href="blog-details.html" className="post-date"><i className="far fa-calendar-week"></i> 25 JAN 2022</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottom">
        <div className="container">
          <div className="bottom-inner">
            Copyright © 2022 Bidzen | NFT Marketplace HTML Template.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
