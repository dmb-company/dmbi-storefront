import { cache } from 'react';
import { instance } from '@/context/axios';

export const getIndustryUses = cache(async () => {
    return await instance
        .get('/store/industry-uses')
        .then(({ data }) => data?.industryUses)
        .catch((err) => {
            console.error('Error when get industry uses', err);
        });
});