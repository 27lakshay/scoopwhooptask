import React from "react";

const ArticleCard = ({ data }) => {
    // console.log(data);
    return (
        <div className="article_card">
            <div className="article_body">
                <a className="article_image img-hover-zoom">
                    <img loading="lazy" src={data.feature_img} />
                </a>
                <div className="box">
                    <div className="article_category">
                        <a>{data.cat_display[0].category_display}</a>
                    </div>
                </div>
                <a className="article_title" href={data.slug}>
                    {data.title}
                </a>
                <a
                    className="article_author"
                    href={`/author/${data.auth_display.author_url}/?ref=read_fresh`}
                >
                    {data.auth_display.display_name}
                </a>
                <div className="box">
                    <div>
                        <span className="analytics">{data.readtime} </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
