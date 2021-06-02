import React from "react";
import ArticleCarouselCard from "./ArticleCarouselCard";

const ArticleCarousel = () => {
    const data = [
        {
            image: "/images/carouself_card_img_1.jpg",
            category: "Entertainment",
            title: "16 Fan Favourite Cult Movies That You Didn't Know Were Copied",
            url: "#",
        },
        {
            image: "/images/carouself_card_img_2.jpg",
            category: "Entertainment",
            title: "18 Bollywood Movies Which Will Alter Your Perception Towards Life",
            url: "#",
        },
    ];

    return (
        <section className="mobile_article_carousel">
            <div className="mobile_article_carousel_container">
                {data.map((article, index) => (
                    <ArticleCarouselCard key={index} data={article} />
                ))}
            </div>
        </section>
    );
};

export default ArticleCarousel;
