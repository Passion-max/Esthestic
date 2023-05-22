import React from 'react';

const PageTitle = ({ title, breadcrumbs }) => {
    return (
        <section className="fl-page-title">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-title-inner flex">
                            <div className="page-title-heading">
                                <h2 className="heading">{title}</h2>
                            </div>
                            <div className="breadcrumbs">
                                <ul>
                                    {breadcrumbs.map((breadcrumb, index) => (
                                        <li key={index}>
                                            {breadcrumb.url 
                                                ? <a href={breadcrumb.url}>{breadcrumb.name}</a> 
                                                : breadcrumb.name
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageTitle;
