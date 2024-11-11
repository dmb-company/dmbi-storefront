'use client';
import React, { useEffect, useState } from 'react';
import NewsItem from './news-card';
import { getNews } from '@/api/news/api';
import InfiniteScroll from 'react-infinite-scroll-component';

const ARTICLES_PER_PAGE = 5;

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [index, setIndex] = useState(ARTICLES_PER_PAGE);

    useEffect(() => {
        getNews(ARTICLES_PER_PAGE)
            .then((articles) => {
                setArticles(articles);
            })
            .catch((err) => console.log(err));
    }, []);

    const fetchMoreData = () => {
        getNews(ARTICLES_PER_PAGE, index)
            .then((articles) => {
                setArticles((prev) => [...prev, ...articles]);

                articles.length > 0 ? setHasMore(true) : setHasMore(false);
            })
            .catch((err) => {
                console.log(err);
            });
        setIndex((prevIndex) => prevIndex + 5);
    };

    return (
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<div>Loading...</div>}
        >
            <div>
                <div className="space-y-3 px-[15px] md:px-0 md:pr-[15px]">
                    {articles?.map((newsItem) => (
                        <NewsItem key={newsItem.id} news={newsItem} />
                    ))}
                </div>
            </div>
        </InfiniteScroll>
    );
};

export default NewsList;
