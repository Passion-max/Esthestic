import React from 'react';

const PopularCategories = () => {
    const categories = [
        { img: 'assets/images/category/art-esthesticoptic.png', title: 'Browse By Art', description: 'NFTs provide a novel platform for digital artists to monetize their creations.'},
        { img: 'assets/images/category/collectibles-eot.png', title: 'Digital Collectible', description: 'NFTs represent unique digital collectibles for trade on marketplaces'},
        { img: 'assets/images/category/estate-eot.png', title: 'Virtual Real Estate', description: 'Virtual "land" in certain platforms can be bought, sold, and traded as NFTs.'},
        { img: 'assets/images/category/domain-eot.png', title: 'Domain Names', description: 'Blockchain domains sold as NFTs offer more control and security to the owner.'},
        { img: 'assets/images/category/gaming- eot.png', title: 'Metaverse Gaming', description: 'NFTs signify unique in-game assets, enhancing inter-game operability.'},
        { img: 'assets/images/category/music-eot.png', title: 'Browse By Music', description: 'Musicians sell unique digital copies of their music as NFTs'},
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
                                    <p className="desc">Most popular digital nft market place</p>
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
