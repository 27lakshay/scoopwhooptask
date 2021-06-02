import React, { useState } from "react";
import Tab from "./TabMobile";

const ArticleContainerMobile = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="article_container_mobile">
            <div className="article_container_mobile_tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Fresh
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Hot
                </button>
            </div>
            <div className="article_container_mobile_content">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <Tab />
                </div>
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <Tab />
                </div>
            </div>
        </section>
    );
};

export default ArticleContainerMobile;
