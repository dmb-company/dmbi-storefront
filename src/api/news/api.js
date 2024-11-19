import { cache } from 'react';
import { instance } from '@/context/axios';

export const getNews = cache(async (limit = 100, offset = 0) => {
    const news = await instance
        .get('/store/articles', {
            params: {
                limit: limit,
                offset: offset,
            },
        })
        .then(({ data }) => data?.articles)
        .catch((err) => {
            console.log('Error when get all posts');
        });

    return news;
});

export const getOneNews = cache(async (id) => {
    const news = await instance
        .get('/store/articles/' + id)
        .then(({ data }) => data)
        .catch((err) => console.log(err));
    return news;
});

export const getNewsCategories = cache(async () => {
    const categories = await instance
        .get('/store/article-categories')
        .then(({ data }) => data?.articleCategories)
        .catch((err) => console.log(err));
    return categories;
});
