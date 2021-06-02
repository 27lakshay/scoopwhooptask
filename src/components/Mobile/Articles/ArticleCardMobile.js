import React from "react";

const ArticleCardMobile = ({ data }) => {
    return (
        <div className="article_card_mobile">
            <a className="card_head_image" style={{ backgroundImage: `url(${data.feature_img})` }}>
                {/* <img loading="lazy" src={data.feature_img} /> */}
            </a>
            <div className="article_card_mobile_body">
                <div className="type_with_shareview">
                    <div className="shareview_type">
                        <a className="category">
                            <span>{data.cat_display[0].category_display}</span>
                        </a>
                    </div>
                    <div className="shareview_share">
                        <span className="numberShort">{data.analytics.shares}</span>
                        {" "}Shares |{" "}<span className="numberShort">{data.analytics.views}</span>
                         {" "}Views
                    </div>
                </div>
                <a className="article_title">
                    <h4>{data.title}</h4>
                </a>
                <div className="article_box">
                    <a className="article_author">{data.auth_display.display_name}</a>
                    <div className="article_date_length"></div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCardMobile;
