import React from "react";

const ArticleCarouselCard = ({ data }) => {
    return (
        <div className="mobile_article_carousel_card">
            <div className="carousel_card_head">
                <a className="card_image">
                    <figure>
                        <img
                            width="330"
                            height="173"
                            loading="lazy"
                            className=" lazyloaded"
                            src={data.image}
                        />
                    </figure>
                </a>
            </div>
            <div className="carousel_card_body">
                <a className="category">{data.category}</a>
                <a className="title">{data.title}</a>
                <div className="box">
                    <a href={data.link}>Read More</a>
                </div>
            </div>
        </div>
    );
};

export default ArticleCarouselCard;
