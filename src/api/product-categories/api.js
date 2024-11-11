import { instance } from '@/context/axios';

export const getProductCategories = async () => {
    const res = await instance
        .get('/store/categories')
        .then(({ data }) => data?.categories)
        .catch((err) => console.log(err));
    return res;
};
