import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import ArticleCard from "./ArticleCard";

const Tab = () => {
    const [items, setItems] = useState([]);
    const [offset, setOffset] = useState(8);

    useEffect(() => {
        return fetchMoreData();
    }, []);

    const fetchMoreData = () => {
        axios({
            method: "GET",
            url: `https://www.scoopwhoop.com/api/v4/read/all/?offset=${offset}&limit=8`,
        })
            .then((res) => setItems([...items, ...res.data.data]))
            .then(() => setOffset(offset + 8));
    };

    return (
        <div className="articles">
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={true}
                scrollThreshold={1}
                loader={<h4>Loading...</h4>}
            >
                {items.map((item, index) => (
                    // <div>{item.title}</div>
                    <ArticleCard key={index} data={item} />
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default Tab;
