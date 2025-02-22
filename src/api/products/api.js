import { cache } from 'react';
import { instance } from '@/context/axios';

export const getProducts = cache(async (query, limit = 3, offset = 0) => {
    const products = await instance
        .get('/store/products', {
            params: {
                ...query,
                limit,
                offset,
            },
        })
        .then(({ data }) => data?.products)
        .catch((err) => {
            console.log(err);
        });
    return products;
});

export const getProduct = cache(async (id) => {
    const product = await instance
        .get('/store/products/' + id)
        .then(({ data }) => data)
        .catch((err) => console.log(err));
    return product;
});

export const getBestSellerProducts = cache(async () => {
    const products = await instance
        .get('/store/best-seller?limit=8')
        .then(({ data }) => data?.products)
        .catch((err) => console.log(err));
    return products;
});
