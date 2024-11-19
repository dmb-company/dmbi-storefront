import { cache } from 'react';
import { instance } from '@/context/axios';

export const getPartners = cache(async () => {
    const partners = await instance
        .get('/store/partners')
        .then(({ data }) => {
            return data.partners;
        })
        .catch((err) => console.log(err));

    return partners;
});
