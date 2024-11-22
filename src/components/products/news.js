import React from 'react';
import { Title } from '../common';
import NewsCard from './news-card';
import { getNews } from '@/api/news/api';

const News = async () => {
    const news = await getNews(3);
    if (!news || news.length === 0) return;
    return (
        <div className="rounded-md border bg-white shadow">
            <Title className="bg-primary text-white md:px-2 md:py-1 md:text-base">
                Tin tức
            </Title>
            <div className="space-y-2 p-2">
                {news?.map((post, i) => {
                    return <NewsCard key={post.id} post={post} />;
                })}
            </div>
        </div>
    );
};

export default News;
