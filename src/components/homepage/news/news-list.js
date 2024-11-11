import React from 'react';
import NewsCard from './news-card';
import { getNews } from '@/api/news/api';

const NewsList = async () => {
    const posts = await getNews(6, 0);
    return (
        <div className="grid gap-4 py-5 md:grid-cols-1 lg:grid-cols-2">
            {posts.map((p, index) => (
                <NewsCard key={index} post={p} />
            ))}
        </div>
    );
};

export default NewsList;
