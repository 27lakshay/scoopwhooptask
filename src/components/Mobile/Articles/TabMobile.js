import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import ArticleCardMobile from "./ArticleCardMobile";

const TabMobile = () => {
    const [items, setItems] = useState([]);
    const [offset, setOffset] = useState(8);

    useEffect(() => {
        return fetchMoreData();
    }, []);

    const fetchMoreData = async () => {
        await axios({
            method: "GET",
            url: `https://www.scoopwhoop.com/api/v4/read/all/?offset=${offset}&limit=8`,
        })
            .then((res) => setItems([...items, ...res.data.data]))
            .then(() => setOffset(offset + 8));
        console.log(items);
    };

    return (
        <>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={true}
                scrollThreshold="10px"
                loader={<h4>Loading...</h4>}
            >
                {items.map((item,index) => (
                    // <div>{item.title}</div>
                    <ArticleCardMobile key={index} data={item} />
                ))}
            </InfiniteScroll>
        </>
    );
};

export default TabMobile;
