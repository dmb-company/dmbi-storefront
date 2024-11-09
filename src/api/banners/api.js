import { instance } from '@/context/axios';

export const getBanners = async () => {
    const banners = await instance
        .get('/store/banners')
        .then(({ data }) => data.banners)
        .catch((err) => {
            throw err;
        });
    return banners;
};
