import { cache } from 'react';
import { instance } from '@/context/axios';

export const getProductCategories = cache(async () => {
    const res = await instance
        .get('/store/categories')
        .then(({ data }) => data?.categories)
        .catch((err) => console.log(err));
    return res;
});
