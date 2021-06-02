import React from "react";

const Hero = () => {
    return (
        <div className="hero">
            <a className="hero_bg" style={{ backgroundImage: "url(/images/hero_image.jpg)" }}></a>
            <div className="hero_details">
                <a className="read_tag">ENTERTAINMENT</a>
                <h1 className="read_head">16 Fan Favourite Cult Movies That You Didn't Know Were Copied</h1>
                <a className="read_more">Read Article</a>
            </div>
        </div>
    );
};

export default Hero;
