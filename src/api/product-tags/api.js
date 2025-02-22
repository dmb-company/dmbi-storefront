import { cache } from 'react';
import { instance } from '@/context/axios';

export const getProductTags = cache(async () => {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const res = await instance
        .get('/store/tags')
        .then(({ data }) => data?.tags)
        .catch((err) => console.log(err));
    return res;
});
