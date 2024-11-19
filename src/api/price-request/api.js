import { cache } from 'react';
import { instance } from '@/context/axios';

export const sendPriceRequest = cache(async (data) => {
    const request = instance
        .post('/price-quote', data)
        .then((res) => res.data)
        .catch((err) => console.log(err));

    return request;
});
