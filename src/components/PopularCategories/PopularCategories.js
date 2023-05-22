import React from 'react';

const PopularCategories = () => {
    const categories = [
        { img: 'assets/images/category/category-1.jpg', title: 'Browse By Template', description: 'Sed ut perspiciatis unde omnis natus error sit voluptatem'},
        { img: 'assets/images/category/category-2.jpg', title: 'UI Template', description: 'Sed ut perspiciatis unde omnis natus error sit voluptatem'},
        { img: 'assets/images/category/category-3.jpg', title: 'Graphics Design', description: 'Sed ut perspiciatis unde omnis natus error sit voluptatem'},
        { img: 'assets/images/category/category-4.jpg', title: 'Social Network', description: 'Sed ut perspiciatis unde omnis natus error sit voluptatem'},
        { img: 'assets/images/category/category-5.jpg', title: 'Browse By Template', description: 'Sed ut perspiciatis unde omnis natus error sit voluptatem'},
        { img: 'assets/images/category/category-6.jpg', title: 'Browse By Template', description: 'Sed ut perspiciatis unde omnis natus error sit voluptatem'},
    ]

    return (
        <section className="tf-category tf-section">
            <div className="category-inner">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sc-heading style-2 wow fadeInUp">
                            <div className="content-left">
                                <div className="inner">
                                    <h3>Popular Categories</h3>
                                    <p className="desc">Most popular gaming digital nft market place</p>
                                </div>
                            </div>
                            <div className="content-right">
                                <button className="sc-button style letter style-2"><span>Browse More</span></button>
                            </div>
                        </div>
                    </div>
                    {categories.map((category, index) => (
                        <div className="col-lg-4 col-md-6 col-12" key={index}>
                            <div className="sc-category wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                                <div className="card-media">
                                    <img src={category.img} alt=""/>
                                </div>
                                <div className="card-content">
                                    <h5><a href="#">{category.title}</a></h5>
                                    <p>{category.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PopularCategories;
